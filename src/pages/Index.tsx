import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/home/HeroSection";
import JobCategories from "@/components/home/JobCategories";
import FeaturedJobs from "@/components/home/FeaturedJobs";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <JobCategories />
        <FeaturedJobs />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
