import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  MapPin, 
  Clock, 
  DollarSign, 
  Users, 
  Building, 
  Calendar,
  Share2,
  Bookmark,
  ArrowLeft,
  CheckCircle
} from "lucide-react";
import { Link, useParams } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const JobDetails = () => {
  const { id } = useParams();

  // Mock job data - in real app, this would come from API
  const job = {
    id: 1,
    title: "Senior Software Engineer",
    company: "TechFlow Inc.",
    logo: "🚀",
    location: "San Francisco, CA",
    type: "Full-time",
    salary: "$120,000 - $180,000",
    experience: "5-8 years",
    employees: "100-500",
    industry: "Technology",
    posted: "2 days ago",
    applicants: 47,
    remote: true,
    tags: ["React", "Node.js", "TypeScript", "AWS", "Docker"],
    description: `
      We are looking for a Senior Software Engineer to join our growing team and help build the next generation of our platform. You'll be working on challenging problems at scale, collaborating with talented engineers, and having direct impact on product decisions.

      As a Senior Software Engineer, you'll be responsible for designing, developing, and maintaining high-quality software solutions that serve millions of users worldwide.
    `,
    responsibilities: [
      "Design and develop scalable web applications using React and Node.js",
      "Collaborate with cross-functional teams to define and implement new features",
      "Write clean, maintainable, and well-tested code",
      "Participate in code reviews and mentor junior developers",
      "Optimize application performance and ensure high availability",
      "Stay up-to-date with emerging technologies and best practices"
    ],
    requirements: [
      "5+ years of experience in software development",
      "Strong proficiency in JavaScript, React, and Node.js",
      "Experience with TypeScript and modern development tools",
      "Knowledge of cloud platforms (AWS, GCP, or Azure)",
      "Experience with containerization (Docker, Kubernetes)",
      "Strong problem-solving skills and attention to detail",
      "Excellent communication and teamwork abilities",
      "Bachelor's degree in Computer Science or related field"
    ],
    benefits: [
      "Competitive salary and equity package",
      "Comprehensive health, dental, and vision insurance",
      "Flexible remote work options",
      "Professional development budget",
      "Unlimited PTO policy",
      "401(k) with company matching",
      "Modern office with free meals and snacks",
      "Team building events and company retreats"
    ]
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <Link to="/" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-6 transition-colors">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Jobs
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Job Header */}
            <Card className="bg-gradient-card border-0 shadow-medium">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center text-white text-2xl">
                      {job.logo}
                    </div>
                    <div>
                      <h1 className="text-2xl font-bold text-foreground mb-1">{job.title}</h1>
                      <p className="text-lg text-muted-foreground">{job.company}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button variant="ghost" size="icon">
                      <Share2 className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon">
                      <Bookmark className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                {/* Job Meta */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4 mr-2" />
                    {job.location}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Clock className="h-4 w-4 mr-2" />
                    {job.type}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <DollarSign className="h-4 w-4 mr-2" />
                    {job.salary}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4 mr-2" />
                    {job.posted}
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {job.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                  {job.remote && (
                    <Badge variant="outline" className="border-success text-success">
                      Remote Friendly
                    </Badge>
                  )}
                </div>

                {/* Apply Button */}
                <div className="flex space-x-3">
                  <Link to={`/apply/${job.id}`} className="flex-1">
                    <Button variant="hero" size="lg" className="w-full">
                      Apply for this Job
                    </Button>
                  </Link>
                  <Button variant="outline" size="lg">
                    Save Job
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Job Description */}
            <Card className="border-0 shadow-soft">
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold text-foreground mb-4">Job Description</h2>
                <div className="prose prose-sm max-w-none text-muted-foreground">
                  {job.description.split('\n').map((paragraph, index) => (
                    <p key={index} className="mb-4 leading-relaxed">
                      {paragraph.trim()}
                    </p>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Responsibilities */}
            <Card className="border-0 shadow-soft">
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold text-foreground mb-4">Key Responsibilities</h2>
                <ul className="space-y-3">
                  {job.responsibilities.map((item, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Requirements */}
            <Card className="border-0 shadow-soft">
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold text-foreground mb-4">Requirements</h2>
                <ul className="space-y-3">
                  {job.requirements.map((item, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Benefits */}
            <Card className="border-0 shadow-soft">
              <CardContent className="p-6">
                <h2 className="text-xl font-semibold text-foreground mb-4">Benefits & Perks</h2>
                <ul className="space-y-3">
                  {job.benefits.map((item, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Apply */}
            <Card className="border-0 shadow-soft">
              <CardContent className="p-6">
                <h3 className="font-semibold text-foreground mb-4">Quick Apply</h3>
                <Link to={`/apply/${job.id}`}>
                  <Button variant="success" size="lg" className="w-full mb-3">
                    Apply Now
                  </Button>
                </Link>
                <p className="text-sm text-muted-foreground text-center">
                  {job.applicants} people have applied
                </p>
              </CardContent>
            </Card>

            {/* Company Info */}
            <Card className="border-0 shadow-soft">
              <CardContent className="p-6">
                <h3 className="font-semibold text-foreground mb-4">About {job.company}</h3>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Industry</span>
                    <span className="text-sm font-medium">{job.industry}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Company Size</span>
                    <span className="text-sm font-medium">{job.employees}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Experience</span>
                    <span className="text-sm font-medium">{job.experience}</span>
                  </div>
                </div>
                <Separator className="my-4" />
                <Button variant="outline" className="w-full">
                  View Company Profile
                </Button>
              </CardContent>
            </Card>

            {/* Similar Jobs */}
            <Card className="border-0 shadow-soft">
              <CardContent className="p-6">
                <h3 className="font-semibold text-foreground mb-4">Similar Jobs</h3>
                <div className="space-y-4">
                  {[1, 2, 3].map((item) => (
                    <div key={item} className="border rounded-lg p-3 hover:bg-muted/50 transition-colors cursor-pointer">
                      <h4 className="font-medium text-sm text-foreground mb-1">Frontend Developer</h4>
                      <p className="text-xs text-muted-foreground">StartupCo • Remote</p>
                      <p className="text-xs text-primary mt-1">$80k - $120k</p>
                    </div>
                  ))}
                </div>
                <Button variant="ghost" className="w-full mt-4">
                  View More
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default JobDetails;