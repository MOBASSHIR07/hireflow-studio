import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { 
  Upload, 
  FileText, 
  MapPin, 
  DollarSign, 
  ArrowLeft,
  CheckCircle
} from "lucide-react";
import { Link, useParams } from "react-router-dom";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const ApplyJob = () => {
  const { id } = useParams();

  // Mock job data
  const job = {
    id: 1,
    title: "Senior Software Engineer",
    company: "TechFlow Inc.",
    logo: "🚀",
    location: "San Francisco, CA",
    salary: "$120,000 - $180,000",
    type: "Full-time"
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <Link to={`/job/${id}`} className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-6 transition-colors">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Job Details
        </Link>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Application Form */}
            <div className="lg:col-span-2">
              <Card className="border-0 shadow-medium">
                <CardHeader>
                  <CardTitle className="text-2xl">Apply for this Position</CardTitle>
                  <p className="text-muted-foreground">
                    Fill out the form below to submit your application
                  </p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <form className="space-y-6">
                    {/* Personal Information */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-foreground">Personal Information</h3>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="firstName">First Name *</Label>
                          <Input id="firstName" placeholder="John" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="lastName">Last Name *</Label>
                          <Input id="lastName" placeholder="Doe" />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="email">Email Address *</Label>
                          <Input id="email" type="email" placeholder="john.doe@example.com" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone Number *</Label>
                          <Input id="phone" type="tel" placeholder="+1 (555) 123-4567" />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="location">Current Location *</Label>
                        <Input id="location" placeholder="City, State" />
                      </div>
                    </div>

                    {/* Resume Upload */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-foreground">Resume & Documents</h3>
                      
                      <div className="space-y-2">
                        <Label htmlFor="resume">Resume *</Label>
                        <div className="border-2 border-dashed border-muted rounded-lg p-6 text-center hover:border-primary transition-colors cursor-pointer">
                          <Upload className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
                          <p className="text-sm text-muted-foreground mb-1">
                            Drag and drop your resume here, or click to browse
                          </p>
                          <p className="text-xs text-muted-foreground">
                            Supported formats: PDF, DOC, DOCX (Max 5MB)
                          </p>
                          <Input type="file" className="hidden" accept=".pdf,.doc,.docx" />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="coverLetter">Cover Letter (Optional)</Label>
                        <div className="border-2 border-dashed border-muted rounded-lg p-6 text-center hover:border-primary transition-colors cursor-pointer">
                          <FileText className="h-8 w-8 text-muted-foreground mx-auto mb-2" />
                          <p className="text-sm text-muted-foreground mb-1">
                            Upload your cover letter
                          </p>
                          <p className="text-xs text-muted-foreground">
                            Supported formats: PDF, DOC, DOCX (Max 5MB)
                          </p>
                          <Input type="file" className="hidden" accept=".pdf,.doc,.docx" />
                        </div>
                      </div>
                    </div>

                    {/* Additional Information */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-foreground">Additional Information</h3>
                      
                      <div className="space-y-2">
                        <Label htmlFor="experience">Years of Experience *</Label>
                        <Input id="experience" placeholder="e.g., 5 years" />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="salary">Expected Salary Range</Label>
                        <Input id="salary" placeholder="e.g., $120,000 - $150,000" />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="availability">Earliest Start Date *</Label>
                        <Input id="availability" type="date" />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="linkedin">LinkedIn Profile (Optional)</Label>
                        <Input id="linkedin" placeholder="https://linkedin.com/in/johndoe" />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="portfolio">Portfolio/Website (Optional)</Label>
                        <Input id="portfolio" placeholder="https://johndoe.dev" />
                      </div>
                    </div>

                    {/* Cover Letter Text */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-foreground">Why are you interested in this role?</h3>
                      <div className="space-y-2">
                        <Label htmlFor="coverLetterText">Cover Letter</Label>
                        <Textarea 
                          id="coverLetterText"
                          placeholder="Tell us why you're a great fit for this position..."
                          className="min-h-[120px]"
                        />
                        <p className="text-xs text-muted-foreground">
                          Minimum 100 characters recommended
                        </p>
                      </div>
                    </div>

                    {/* Questionnaire */}
                    <div className="space-y-4">
                      <h3 className="text-lg font-semibold text-foreground">Screening Questions</h3>
                      
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <Label>Are you authorized to work in the United States? *</Label>
                          <div className="flex space-x-4">
                            <label className="flex items-center space-x-2">
                              <input type="radio" name="workAuth" value="yes" className="text-primary" />
                              <span className="text-sm">Yes</span>
                            </label>
                            <label className="flex items-center space-x-2">
                              <input type="radio" name="workAuth" value="no" className="text-primary" />
                              <span className="text-sm">No</span>
                            </label>
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label>Do you have experience with React and Node.js? *</Label>
                          <div className="flex space-x-4">
                            <label className="flex items-center space-x-2">
                              <input type="radio" name="techExp" value="yes" className="text-primary" />
                              <span className="text-sm">Yes</span>
                            </label>
                            <label className="flex items-center space-x-2">
                              <input type="radio" name="techExp" value="no" className="text-primary" />
                              <span className="text-sm">No</span>
                            </label>
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label>Are you willing to relocate to San Francisco? *</Label>
                          <div className="flex space-x-4">
                            <label className="flex items-center space-x-2">
                              <input type="radio" name="relocate" value="yes" className="text-primary" />
                              <span className="text-sm">Yes</span>
                            </label>
                            <label className="flex items-center space-x-2">
                              <input type="radio" name="relocate" value="no" className="text-primary" />
                              <span className="text-sm">No</span>
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Consent */}
                    <div className="space-y-4">
                      <div className="flex items-start space-x-2">
                        <Checkbox id="consent" className="mt-1" />
                        <Label htmlFor="consent" className="text-sm text-muted-foreground leading-relaxed">
                          I consent to the processing of my personal data for recruitment purposes and agree to the{" "}
                          <Link to="/privacy" className="text-primary hover:text-primary-hover">
                            Privacy Policy
                          </Link>
                        </Label>
                      </div>

                      <div className="flex items-center space-x-2">
                        <Checkbox id="updates" />
                        <Label htmlFor="updates" className="text-sm text-muted-foreground">
                          I would like to receive updates about similar job opportunities
                        </Label>
                      </div>
                    </div>

                    {/* Submit Button */}
                    <div className="pt-6">
                      <Button type="submit" variant="hero" size="lg" className="w-full">
                        Submit Application
                      </Button>
                      <p className="text-xs text-muted-foreground text-center mt-2">
                        By submitting this application, you agree to our terms and conditions
                      </p>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Job Summary */}
              <Card className="border-0 shadow-soft">
                <CardHeader>
                  <CardTitle className="text-lg">Job Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center text-white text-lg">
                      {job.logo}
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground">{job.title}</h3>
                      <p className="text-sm text-muted-foreground">{job.company}</p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4 mr-2" />
                      {job.location}
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <DollarSign className="h-4 w-4 mr-2" />
                      {job.salary}
                    </div>
                  </div>

                  <Badge variant="secondary">{job.type}</Badge>
                </CardContent>
              </Card>

              {/* Application Tips */}
              <Card className="border-0 shadow-soft">
                <CardHeader>
                  <CardTitle className="text-lg">Application Tips</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-muted-foreground">
                      Tailor your resume to highlight relevant experience
                    </p>
                  </div>
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-muted-foreground">
                      Write a compelling cover letter that shows your enthusiasm
                    </p>
                  </div>
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-muted-foreground">
                      Double-check all information before submitting
                    </p>
                  </div>
                  <div className="flex items-start space-x-2">
                    <CheckCircle className="h-4 w-4 text-success mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-muted-foreground">
                      Follow up within a week if you don't hear back
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Application Status */}
              <Card className="border-0 shadow-soft">
                <CardHeader>
                  <CardTitle className="text-lg">What Happens Next?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="text-sm">
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="font-medium">Application Review</span>
                    </div>
                    <p className="text-muted-foreground text-xs ml-4">
                      We'll review your application within 2-3 business days
                    </p>
                  </div>
                  
                  <div className="text-sm">
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="w-2 h-2 bg-muted rounded-full"></div>
                      <span className="font-medium">Phone/Video Interview</span>
                    </div>
                    <p className="text-muted-foreground text-xs ml-4">
                      Initial screening call with our HR team
                    </p>
                  </div>
                  
                  <div className="text-sm">
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="w-2 h-2 bg-muted rounded-full"></div>
                      <span className="font-medium">Technical Interview</span>
                    </div>
                    <p className="text-muted-foreground text-xs ml-4">
                      Technical assessment with the engineering team
                    </p>
                  </div>
                  
                  <div className="text-sm">
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="w-2 h-2 bg-muted rounded-full"></div>
                      <span className="font-medium">Final Decision</span>
                    </div>
                    <p className="text-muted-foreground text-xs ml-4">
                      We'll make our final decision and get back to you
                    </p>
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

export default ApplyJob;