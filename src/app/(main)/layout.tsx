import Header from "@/components/header";
import Footer from "@/components/footer";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex flex-col flex-1">
        <main className="flex flex-col flex-1 w-full max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
          {children}
        </main>
      </div>
      <Footer />
    </div>
  );
}
