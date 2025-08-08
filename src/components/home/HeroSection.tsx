import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, MapPin } from "lucide-react";
import heroImage from "@/assets/hero-banner.jpg";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-subtle py-20 lg:py-32 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Professional team collaboration" 
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 to-background/80"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Headline */}
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            Find Your{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Dream Job
            </span>{" "}
            Today
          </h1>

          {/* Subheading */}
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Connect with top employers and discover thousands of job opportunities. 
            Your next career move is just one search away.
          </p>

          {/* Job Search Form */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-strong max-w-3xl mx-auto mb-8">
            <div className="flex flex-col md:flex-row gap-4">
              {/* Job Title/Keywords */}
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
                <Input
                  placeholder="Job title, keywords, or company"
                  className="pl-10 h-12 border-0 bg-background/50"
                />
              </div>

              {/* Location */}
              <div className="flex-1 relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
                <Input
                  placeholder="Location"
                  className="pl-10 h-12 border-0 bg-background/50"
                />
              </div>

              {/* Search Button */}
              <Button variant="hero" size="lg" className="h-12 px-8">
                Search Jobs
              </Button>
            </div>
          </div>

          {/* Popular Searches */}
          <div className="flex flex-wrap justify-center gap-3">
            <span className="text-sm text-muted-foreground">Popular searches:</span>
            {["Remote", "Software Engineer", "Marketing", "Designer", "Data Analyst"].map((term) => (
              <button
                key={term}
                className="text-sm text-primary hover:text-primary-hover underline-offset-4 hover:underline transition-colors"
              >
                {term}
              </button>
            ))}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 pt-16 border-t border-border/50">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">50,000+</div>
              <div className="text-muted-foreground">Active Jobs</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">10,000+</div>
              <div className="text-muted-foreground">Companies</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">1M+</div>
              <div className="text-muted-foreground">Job Seekers</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;