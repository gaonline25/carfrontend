// // // lib/payload.ts

// // // Use only one correct base URL
// // const API_URL = process.env.NEXT_PUBLIC_PAYLOAD_URL || "https://carbackend-delta.vercel.app";

// // // Remove the extra /api here
// // export async function fetchServiceDetailsBySlug(slug: string) {
// //   const url = `${API_URL}/api/service-details-component?where[slug][equals]=${slug}&depth=10`;

// //   console.log("Fetching from:", url); // Debug: check in browser console

// //   const res = await fetch(url, {
// //     next: { revalidate: 60 },
// //   });

// //   if (!res.ok) {
// //     console.error("Fetch failed:", res.status, res.statusText);
// //     return null;
// //   }

// //   const json = await res.json();
// //   console.log("Payload response:", json); // Debug: see what you get

// //   const docs = json.docs || [];
// //     const service = docs[0];
    
// //     console.log("Trying to fetch slug:", slug);
// //     console.log("Full URL:", url);

// //   if (service?.contentSection?.content) {
// //     service.contentSection.content = renderRichText(
// //       service.contentSection.content
// //     );
// //   }

// //   return service || null;
// // }

// // // Helper to get image URL
// // export function getImageUrl(imageField: any): string {
// //   if (!imageField) return "";
// //   if (typeof imageField === "object" && imageField.cloudinary_url) {
// //     return imageField.cloudinary_url;
// //   }
// //   if (typeof imageField === "object" && imageField.url) {
// //     return imageField.url;
// //   }
// //   if (typeof imageField === "string") {
// //     return imageField;
// //   }
// //   return "";
// // }

// // // Render rich text (Lexical format) to HTML string
// // export function renderRichText(richTextContent: any): string {
// //   if (!richTextContent) return "";

// //   // Handle Lexical format
// //   if (richTextContent.root && richTextContent.root.children) {
// //     return renderLexicalNodes(richTextContent.root.children);
// //   }

// //   // Fallback for plain string
// //   if (typeof richTextContent === "string") {
// //     return richTextContent;
// //   }

// //   return "";
// // }

// // function renderLexicalNodes(nodes: any[]): string {
// //   if (!Array.isArray(nodes)) return "";

// //   return nodes
// //     .map((node: any) => {
// //       if (node.type === "paragraph") {
// //         const alignment = node.format || "start";
// //         const alignStyle =
// //           alignment !== "start" ? ` style="text-align: ${alignment}"` : "";
// //         const content = node.children ? renderLexicalNodes(node.children) : "";
// //         if (!content.trim()) return "<br />"; // Preserve empty paragraphs as line breaks
// //         return `<p${alignStyle}>${content}</p>`;
// //       }

// //       if (node.type === "text") {
// //         let text = node.text || "";
// //         if (node.format & 1) text = `<strong>${text}</strong>`;
// //         if (node.format & 2) text = `<em>${text}</em>`;
// //         if (node.format & 8) text = `<u>${text}</u>`;
// //         return text;
// //       }

// //       if (node.type === "linebreak") return "<br />";

// //       if (node.type === "heading") {
// //         const tag = node.tag || "h2";
// //         const content = node.children ? renderLexicalNodes(node.children) : "";
// //         return `<${tag}>${content}</${tag}>`;
// //       }

// //       if (node.type === "list") {
// //         const listTag = node.listType === "number" ? "ol" : "ul";
// //         const content = node.children ? renderLexicalNodes(node.children) : "";
// //         return `<${listTag}>${content}</${listTag}>`;
// //       }

// //       if (node.type === "listitem") {
// //         const content = node.children ? renderLexicalNodes(node.children) : "";
// //         return `<li>${content}</li>`;
// //       }

// //       if (node.type === "link") {
// //         const url = node.fields?.url || node.url || "#";
// //         const content = node.children ? renderLexicalNodes(node.children) : "";
// //         return `<a href="${url}">${content}</a>`;
// //       }

// //       return "";
// //     })
// //     .join("");
// // }





// // lib/fetchServiceDetailsBySlug.ts

// // Use only one correct base URL
// const API_URL = process.env.NEXT_PUBLIC_PAYLOAD_URL || "https://carbackend-delta.vercel.app";

// // Enhanced fetch with better error handling and logging
// export async function fetchServiceDetailsBySlug(slug: string) {
//   // Build the API URL
//   const url = `${API_URL}/api/service-details-component?where[slug][equals]=${slug}&depth=10`;

//   console.log("=== FETCH DEBUG INFO ===");
//   console.log("API_URL:", API_URL);
//   console.log("Slug:", slug);
//   console.log("Full URL:", url);

//   try {
//     const res = await fetch(url, {
//       next: { revalidate: 60 },
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     });

//     console.log("Response status:", res.status);
//     console.log("Response statusText:", res.statusText);

//     if (!res.ok) {
//       const errorText = await res.text();
//       console.error("Fetch failed:", res.status, res.statusText);
//       console.error("Error body:", errorText);
//       return null;
//     }

//     const json = await res.json();
//     console.log("Full Payload response:", JSON.stringify(json, null, 2));

//     // Check if docs array exists and has items
//     const docs = json.docs || [];
//     console.log("Number of docs found:", docs.length);

//     if (docs.length === 0) {
//       console.warn("No documents found for slug:", slug);
      
//       // Try to fetch all services to see what slugs exist
//       const allServicesUrl = `${API_URL}/api/service-details-component?limit=100`;
//       console.log("Fetching all services from:", allServicesUrl);
      
//       const allRes = await fetch(allServicesUrl);
//       if (allRes.ok) {
//         const allJson = await allRes.json();
//         console.log("Available slugs:", allJson.docs?.map((d: any) => d.slug));
//       }
      
//       return null;
//     }

//     const service = docs[0];
//     console.log("Service found:", service.slug);

//     // Process rich text content if it exists
//     if (service?.contentSection?.content) {
//       service.contentSection.content = renderRichText(
//         service.contentSection.content
//       );
//     }

//     return service;
//   } catch (error) {
//     console.error("Exception during fetch:", error);
//     return null;
//   }
// }

// // Helper to get image URL
// export function getImageUrl(imageField: any): string {
//   if (!imageField) return "";
  
//   // Handle Cloudinary URLs
//   if (typeof imageField === "object" && imageField.cloudinary_url) {
//     return imageField.cloudinary_url;
//   }
  
//   // Handle standard Payload media objects
//   if (typeof imageField === "object" && imageField.url) {
//     return imageField.url;
//   }
  
//   // Handle direct string URLs
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
//         if (!content.trim()) return "<br />"; // Preserve empty paragraphs
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






// lib/fetchServiceDetailsBySlug.ts

// Use only one correct base URL
const API_URL = process.env.NEXT_PUBLIC_PAYLOAD_URL || "https://carbackend-delta.vercel.app";

// Enhanced fetch with better error handling and logging
export async function fetchServiceDetailsBySlug(slug: string) {
  // Build the API URL
  const url = `${API_URL}/api/service-details-component?where[slug][equals]=${slug}&depth=10`;

  console.log("=== FETCH DEBUG INFO ===");
  console.log("API_URL:", API_URL);
  console.log("Slug:", slug);
  console.log("Full URL:", url);

  try {
    const res = await fetch(url, {
      next: { revalidate: 60 },
      headers: {
        'Content-Type': 'application/json',
      },
    });

    console.log("Response status:", res.status);
    console.log("Response statusText:", res.statusText);

    if (!res.ok) {
      const errorText = await res.text();
      console.error("Fetch failed:", res.status, res.statusText);
      console.error("Error body:", errorText);
      return null;
    }

    const json = await res.json();
    console.log("Full Payload response:", JSON.stringify(json, null, 2));

    // Check if docs array exists and has items
    const docs = json.docs || [];
    console.log("Number of docs found:", docs.length);

    if (docs.length === 0) {
      console.warn("No documents found for slug:", slug);
      
      // Try to fetch all services to see what slugs exist
      const allServicesUrl = `${API_URL}/api/service-details-component?limit=100`;
      console.log("Fetching all services from:", allServicesUrl);
      
      const allRes = await fetch(allServicesUrl);
      if (allRes.ok) {
        const allJson = await allRes.json();
        console.log("Available slugs:", allJson.docs?.map((d: any) => d.slug));
      }
      
      return null;
    }

    const service = docs[0];
    console.log("Service found:", service.slug);

    // Process rich text content if it exists
    if (service?.contentSection?.content) {
      console.log("Processing rich text content...");
      console.log("Raw content:", service.contentSection.content);
      service.contentSection.content = renderRichText(
        service.contentSection.content
      );
      console.log("Processed HTML:", service.contentSection.content);
    }

    return service;
  } catch (error) {
    console.error("Exception during fetch:", error);
    return null;
  }
}

// Helper to get image URL
export function getImageUrl(imageField: any): string {
  if (!imageField) return "";
  
  // Handle Cloudinary URLs
  if (typeof imageField === "object" && imageField.cloudinary_url) {
    return imageField.cloudinary_url;
  }
  
  // Handle standard Payload media objects
  if (typeof imageField === "object" && imageField.url) {
    return imageField.url;
  }
  
  // Handle direct string URLs
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
      // Handle paragraph nodes
      if (node.type === "paragraph") {
        const alignment = node.format || "start";
        const alignStyle =
          alignment !== "start" ? ` style="text-align: ${alignment}"` : "";
        const content = node.children ? renderLexicalNodes(node.children) : "";
        if (!content.trim()) return "<br />"; // Preserve empty paragraphs
        return `<p${alignStyle}>${content}</p>`;
      }

      // Handle text nodes with formatting
      if (node.type === "text") {
        let text = node.text || "";
        if (node.format & 1) text = `<strong>${text}</strong>`;
        if (node.format & 2) text = `<em>${text}</em>`;
        if (node.format & 8) text = `<u>${text}</u>`;
        if (node.format & 16) text = `<s>${text}</s>`; // strikethrough
        if (node.format & 32) text = `<code>${text}</code>`; // code
        return text;
      }

      // Handle line breaks
      if (node.type === "linebreak") return "<br />";

      // Handle headings
      if (node.type === "heading") {
        const tag = node.tag || "h2";
        const content = node.children ? renderLexicalNodes(node.children) : "";
        return `<${tag}>${content}</${tag}>`;
      }

      // Handle lists
      if (node.type === "list") {
        const listTag = node.listType === "number" ? "ol" : "ul";
        const content = node.children ? renderLexicalNodes(node.children) : "";
        return `<${listTag}>${content}</${listTag}>`;
      }

      // Handle list items
      if (node.type === "listitem") {
        const content = node.children ? renderLexicalNodes(node.children) : "";
        return `<li>${content}</li>`;
      }

      // Handle links
      if (node.type === "link") {
        const url = node.fields?.url || node.url || "#";
        const newTab = node.fields?.newTab ? ' target="_blank" rel="noopener noreferrer"' : '';
        const content = node.children ? renderLexicalNodes(node.children) : "";
        return `<a href="${url}"${newTab}>${content}</a>`;
      }

      // Handle blockquote
      if (node.type === "quote") {
        const content = node.children ? renderLexicalNodes(node.children) : "";
        return `<blockquote>${content}</blockquote>`;
      }

      // Handle code blocks
      if (node.type === "code") {
        const language = node.language || "";
        const code = node.children ? renderLexicalNodes(node.children) : "";
        return `<pre><code class="language-${language}">${code}</code></pre>`;
      }

      // Handle IMAGES - This is the key part!
      if (node.type === "upload") {
        console.log("Found image node:", node);
        
        const imageData = node.value;
        let imageUrl = "";
        let alt = node.fields?.caption || "Image";
        
        // Extract image URL from various possible structures
        if (imageData) {
          if (typeof imageData === "string") {
            imageUrl = imageData;
          } else if (imageData.cloudinary_url) {
            imageUrl = imageData.cloudinary_url;
          } else if (imageData.url) {
            imageUrl = imageData.url;
          }
        }
        
        // Also check the relationTo field
        if (!imageUrl && node.relationTo === "media") {
          // The image might be in the value field as an object
          imageUrl = getImageUrl(node.value);
        }

        console.log("Image URL extracted:", imageUrl);
        
        if (!imageUrl) {
          console.warn("Could not extract image URL from node:", node);
          return "";
        }

        // Get optional width/height if provided
        const width = node.fields?.width || "";
        const height = node.fields?.height || "";
        const sizeAttrs = width && height ? ` width="${width}" height="${height}"` : "";
        
        return `<figure class="rich-text-image">
          <img src="${imageUrl}" alt="${alt}"${sizeAttrs} loading="lazy" />
          ${node.fields?.caption ? `<figcaption>${node.fields.caption}</figcaption>` : ""}
        </figure>`;
      }

      // Handle horizontal rule
      if (node.type === "horizontalrule") {
        return "<hr />";
      }

      // Log unknown node types for debugging
      console.warn("Unknown node type:", node.type, node);
      return "";
    })
    .join("");
}