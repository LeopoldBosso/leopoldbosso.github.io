import { Card, CardContent } from "app/components/ui/card";
import { Badge } from "app/components/ui/badge";
import { Mail, Phone, MapPin, Linkedin, HomeIcon, Briefcase, School, Book } from "lucide-react";
import { motion } from "framer-motion";
import BannerAndNavigation from "~/components/ui/navigation";


export default function CVLeopoldBossoStyled() {
  return (
    <div className="max-w-5xl mx-auto p-8 bg-gradient-to-br from-white to-blue-50 space-y-8 ">
        <div className="print:hidden pt-[5rem]"/>
        <BannerAndNavigation />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="max-w-5xl mx-auto p-8 bg-gradient-to-br from-white to-blue-50 space-y-8">

            {/* Header */}
            <div className="flex flex-col items-center text-center">
              <h1 className="text-4xl font-extrabold text-blue-900">Léopold Bosso</h1>
              <div className="mt-4 flex flex-wrap justify-center gap-4 text-sm text-blue-700">
                <span className="flex items-center gap-2"><Phone size={16} /> (581) 669-1018</span>
                <a href="mailto:leopold.bosso@outlook.com">
                  <span className="flex items-center gap-2"><Mail size={16} /> leopold.bosso@outlook.com</span>
                </a>
                <a href="https://linkedin.com/in/lbosso">
                  <span className="flex items-center gap-2"><Linkedin size={16} /> linkedin.com/in/lbosso</span>
                </a>
                <span className="flex items-center gap-2"><MapPin size={16} /> Lévis, QC</span>
              </div>
            </div>

            {/* Profil */}
            <Card className="no-print shadow-md">
              <CardContent className="p-6 space-y-2">
                <h2 className="text-2xl font-semibold text-blue-800">Profil professionnel</h2>
                <p className="text-gray-700">
                  Professionnel polyvalent orienté vers l'organisation, la coordination et l'amélioration de la performance. 
                  Avec plus de 6 ans d'expérience dans des environnements exigeants, j'ai développé une approche centrée sur la structure, l'analyse et la fluidité des processus.
                  <br className="print:absolute print:top-0 print:left-0 print:hidden" /><br />
                  J'aime clarifier les enjeux, rassembler les intervenants et transformer les objectifs en actions concrètes. 
                  Adaptable et orienté résultats, je mobilise ma vision globale, ma capacité d'analyse et mon sens de la coordination pour soutenir la performance organisationnelle et contribuer à l'atteinte des objectifs stratégiques.
                  <br className="print:absolute print:top-0 print:left-0 print:hidden"/><br />
                  Prêt à relever de nouveaux défis, je m'investis pleinement dans les rôles où la rigueur, la communication et la constance sont essentielles.
                </p>
              </CardContent>
            </Card>


            {/* Compétences */}
            <Card className="no-print shadow-md">
              <CardContent className="p-6">
                <h2 className="text-2xl font-semibold text-blue-800 mb-4">Compétences clés</h2>
                <div className="flex flex-wrap gap-3">
                  {['Coordination d\'équipes','Organisation et structuration des processus','Gestion de projet',
                  'Analyse organisationnelle','Amélioration continue','Communication et collaboration','Leadership transversal',
                  'Facilitation Agile','Scrum','Kanban','Suite Office','Français','Anglais'
                  ].map(skill => (
                    <Badge key={skill} variant="outline" className="bg-blue-100 text-blue-800 border-blue-200">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Expérience */}
            <Card className="no-print shadow-md">
              <CardContent className="p-6 space-y-4">
                <h2 className="text-2xl font-semibold text-blue-800">Expérience professionnelle</h2>

                <div>
                  <h3 className="text-lg font-bold">Chantier Davie - Lévis, QC</h3>
                  <p className="italic">Contremaître - Programme des frégates | 2025 - aujourd'hui</p>
                  <ul className="list-disc list-inside text-gray-700">
                    <li>Supervision des équipes de production dans le cadre du Programme des frégates.</li>
                    <li>Planification et organisation des opérations quotidiennes pour assurer l'avancement des travaux.</li>
                    <li>Communication des priorités, suivi de l'exécution et résolution des obstacles opérationnels.</li>
                    <li>Coordination avec les gestionnaires de navire et participation aux réunions de production.</li>
                    <li>Accompagnement des employés, gestion des attentes et soutien au développement des compétences.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-bold">PG Solutions - Québec, QC</h3>
                  <p className="italic">Coordonnateur, Scrum Master R&D | 2022 - 2025</p>
                  <ul className="list-disc list-inside text-gray-700">
                    <li>Coordination d'équipes multidisciplinaires et facilitation Agile (Scrum).</li>
                    <li>Structuration des processus de livraison et amélioration de la performance opérationnelle.</li>
                    <li>Pilotage de projets majeurs : Aurora, GIDOC, SFM.</li>
                    <li>Clarification des besoins, alignement des intervenants et suivi des objectifs.</li>
                  </ul>
                  <p className="italic mt-2">Scrum Master & Analyste Développeur R&D | 2020 - 2022</p>
                  <ul className="list-disc list-inside text-gray-700">
                    <li>Analyse des besoins et soutien à la prise de décision.</li>
                    <li>Accompagnement des équipes et mentorat.</li>
                    <li>Contribution à la cohérence organisationnelle et à la fluidité des processus.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-bold">APN Global - Québec, QC</h3>
                  <p className="italic">Analyste Développeur R&D | 2018 - 2020</p>
                  <ul className="list-disc list-inside text-gray-700">
                    <li>Analyse et optimisation des processus de production.</li>
                    <li>Contribution à l'évolution de l'outil META 4.0.</li>
                    <li>Support aux équipes et coordination des besoins opérationnels.</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-bold">Expériences antérieures - France | 2001 - 2012</h3>
                  <p className="font-bold text-gray-700">Marine Nationale</p>
                  <ul className="list-disc list-inside text-gray-700">
                    <li>Gestion de personnel et leadership de section.</li>
                    <li>Planification opérationnelle et organisation des ressources.</li>
                    <li>Coordination d'activités critiques dans des environnements exigeants.</li>
                  </ul>
                  <p className="font-bold text-gray-700">Adjoint électricien Norauto (centre auto)</p>
                  <ul className="list-disc list-inside text-gray-700">
                    <li>Gestion opérationnelle et soutien aux activités du centre.</li>
                    <li>Organisation des interventions et coordination des besoins clients.</li>
                  </ul>
                  <p className="font-bold text-gray-700">Manager - McDonald's </p>
                  <ul className="list-disc list-inside text-gray-700">
                    <li>Gestion de restaurant et supervision des équipes.</li>
                    <li>Planification des ressources et gestion des stocks.</li>
                    <li>Optimisation des opérations quotidiennes.</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            {/* Formation */}
            <Card className="no-print shadow-md">
              <CardContent className="p-6">
                <h2 className="text-2xl font-semibold text-blue-800 mb-2">Formation académique</h2>
                <ul className="list-disc list-inside text-gray-700">
                  <li>Certificat PSM1 - Scrum.org | 2024</li>
                  <li>Maîtrise en Informatique - UBO & UQAC | 2018</li>
                  <li>Licence (Baccalauréat) - Lycée Faa'a & UBO | 2016</li>
                  <li>Baccalauréat électrotechnique (France) - Lycée Gardanne | 2000</li>
                </ul>
              </CardContent>
            </Card>

            {/* PROJETS MARQUANTS */}
            <Card className="no-print shadow-md">
              <CardContent className="p-6 space-y-4">
                <h2 className="text-2xl font-semibold text-blue-800">Projets marquants</h2>
                <div>
                  <h3 className="text-lg font-bold">Suite Aurora</h3>
                  <p className="italic">Coordination d'équipe, structuration des processus de livraison et
                     facilitation Agile dans le cadre de la réécriture de logiciels financiers utilisés par plusieurs municipalités.</p>
                </div>

                <div>
                  <h3 className="text-lg font-bold">GIDOC</h3>
                  <p className="italic"> Contribution à la conception et à l'intégration d'un générateur automatisé de documents, 
                    utilisé dans les modules de paie et les logiciels légataires.</p>
                </div>

                <div>
                  <h3 className="text-lg font-bold">SFM</h3>
                  <p className="italic">Soutien au maintien et à la migration d'un logiciel financier municipal vers la suite Aurora.</p>
                </div>

                <div>
                  <h3 className="text-lg font-bold">META 4.0 </h3>
                  <p className="italic">Participation à l'évolution d'un outil de gestion de production pour l'industrie aérospatiale.</p>
                </div>
              </CardContent>
            </Card>

            {/* Centres d'intérêt */}
            <Card className="no-print shadow-md">
              <CardContent className="p-6">
                <h2 className="text-2xl font-semibold text-blue-800 mb-2">Centres d'intérêt</h2>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                 <li>Organisation, performance et gestion humaine.</li>
                 <li>Littérature, cinéma et culture.</li>
                 <li>Vie de famille et interactions sociales.</li>              
                </ul>
              </CardContent>
            </Card>
          </div>
        </motion.div>
         {/* Bouton Imprimer (visible seulement à l'écran) */}
        <div className="print:absolute print:top-0 print:left-0 print:hidden flex justify-end mb-4">
          <button
            onClick={() => window.print()}
            className="px-4 py-2 text-sm font-semibold bg-gray-50 text-blue-800 rounded-md shadow hover:bg-gray-200">
            Imprimer
          </button>
        </div>
      </div>
  );
}

