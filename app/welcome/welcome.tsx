import { Link } from "react-router";
import { Button } from "app/components/ui/button";
import { Folder, Mail, File  } from "lucide-react";
import { motion } from "framer-motion";
import BannerAndNavigation from "~/components/ui/navigation";

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
          Bienvenue sur ma page de présentation !
        </h1>
        <p className="text-slate-600 text-lg mb-6">
          Je suis Léopold Bosso, gestionnaire et développeur passionné. Retrouvez ici mon CV, mes projets et mes coordonnées.
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
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="p-6 rounded-2xl shadow-md bg-white border"
          >
            <h3 className="text-xl font-medium mb-2 flex items-center gap-2">
              <Folder className="w-5 h-5" /> Portfolio Suite Aurora
            </h3>
            <p className="text-sm text-slate-600 mb-3">
              Cette page vous présentera le projet Aurora et mes implications.
            </p>
            <Link to="/folio" className="text-sm text-blue-600 hover:underline">Voir les projets</Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="p-6 rounded-2xl shadow-md bg-white border"
          >
            <h3 className="text-xl font-medium mb-2 flex items-center gap-2">
              <Folder className="w-5 h-5" /> Portfolio Suite SFM
            </h3>
             <p className="text-sm text-slate-600 mb-3">
              Cette page vous présentera le projet SFM et mes implications.
            </p>
            <Link to="/folio/suite-sfm" className="text-sm text-blue-600 hover:underline">Voir les projets</Link>
          </motion.div>
        </div>
      </section>
      <section className="mt-20 w-full max-w-4xl">

        <div className="flex justify-center gap-4">
          <a  href="mailto:leopold.bosso@outlook.com">
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



