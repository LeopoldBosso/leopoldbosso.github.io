import { motion } from "framer-motion";

const experience = {
    title: "Suite SFM",
    period: "2020 - Aujourd’hui",
    description: `Suite logicielle destinée à la gestion financière des municipalités québécoises. 
                          Malgré un design vieillissant, elle reste une référence grâce à son architecture métier, 
                          qui permet sa réutilisation dans Aurora.`,
    roles: [
        "Scrum Master & Facilitateur",
        "Lien avec la direction et objectifs de l’équipe",
        "Analyste et développeur en R&D"
    ],
};

export default function sfm() {
    return (
        <motion.div
            className="rounded-2xl overflow-hidden shadow-lg bg-white border border-gray-200 p-4 scroll-mt-98"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
        >
            <h2 className="text-xl font-bold text-blue-800 mb-2">{experience.title}</h2>
            <p className="text-gray-600 text-sm mb-2">{experience.period}</p>
            <p className="text-gray-700">{experience.description}</p>
            <ul className="mt-3 text-gray-700 list-disc pl-5">
                {experience.roles.map((role, i) => (
                    <li key={i}>{role}</li>
                ))}
            </ul>
        </motion.div>
    );
}