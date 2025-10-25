import "../../index.css";
import Navbar_portfolio from "../../components/navbar_portfolio";
import React from "react";

export default function Projets() {
  const projets = [
    {
      title: "Tamagoshi",
      description:
        "Réalisation d'un tamagoshi de A à Z, modélisation du boitier, connexions, programmation",
      image: "/projets/tamagoshi/monstre.jpg",
      page: "/portfolio/projets/tamagoshi",
    },
    {
      title: "Minouverse",
      description: "Projet en groupe consistant à créer un twitter-like",
      image: "/projets/minouverse/minouverse.png",
      page: "/portfolio/projets/minouverse",
    },
    {
      title: "Jeu de lumière",
      description:
        "Création d'un mini jeu de réflexe avec des lumières en Arduino",
      image: "/projets/jeulumiere/construction.png",
      page: "/portfolio/projets/jeulumiere",
    },
    {
      title: "Site de recrutement médiéval",
      description:
        "Projet de groupe consistant à créer un site de recrutement complet avec une API REST.",
      image: "/projets/siterecrutement/accueil.png",
      page: "/portfolio/projets/siterecrutement",
    },
  ];

  return (
    <div className="flex flex-col items-center min-h-screen text-white">
      <Navbar_portfolio />
      <div className="w-5/6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
        {projets.map((card, idx) => (
          <div key={idx} className="flex flex-col justify-between h-[430px] bg-gray-900 border border-gray-700 rounded-lg shadow-md hover:shadow-lg transition-all duration-200" >
              <img className="rounded-t-lg w-full h-48 object-cover" src={card.image} alt={card.title} />
            <div className="p-5 flex flex-col flex-grow">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
                {card.title}
              </h5>
              <p className="mb-4 font-normal text-gray-400 flex-grow">
                {card.description}
              </p>

              <a href={card.page} className="inline-flex items-center justify-center px-3 py-2 text-sm font-medium text-white rounded-md group bg-gradient-to-br from-cyan-500 to-blue-900 hover:from-cyan-200 hover:to-blue-600 " >
                Lire plus
                <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
