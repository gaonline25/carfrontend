import BlogDetail from "@/components/blog/BlogDetail";

export default function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  return <BlogDetail params={params} />;
}
