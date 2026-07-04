import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import BannerAndNavigation from "~/components/ui/navigation";
import { Book, School, File } from "lucide-react";
import {experiences} from "~/data/experiences"


export default function Workexperience() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [expandedIndexes, setExpandedIndexes] = useState<number[]>([]);

    const toggleExpansion = (index: number) => {
        setExpandedIndexes((prev) =>
            prev.includes(index)
                ? prev.filter((i) => i !== index) // Fermer la carte
                : [...prev, index]               // Ouvrir la carte
        );
    };


    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);


    return (
        <div className="max-w-4xl mx-auto p-6 pt-[9rem]">
            <BannerAndNavigation />
            <div className="space-y-6">
                {experiences.map((exp, index) => (
                    <motion.div
                        key={index}
                        layout
                        transition={{ layout: { duration: 0.2, ease: "easeInOut" } }}
                        className="rounded-2xl overflow-hidden shadow-lg bg-white border border-gray-200 print:break-inside-avoid"
                    >
                        <div className="md:flex">
                            <img src={exp.image} alt={exp.name} className="w-full md:w-48 max-h-40 object-contain flex-shrink-0 bg-gray-100" />
                            <div className="p-4 flex-1">
                                <h2 className="text-xl font-bold text-gray-800">{exp.name}</h2>
                                <p className="text-gray-600">{exp.role}</p>
                                <p className="text-sm text-gray-500">{exp.date}</p>

                                {expandedIndexes.includes(index) && (
                                    <motion.p
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        className="mt-4 text-gray-700"
                                    >
                                        {exp.description}
                                        {exp.responsabilities && (
                                            <ul className="list-disc list-inside pl-6 text-gray-600">
                                                {exp.responsabilities.map((item, i) => (
                                                    <li key={i}>{item}</li>
                                                ))}
                                            </ul>
                                        )}
                                    </motion.p>
                                )}
                                {(exp.description || exp.responsabilities?.length > 0) && (
                                    <button
                                        className="mt-4 text-blue-600 hover:underline"
                                        onClick={() => toggleExpansion(index)}
                                    >
                                        {expandedIndexes.includes(index) ? "Réduire" : "En savoir plus"}
                                    </button>
                                )}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
