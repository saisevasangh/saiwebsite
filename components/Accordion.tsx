"use client";

import { useState, type ReactNode } from "react";
import { Minus, Plus } from "lucide-react";

type Item = { id: string; title: string; content: ReactNode };

/** Single-open accordion (the "Our Philosophy" block). */
export default function Accordion({ items }: { items: Item[] }) {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <div className="acc">
      {items.map((item) => {
        const isOpen = open === item.id;
        return (
          <div key={item.id} className={`acc__item${isOpen ? " is-open" : ""}`}>
            <h3>
              <button
                type="button"
                className="acc__btn"
                aria-expanded={isOpen}
                aria-controls={`acc-${item.id}`}
                id={`acc-btn-${item.id}`}
                onClick={() => setOpen(isOpen ? null : item.id)}
              >
                <span>{item.title}</span>
                <span className="acc__icon" aria-hidden="true">
                  {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                </span>
              </button>
            </h3>
            <div id={`acc-${item.id}`} role="region" aria-labelledby={`acc-btn-${item.id}`} className="acc__panel" hidden={!isOpen}>
              {item.content}
            </div>
          </div>
        );
      })}
    </div>
  );
}
