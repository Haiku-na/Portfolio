import "../../../index.css";
import Navbar_portfolio from "../../../components/navbar_portfolio";
import React from "react";

export default function Tamagoshi() {
  return (
    <div className="flex flex-col min-h-screen items-center text-white">
      <Navbar_portfolio />
      <div className="w-5/6 flex justify-between py-4">
        <a href="/portfolio/projets/minouverse" className="text-white p-3 bg-gray-800 rounded-xl hover:bg-gray-900 hover:text-gray-200">
          Projet précédent
        </a>
        <a href="/portfolio/projets/siterecrutement" className="text-white p-3 bg-gray-800 rounded-xl hover:bg-gray-900 hover:text-gray-200">
          Projet suivant
        </a>
      </div>
      <div className="flex flex-col w-5/6 space-y-12">

        <section className="space-y-6">
          <h2 className="text-3xl font-bold border-b-2 border-white pb-2">Tamamonstra – Tamagotchi Arduino</h2>

          <p className=" leading-relaxed">
            Projet réalisé dans le cadre du Bachelor Informatique à l'école Hexagone. <br />
            Tamamonstra est un Tamagotchi interactif où l’utilisateur prend soin d’un petit monstre virtuel. <br />
            Le monstre doit manger, dormir, jouer, se laver et être soigné, et peut partir à l’aventure pour gagner de l’argent et des ressources.
          </p>
        </section>

        <section className="bg-gray-900 p-6 rounded-xl shadow-lg space-y-4">
          <h3 className="text-2xl font-semibold border-b border-gray-700 ">Matériel et composants</h3>
          <ul className="list-disc list-inside space-y-1 ">
            <li>Carte ESP32 – cœur du dispositif et stockage des données persistantes</li>
            <li>3 boutons poussoirs – interactions avec le monstre</li>
            <li>Écran OLED – affichage du jeu</li>
            <li>Boîtier modélisé avec Tinkercad</li>
            <li>Fils électriques – connexions entre composants</li>
          </ul>
        </section>

        <section className="bg-gray-900 p-6 rounded-xl shadow-lg space-y-4">
          <h3 className="text-2xl font-semibold border-b border-gray-700 ">Schéma électronique et boîtier</h3>
          <div className=" flex flex-col items-center">
            <img className="rounded-xl shadow-md w-100 md:w-2/3 pb-5" src="/projets/tamagoshi/shematech.png" alt="Schéma electronique" />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 justify-items-center">
              <img className="rounded-xl shadow-md" src="/projets/tamagoshi/boitier.png" alt="Boîtier Tamamonstra intérieur" />
              <ul className="list-disc list-inside space-y-1  content-center">
                <li>	Le boitier est composé de deux parties facilitant la fermeture du boitier. On peut les faire glisser pour assurer une fermeture optimale. </li>
                <li>	Les différentes barres permettent de caler les différents éléments contenus dans le boitier. </li>
                <li>	Trois trous pour les trois boutons et une dernier pour le l’écran. </li>
                <li>	Les deux barres dans la partie basse du boiter sert a placer la carte ESP32 et l’Arche permet de caler l’ESP32 une fois le boitier fermé.  Un trou pour faire passer les fils. </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-gray-900 p-6 rounded-xl shadow-lg space-y-4">
          <h3 className="text-2xl font-semibold border-b border-gray-700 ">Bibliothèques Arduino utilisées</h3>
          <ul className="list-disc list-inside space-y-1 ">
            <li><strong>Preferences.h :</strong> sauvegarde des données persistantes (états du monstre, paramètres utilisateur)</li>
            <li><strong>SPI.h :</strong> communication rapide avec périphériques SPI</li>
            <li><strong>Wire.h :</strong> communication I2C pour capteurs et écran OLED</li>
            <li><strong>Adafruit_GFX.h :</strong> dessin d’éléments graphiques (texte, formes)</li>
            <li><strong>Adafruit_SSD1306.h :</strong> gestion de l’écran OLED SSD1306</li>
          </ul>
        </section>

        <section className="bg-gray-900 p-6 rounded-xl shadow-lg space-y-4">
          <h3 className="text-2xl font-semibold border-b border-gray-700 ">Fonctions clés</h3>
          <p className="">Plus de 20 fonctions ont été créées pour gérer le gameplay et les interactions :</p>
          <ul className="list-disc list-inside space-y-1 ">
            <li>recuperation(), sauvegarde() – gestion des données persistantes</li>
            <li>menu(), fenetreStat() – navigation dans le menu et affichage des stats</li>
            <li>aventure(), combat(), recompenses() – mini-jeux et combats</li>
            <li>chercherPomme(), pauseJeu(), pommesRecuperees() – mini-jeu de récolte de pommes</li>
            <li>magasin(), achatFood(), achatPotions() – achats et gestion des ressources</li>
            <li>manger(), dormir(), laver(), soigner() – actions principales du monstre</li>
            <li>mourir() – gestion de la mort et réinitialisation</li>
          </ul>
        </section>

        <section className="bg-gray-900 p-6 rounded-xl shadow-lg space-y-4">
          <h3 className="text-2xl font-semibold border-b border-gray-700 ">Gameplay</h3>
          <p className="">Le joueur interagit avec le monstre via l’écran OLED et les boutons :</p>
          <ul className="list-disc list-inside space-y-2 ">
            <li><strong>Manger :</strong> choisir la nourriture dans la cuisine et nourrir le monstre</li>
            <li><strong>Dormir :</strong> suivre la fatigue et le temps de sommeil</li>
            <li><strong>Se laver et soigner :</strong> animations et gestion de la santé du monstre</li>
            <li><strong>Mini-jeux :</strong>
              <ul className="list-disc list-inside pl-4 space-y-1">
                <li>Ramassage de pommes – attraper jusqu’à 15 pommes et vendre ou stocker</li>
                <li>Aventure en forêt – combats contre des créatures avec choix d’attaque, potion ou fuite</li>
              </ul>
            </li>
            <li><strong>Magasin :</strong> achat de nourriture et de potions avec l’argent gagné</li>
          </ul>
        </section>

        <section className="bg-gray-900 p-6 rounded-xl shadow-lg space-y-4 ">
          <h3 className="text-2xl font-semibold border-b border-gray-700 ">images et l’arborescence du jeu</h3>
          <div className="flex flex-col items-center">
            <img src="/projets/tamagoshi/arborescence.png" alt="image jeux" />
          </div>
        </section>

        <section className="bg-gray-900 p-6 rounded-xl shadow-lg space-y-4">
          <h3 className="text-2xl font-semibold border-b border-gray-700 ">Résultats et compétences</h3>
          <ul className="list-disc list-inside space-y-1 ">
            <li>Création d’un système interactif avec état persistant</li>
            <li>Programmation embarquée en C/C++ sur ESP32</li>
            <li>Gestion de mini-jeux et combats avec calcul des récompenses</li>
            <li>Conception d’un boîtier fonctionnel et esthétique sur Tinkercad</li>
          </ul>
          <a href="https://github.com/Haiku-na/Tamagoshi" target="_blank" className="inline-block mt-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-500 rounded-lg transition">
            Voir le code sur GitHub
          </a>
        </section>

        <section className="bg-gray-900 p-6 rounded-xl shadow-lg space-y-4">
          <h3 className="text-2xl font-semibold border-b border-gray-700 ">Ressources supplémentaires</h3>
          <p className="text-gray-300">Vous pouvez télécharger la fiche technique et fonctionnelle, ou regarder la vidéo de démonstration :</p>
          <div className="flex flex-col items-center">
            <div className="w-full sm:w-1/2">
              <video className="rounded-xl shadow-md w-full" controls src="/projets/tamagoshi/VAUTRIN Appoline Tamamonstra.mp4" >
                Votre navigateur ne supporte pas la vidéo.
              </video>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 m-2 ">
              <a href="/projets/tamagoshi/VAUTRIN Appoline documentation à destination des utilisateurs.pdf" download className="inline-block px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded-lg text-white text-center transition" >
                Télécharger la notice
              </a>

              <a href="/projets/tamagoshi/VAUTRIN Appoline documentations techniques.pdf " download className="inline-block px-4 py-2 bg-green-600 hover:bg-green-500 rounded-lg text-white text-center transition">
                Télécharger la fiche technique
              </a>
            </div>
          </div>

        </section>
      </div>
      <div className="w-5/6 flex justify-between py-4">
        <a href="/portfolio/projets/minouverse" className="text-white p-3 bg-gray-800 rounded-xl hover:bg-gray-900 hover:text-gray-200">
          Projet précédent
        </a>
        <a href="/portfolio/projets/siterecrutement" className="text-white p-3 bg-gray-800 rounded-xl hover:bg-gray-900 hover:text-gray-200">
          Projet suivant
        </a>
      </div>
    </div>
  );
}
