import Footer from "@/components/footer";
import Header from "@/components/header";
import TabsBar from "@/components/tabs-bar";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <div className="container">
          <TabsBar />
        </div>
      </main>
      <Footer />
    </div>
  );
}
