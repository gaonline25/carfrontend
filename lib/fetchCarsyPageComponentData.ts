// const PAYLOAD_API_URL =
//   process.env.NEXT_PUBLIC_PAYLOAD_API_URL || "https://carbackend-delta.vercel.app/api";

// // Fetch Contact Section Page Data
// export async function fetchCarsyPageComponentData() {
//   try {
//     const res = await fetch(
//       `${PAYLOAD_API_URL}/carsy-page-component?where[isActive][equals]=true&depth=2&limit=1`,
//       {
//         next: { revalidate: 60 },
//         cache: "force-cache",
//       }
//     );

//     if (!res.ok)
//       throw new Error(`Failed to fetch Carsy page data: ${res.statusText}`);

//     const data = await res.json();
//     const activeComponent = data.docs?.[0] || null;

//     console.log("Fetched Carsy Page Component data:", activeComponent);
//     return activeComponent;
//   } catch (error) {
//     console.error("Error fetching Carsy Page Component data:", error);
//     return null;
//   }
// }

// // Helper function to get image URL
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

// export function getResponsiveImageUrls(imageGroup: any) {
//   if (!imageGroup) {
//     return {
//       mobile: "",
//       tablet: "",
//       desktop: "",
//       large: "",
//       alt: "",
//     };
//   }

//   return {
//     mobile: getImageUrl(imageGroup.mobile),
//     tablet: getImageUrl(imageGroup.tablet),
//     desktop: getImageUrl(imageGroup.desktop),
//     large: getImageUrl(imageGroup.large),
//     alt: imageGroup.alt || "",
//   };
// }

// export function renderRichText(richTextContent: any): string {
//   if (!richTextContent) return "";

//   // Handle Lexical editor format from Payload CMS
//   if (richTextContent.root && richTextContent.root.children) {
//     return renderLexicalNodes(richTextContent.root.children);
//   }

//   // Fallback for string content
//   if (typeof richTextContent === "string") {
//     return richTextContent;
//   }

//   return "";
// }

// function renderLexicalNodes(nodes: any[]): string {
//   if (!Array.isArray(nodes)) return "";

//   return nodes
//     .map((node: any) => {
//       // Handle paragraph nodes
//       if (node.type === "paragraph") {
//         const alignment = node.format || "start";
//         const alignClass =
//           alignment !== "start" ? ` style="text-align: ${alignment}"` : "";
//         const content = node.children ? renderLexicalNodes(node.children) : "";

//         // Don't render empty paragraphs
//         if (!content.trim()) {
//           return "<br />";
//         }

//         return `<p${alignClass}>${content}</p>`;
//       }

//       // Handle text nodes
//       if (node.type === "text") {
//         let text = node.text || "";

//         // Apply formatting
//         if (node.format === 1 || node.format === "bold") {
//           text = `<strong>${text}</strong>`;
//         }
//         if (node.format === 2 || node.format === "italic") {
//           text = `<em>${text}</em>`;
//         }
//         if (node.format === 4 || node.format === "underline") {
//           text = `<u>${text}</u>`;
//         }

//         return text;
//       }

//       // Handle line breaks
//       if (node.type === "linebreak") {
//         return "<br />";
//       }

//       // Handle heading nodes
//       if (node.type === "heading") {
//         const tag = node.tag || "h2";
//         const content = node.children ? renderLexicalNodes(node.children) : "";
//         return `<${tag}>${content}</${tag}>`;
//       }

//       // Handle list nodes
//       if (node.type === "list") {
//         const listTag = node.listType === "number" ? "ol" : "ul";
//         const content = node.children ? renderLexicalNodes(node.children) : "";
//         return `<${listTag}>${content}</${listTag}>`;
//       }

//       // Handle list item nodes
//       if (node.type === "listitem") {
//         const content = node.children ? renderLexicalNodes(node.children) : "";
//         return `<li>${content}</li>`;
//       }

//       // Handle link nodes
//       if (node.type === "link") {
//         const url = node.url || "#";
//         const content = node.children ? renderLexicalNodes(node.children) : "";
//         return `<a href="${url}">${content}</a>`;
//       }

//       return "";
//     })
//     .join("");
// }
  




const PAYLOAD_API_URL =
  process.env.NEXT_PUBLIC_PAYLOAD_API_URL || "https://carbackend-delta.vercel.app/api";

// Fetch Carsy Page Component Data
export async function fetchCarsyPageComponentData() {
  try {
    const res = await fetch(
      `${PAYLOAD_API_URL}/carsy-page-component?where[isActive][equals]=true&depth=2&limit=1`,
      {
        next: { revalidate: 60 },
        cache: "force-cache",
      }
    );

    if (!res.ok)
      throw new Error(`Failed to fetch Carsy page data: ${res.statusText}`);

    const data = await res.json();
    const activeComponent = data.docs?.[0] || null;

    console.log("Fetched Carsy Page Component data:", activeComponent);
    return activeComponent;
  } catch (error) {
    console.error("Error fetching Carsy Page Component data:", error);
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
        if (node.format & 1) text = `<strong>${text}</strong>`;
        if (node.format & 2) text = `<em>${text}</em>`;
        if (node.format & 8) text = `<u>${text}</u>`;
        return text;
      }

      if (node.type === "linebreak") return "<br />";

      if (node.type === "heading") {
        const tag = node.tag || "h2";
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

      return "";
    })
    .join("");
}