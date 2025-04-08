import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Attune - Find Your Perfect Therapist Match",
  description: "Connect with licensed therapists and counselors across Canada",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const headerProps = {
    logo: {
      url: "/",
      src: "/images/Attune logo 2.svg",
      alt: "Attune Logo",
      title: "Attune",
    },
    navigationItems: [
      { title: "For You", url: "/for-you" },
      { title: "Providers", url: "/providers" },
      { title: "Resources", url: "/resources" },
    ],
    auth: {
      login: { text: "Log in", url: "/login" },
      signup: { text: "Sign up", url: "/signup" },
    },
  };

  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <Header {...headerProps} />
        <main className="flex min-h-screen flex-col space-y-0">
          {children}
        </main>
        <Footer companyName="Attune" logoSrc="/images/Attune logo 2.svg" />
        <Toaster position="bottom-right" />
      </body>
    </html>
  );
}
