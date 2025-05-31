import { useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import BannerAndNavigation from "~/components/ui/navigation";
import { Outlet } from "react-router";
import { ChevronLeft, ChevronRight } from "lucide-react";

const projectRoutes = [
    { path: "suiteaurora", label: "Suite Aurora" },
    { path: "gidoc", label: "Gidoc" },
    { path: "sfm", label: "SFM" },
];

export default function Folio() {
    const location = useLocation();
    const navigate = useNavigate();
    const currentPath = location.pathname.split("/").pop();
    const currentIndex = projectRoutes.findIndex((p) => p.path === currentPath);

    const [prevPath, setPrevPath] = useState(location.pathname);
    const [direction, setDirection] = useState(0); // -1: gauche, +1: droite

    useEffect(() => {
        const prevIndex = projectRoutes.findIndex((p) => p.path === prevPath.split("/").pop());
        const nextIndex = currentIndex;
        setDirection(nextIndex > prevIndex ? 1 : -1);
        setPrevPath(location.pathname);
    }, [location.pathname]);

    const goTo = (targetIndex: number) => {
        const nextPath = projectRoutes[targetIndex].path;
        navigate(`/folio/${nextPath}`);
    };

    const goPrev = () => goTo((currentIndex - 1 + projectRoutes.length) % projectRoutes.length);
    const goNext = () => goTo((currentIndex + 1) % projectRoutes.length);

    return (
        <div className="flex">
            <div className="max-w-4xl mx-auto p-6 pt-[9rem] w-full">
                <BannerAndNavigation />

                {/* Flèches en mobile */}
                {currentIndex !== -1 && (
                    <div className="md:hidden flex justify-between items-center mb-6 px-4">
                        <button
                            onClick={goPrev}
                            aria-label="Projet précédent"
                            className="p-3 bg-white rounded-full shadow-md text-gray-600 hover:text-blue-600 hover:shadow-lg transition duration-300 ease-in-out"
                        >
                            <ChevronLeft size={24} />
                        </button>

                        <span className="font-semibold text-gray-900 text-lg tracking-wide">
                            {projectRoutes[currentIndex].label}
                        </span>

                        <button
                            onClick={goNext}
                            aria-label="Projet suivant"
                            className="p-3 bg-white rounded-full shadow-md text-gray-600 hover:text-blue-600 hover:shadow-lg transition duration-300 ease-in-out"
                        >
                            <ChevronRight size={24} />
                        </button>
                    </div>
                )}

                {/* Animation entre projets */}
                <div className="space-y-6 max-w-4xl mx-auto relative">
                    <Outlet />
                </div>
            </div>
        </div>
    );
}
