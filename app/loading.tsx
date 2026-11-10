import { Skeleton, SkeletonText } from "@/components/Skeleton";

/** Shown automatically while a page is loading during navigation. */
export default function Loading() {
  return (
    <div role="status" aria-label="Loading page">
      <Skeleton className="skeleton--hero" />
      <div className="container skeleton-page">
        <Skeleton className="skeleton--title" />
        <SkeletonText lines={3} />
        <div className="skeleton-grid">
          {Array.from({ length: 6 }, (_, i) => (
            <div key={i} className="skeleton-card">
              <Skeleton className="skeleton--img" />
              <Skeleton className="skeleton--sub" />
              <SkeletonText lines={2} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
