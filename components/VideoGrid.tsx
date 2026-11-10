"use client";

import { useState } from "react";
import { ChevronDown, Youtube } from "lucide-react";
import LiteYouTube from "@/components/LiteYouTube";

type Video = { id: string; title: string };

export default function VideoGrid({ videos, channel, step = 4 }: { videos: Video[]; channel: string; step?: number }) {
  const [shown, setShown] = useState(step);

  return (
    <>
      <ul className="vgrid">
        {videos.slice(0, shown).map((v) => (
          <li key={v.id}>
            <LiteYouTube id={v.id} title={v.title} />
          </li>
        ))}
      </ul>
      <div className="vgrid__actions">
        {shown < videos.length && (
          <button type="button" className="btn btn--dark" onClick={() => setShown((n) => n + step)}>
            Load more <ChevronDown size={16} aria-hidden="true" />
          </button>
        )}
        <a className="btn btn--maroon" href={channel} target="_blank" rel="noopener noreferrer">
          <Youtube size={16} aria-hidden="true" /> Subscribe
        </a>
      </div>
    </>
  );
}
