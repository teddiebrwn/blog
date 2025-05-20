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
      <main className="container flex flex-grow px-4 mx-auto sm:px-6 lg:px-8">
        {children}
      </main>
      <Footer />
    </div>
  );
}
