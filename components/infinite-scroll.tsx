import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";

interface InfiniteScrollProps {
  isManual?: boolean;
  hasNextPage: boolean;
  isFetchingNextPage: boolean;
  fetchNextPage: () => void;
}

export const InfiniteScroll = ({
  isManual,
  hasNextPage,
  isFetchingNextPage,
  fetchNextPage,
}: InfiniteScrollProps) => {
  const { targetRef, isIntersecting } = useIntersectionObserver({
    rootMargin: "100px",
    threshold: 0.5,
  });

  useEffect(() => {
    if (isIntersecting && hasNextPage && !isFetchingNextPage && !isManual) {
      fetchNextPage();
    }
  }, [isIntersecting, hasNextPage, isFetchingNextPage, fetchNextPage, isManual]);

  return (
    <div className="flex flex-col items-center gap-4 p-4">
        <div ref={targetRef} className="h-1">
            {
                hasNextPage ? (
                    <Button 
                        variant='secondary'
                        disabled={isFetchingNextPage || !hasNextPage}
                        onClick={()=> fetchNextPage()}
                    >
                        {isFetchingNextPage ? 'Loading...' : 'Load more'}
                    </Button>
                ) : (
                    <p>
                        You have reached the end of the list.
                    </p>
                )
            }
        </div>
    </div>
  )

}
