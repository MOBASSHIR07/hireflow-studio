import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, DollarSign, Bookmark } from "lucide-react";
import { Link } from "react-router-dom";

const featuredJobs = [
  {
    id: 1,
    title: "Senior Software Engineer",
    company: "TechFlow Inc.",
    location: "San Francisco, CA",
    type: "Full-time",
    salary: "$120k - $180k",
    timePosted: "2 days ago",
    logo: "🚀",
    tags: ["React", "Node.js", "TypeScript"],
    remote: true
  },
  {
    id: 2,
    title: "UX/UI Designer",
    company: "Design Studio",
    location: "New York, NY",
    type: "Full-time",
    salary: "$80k - $120k",
    timePosted: "1 day ago",
    logo: "🎨",
    tags: ["Figma", "Sketch", "Adobe XD"],
    remote: false
  },
  {
    id: 3,
    title: "Product Manager",
    company: "Innovation Corp",
    location: "Austin, TX",
    type: "Full-time",
    salary: "$100k - $150k",
    timePosted: "3 hours ago",
    logo: "💡",
    tags: ["Strategy", "Analytics", "Agile"],
    remote: true
  },
  {
    id: 4,
    title: "Data Scientist",
    company: "Analytics Plus",
    location: "Boston, MA",
    type: "Full-time",
    salary: "$110k - $160k",
    timePosted: "1 day ago",
    logo: "📊",
    tags: ["Python", "ML", "SQL"],
    remote: true
  },
  {
    id: 5,
    title: "Marketing Manager",
    company: "Growth Labs",
    location: "Chicago, IL",
    type: "Full-time",
    salary: "$70k - $100k",
    timePosted: "4 days ago",
    logo: "📈",
    tags: ["SEO", "Content", "Analytics"],
    remote: false
  },
  {
    id: 6,
    title: "DevOps Engineer",
    company: "CloudTech",
    location: "Seattle, WA",
    type: "Full-time",
    salary: "$130k - $170k",
    timePosted: "1 week ago",
    logo: "☁️",
    tags: ["AWS", "Docker", "Kubernetes"],
    remote: true
  }
];

const FeaturedJobs = () => {
  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Featured Jobs
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hand-picked opportunities from top companies. Apply now and take the next step in your career.
          </p>
        </div>

        {/* Jobs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredJobs.map((job) => (
            <Card key={job.id} className="group bg-gradient-card hover:shadow-medium transition-all duration-300 border-0">
              <CardContent className="p-6">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center text-white text-xl">
                      {job.logo}
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                        {job.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">{job.company}</p>
                    </div>
                  </div>
                  <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary">
                    <Bookmark className="h-4 w-4" />
                  </Button>
                </div>

                {/* Job Details */}
                <div className="space-y-3 mb-4">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4 mr-2" />
                    {job.location}
                    {job.remote && (
                      <Badge variant="secondary" className="ml-2 text-xs">
                        Remote
                      </Badge>
                    )}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <DollarSign className="h-4 w-4 mr-2" />
                    {job.salary}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Clock className="h-4 w-4 mr-2" />
                    {job.timePosted} • {job.type}
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {job.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex space-x-2">
                  <Link to={`/job/${job.id}`} className="flex-1">
                    <Button variant="default" className="w-full">
                      View Details
                    </Button>
                  </Link>
                  <Link to={`/apply/${job.id}`}>
                    <Button variant="success">
                      Apply Now
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Link to="/jobs">
            <Button variant="outline" size="lg">
              View All Jobs
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedJobs;