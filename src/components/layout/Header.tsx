import { Button } from "@/components/ui/button";
import { Search, Menu, User, Bell } from "lucide-react";
import { Link } from "react-router-dom";
import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <div className="h-8 w-8 bg-gradient-primary rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">H</span>
          </div>
          <span className="text-xl font-bold text-foreground">HireFlow</span>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-sm font-medium hover:text-primary transition-colors">
            Find Jobs
          </Link>
          <Link to="/companies" className="text-sm font-medium hover:text-primary transition-colors">
            Companies
          </Link>
          <Link to="/post-job" className="text-sm font-medium hover:text-primary transition-colors">
            Post a Job
          </Link>
          <Link to="/salary" className="text-sm font-medium hover:text-primary transition-colors">
            Salary Guide
          </Link>
        </nav>

        {/* Right side actions */}
        <div className="flex items-center space-x-4">
          {/* Search button for mobile */}
          <Button variant="ghost" size="icon" className="md:hidden">
            <Search className="h-4 w-4" />
          </Button>

          {/* Notifications */}
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="h-4 w-4" />
            <span className="absolute -top-1 -right-1 h-2 w-2 bg-primary rounded-full"></span>
          </Button>

          {/* Auth buttons */}
          <div className="hidden md:flex items-center space-x-2">
            <Link to="/signin">
              <Button variant="ghost">Sign In</Button>
            </Link>
            <Link to="/register">
              <Button variant="default">Sign Up</Button>
            </Link>
          </div>

          {/* Profile for mobile */}
          <Button variant="ghost" size="icon" className="md:hidden">
            <User className="h-4 w-4" />
          </Button>

          {/* Mobile menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden" aria-label="Open menu">
                <Menu className="h-4 w-4" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
              </SheetHeader>
              <nav className="mt-6 space-y-3">
                <Link to="/" className="block text-foreground hover:text-primary transition-colors">Find Jobs</Link>
                <Link to="/post-job" className="block text-foreground hover:text-primary transition-colors">Post a Job</Link>
                <Link to="/signin" className="block text-foreground hover:text-primary transition-colors">Sign In</Link>
                <Link to="/register" className="block text-foreground hover:text-primary transition-colors">Sign Up</Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;