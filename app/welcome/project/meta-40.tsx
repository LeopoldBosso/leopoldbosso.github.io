import { motion } from "framer-motion";

const experience = {
    title: "META 4.0",
    period: "2018 - 2020",
    description: `Logiciel dédié à la production manufacturière aérospatiale, 
                          facilitant la saisie rapide des données de production. Il couvrait toutes les étapes 
                          de fabrication, du découpage des matières premières au contrôle final des pièces. 
                          Remplacé ultérieurement par une solution commercialisable.`,
    roles: [
        "Analyste et développeur R&D",
        "Support client",
        "Maintenance et correction de bugs",
        "Gestion des rapports"
    ],
};

export default function meta40() {
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