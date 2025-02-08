import { ReactNode } from "react";
import GuestNavbar from "@/components/GuestNavbar";
import Footer from "@/components/Footer";

interface GuestLayoutProps {
  children: ReactNode;
}

const GuestLayout: React.FC<GuestLayoutProps> = ({ children }) => {
  return (

    <div className="flex flex-col min-h-screen bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100">
      {/* Header with Navbar */}
      <header>
        <GuestNavbar />
      </header>

      {/* Main Content */}
      <main className="flex-grow bg-gray-100 dark:bg-gray-900 py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {children}
        </div>
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default GuestLayout;

