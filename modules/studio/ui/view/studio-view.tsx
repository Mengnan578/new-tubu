import { VideosSection } from "@/modules/studio/ui/section/videos-section";

export const StudioView = () => {
    return (
        <div className="flex flex-col gap-y-6 pt-2.5">
            <div className="px-4">
                <h1 className="text-2xl font-bold">Channel content</h1>
                <p className="text-sx text-muted-foreground">
                    Manage your channel content and Videos
                </p>
            </div>
            <VideosSection />
        </div>
    )
}