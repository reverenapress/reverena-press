import ScrollProgress from "@/components/ScrollProgress";
import GoldCursor from "@/components/GoldCursor";
import SiteNav from "@/components/SiteNav";
import Hero from "@/components/Hero";
import BookGallery from "@/components/BookGallery";
import Philosophy from "@/components/Philosophy";
import LeadMagnet from "@/components/LeadMagnet";
import SiteFooter from "@/components/SiteFooter";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-onyx text-foreground">
      <ScrollProgress />
      <GoldCursor />
      <SiteNav />
      <main>
        <Hero />
        <BookGallery />
        <Philosophy />
        <LeadMagnet />
      </main>
      <SiteFooter />
    </div>
  );
}