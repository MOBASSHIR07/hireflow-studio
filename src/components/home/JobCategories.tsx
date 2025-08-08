import { Card, CardContent } from "@/components/ui/card";
import { 
  Code, 
  Briefcase, 
  Palette, 
  TrendingUp, 
  Shield, 
  Stethoscope, 
  GraduationCap, 
  Building 
} from "lucide-react";
import { Link } from "react-router-dom";

const categories = [
  {
    icon: Code,
    title: "Technology",
    jobCount: "12,543",
    bgColor: "bg-blue-50",
    iconColor: "text-blue-600"
  },
  {
    icon: Briefcase,
    title: "Business & Finance",
    jobCount: "8,921",
    bgColor: "bg-green-50",
    iconColor: "text-green-600"
  },
  {
    icon: Palette,
    title: "Design & Creative",
    jobCount: "5,432",
    bgColor: "bg-purple-50",
    iconColor: "text-purple-600"
  },
  {
    icon: TrendingUp,
    title: "Marketing & Sales",
    jobCount: "7,654",
    bgColor: "bg-orange-50",
    iconColor: "text-orange-600"
  },
  {
    icon: Shield,
    title: "Security",
    jobCount: "3,210",
    bgColor: "bg-red-50",
    iconColor: "text-red-600"
  },
  {
    icon: Stethoscope,
    title: "Healthcare",
    jobCount: "9,876",
    bgColor: "bg-emerald-50",
    iconColor: "text-emerald-600"
  },
  {
    icon: GraduationCap,
    title: "Education",
    jobCount: "4,567",
    bgColor: "bg-indigo-50",
    iconColor: "text-indigo-600"
  },
  {
    icon: Building,
    title: "Construction",
    jobCount: "6,789",
    bgColor: "bg-amber-50",
    iconColor: "text-amber-600"
  }
];

const JobCategories = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Browse Jobs by Category
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore opportunities across various industries and find the perfect role that matches your skills and interests.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Link key={index} to={`/jobs?category=${category.title.toLowerCase()}`}>
                <Card className="group h-full bg-gradient-card hover:shadow-medium transition-all duration-300 cursor-pointer border-0">
                  <CardContent className="p-6 text-center">
                    <div className={`w-16 h-16 ${category.bgColor} rounded-2xl mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className={`h-8 w-8 ${category.iconColor}`} />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {category.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {category.jobCount} jobs available
                    </p>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link to="/categories">
            <button className="text-primary hover:text-primary-hover font-medium underline-offset-4 hover:underline transition-colors">
              View All Categories →
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default JobCategories;