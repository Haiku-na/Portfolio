import "../../index.css";
import Navbar_portfolio from "../../components/navbar_portfolio";
import React, { useState, useEffect, useRef } from "react";

const slides = [
  {
    title: "Golf",
    content:
      "J’ai pratiqué le golf pendant neuf ans, un sport qui m’a appris la patience, la gestion des émotions et la maîtrise des frustrations, tout en développant ma concentration et ma capacité à garder l’esprit clair.",
    image: "/whoiam-p/golf.jpg"
  },

  {
    title: "Jeux vidéos & de société",
    content:
      "Les jeux de société font partie de mes loisirs favoris. J’aime y jouer aussi bien en équipe qu’en solo, pour le plaisir de la réflexion et de la convivialité. J’apprécie également les jeux vidéo, notamment les jeux d’aventure calmes et les jeux de stratégie.",
    image: "/whoiam-p/jeux.jpg"
  },
  {
    title: "Maquettes en bois",
    content:
      "J’aime réaliser des maquettes en bois, une activité qui demande beaucoup de temps, de minutie et du sens du détail.",
    image: "/whoiam-p/maquette.jpg"
  },
  {
    title: "La cuisine",
    content:
      "J’aime cuisiner, une activité qui stimule ma créativité et ma rigueur, tout en me permettant de partager des moments conviviaux.",
    image: "/whoiam-p/gateau.jpg"
  }
];

export default function Whoami() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const containerRef = useRef(null);
  useEffect(() => {
    if (containerRef.current) {
      const heights = Array.from(containerRef.current.children).map(
        (child) => child.offsetHeight
      );
      setMaxHeight(Math.max(...heights));
    }
  }, []);

  const nextSlide = () => {
    setFade(false);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
      setFade(true);
    }, 300);
  };

  const prevSlide = () => {
    setFade(false);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
      setFade(true);
    }, 300);
  };

  return (
    <div className="flex flex-col items-center">
      <Navbar_portfolio />
      <div className="mt-6">
        <img src="/whoiam-p/moi.jpg" alt="moi" className="max-w-50 rounded-full border-6 border-gray-900" />
      </div>
      <div className="text-center w-5/6 m-3">
        <h2 className="text-2xl font-bold m-3">Présentation</h2>
        <p className="bg-gray-900 text-white rounded-xl p-10">
          Étudiante en informatique à Epitech Paris, je suis passionnée par le développement et les nouvelles technologies. Après un Bachelor à l’école Hexagone, j’intègre un Pré-Master of Science en alternance pour renforcer mes compétences en programmation, conception d’interfaces et innovation numérique. Curieuse, sérieuse et persévérante, j’aime apprendre en créant des projets concrets et relever de nouveaux défis techniques.
        </p>
      </div>
      <div className="text-center w-full max-w-5/6">
        <h2 className="text-2xl font-bold mb-4">Compétences</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2">
          {[
            {
              title: "Developement Web",
              skills: ["HTML/CSS", "JavaScript"]
            },
            {
              title: "Framework",
              skills: ["Bootstrap", "Tailwind CSS", "Next.JS", "Django"]
            },
            {
              title: "Base de données",
              skills: ["SQL", "Méthode MERISE", "MySQL"]
            },
            {
              title: "Programmation",
              skills: ["Python", "Java", "C++"]
            }
          ].map((card, idx) => (
            <div key={idx} className="group [perspective:1000px] w-full h-60">
              <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                <div className="absolute inset-0 flex items-center justify-center bg-gray-900 rounded-xl shadow-xl backface-hidden">
                  <h2 className="text-lg text-white font-bold">{card.title}</h2>
                </div>
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-200  rounded-xl shadow-xl [transform:rotateY(180deg)] backface-hidden">
                  {card.skills.map((skill, i) => (
                    <h6 key={i} className="text-lg font-bold mb-2 text-gray-900">{skill}</h6>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className=" text-center w-5/6 m-3">
        <h2 className="text-2xl font-bold m-3">Mes passions</h2>
        <div className="flex flex-col bg-gray-900 rounded-xl shadow-lg text-white">
          <div className={`flex flex-col md:flex-row items-center duration-300 duration-300 ${fade ? "opacity-100" : "opacity-0"}`}>
            <div className="md:w-1/2 p-6 flex flex-col justify-center">
              <h2 className="text-xl font-bold mb-3">{slides[currentIndex].title}</h2>
              <p className="text-justify">{slides[currentIndex].content}</p>
            </div>
            <div className="md:w-1/2 flex justify-center items-center p-4 h-80 md:h-96 lg:h-[400px]">
              <img src={slides[currentIndex].image} alt={slides[currentIndex].title} className="rounded-xl w-full h-full object-cover" />
            </div>
          </div>
          <div className="flex justify-center">
            <button onClick={prevSlide} className="cursor-pointer p-2 m-4 -rotate-180 rounded hover:bg-gray-700 transition">
              <img src="/whoiam-p/gauche.png" alt="fleche_gauche" />
            </button>
            <button onClick={nextSlide} className="cursor-pointer p-2 m-4 rounded hover:bg-gray-700 transition">
              <img src="/whoiam-p/droite.png" alt="fleche_droite" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
