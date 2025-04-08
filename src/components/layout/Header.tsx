"use client";

import * as React from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface NavItem {
  title: string;
  url: string;
  items?: NavItem[];
}

interface HeaderProps {
  logo: {
    url: string;
    src: string;
    alt: string;
    title: string;
  };
  navigationItems: NavItem[];
  auth: {
    login: {
      text: string;
      url: string;
    };
    signup: {
      text: string;
      url: string;
    };
  };
}

const Header: React.FC<HeaderProps> = ({
  logo = {
    url: "/",
    src: "/logo.svg",
    alt: "Logo",
    title: "Company",
  },
  navigationItems = [
    { title: "For You", url: "/for-you" },
    { title: "Providers", url: "/providers" },
    { title: "Resources", url: "/resources" },
  ],
  auth = {
    login: { text: "Log in", url: "/login" },
    signup: { text: "Sign up", url: "/signup" },
  },
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto">
        <nav className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link href={logo.url} className="flex items-center">
              <Image src={logo.src} width={32} height={32} alt={logo.alt} className="mr-0.5" />
              <span className="text-lg font-semibold text-foreground -ml-0.5">{logo.title}</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:gap-6">
            {navigationItems.map((item) => (
              <Link
                key={item.title}
                href={item.url}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                {item.title}
              </Link>
            ))}
          </div>

          {/* Auth Buttons - Now visible on all screens */}
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm" asChild className="hidden sm:inline-flex">
              <Link href={auth.login.url}>{auth.login.text}</Link>
            </Button>
            <Button size="sm" asChild>
              <Link href={auth.signup.url}>{auth.signup.text}</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="ml-2 md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden">
            <div className="space-y-4 px-4 pb-4">
              {navigationItems.map((item) => (
                <Link
                  key={item.title}
                  href={item.url}
                  className="block text-base font-medium text-foreground hover:text-primary"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header; 