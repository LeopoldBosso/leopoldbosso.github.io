import { motion } from "framer-motion";
import { School, GraduationCap, HomeIcon, File, Briefcase , Home } from "lucide-react";
import { Link } from "react-router";
import { Button } from "~/components/ui/button";
import { useEffect, useState } from "react";
import BannerAndNavigation from "~/components/ui/navigation";

const schools = [
    {
        name: "Université de Faa’a - Tahiti",
        name2: "Université de Bretagne Occidentale (UBO) - France",
        degree: "Baccalauréat (Licence) – 2016",
        image: "https://www.tahiti-infos.com/photo/art/default/36431291-32541501.jpg?v=1565747204", // Remplace par une vraie image
        image2: "https://smapse.com/storage/2019/02/converted/660_464_universite-de-bretagne-occidentale-ubo-13.webp",
    },
    {
        name: "Université de Bretagne Occidentale (UBO) - France",
        name2: "Université du Québec à Chicoutimi (UQAC) - Québec",
        degree: "Maîtrise en Informatique – 2018",
        image: "https://smapse.com/storage/2019/02/converted/825_585_universite-de-bretagne-occidentale-ubo-11.webp",
        image2: "https://www.uqac.ca/wp-content/uploads/2023/10/CampusUQACAutomne_CanopéeA21142.jpg",
    },
    {
        name: "Scrum.org",
        degree: "Certificat PSM 1 – 2024",
        image: "/scrum.org.png",
    },
];



export default function Education() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="max-w-4xl mx-auto p-6">
            <BannerAndNavigation
                bannerTitle="Mes études et certificats"
                bannerImage="/diplome.jpg"
                titlePage="Experiences professionnelles"
                linkPage="/workexperience"
                isScrolled = {isScrolled}
            />

            {/* Contenu principal (avec padding compensé) */}
            <div className="pt-[22rem]">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 place-items-center max-w-4xl mx-auto">
                    {schools.map((school, index) => {
                        const isLastOddCard = schools.length % 2 === 1 && index === schools.length - 1;

                        return (
                            <motion.div
                                key={index}
                                className={`border p-4 rounded-lg shadow-md overflow-hidden w-full ${isLastOddCard ? "flex justify-center" : ""
                                    }`}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, delay: index * 0.3 }}
                            >
                                <div className="w-full max-w-md flex flex-col items-center text-center">
                                    {/* Texte au-dessus de l’image */}
                                    <h2 className="underline text-xl font-semibold mb-4 flex items-center gap-2 justify-center">
                                        <GraduationCap className="w-5 h-7 text-green-600" />
                                        {school.degree}
                                    </h2>

                                    {/* Première image */}
                                    <img
                                        src={school.image}
                                        alt={school.name}
                                        className="w-full h-48 object-cover rounded-md"
                                    />

                                    {/* Nom 1 */}
                                    <div className="mt-1 mb-4 flex items-center gap-3 justify-center">
                                        <School className="w-6 h-12 text-blue-600" />
                                        <h3 className="flex items-center gap-2">{school.name}</h3>
                                    </div>

                                    {/* Deuxième image + nom, si dispo */}
                                    {school.image2 && school.name2 && (
                                        <>
                                            <img
                                                src={school.image2}
                                                alt={school.name2}
                                                className="w-full h-48 object-cover rounded-md"
                                            />
                                            <div className="mt-1 mb-4 flex items-center gap-3 justify-center">
                                                <School className="w-6 h-12 text-blue-600" />
                                                <h3 className="flex items-center gap-2">{school.name2}</h3>
                                            </div>
                                        </>
                                    )}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}