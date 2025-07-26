import { HydrateClient, trpc } from "@/trpc/server";

import { StudioView } from "@/modules/studio/ui/view/studio-view";
import { DEFAULT_LIMIT } from "@/lib/constants";

const Page = ()=> {
    void trpc.studio.getMany.prefetchInfinite({
        limit: DEFAULT_LIMIT,
        cursor: null,
    });

    return (
        <HydrateClient>
            <StudioView />
        </HydrateClient>
    )   
}

export default Page;