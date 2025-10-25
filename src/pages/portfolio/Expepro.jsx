import "../../index.css";
import Navbar_portfolio from "../../components/navbar_portfolio";
import React from "react";

export default function Experience_Pro() {
  return (
    <div className="flex flex-col items-center text-white">
      <Navbar_portfolio />
      <ul className="w-5/6">
        <li className="bg-gray-900 text-white p-10 rounded-xl mt-10">
          <p><b className="text-xl">Stage de programmation Low-code / No-code</b> Juil 2025 - Août 2025</p>
          <p className=""><b>ARVIDA Cabinet d’expertise DevOps, Cloud & IA</b> Paris La Défense (92)</p>
          <ul className="list-disc list-inside space-y-1  content-center">
            <li className="bg-gray-700 p-3 my-4  rounded-xl ">Création de scénarios d’automatisation avec Make (déclenchement via webhooks)</li>
            <li className="bg-gray-700 p-3 my-4  rounded-xl ">Manipulation et structuration de bases de données avec Airtable</li>
            <li className="bg-gray-700 p-3 my-4  rounded-xl ">Conception d’agents IA interconnectés et génération de prompts personnalisés</li>
            <li className="bg-gray-700 p-3 my-4  rounded-xl ">Montée en compétences sur des outils Low-code / No-code</li>
            <li className="bg-gray-700 p-3 my-4  rounded-xl "><i>stage de 2nd année</i></li>
          </ul>
        </li>

        <li className="bg-gray-900  p-10 rounded-xl mt-10">
          <p ><b className="text-xl">Stage dans le service Innovation</b> Juil 2024 - Août 2024</p>
          <p><b>SFIL Banque publique de développement</b> Paris (75)</p>
          <ul className="list-disc list-inside space-y-1  content-center">
            <li className="bg-gray-700 p-3 my-4  rounded-xl ">Création de tableaux de bord Qlik</li>
            <li className="bg-gray-700 p-3 my-4  rounded-xl ">développement d’applications en lowcode/no-code (Mendix)</li>
            <li className="bg-gray-700 p-3 my-4  rounded-xl "><i>stage de 1nd année</i></li>
          </ul>
        </li>

        <li className="bg-gray-900 p-10 rounded-xl mt-10">
          <p><b className="text-xl">Hôtesse de caisse et agent polyvalent</b> Sept 2023</p>
          <p><b>Jardinerie Poullain</b> La Queue-lez-Yvelines (78)</p>
          <ul className="list-disc list-inside space-y-1  content-center">
            <li className="bg-gray-700 p-3 my-4  rounded-xl ">Tenue de caisse</li>
            <li className="bg-gray-700 p-3 my-4  rounded-xl ">mise en rayon / facing</li>
            <li className="bg-gray-700 p-3 my-4  rounded-xl ">Entretien du magasin</li>
          </ul>
        </li>
      </ul>
    </div>
  );
}