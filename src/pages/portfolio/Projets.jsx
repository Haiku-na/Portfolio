import "../../index.css";
import Navbar_portfolio from "../../components/navbar_portfolio";
import React from "react";

export default function Projets() {


  const projets = [
    {
      title: "Tamagoshi",
      description:
      "Réalisation d'un tamagoshi de A à Z, modélisation du boitier, connexions, programmation",
      image: "/whoiam-p/golf.jpg"
    },

    {
      title: "Projet zelda",
      description:
      "Projet cositant à tester l'utilisation d'API externe",
      image: "/whoiam-p/jeux.jpg"
    },
    {
      title: "Minouverse",
      description:
      "Projet en groupe consistant à créer un twitter-like",
      image: "/whoiam-p/maquette.jpg"
    },
    {
      title: "Jeu de lumière",
      description:
      "Création d'un mini jeu de reflexe avec des lumière en Arduino",
      image: "/whoiam-p/gateau.jpg"
    },    
    {
      title: "Site de recrutement médiéval",
      description:
      "Projet de groupe consistant à créer un site de recrutement complet avec une API REST.",
      image: "/whoiam-p/gateau.jpg"
    }
  ];
  return (
    <div class="flex flex-col items-center">
      <Navbar_portfolio />
      <div class="w-5/6 flex items-center">
        <div class="max-w-sm border rounded-lg shadow-sm bg-gray-800 border-gray-700">
          <a href="#">
            <img class="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
          </a>
          <div class="p-5">
            <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-white">Noteworthy technology acquisitions 2021</h5>
            </a>
            <p class="mb-3 font-normal text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
            <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white focus:outline-none bg-blue-600 hover:bg-blue-700 focus:ring-blue-800">
              Read more
              <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}