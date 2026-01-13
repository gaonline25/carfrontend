const PAYLOAD_API_URL =
  process.env.NEXT_PUBLIC_PAYLOAD_API_URL || "https://carbackend-delta.vercel.app/api";

// Fetch Carsy Page Component Data
export async function fetchServiceProcessComponentData() {
  try {
    const res = await fetch(
      `${PAYLOAD_API_URL}/service-process-component?where[isActive][equals]=true&depth=2&limit=1`,
      {
        next: { revalidate: 60 },
        cache: "force-cache",
      }
    );

    if (!res.ok)
      throw new Error(
        `Failed to fetch Service Process data: ${res.statusText}`
      );

    const data = await res.json();
    const activeComponent = data.docs?.[0] || null;

    // console.log("Fetched Service Process Component data:", activeComponent);
    return activeComponent;
  } catch (error) {
    console.error("Error fetching Service Process Component data:", error);
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
