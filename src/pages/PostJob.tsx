import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { 
  Plus, 
  X, 
  Building, 
  MapPin, 
  DollarSign, 
  Clock,
  Users,
  Briefcase,
  ArrowLeft
} from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { useState } from "react";

const PostJob = () => {
  const [skills, setSkills] = useState<string[]>([]);
  const [currentSkill, setCurrentSkill] = useState("");

  const addSkill = () => {
    if (currentSkill.trim() && !skills.includes(currentSkill.trim())) {
      setSkills([...skills, currentSkill.trim()]);
      setCurrentSkill("");
    }
  };

  const removeSkill = (skillToRemove: string) => {
    setSkills(skills.filter(skill => skill !== skillToRemove));
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <Link to="/" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-6 transition-colors">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Home
        </Link>

        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Post a New Job
            </h1>
            <p className="text-lg text-muted-foreground">
              Find the perfect candidate for your open position
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Form */}
            <div className="lg:col-span-2">
              <Card className="border-0 shadow-medium">
                <CardHeader>
                  <CardTitle className="text-2xl">Job Details</CardTitle>
                  <p className="text-muted-foreground">
                    Provide detailed information about the position
                  </p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <form className="space-y-6">
                    {/* Basic Information */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-foreground">Basic Information</h3>
                      
                      <div className="space-y-2">
                        <Label htmlFor="jobTitle">Job Title *</Label>
                        <Input 
                          id="jobTitle" 
                          placeholder="e.g., Senior Software Engineer" 
                        />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="department">Department</Label>
                          <Select>
                            <SelectTrigger>
                              <SelectValue placeholder="Select department" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="engineering">Engineering</SelectItem>
                              <SelectItem value="design">Design</SelectItem>
                              <SelectItem value="marketing">Marketing</SelectItem>
                              <SelectItem value="sales">Sales</SelectItem>
                              <SelectItem value="hr">Human Resources</SelectItem>
                              <SelectItem value="finance">Finance</SelectItem>
                              <SelectItem value="operations">Operations</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="jobType">Employment Type *</Label>
                          <Select>
                            <SelectTrigger>
                              <SelectValue placeholder="Select type" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="fulltime">Full-time</SelectItem>
                              <SelectItem value="parttime">Part-time</SelectItem>
                              <SelectItem value="contract">Contract</SelectItem>
                              <SelectItem value="freelance">Freelance</SelectItem>
                              <SelectItem value="internship">Internship</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="experience">Experience Level *</Label>
                          <Select>
                            <SelectTrigger>
                              <SelectValue placeholder="Select level" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="entry">Entry Level (0-2 years)</SelectItem>
                              <SelectItem value="mid">Mid Level (3-5 years)</SelectItem>
                              <SelectItem value="senior">Senior Level (5-10 years)</SelectItem>
                              <SelectItem value="lead">Lead/Principal (10+ years)</SelectItem>
                              <SelectItem value="executive">Executive</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="category">Job Category *</Label>
                          <Select>
                            <SelectTrigger>
                              <SelectValue placeholder="Select category" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="technology">Technology</SelectItem>
                              <SelectItem value="design">Design & Creative</SelectItem>
                              <SelectItem value="marketing">Marketing & Sales</SelectItem>
                              <SelectItem value="finance">Finance & Accounting</SelectItem>
                              <SelectItem value="healthcare">Healthcare</SelectItem>
                              <SelectItem value="education">Education</SelectItem>
                              <SelectItem value="legal">Legal</SelectItem>
                              <SelectItem value="operations">Operations</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                    </div>

                    {/* Location & Salary */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-foreground">Location & Compensation</h3>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="location">Job Location *</Label>
                          <Input 
                            id="location" 
                            placeholder="e.g., San Francisco, CA" 
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="workModel">Work Model</Label>
                          <Select>
                            <SelectTrigger>
                              <SelectValue placeholder="Select work model" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="onsite">On-site</SelectItem>
                              <SelectItem value="remote">Remote</SelectItem>
                              <SelectItem value="hybrid">Hybrid</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="salaryMin">Minimum Salary ($)</Label>
                          <Input 
                            id="salaryMin" 
                            type="number" 
                            placeholder="80000" 
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="salaryMax">Maximum Salary ($)</Label>
                          <Input 
                            id="salaryMax" 
                            type="number" 
                            placeholder="120000" 
                          />
                        </div>
                      </div>

                      <div className="flex items-center space-x-2">
                        <Checkbox id="negotiable" />
                        <Label htmlFor="negotiable" className="text-sm">
                          Salary is negotiable
                        </Label>
                      </div>
                    </div>

                    {/* Job Description */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-foreground">Job Description</h3>
                      
                      <div className="space-y-2">
                        <Label htmlFor="summary">Job Summary *</Label>
                        <Textarea 
                          id="summary"
                          placeholder="Brief overview of the role and what makes it exciting..."
                          className="min-h-[100px]"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="description">Detailed Description *</Label>
                        <Textarea 
                          id="description"
                          placeholder="Provide a comprehensive description of the role, responsibilities, and what the candidate will be working on..."
                          className="min-h-[150px]"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="responsibilities">Key Responsibilities *</Label>
                        <Textarea 
                          id="responsibilities"
                          placeholder="• Design and develop web applications&#10;• Collaborate with cross-functional teams&#10;• Write clean, maintainable code&#10;• ..."
                          className="min-h-[120px]"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="requirements">Requirements *</Label>
                        <Textarea 
                          id="requirements"
                          placeholder="• 5+ years of experience in software development&#10;• Proficiency in React and Node.js&#10;• Bachelor's degree in Computer Science&#10;• ..."
                          className="min-h-[120px]"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="benefits">Benefits & Perks</Label>
                        <Textarea 
                          id="benefits"
                          placeholder="• Competitive salary and equity&#10;• Health, dental, and vision insurance&#10;• Flexible remote work options&#10;• ..."
                          className="min-h-[100px]"
                        />
                      </div>
                    </div>

                    {/* Skills & Qualifications */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-foreground">Skills & Technologies</h3>
                      
                      <div className="space-y-2">
                        <Label htmlFor="skills">Required Skills</Label>
                        <div className="flex space-x-2">
                          <Input 
                            id="skills"
                            value={currentSkill}
                            onChange={(e) => setCurrentSkill(e.target.value)}
                            placeholder="e.g., React, Node.js, TypeScript"
                            onKeyPress={(e) => {
                              if (e.key === 'Enter') {
                                e.preventDefault();
                                addSkill();
                              }
                            }}
                          />
                          <Button type="button" onClick={addSkill} variant="outline">
                            <Plus className="h-4 w-4" />
                          </Button>
                        </div>
                        
                        {skills.length > 0 && (
                          <div className="flex flex-wrap gap-2 mt-3">
                            {skills.map((skill, index) => (
                              <Badge key={index} variant="secondary" className="flex items-center gap-1">
                                {skill}
                                <button
                                  type="button"
                                  onClick={() => removeSkill(skill)}
                                  className="hover:text-destructive transition-colors"
                                >
                                  <X className="h-3 w-3" />
                                </button>
                              </Badge>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Application Settings */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-foreground">Application Settings</h3>
                      
                      <div className="space-y-2">
                        <Label htmlFor="deadline">Application Deadline</Label>
                        <Input 
                          id="deadline" 
                          type="date"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="applicationEmail">Application Email</Label>
                        <Input 
                          id="applicationEmail" 
                          type="email"
                          placeholder="careers@company.com"
                        />
                      </div>

                      <div className="space-y-3">
                        <Label>Application Options</Label>
                        <div className="space-y-2">
                          <div className="flex items-center space-x-2">
                            <Checkbox id="resumeRequired" defaultChecked />
                            <Label htmlFor="resumeRequired" className="text-sm">
                              Resume required
                            </Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Checkbox id="coverLetterRequired" />
                            <Label htmlFor="coverLetterRequired" className="text-sm">
                              Cover letter required
                            </Label>
                          </div>
                          <div className="flex items-center space-x-2">
                            <Checkbox id="portfolioRequired" />
                            <Label htmlFor="portfolioRequired" className="text-sm">
                              Portfolio required
                            </Label>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Submit Buttons */}
                    <div className="flex space-x-4 pt-6">
                      <Button type="submit" variant="hero" size="lg" className="flex-1">
                        Publish Job
                      </Button>
                      <Button type="button" variant="outline" size="lg">
                        Save as Draft
                      </Button>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Job Preview */}
              <Card className="border-0 shadow-soft">
                <CardHeader>
                  <CardTitle className="text-lg">Job Preview</CardTitle>
                  <p className="text-sm text-muted-foreground">
                    How your job will appear to candidates
                  </p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="p-4 border rounded-lg bg-muted/30">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center text-white text-sm">
                        C
                      </div>
                      <div>
                        <h3 className="font-semibold text-sm">Job Title</h3>
                        <p className="text-xs text-muted-foreground">Your Company</p>
                      </div>
                    </div>
                    <div className="space-y-2 text-xs text-muted-foreground">
                      <div className="flex items-center">
                        <MapPin className="h-3 w-3 mr-1" />
                        Location
                      </div>
                      <div className="flex items-center">
                        <DollarSign className="h-3 w-3 mr-1" />
                        Salary Range
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-3 w-3 mr-1" />
                        Employment Type
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Posting Tips */}
              <Card className="border-0 shadow-soft">
                <CardHeader>
                  <CardTitle className="text-lg">Posting Tips</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-sm text-muted-foreground">
                      Write a clear, compelling job title that accurately reflects the role
                    </p>
                  </div>
                  <div className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-sm text-muted-foreground">
                      Include specific requirements and qualifications
                    </p>
                  </div>
                  <div className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-sm text-muted-foreground">
                      Highlight your company culture and benefits
                    </p>
                  </div>
                  <div className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-sm text-muted-foreground">
                      Use inclusive language to attract diverse candidates
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Pricing */}
              <Card className="border-0 shadow-soft">
                <CardHeader>
                  <CardTitle className="text-lg">Job Posting Package</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-primary mb-1">$299</div>
                    <p className="text-sm text-muted-foreground">30-day listing</p>
                  </div>
                  
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-success rounded-full"></div>
                      <span>Featured in search results</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-success rounded-full"></div>
                      <span>Email alerts to matching candidates</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-success rounded-full"></div>
                      <span>Applicant tracking & management</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-success rounded-full"></div>
                      <span>Analytics and insights</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default PostJob;