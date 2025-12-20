// lib/fetchBlogPosts.ts

const API_URL = process.env.NEXT_PUBLIC_PAYLOAD_URL || "https://carbackend-delta.vercel.app";

// Fetch all blog posts for listing page
export async function fetchAllBlogPosts(limit = 100) {
  const url = `${API_URL}/api/blog-post-component?limit=${limit}&depth=10`;

  console.log("=== FETCHING ALL BLOG POSTS ===");
  console.log("URL:", url);

  try {
    const res = await fetch(url, {
      next: { revalidate: 60 },
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) {
      console.error("Fetch failed:", res.status, res.statusText);
      return [];
    }

    const json = await res.json();
    console.log("Blog posts fetched:", json.docs?.length || 0);

    return json.docs || [];
  } catch (error) {
    console.error("Exception during fetch:", error);
    return [];
  }
}

export async function fetchBlogListingBanner() {
  const url = `${API_URL}/api/blog-listing-banner?where[isActive][equals]=true&limit=1&depth=10`;

  console.log("=== FETCHING BLOG LISTING BANNER ===");
  console.log("URL:", url);

  try {
    const res = await fetch(url, {
      next: { revalidate: 60 },
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) {
      console.error("Fetch failed:", res.status, res.statusText);
      return null;
    }

    const json = await res.json();
    const docs = json.docs || [];

    if (docs.length === 0) {
      console.warn("No active blog listing banner found");
      return null;
    }

    console.log("Banner fetched successfully");
    return docs[0];
  } catch (error) {
    console.error("Exception during fetch:", error);
    return null;
  }
}

// Fetch single blog post by slug
export async function fetchBlogPostBySlug(slug: string) {
  const url = `${API_URL}/api/blog-post-component?where[slug][equals]=${slug}&depth=10`;

  console.log("=== FETCHING BLOG POST BY SLUG ===");
  console.log("Slug:", slug);
  console.log("URL:", url);

  try {
    const res = await fetch(url, {
      next: { revalidate: 60 },
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) {
      console.error("Fetch failed:", res.status, res.statusText);
      return null;
    }

    const json = await res.json();
    const docs = json.docs || [];

    if (docs.length === 0) {
      console.warn("No blog post found for slug:", slug);
      return null;
    }

    const post = docs[0];

    // Process rich text content if it exists
    if (post?.contentSection?.content) {
      console.log("Processing rich text content...");
      post.contentSection.content = renderRichText(post.contentSection.content);
    }

    return post;
  } catch (error) {
    console.error("Exception during fetch:", error);
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

  if (richTextContent.root && richTextContent.root.children) {
    return renderLexicalNodes(richTextContent.root.children);
  }

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
        if (!content.trim()) return "<br />";
        return `<p${alignStyle}>${content}</p>`;
      }

      if (node.type === "text") {
        let text = node.text || "";
        if (node.format & 1) text = `<strong>${text}</strong>`;
        if (node.format & 2) text = `<em>${text}</em>`;
        if (node.format & 8) text = `<u>${text}</u>`;
        if (node.format & 16) text = `<s>${text}</s>`;
        if (node.format & 32) text = `<code>${text}</code>`;
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
        const newTab = node.fields?.newTab
          ? ' target="_blank" rel="noopener noreferrer"'
          : "";
        const content = node.children ? renderLexicalNodes(node.children) : "";
        return `<a href="${url}"${newTab}>${content}</a>`;
      }

      if (node.type === "quote") {
        const content = node.children ? renderLexicalNodes(node.children) : "";
        return `<blockquote>${content}</blockquote>`;
      }

      if (node.type === "code") {
        const language = node.language || "";
        const code = node.children ? renderLexicalNodes(node.children) : "";
        return `<pre><code class="language-${language}">${code}</code></pre>`;
      }

      // Handle IMAGES
      if (node.type === "upload") {
        console.log("Found image node:", node);

        const imageData = node.value;
        let imageUrl = "";
        let alt = node.fields?.caption || "Image";

        if (imageData) {
          if (typeof imageData === "string") {
            imageUrl = imageData;
          } else if (imageData.cloudinary_url) {
            imageUrl = imageData.cloudinary_url;
          } else if (imageData.url) {
            imageUrl = imageData.url;
          }
        }

        if (!imageUrl && node.relationTo === "media") {
          imageUrl = getImageUrl(node.value);
        }

        console.log("Image URL extracted:", imageUrl);

        if (!imageUrl) {
          console.warn("Could not extract image URL from node:", node);
          return "";
        }

        const width = node.fields?.width || "";
        const height = node.fields?.height || "";
        const sizeAttrs =
          width && height ? ` width="${width}" height="${height}"` : "";

        return `<figure class="rich-text-image">
          <img src="${imageUrl}" alt="${alt}"${sizeAttrs} loading="lazy" />
          ${
            node.fields?.caption
              ? `<figcaption>${node.fields.caption}</figcaption>`
              : ""
          }
        </figure>`;
      }

      if (node.type === "horizontalrule") {
        return "<hr />";
      }

      console.warn("Unknown node type:", node.type, node);
      return "";
    })
    .join("");
}
