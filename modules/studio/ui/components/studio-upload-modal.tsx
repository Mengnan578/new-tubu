"use client";
import { DEFAULT_LIMIT } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { PlusIcon,Loader2Icon } from "lucide-react";
import { trpc } from "@/trpc/client";
import { toast } from "sonner";

export const StudioUploadModal = () => {
  const utils = trpc.useUtils();
  const create = trpc.videos.create.useMutation({
    onSuccess: (newVideo) => {
      // utils.studio.getMany.invalidate({ cursor: null, limit: DEFAULT_LIMIT });
      toast.success("Video created successfully");
      utils.studio.getMany.setInfiniteData({ cursor: null, limit: DEFAULT_LIMIT }, (oldData): typeof oldData => {
        if (!oldData) return oldData;
        return {
          ...oldData,
          pages: [
            {
              ...oldData.pages[0],
              items: [newVideo.video, ...oldData.pages[0].items],
            },
            ...oldData.pages.slice(1),
          ],
        };
      });
    },
    onError: (error) => {
      console.log(error)
      toast.error("Failed to create video");
    },
  });
  return (
    <Button variant="secondary" onClick={() => create.mutate()} disabled={create.isPending}>
      { create.isPending ? <Loader2Icon className="animate-spin" /> : <PlusIcon />}
    </Button>
  );
};
