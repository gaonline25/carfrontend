

const PAYLOAD_API_URL =
  process.env.NEXT_PUBLIC_PAYLOAD_API_URL || "https://carbackend-delta.vercel.app/api";

// Fetch Hero/Home Page Component Data
export async function fetchHeroPageComponentData() {
  try {
    const res = await fetch(
      `${PAYLOAD_API_URL}/hero-page-component?where[isActive][equals]=true&depth=2&limit=1`,
      {
        next: { revalidate: 60 },     // Revalidate every 60 seconds (ISR)
        cache: "force-cache",         // Optional: aggressive caching
      }
    );

    if (!res.ok) {
      throw new Error(`Failed to fetch Hero Page data: ${res.statusText}`);
    }

    const data = await res.json();

    // Since it's a singleton-like component (only one active), grab the first active doc
    const activeComponent = data.docs?.[0] || null;

    console.log("Fetched Hero Page Component data:", activeComponent);
    return activeComponent;
  } catch (error) {
    console.error("Error fetching Hero Page Component data:", error);
    return null;
  }
}

// Reusable helper to get image URL (same as you already have)
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