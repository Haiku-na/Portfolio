import "../../index.css";
import Navbar_portfolio from "../../components/navbar_portfolio";
import React from "react";

export default function Formations() {
  return (
    <div className="flex flex-col items-center">
      <Navbar_portfolio />
      <ul className="w-5/6 bg-gray-800 text-white p-10 rounded-xl mt-10">
        <li>
          <p><b className="text-xl">Pré-Master Of Science</b> Depuis Sept 2025</p>
          <p className=""><b>Epitech Paris</b> Le Kremlin-Bicêtre (94)</p>
          <ul className="bg-gray-200 p-3 my-4 text-black rounded-xl">
            <li>
              Formation axée sur l’apprentissage par projets, développement logiciel avancé, innovation technologique et travail en équipe.
            </li>
          </ul>
        </li>

        <li>
          <p ><b className="text-xl">Bachelor Informatique (1ère et 2ème année)</b> Oct 2023 - Juillet 2025</p>
          <p><b>Hexagone (École Supérieure d'Informatique)</b> Versailles (78)</p>
          <ul className="bg-gray-200 p-3 my-4 text-black rounded-xl">
            <li>
              Développement web, Python, UI/UX, mathématiques, administration réseaux, architecture système, IOT.
            </li>
          </ul>
        </li>

        <li>
          <p><b className="text-xl">Baccalauréat général</b> 2023</p>
          <p><b>Lycée Jean Monnet</b> La Queue-lez-Yvelines (78)</p>
          <ul className="bg-gray-200 p-3 my-4 text-black rounded-xl">
            <li>
              Spécialités : Mathématiques / Numérique et Sciences de l'Informatique / Physique Chimie
            </li>
            <li>
              mention bien
            </li>
          </ul>
        </li>

        <li>
          <p><b className="text-xl">Service National Universel</b> Juillet 2021</p>
          <p>Toulouse (31)</p>
          <ul className="bg-gray-200 p-3 my-4 text-black rounded-xl">
            <li>
              Développe les capacités de travail en équipe et favorise le contact humain à travers des activités physique, collectives et citoyennes.
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
}