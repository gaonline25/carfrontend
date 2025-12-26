// const PAYLOAD_API_URL =
//   process.env.NEXT_PUBLIC_PAYLOAD_API_URL || "https://carbackend-delta.vercel.app/api";

// // Fetch Carsy Page Component Data
// export async function fetchAboutHeroComponentData() {
//   try {
//     const res = await fetch(
//       `${PAYLOAD_API_URL}/about-hero-component?where[isActive][equals]=true&depth=2&limit=1`,
//       {
//         next: { revalidate: 60 },
//         cache: "force-cache",
//       }
//     );

//     if (!res.ok)
//       throw new Error(`Failed to fetch About Hero data: ${res.statusText}`);

//     const data = await res.json();
//     const activeComponent = data.docs?.[0] || null;

//     console.log("Fetched About Hero Component data:", activeComponent);
//     return activeComponent;
//   } catch (error) {
//     console.error("Error fetching About Hero Component data:", error);
//     return null;
//   }
// }

// // Helper to get image URL
// export function getImageUrl(imageField: any): string {
//   if (!imageField) return "";
//   if (typeof imageField === "object" && imageField.cloudinary_url) {
//     return imageField.cloudinary_url;
//   }
//   if (typeof imageField === "object" && imageField.url) {
//     return imageField.url;
//   }
//   if (typeof imageField === "string") {
//     return imageField;
//   }
//   return "";
// }

// // Render rich text (Lexical format) to HTML string
// export function renderRichText(richTextContent: any): string {
//   if (!richTextContent) return "";

//   // Handle Lexical format
//   if (richTextContent.root && richTextContent.root.children) {
//     return renderLexicalNodes(richTextContent.root.children);
//   }

//   // Fallback for plain string
//   if (typeof richTextContent === "string") {
//     return richTextContent;
//   }

//   return "";
// }

// function renderLexicalNodes(nodes: any[]): string {
//   if (!Array.isArray(nodes)) return "";

//   return nodes
//     .map((node: any) => {
//       if (node.type === "paragraph") {
//         const alignment = node.format || "start";
//         const alignStyle =
//           alignment !== "start" ? ` style="text-align: ${alignment}"` : "";
//         const content = node.children ? renderLexicalNodes(node.children) : "";
//         if (!content.trim()) return "<br />"; // Preserve empty paragraphs as line breaks
//         return `<p${alignStyle}>${content}</p>`;
//       }

//       if (node.type === "text") {
//         let text = node.text || "";
//         if (node.format & 1) text = `<strong>${text}</strong>`;
//         if (node.format & 2) text = `<em>${text}</em>`;
//         if (node.format & 8) text = `<u>${text}</u>`;
//         return text;
//       }

//       if (node.type === "linebreak") return "<br />";

//       if (node.type === "heading") {
//         const tag = node.tag || "h2";
//         const content = node.children ? renderLexicalNodes(node.children) : "";
//         return `<${tag}>${content}</${tag}>`;
//       }

//       if (node.type === "list") {
//         const listTag = node.listType === "number" ? "ol" : "ul";
//         const content = node.children ? renderLexicalNodes(node.children) : "";
//         return `<${listTag}>${content}</${listTag}>`;
//       }

//       if (node.type === "listitem") {
//         const content = node.children ? renderLexicalNodes(node.children) : "";
//         return `<li>${content}</li>`;
//       }

//       if (node.type === "link") {
//         const url = node.fields?.url || node.url || "#";
//         const content = node.children ? renderLexicalNodes(node.children) : "";
//         return `<a href="${url}">${content}</a>`;
//       }

//       return "";
//     })
//     .join("");
// }




const PAYLOAD_API_URL =
  process.env.NEXT_PUBLIC_PAYLOAD_API_URL ||
  "https://carbackend-delta.vercel.app/api";

// Fetch Carsy Page Component Data
export async function fetchAboutHeroComponentData() {
  try {
    const res = await fetch(
      `${PAYLOAD_API_URL}/about-hero-component?where[isActive][equals]=true&depth=2&limit=1`,
      {
        next: { revalidate: 60 },
        cache: "force-cache",
      }
    );

    if (!res.ok)
      throw new Error(`Failed to fetch About Hero data: ${res.statusText}`);

    const data = await res.json();
    const activeComponent = data.docs?.[0] || null;
    console.log("Fetched About Hero Component data:", activeComponent);
    return activeComponent;
  } catch (error) {
    console.error("Error fetching About Hero Component data:", error);
    return null;
  }
}

// Helper to get image URL
export function getImageUrl(imageField: any): string {
  if (!imageField) return "";
  if (typeof imageField === "object" && imageField.cloudinary_url) {
    return imageField.cloudinary_url;
  }
  if (typeof imageField === "object" && imageField.url) {
    return imageField.url;
  }
  if (typeof imageField === "string") {
    return imageField;
  }
  return "";
}

// Render rich text (Lexical format) to HTML string
export function renderRichText(richTextContent: any): string {
  if (!richTextContent) return "";

  // Handle Lexical format
  if (richTextContent.root && richTextContent.root.children) {
    return renderLexicalNodes(richTextContent.root.children);
  }

  // Fallback for plain string
  if (typeof richTextContent === "string") {
    return richTextContent;
  }

  return "";
}

function renderLexicalNodes(nodes: any[]): string {
  if (!Array.isArray(nodes)) return "";

  return nodes
    .map((node: any) => {
      if (node.type === "paragraph") {
        const alignment = node.format || "start";
        const alignStyle =
          alignment !== "start" ? ` style="text-align: ${alignment}"` : "";
        const content = node.children ? renderLexicalNodes(node.children) : "";
        if (!content.trim()) return "<br />"; // Preserve empty paragraphs as line breaks
        return `<p${alignStyle}>${content}</p>`;
      }

      if (node.type === "text") {
        let text = node.text || "";
        if (node.format & 1) text = `<strong>${text}</strong>`; // Bold
        if (node.format & 2) text = `<em>${text}</em>`; // Italic
        if (node.format & 8) text = `<u>${text}</u>`; // Underline
        return text;
      }

      if (node.type === "linebreak") return "<br />";

      if (node.type === "heading") {
        let tag = "h2"; // Default
        if (node.tag) {
          if (
            typeof node.tag === "string" &&
            node.tag.startsWith("h") &&
            /^\d+$/.test(node.tag.slice(1))
          ) {
            tag = node.tag; // e.g., "h6"
          } else {
            tag = `h${node.tag}`; // e.g., if tag=6 -> h6
          }
        }
        const content = node.children ? renderLexicalNodes(node.children) : "";
        return `<${tag}>${content}</${tag}>`;
      }

      if (node.type === "list") {
        const listTag = node.listType === "number" ? "ol" : "ul";
        const content = node.children ? renderLexicalNodes(node.children) : "";
        return `<${listTag}>${content}</${listTag}>`;
      }

      if (node.type === "listitem") {
        const content = node.children ? renderLexicalNodes(node.children) : "";
        return `<li>${content}</li>`;
      }

      if (node.type === "link") {
        const url = node.fields?.url || node.url || "#";
        const content = node.children ? renderLexicalNodes(node.children) : "";
        return `<a href="${url}">${content}</a>`;
      }

      // Handle images (if added via Payload rich text)
      if (node.type === "image") {
        const src = getImageUrl(node.src || node.image || node.fields?.src);
        const alt = node.alt || node.fields?.alt || "";
        const className =
          node.className ||
          "w-richtext-align-fullwidth w-richtext-figure-type-image";
        return `<figure class="${className}" style="max-width: 100%;"><div><img src="${src}" loading="lazy" alt="${alt}" style="width: 100%; height: auto;" /></div></figure>`;
      }

      // Handle embeds (e.g., iframes for videos/maps)
      if (node.type === "embed" || (node.type === "iframe" && node.src)) {
        const src = node.src || node.url || node.fields?.src;
        const className =
          node.className ||
          "w-richtext-align-fullwidth w-richtext-figure-type-video";
        const paddingBottom = node.style?.paddingBottom || "75%";
        const allowFullScreen = node.allowFullScreen !== false;
        return `<figure class="${className}" style="padding-bottom: ${paddingBottom}; position: relative;"><div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;"><iframe allowFullScreen={${allowFullScreen.toString()}} frameBorder="0" scrolling="no" src="${src}" style="width: 100%; height: 100%;"></iframe></div></figure>`;
      }

      return "";
    })
    .join("");
}