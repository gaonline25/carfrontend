// lib/api/footer/fetchFooterPageComponent.ts

const PAYLOAD_API_URL =
  process.env.NEXT_PUBLIC_PAYLOAD_API_URL ||
  "https://carbackend-delta.vercel.app/api";

// Fetch Footer Page Data
export async function fetchFooterPageData() {
  try {
    const res = await fetch(
      `${PAYLOAD_API_URL}/footer-component?where[isActive][equals]=true&depth=2&limit=100&draft=false&trash=false`,
      {
        next: { revalidate: 60 },
        cache: "force-cache",
      }
    );
    if (!res.ok) {
      throw new Error(`Failed to fetch Footer page data: ${res.statusText}`);
    }
    const data = await res.json();
    const activeComponent =
      data.docs?.find((component: any) => component.isActive) || null;
    console.log("Fetched Footer data:", activeComponent);
    return activeComponent;
  } catch (error) {
    console.error("Error fetching Footer page data:", error);
    return null;
  }
}

// Helper function to get image URL
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
