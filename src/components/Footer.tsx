import { Github, Twitter, Instagram } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-secondary py-12">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-primary font-semibold mb-4">About</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-primary/70 hover:text-accent transition-colors">Company</a></li>
              <li><a href="#" className="text-primary/70 hover:text-accent transition-colors">Team</a></li>
              <li><a href="#" className="text-primary/70 hover:text-accent transition-colors">Careers</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-primary font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-primary/70 hover:text-accent transition-colors">Documentation</a></li>
              <li><a href="#" className="text-primary/70 hover:text-accent transition-colors">Help Center</a></li>
              <li><a href="#" className="text-primary/70 hover:text-accent transition-colors">Blog</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-primary font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-primary/70 hover:text-accent transition-colors">Privacy</a></li>
              <li><a href="#" className="text-primary/70 hover:text-accent transition-colors">Terms</a></li>
              <li><a href="#" className="text-primary/70 hover:text-accent transition-colors">Security</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-primary font-semibold mb-4">Social</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-primary/70 hover:text-accent transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-primary/70 hover:text-accent transition-colors">
                <Github className="w-6 h-6" />
              </a>
              <a href="#" className="text-primary/70 hover:text-accent transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-primary/10 text-center text-primary/70">
          <p>&copy; 2024 ScenePilot. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};