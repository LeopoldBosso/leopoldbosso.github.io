import { Link } from "react-router";
import { Button } from "app/components/ui/button";
import { Folder, Mail, File } from "lucide-react";
import { motion } from "framer-motion";
import BannerAndNavigation from "~/components/ui/navigation";

const projects = [
  {
    name: "Portfolio Suite Aurora",
    description: "Cette page vous présentera le projet Aurora et mes implications.",
    link: "folio",
  },
  {
    name: "Portfolio GIDOC",
    description: "Gidoc est un API de préparation de rapport decentralisé, découvrez mes implications.",
    link: "folio/gidoc",
  },
  {
    name: "Portfolio SFM",
    description: "Ici vous trouverez mes débuts chez PG Solutions.",
    link: "folio/sfm",
  },
  {
    name: "Portfolio Meta 4.0",
    description: "Ma première experience au Canada.",
    link: "folio/meta-40",
  }
];


export function Welcome() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-white to-slate-100 flex flex-col justify-center items-center p-8 pt-[9rem]">
      <BannerAndNavigation />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-xl"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Bienvenue sur ma page!
        </h1>
        <p className="text-slate-600 text-lg mb-6 leading-relaxed">
          Je suis Léopold Bosso. J’ai toujours évolué dans des environnements où l’organisation, la structure et la capacité à faire avancer les choses sont essentielles. 
          Au fil de mon parcours, j’ai appris à comprendre rapidement les enjeux, à rassembler les intervenants autour d’un objectif commun et à transformer des idées en actions concrètes.
          <br /><br />
          J’ai développé une approche orientée vers la coordination, l’analyse et l’opérationnel. J’aime clarifier, organiser et fluidifier. J’aime créer des ponts entre les personnes, les processus et les objectifs. 
          Voir un projet prendre forme, une équipe gagner en efficacité ou une organisation avancer avec plus de cohérence est ce qui me motive profondément.
          <br /><br />
          Ma polyvalence me permet de saisir rapidement les dynamiques et d’intervenir là où il faut, quand il faut. Je m’adapte vite, j’apprends vite, et je prends naturellement ma place dans les rôles où il faut structurer, coordonner, décider et soutenir la performance.
          <br /><br />
          Aujourd’hui, je m’investis dans des fonctions où l’organisation et les opérations sont centrales. Des rôles qui demandent vision, rigueur, communication et constance. 
          Je suis prêt à relever de nouveaux défis et à mettre pleinement à profit ma capacité d’analyse, ma polyvalence et mon sens de la coordination pour soutenir la performance et la réussite collective.
        </p>
        <p className="text-slate-600 text-lg mb-6"> 
          Retrouvez ici mon CV, mes projets et mes coordonnées.     
        </p>
        <p className="text-slate-600 text-lg mb-6">
          Ce site est construit avec <strong>React</strong>, stylisé avec <strong>Tailwind CSS</strong> et utilise <strong>Lucide</strong> pour les icônes.
        </p>

      </motion.div>

      {/* Section Étude et travail */}
      <section className="mt-20 w-full max-w-4xl">
        <h2 className="text-3xl font-semibold mb-6 text-center">Mes études et experiences</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="p-6 rounded-2xl shadow-md bg-white border"
          >
            <h3 className="text-xl font-medium mb-2 flex items-center gap-2">
              <Folder className="w-5 h-5" /> Études et diplômes
            </h3>
            <p className="text-sm text-slate-600 mb-3">
              Cette page vous présentera mes différents diplômes, certificat et école
            </p>
            <Link to="/education" className="text-sm text-blue-600 hover:underline">Voir les études</Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="p-6 rounded-2xl shadow-md bg-white border"
          >
            <h3 className="text-xl font-medium mb-2 flex items-center gap-2">
              <Folder className="w-5 h-5" /> Expériences et employeurs
            </h3>
            <p className="text-sm text-slate-600 mb-3">
              Vous trouverez ici mes expériences et employeurs qui m'ont donnés ma chance.
            </p>
            <Link to="/workexperience" className="text-sm text-blue-600 hover:underline">Voir les expériences</Link>
          </motion.div>
        </div>
      </section>

      {/* Section Projets */}
      <section className="mt-20 w-full max-w-4xl">
        <h2 className="text-3xl font-semibold mb-6 text-center">Mes Projets</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="p-6 rounded-2xl shadow-md bg-white border"
            >
              <h3 className="text-xl font-medium mb-2 flex items-center gap-2">
                <Folder className="w-5 h-5" /> {project.name}
              </h3>
              <p className="text-sm text-slate-600 mb-3">
                {project.description}
              </p>
              <Link to={`/${project.link}`} className="text-sm text-blue-600 hover:underline">Voir les projets</Link>
            </motion.div>
          ))}
        </div>
      </section>
      <section className="mt-20 w-full max-w-4xl">

        <div className="flex justify-center gap-4">
          <a href="mailto:leopold.bosso@outlook.com">
            {/* <Button className="gap-2 w-38 h-8"> */}
            <Button className="bg-white text-black hover:bg-slate-200 font-medium my-8">
              <Mail className="w-4 h-4" /> Me contacter
            </Button>
          </a>
          {/* <Button className="gap-2 w-38 h-8"> */}
          <Button className="bg-white text-black hover:bg-slate-200 font-medium my-8">
            <nav className="flex items-center gap-2">
              <File className="w-4 h-4"></File>
              <Link to="/cvlbgraph">Voir le CV</Link>
            </nav>
          </Button>
        </div>
      </section>
    </main>
  );
}



