import "../../../index.css";
import Navbar_portfolio from "../../../components/navbar_portfolio";
import React from "react";

export default function Lumiere() {
  return (
    <div className="flex flex-col min-h-screen text-white">
      <Navbar_portfolio />

      <div className="flex justify-between px-6 py-4">
        <a href="/portfolio/projets/siterecrutement" className="text-white p-3 bg-gray-800 rounded-xl hover:bg-gray-900 hover:text-gray-200">
          Projet précédent
        </a>
        <a href="/portfolio/projets/minouverse" className="text-white p-3 bg-gray-800 rounded-xl hover:bg-gray-900 hover:text-gray-200">
          Projet suivant
        </a>
      </div>
      <div className="container mx-auto px-6 py-12 space-y-12">

        <section className="space-y-6">
          <h2 className="text-3xl font-bold border-b-2 border-white pb-2">Jeu de reflexe</h2>

          <p className=" leading-relaxed">
            Projet réalisé avec une camarade dans le cadre du Bachelor Informatique à l’école Hexagone. <br />
            Il s’agit d’un jeu de réflexe consistant à appuyer sur un bouton lorsque la LED centrale est allumée. <br />
            Un afficheur à sept segments indique le niveau du joueur, et l’intensité des LEDs s’ajuste automatiquement en fonction de la lumière ambiante.
          </p>
        </section>

        <section className="bg-gray-900 p-6 rounded-xl shadow-lg space-y-4">
          <h3 className="text-2xl font-semibold border-b border-gray-700 ">Matériel et composants</h3>
          <ul className="list-disc list-inside space-y-1 ">
            <li>carte Arduino Uno </li>
            <li>Bouton poussoir</li>
            <li>Seven segment display</li>
            <li>1 led rouge</li>
            <li>4 leds bleus</li>
            <li>Capteur de photorestance</li>
            <li>11 Resisatances 220 Ω</li>
            <li>1 Resistance 200 Ω</li>
            <li>2 Resisatances 10k Ω</li>
          </ul>
        </section>

        <section className="bg-gray-900 p-6 rounded-xl shadow-lg space-y-4">
          <h3 className="text-2xl font-semibold border-b border-gray-700 ">Schéma électronique et modélisation tinkecard</h3>
          <div className=" flex flex-col items-center">
            <img className="rounded-xl w-100 md:w-1/2 pb-5" src="/projets/jeulumiere/tinkercard.png" alt="Schéma electronique" />
            <div className="flex flex-col md:flex-row justify-center items-center gap-6 w-full">
              <img
                className="rounded-xl w-full md:w-1/2" src="/projets/jeulumiere/mod1.png" alt="Modélisation 1" />
              <img
                className="rounded-xl w-full md:w-1/2" src="/projets/jeulumiere/mod2.png" alt="Modélisation 2" />
            </div>
          </div>
        </section>

        <section className="bg-gray-900 p-6 rounded-xl shadow-lg space-y-4">
          <h3 className="text-2xl font-semibold border-b border-gray-700 ">Fonctionnement du jeu</h3>
          <p className="">Ce jeu marche de très simplement:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>setup() – Initialise les LEDs, le bouton et la connexion avec le moniteur série</li>
            <li>loop() – Fait clignoter les LEDs une par une et vérifie si le bouton est appuyé</li>
            <li>blink() – Allume une LED pendant un certain temps et appelle la fonction de vérification du bouton</li>
            <li>press() – Vérifie si le bouton est appuyé pendant qu’une LED est allumée</li>
            <li>gagner() – Indique si le bouton est appuyé ou relâché et ajoute un point quand la LED rouge est active</li>
          </ul>
        </section>

        <section className="bg-gray-900 p-6 rounded-xl shadow-lg space-y-4 ">
          <h3 className="text-2xl font-semibold border-b border-gray-700 ">vidéo du gameplay</h3>
          <div className="flex flex-col items-center">
            <video className="rounded-xl shadow-md w-100 h-100" controls src="/projets/jeulumiere/demonstration.mp4" >
              Votre navigateur ne supporte pas la vidéo.
            </video>
          </div>
        </section>

        <section className="bg-gray-900 p-6 rounded-xl shadow-lg space-y-4">
          <h3 className="text-2xl font-semibold border-b border-gray-700 ">Résultats et compétences</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Création d'un jeu de réflexe interactif basé sur des LED et un bouton</li>
            <li>Programmation embarquée en C++ sur une carte Arduino Uno</li>
            <li>Utilisation du moniteur série pour le débogage et le suivi des interactions</li>
            <li>Conception et modélisation du circuit électronique sur Tinkercad</li>
            <li>Gestion de l’intensité lumineuse à l’aide d’un capteur de photorésistance</li>
            <li>Travail en binôme : répartition des tâches entre le code, le câblage et la modélisation</li>
          </ul>
          <a href="https://github.com/Haiku-na/Jeu-lumiere" target="_blank" className="inline-block mt-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-500 rounded-lg transition">
            Voir le code sur GitHub
          </a>
        </section>

      </div>
    </div>
  );
}
