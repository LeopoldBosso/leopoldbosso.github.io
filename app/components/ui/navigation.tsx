import { Link } from "react-router-dom";
import { Home, Briefcase, File } from "lucide-react";
import { motion } from "framer-motion";

interface BannerAndNavigationProps {
  bannerTitle: string;
  bannerImage: string;
  titlePage: string;
  linkPage: string;
  isScrolled:boolean;
}

const BannerAndNavigation: React.FC<BannerAndNavigationProps> = ({ bannerTitle, bannerImage, titlePage, linkPage,isScrolled }) => {
  return (
    <div className="fixed top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl z-50">
      {/* Bannière animée */}
      <motion.section
        animate={{ height: isScrolled  ? "6rem" : "16rem" }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        className="relative w-full rounded-2xl overflow-hidden shadow-lg bg-black"
      >
        {/* Image de fond */}
        <img
          src={bannerImage}
          alt="Bannière"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 z-10" />
        {/* Texte */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0 flex items-center justify-center z-20"
        >
          <h1 className="text-white text-2xl md:text-3xl font-bold text-center drop-shadow">
            {bannerTitle}
          </h1>
        </motion.div>
      </motion.section>

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
          <Link to={linkPage} className="flex items-center gap-2 text-gray-800 hover:text-blue-600">
            <Briefcase className="w-5 h-5" />
            {titlePage}
          </Link>
          <Link to="/cvlbgraph" className="flex items-center gap-2 text-gray-800 hover:text-blue-600">
            <File className="w-5 h-5" />
            Mon CV
          </Link>
        </div>
      </motion.nav>
    </div>
  );
};

export default BannerAndNavigation;
