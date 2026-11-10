/** Content blocks for pages copied from https://saisevasangh.org */
export type Block =
  | { type: "p"; text: string }
  | { type: "h"; text: string }
  | { type: "list"; items: string[] }
  | { type: "quote"; text: string }
  | { type: "img"; src: string; alt?: string }
  | { type: "gallery"; images: string[] }
  | { type: "video"; id: string; title?: string }
  | { type: "link"; label: string; href: string }
  | { type: "table"; rows: string[][] };

export type PageContent = {
  title: string;
  lead?: string;
  hero?: string;
  blocks: Block[];
};
