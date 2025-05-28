import { motion } from "framer-motion";
import { School, GraduationCap, HomeIcon, File, Briefcase, Home } from "lucide-react";
import { useEffect, useState } from "react";
import BannerAndNavigation from "~/components/ui/navigation";
import { Outlet } from "react-router";
import { Link } from "react-router-dom";

const experiences = ["Suite Aurora", "Logiciel GIDOC", "Suite SFM", "META 4.0", "Anciens postes"];

function normalizeId(title: string) {
    return title.toLowerCase().replace(/[^\w\s-]/g, "").replace(/\s+/g, "-");
}

export default function Folio() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="flex">
            <aside className="fixed top-[22rem] left-0 w-50 h-auto bg-gray-100 shadow-xl shadow-gray-500/30 px-6 py-3 rounded-xl z-40 print:hidden hidden md:block">
                <nav className="space-y-2">
                    {experiences.map((exp) => (
                        <Link
                            key={exp}
                            to={normalizeId(exp)}
                            className="block w-full text-left text-sm text-gray-800 hover:text-blue-600"
                        >
                            {exp}
                        </Link>
                    ))}
                </nav>
            </aside>
            <div className="max-w-4xl mx-auto p-6">
                <BannerAndNavigation
                    bannerTitle="Mes projets"
                    linkPages={[
                        { icon: School, link: "education", titlePage: "Mes études et certificats" },
                        { icon: Briefcase, link: "workexperience", titlePage: "Mes expériences professionnelles" },
                        { icon: File, link: "cvlbgraph", titlePage: "Mon CV" }
                    ]}
                    isScrolled={isScrolled}
                />

                <div className="pt-[22rem]">
                    <div className="space-y-6 max-w-4xl mx-auto">
                        <Outlet /> {/* Ici on injecte la page correspondant à la route */}
                    </div>
                </div>
            </div>
        </div>
    );
}