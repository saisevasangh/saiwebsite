import Link from "next/link";
import type { Block } from "@/lib/pages/types";
import LiteYouTube from "./LiteYouTube";

/* eslint-disable @next/next/no-img-element */
export default function PageBlocks({ blocks }: { blocks: Block[] }) {
  return (
    <div className="prose">
      {blocks.map((b, i) => {
        switch (b.type) {
          case "p":
            return <p key={i}>{b.text}</p>;
          case "h":
            return <h2 key={i}>{b.text}</h2>;
          case "list":
            return (
              <ul key={i}>
                {b.items.map((t, j) => (
                  <li key={j}>{t}</li>
                ))}
              </ul>
            );
          case "quote":
            return <blockquote key={i}>{b.text}</blockquote>;
          case "img":
            return <img key={i} className="prose__img" src={b.src} alt={b.alt ?? ""} loading="lazy" />;
          case "gallery":
            return (
              <div key={i} className="prose__gallery">
                {b.images.map((s, j) => (
                  <img key={j} src={s} alt="" loading="lazy" />
                ))}
              </div>
            );
          case "video":
            return (
              <div key={i} className="prose__video">
                <LiteYouTube id={b.id} title={b.title ?? "Sai Seva Sangh video"} />
              </div>
            );
          case "link":
            return (
              <p key={i}>
                {b.href.startsWith("/") ? (
                  <Link href={b.href}>{b.label}</Link>
                ) : (
                  <a href={b.href} target="_blank" rel="noopener noreferrer">
                    {b.label}
                  </a>
                )}
              </p>
            );
          case "table":
            return (
              <div key={i} className="prose__table">
                <table>
                  <tbody>
                    {b.rows.map((r, j) => (
                      <tr key={j}>
                        {r.map((c, k) => (j === 0 ? <th key={k}>{c}</th> : <td key={k}>{c}</td>))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            );
        }
      })}
    </div>
  );
}
