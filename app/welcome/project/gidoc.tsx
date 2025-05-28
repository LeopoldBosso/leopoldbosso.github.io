import { motion } from "framer-motion";

const experience = {
  title: "Logiciel GIDOC",
  period: "2020 - Aujourd’hui",
  description: `Outil permettant de générer une grande quantité de documents, 
                          comme les comptes de taxes des municipalités. Son noyau est conçu pour être compatible avec 
                          tous les logiciels PG Solutions, notamment Aurora, où il génère des documents essentiels 
                          comme les talons de paie et les relevés fiscaux.Outil permettant de générer une grande quantité de documents, 
                          comme les comptes de taxes des municipalités. Son noyau est conçu pour être compatible avec 
                          tous les logiciels PG Solutions, notamment Aurora, où il génère des documents essentiels 
                          comme les talons de paie et les relevés fiscaux.`,
  roles: [
    "Analyste développeur de solutions",
    "Mentor GIDOC & Fastreport",
    "Mentor en programmation parallèle",
    "Formateur et facilitateur d’intégration"
  ],
};

export default function gidoc() {
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