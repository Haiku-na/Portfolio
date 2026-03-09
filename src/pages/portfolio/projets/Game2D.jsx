import "../../../index.css";
import Navbar_portfolio from "../../../components/navbar_portfolio";
import React from "react";

export default function Game2D() {
  return (
    <div className="flex flex-col min-h-screen items-center text-white">
      <Navbar_portfolio />

      <div className="w-5/6 flex justify-between py-4">
        <a href="/portfolio/projets/siterecrutement" className="text-white p-3 bg-gray-800 rounded-xl hover:bg-gray-900 hover:text-gray-200">
          Projet précédent
        </a>
        <a href="/portfolio/projets/tamagoshi" className="text-white p-3 bg-gray-800 rounded-xl hover:bg-gray-900 hover:text-gray-200">
          Projet suivant
        </a>
      </div>

      <div className="flex flex-col w-5/6 space-y-12">

        <section className="bg-gray-900 rounded-xl shadow-lg space-y-4">
          <img src="/projets/2Dgame/acceuilJeu2D.png" className="w-full rounded-t-xl max-h-120 object-contain bg-black" alt="3 days to save the world - Accueil" />
          <div className="p-6">
            <h2 className="text-3xl font-bold border-b-2 border-white pb-2">3 Days to Save the World – Jeu 2D Java</h2>
            <p className="leading-relaxed mt-4">
              Développé en Java avec LibGDX, ce jeu d'aventure en 2D plonge le joueur dans un bureau ordinaire où chaque interaction compte.
              Mélangeant gestion de missions quotidiennes et enjeux planétaires, vous devez naviguer entre vos tâches professionnelles et l'invasion alien imminente.
            </p>
          </div>
        </section>

        <section className="bg-gray-900 p-6 rounded-xl shadow-lg space-y-6">
          <h3 className="text-2xl font-semibold border-b border-gray-700">Système de Missions & Stats</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <img src="/projets/2Dgame/missions.png" className="rounded-xl shadow-md border border-gray-700" alt="Interface missions" />
            <div className="space-y-4">
              <p>
                Le gameplay repose sur un équilibre fragile entre trois jauges d'influence qui déterminent le destin de la partie :
                <span className="text-green-400 font-bold"> Alien</span>,
                <span className="text-blue-400 font-bold"> Humain</span> et
                <span className="text-red-400 font-bold"> Flemmard</span>.
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                <li><strong>Missions journalières :</strong> Objectifs spécifiques à remplir chaque jour pour progresser.</li>
                <li><strong>Système de choix :</strong> Dialogues à choix multiples impactant directement vos jauges de réputation.</li>
                <li><strong>Exploration :</strong> Déplacement libre dans les bureaux pour interagir avec les collègues et objets.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-gray-900 p-6 rounded-xl shadow-lg space-y-6">
          <h3 className="text-2xl font-semibold border-b border-gray-700">Mini-Jeux Intégrés</h3>
          <p>Pour progresser et sauver le monde, le joueur doit triompher de plusieurs épreuves d'arcade et de réflexion :</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="space-y-2">
              <img src="/projets/2Dgame/paperPlease.png" className="rounded-lg border border-gray-700 h-48 w-full object-cover" alt="Jeu de filtrage" />
              <p className="text-center text-sm font-semibold text-blue-300">Filtrage (Papers Please style)</p>
            </div>
            <div className="space-y-2">
              <img src="/projets/2Dgame/memory.png" className="rounded-lg border border-gray-700 h-48 w-full object-cover" alt="Jeu de mémoire" />
              <p className="text-center text-sm font-semibold text-green-300">Memory Alien</p>
            </div>
            <div className="space-y-2">
              <img src="/projets/2Dgame/snake.png" className="rounded-lg border border-gray-700 h-48 w-full object-cover" alt="Jeu de snake" />
              <p className="text-center text-sm font-semibold text-red-300">Snake Classique</p>
            </div>
          </div>
        </section>

        <section className="bg-gray-900 p-6 rounded-xl shadow-lg space-y-6">
          <h3 className="text-2xl font-semibold border-b border-gray-700">Dénouements : 3 Fins Possibles</h3>
          <p className="italic text-gray-400">Vos actions et votre loyauté tout au long des 3 jours déterminent l'épilogue :</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gray-800 p-4 rounded-lg border-t-4 border-blue-500 space-y-3">
              <h4 className="text-xl font-bold text-blue-400">Le Héros Humain</h4>
              <p className="text-sm">Vous avez accompli vos missions et repoussé l'influence alien. Les envahisseurs quittent la Terre, et le monde est sauvé grâce à votre détermination.</p>
            </div>

            <div className="bg-gray-800 p-4 rounded-lg border-t-4 border-green-500 space-y-3">
              <h4 className="text-xl font-bold text-green-400">L'Infiltré</h4>
              <p className="text-sm">Séduit par les aliens, vous les avez aidés à envahir la planète. Vous faites désormais partie de leur espèce et régnez à leurs côtés.</p>
            </div>

            <div className="bg-gray-800 p-4 rounded-lg border-t-4 border-red-500 space-y-3">
              <h4 className="text-xl font-bold text-red-400">Le Game Over Flemmard</h4>
              <p className="text-sm">À force de ne rien faire, les aliens ont débarqué sans résistance. Le monde est plongé dans le chaos et vous avez tout perdu par simple paresse.</p>
            </div>
          </div>

          <div className="flex flex-col items-center pt-4">
            <img src="/projets/2Dgame/victoire.png" className="rounded-lg shadow-xl border border-gray-700 md:w-2/3 mb-4" alt="Écran de fin" />
            <a href="https://github.com/Haiku-na/2DGame" target="_blank" className="px-6 py-3 bg-indigo-600 hover:bg-indigo-500 rounded-lg transition font-bold">
              Explorer le code sur GitHub
            </a>
          </div>
        </section>

          <section className="bg-gray-900 p-6 rounded-xl shadow-lg space-y-6">
            <h3 className="text-2xl font-semibold border-b border-gray-700">Stack Technique</h3>
            <ul className="list-disc list-inside space-y-1 text-gray-300">
              <li><strong>Java 17</strong> & Moteur <strong>LibGDX</strong></li>
              <li><strong>LWJGL3</strong> pour le rendu desktop</li>
              <li><strong>Tiled</strong> pour la conception des niveaux (bureaux)</li>
              <li><strong>IdealUI</strong> pour la gestion des menus interactifs</li>
              <li><strong>Jacoco</strong> pour garantir la qualité via les tests unitaires</li>
            </ul>
          </section>


      </div>

      <div className="w-5/6 flex justify-between py-8">
        <a href="/portfolio/projets/siterecrutement" className="text-white p-3 bg-gray-800 rounded-xl hover:bg-gray-900 hover:text-gray-200">
          Projet précédent
        </a>
        <a href="/portfolio/projets/tamagoshi" className="text-white p-3 bg-gray-800 rounded-xl hover:bg-gray-900 hover:text-gray-200">
          Projet suivant
        </a>
      </div>
    </div>
  );
}