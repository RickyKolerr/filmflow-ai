import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { useToast } from "@/hooks/use-toast";
import { Trash2, Upload } from "lucide-react";

export const FileManager = () => {
  const [uploadProgress, setUploadProgress] = useState<number>(0);
  const { toast } = useToast();
  const queryClient = useQueryClient();

  // Query to fetch files
  const { data: files, isLoading } = useQuery({
    queryKey: ["files"],
    queryFn: async () => {
      const { data: files, error } = await supabase.storage
        .from("uploads")
        .list();
      if (error) throw error;
      return files;
    },
  });

  // Upload mutation
  const uploadMutation = useMutation({
    mutationFn: async (file: File) => {
      const fileExt = file.name.split(".").pop();
      const fileName = `${Math.random()}.${fileExt}`;

      const { error } = await supabase.storage
        .from("uploads")
        .upload(fileName, file, {
          onUploadProgress: (progress) => {
            const percent = (progress.loaded / progress.total) * 100;
            setUploadProgress(percent);
          },
        });

      if (error) throw error;
      return fileName;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["files"] });
      toast({
        title: "Success",
        description: "File uploaded successfully",
      });
      setUploadProgress(0);
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: "Failed to upload file",
        variant: "destructive",
      });
      setUploadProgress(0);
    },
  });

  // Delete mutation
  const deleteMutation = useMutation({
    mutationFn: async (path: string) => {
      const { error } = await supabase.storage.from("uploads").remove([path]);
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["files"] });
      toast({
        title: "Success",
        description: "File deleted successfully",
      });
    },
    onError: (error) => {
      toast({
        title: "Error",
        description: "Failed to delete file",
        variant: "destructive",
      });
    },
  });

  const handleFileUpload = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;
    uploadMutation.mutate(file);
  };

  const handleDelete = (path: string) => {
    deleteMutation.mutate(path);
  };

  return (
    <div className="p-4 space-y-4">
      <div className="space-y-4">
        <div className="flex items-center gap-4">
          <Button asChild variant="outline">
            <label className="cursor-pointer">
              <Upload className="mr-2" />
              Upload File
              <input
                type="file"
                className="hidden"
                onChange={handleFileUpload}
                disabled={uploadMutation.isPending}
              />
            </label>
          </Button>
        </div>

        {uploadProgress > 0 && uploadProgress < 100 && (
          <div className="space-y-2">
            <Progress value={uploadProgress} />
            <p className="text-sm text-muted-foreground">
              Uploading... {Math.round(uploadProgress)}%
            </p>
          </div>
        )}
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Uploaded Files</h3>
        {isLoading ? (
          <p>Loading files...</p>
        ) : (
          <div className="grid gap-4">
            {files?.map((file) => (
              <div
                key={file.name}
                className="flex items-center justify-between p-4 border rounded-lg"
              >
                <span className="truncate max-w-[200px]">{file.name}</span>
                <Button
                  variant="destructive"
                  size="icon"
                  onClick={() => handleDelete(file.name)}
                  disabled={deleteMutation.isPending}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            ))}
            {files?.length === 0 && (
              <p className="text-muted-foreground">No files uploaded yet</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};