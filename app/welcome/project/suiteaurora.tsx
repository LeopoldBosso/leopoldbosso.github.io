import { motion } from "framer-motion";

const experience = {
  title: "Suite Aurora",
  period: "2021 - Aujourd’hui",
  description: `Projet majeur chez PG Solutions visant à fournir une suite financière complète. 
                Mon équipe est en charge de la réécriture de SFM pour plusieurs grandes villes du Québec, 
                tout en enrichissant cette nouvelle version. Nous travaillons actuellement sur la partie Paie & RH 
                et nous préparons l’arrivée de nouveaux projets. Actuellement, 4 projets majeurs exploitent Aurora, 
                dont le dernier en date concerne un module de lecture de factures reposant sur l’intelligence artificielle.`,
  roles: [
    "Coordonnateur",
    "Scrum Master",
    "Gestionnaire de projet",
    "Facilitateur d’équipe",
    "Préparateur de projets additionnels"
  ],
};

export default function suiteaurora() {
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