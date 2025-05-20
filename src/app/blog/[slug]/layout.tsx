import FontThemeWithScroll from "@/components/FontThemeWithScroll";

export default function BlogPostLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative">
      <div className="my-6">
        <FontThemeWithScroll />
      </div>
      {children}
    </div>
  );
}
