import { Link } from "react-router-dom";
import { Home, Briefcase, File } from "lucide-react";
import { motion } from "framer-motion";
import * as Icons from "lucide-react";

interface LinkPage {
  icon: React.ComponentType<{ className?: string }>;
  link: string;
  titlePage: string;
}

interface BannerAndNavigationProps {
  bannerTitle?: string;
  linkPages: LinkPage[];
  isScrolled: boolean;
}


type IconType = React.ComponentType<{ className?: string }>;

const Icon = ({ icon: Icon }: { icon: IconType }) => {
  return <Icon className="w-5 h-5" />;
};


const BannerAndNavigation: React.FC<BannerAndNavigationProps> = ({ bannerTitle, linkPages, isScrolled }) => {
  return (
    <div className="print:hidden fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl z-50">
      {/* Bannière animée */}
      {bannerTitle && (
        <motion.section
          animate={{ height: isScrolled ? "6rem" : "16rem" }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="relative w-full rounded-2xl overflow-hidden shadow-lg bg-white"
        >
          {/* Texte */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 flex items-center justify-center z-20"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {bannerTitle}
            </h1>
          </motion.div>
        </motion.section>
      )}

      {/* Navigation */}
      <motion.nav
        className="mt-2 bg-gray-100 shadow-xl shadow-gray-500/30 px-6 py-3 rounded-xl flex justify-center items-center"
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.1 }}
      >
        <div className="flex space-x-6">
          <Link to="/" className="flex items-center gap-2 text-gray-800 hover:text-blue-600">
            <Home className="w-5 h-5" />
            Accueil
          </Link>
          {linkPages.map((page) => (
            <Link to={`/${page.link}`} className="flex items-center gap-2 text-gray-800 hover:text-blue-600">
              <Icon icon={page.icon} />
              {page.titlePage}
            </Link>
          ))}
        </div>
      </motion.nav>
    </div>
  );
};

export default BannerAndNavigation;
