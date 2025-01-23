import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { stripe } from "../_shared/stripe-client.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.39.3';

const endpointSecret = Deno.env.get('STRIPE_WEBHOOK_SECRET');

serve(async (req) => {
  try {
    const signature = req.headers.get('stripe-signature');
    const body = await req.text();
    
    let event;
    
    try {
      event = stripe.webhooks.constructEvent(
        body,
        signature,
        endpointSecret
      );
    } catch (err) {
      console.error('Webhook signature verification failed:', err.message);
      return new Response(JSON.stringify({ error: err.message }), { status: 400 });
    }

    console.log('Webhook event received:', event.type);

    // Handle the event
    switch (event.type) {
      case 'customer.subscription.created':
      case 'customer.subscription.updated':
      case 'customer.subscription.deleted': {
        const subscription = event.data.object;
        
        // Create Supabase client
        const supabaseClient = createClient(
          Deno.env.get('SUPABASE_URL') ?? '',
          Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
        );

        // Update subscription status in profiles table
        const { error } = await supabaseClient
          .from('profiles')
          .update({
            subscription_status: subscription.status,
            subscription_id: subscription.id,
            subscription_plan: subscription.items.data[0].price.lookup_key
          })
          .eq('stripe_customer_id', subscription.customer);

        if (error) {
          console.error('Error updating subscription status:', error);
          throw error;
        }

        break;
      }
      default:
        console.log(`Unhandled event type ${event.type}`);
    }

    return new Response(JSON.stringify({ received: true }), { status: 200 });
  } catch (error) {
    console.error('Error handling webhook:', error);
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 500 }
    );
  }
});