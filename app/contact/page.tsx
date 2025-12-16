// import ContactSection from "@/components/contact/ContactSection";


// export default function Contact() {
//     return (
//         <>
//             <ContactSection />
//         </>
//     )
// }



// app/contact/page.tsx (Sample page to fetch and render the component)

import { fetchContactSectionPageData } from "@/lib/fetchContactSectionPageData";
import ContactSection from "@/components/contact/ContactSection";

export default async function ContactPage() {
  const data = await fetchContactSectionPageData();

  // Optional: Handle null data here if needed (e.g., redirect or error page)
  if (!data) {
    return (
      <div style={{ padding: "2rem", textAlign: "center" }}>
        <h1>Contact Section Not Available</h1>
        <p>Please check back later or contact support.</p>
      </div>
    );
  }

  return <ContactSection data={data} />;
}