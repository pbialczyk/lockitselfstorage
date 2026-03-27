import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import SEOHead from "@/components/SEOHead";

interface LayoutProps {
  children: ReactNode;
  title?: string;
  description?: string;
  canonical?: string;
  jsonLd?: object;
}

const Layout = ({ children, title, description, canonical, jsonLd }: LayoutProps) => {
  return (
    <>
      <SEOHead title={title} description={description} canonical={canonical} jsonLd={jsonLd} />
      <Navbar />
      <main className="pt-16 lg:pt-20">
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
