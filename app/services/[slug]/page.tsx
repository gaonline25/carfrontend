// import ServiceDetails from "@/components/service/Single";


// export default function SingleService() {
//   return (
//     <>
//       <ServiceDetails />
//     </>
//   );
// }



import ServiceDetails from "@/components/service/Single";

export default function ServiceDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  return <ServiceDetails params={params} />;
}