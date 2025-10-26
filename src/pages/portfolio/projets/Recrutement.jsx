import "../../../index.css";
import Navbar_portfolio from "../../../components/navbar_portfolio";
import React from "react";

export default function Recrutement() {
  return (
    <div className="flex flex-col min-h-screen items-center text-white">
      <Navbar_portfolio />

      <div className="flex justify-between w-5/6 py-4">
        <a href="/portfolio/projets/tamagoshi" className="text-white p-3 bg-gray-800 rounded-xl hover:bg-gray-900 hover:text-gray-200">
          Projet précédent
        </a>
        <a href="/portfolio/projets/jeulumiere" className="text-white p-3 bg-gray-800 rounded-xl hover:bg-gray-900 hover:text-gray-200">
          Projet suivant
        </a>
      </div>
      <div className="flex flex-col w-5/6 space-y-12">

        <section className="bg-gray-900 rounded-xl shadow-lg space-y-4">
          <img src="/projets/siterecrutement/accueil.png" className="w-full rounded-t-xl max-h-100 object-contain md:object-cover" alt="recrutelent" />
          <div className="p-6">
          <h2 className="text-3xl font-bold border-b-2 border-white pb-2">QuestJobs - Site de recrutement</h2>

          <p className=" leading-relaxed">
            Projet réalisé en équipe de trois dans le cadre du Pré-Master of Science à Epitech. <br />
            Il s’agit d’un site de recrutement sur le thème du fantastique médiéval. L’objectif du projet était de concevoir un site web complet intégrant un frontend, un backend et une API REST. <br />
          </p>
          </div>
        </section>

        <section className="bg-gray-900 p-6 rounded-xl shadow-lg space-y-4">
          <h3 className="text-2xl font-semibold border-b border-gray-700 ">Technologies Utilisées</h3>
          <ul className="list-disc list-inside space-y-1 ">
            <li><strong>Backend :</strong> Django REST Framework</li>
            <li><strong>Frontend :</strong> Next.js</li>
            <li><strong>Base de données :</strong> MySQL</li>
            <li><strong>Framework de style :</strong> Tailwind CSS</li>
          </ul>
        </section>

        <section className="bg-gray-900 p-6 rounded-xl shadow-lg space-y-4">
          <h3 className="text-2xl font-semibold border-b border-gray-700">Structure du projet</h3>
          <p className="whitespace-pre">
            {`T-WEB-501-PAR_11/
│
├── backend/
│   ├── api/
│   ├── backend/
│   ├── env/
│   ├── media/
│   ├── manage.py
│   └── requirements.txt
│
├── frontend/
│   ├── app/
│   ├── public/
│   ├── .env
│   ├── package.json
│   ├── next.config.ts
│   └── ...
│
└── README.md`}
          </p>

        </section>


        <section className="bg-gray-900 p-6 rounded-xl shadow-lg space-y-4">
          <h3 className="text-2xl font-semibold border-b border-gray-700 ">Modèles</h3>
          <div className="grid lg:grid-cols-2 grid-cols-1 justify-items-center">
            <div className="w-full">
              <p className="text-xl font-semibold">Utilisateur</p>
              <table className="w-4/5 text-sm text-left rtl:text-right text-gray-400 rounded-xl">
                <thead className="text-xs bg-gray-700 text-gray-400">
                  <tr>
                    <th scope="col" className="px-6 py-3">CHAMP</th>
                    <th scope="col" className="px-6 py-3">TYPE</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b bg-gray-800 border-gray-700">
                    <th scope="row" className="p-2 font-medium text-white">id_user</th>
                    <td className="p-4">UUID (clé primaire)</td>
                  </tr>
                  <tr className="border-b bg-gray-800 border-gray-700">
                    <th scope="row" className="p-2 font-medium text-white">id_user</th>
                    <td className="p-4">UUID (clé primaire)</td>
                  </tr>
                  <tr className="border-b bg-gray-800 border-gray-700">
                    <th scope="row" className="p-2 font-medium text-white">id_user</th>
                    <td className="p-4">UUID (clé primaire)</td>
                  </tr>
                  <tr className="border-b bg-gray-800 border-gray-700">
                    <th scope="row" className="p-2 font-medium text-white">nom_user</th>
                    <td className="p-4">CharField(100)</td>
                  </tr>
                  <tr className="border-b bg-gray-800 border-gray-700">
                    <th scope="row" className="p-2 font-medium text-white">prenom_user</th>
                    <td className="p-4">CharField(100)</td>
                  </tr>
                  <tr className="border-b bg-gray-800 border-gray-700">
                    <th scope="row" className="p-2 font-medium text-white">mail_user</th>
                    <td className="p-4">CharField(100, unique)</td>
                  </tr>
                  <tr className="border-b bg-gray-800 border-gray-700">
                    <th scope="row" className="p-2 font-medium text-white">tel_user</th>
                    <td className="p-4">PhoneNumberField</td>
                  </tr>
                  <tr className="border-b bg-gray-800 border-gray-700">
                    <th scope="row" className="p-2 font-medium text-white">adresse_user</th>
                    <td className="p-4">CharField(100)</td>
                  </tr>
                  <tr className="border-b bg-gray-800 border-gray-700">
                    <th scope="row" className="p-2 font-medium text-white">cp_user</th>
                    <td className="p-4">CharField(10)</td>
                  </tr>
                  <tr className="border-b bg-gray-800 border-gray-700">
                    <th scope="row" className="p-2 font-medium text-white">pays_user</th>
                    <td className="p-4">CharField(100)</td>
                  </tr>
                  <tr className="border-b bg-gray-800 border-gray-700">
                    <th scope="row" className="p-2 font-medium text-white">employeur_user</th>
                    <td className="p-4">IntegerField</td>
                  </tr>
                  <tr className="border-b bg-gray-800 border-gray-700">
                    <th scope="row" className="p-2 font-medium text-white">mdp_user</th>
                    <td className="p-4">CharField(100)</td>
                  </tr>
                  <tr className="border-b bg-gray-800 border-gray-700">
                    <th scope="row" className="p-2 font-medium text-white">cv</th>
                    <td className="p-4">FileField</td>
                  </tr>
                  <tr className="border-b bg-gray-800 border-gray-700">
                    <th scope="row" className="p-2 font-medium text-white">id_entreprise</th>
                    <td className="p-4">clé étrangère -&gt; Entreprise</td>
                  </tr>
                  <tr className="border-b bg-gray-800 border-gray-700">
                    <th scope="row" className="p-2 font-medium text-white">admin_user</th>
                    <td className="p-4">BooleanField</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="w-full">
              <p className="text-xl font-semibold">Entreprise</p>
              <table className="w-4/5 text-sm text-left rtl:text-right text-gray-400 rounded-xl">
                <thead className="text-xs bg-gray-700 text-gray-400">
                  <tr>
                    <th scope="col" className="px-6 py-3">CHAMP</th>
                    <th scope="col" className="px-6 py-3">TYPE</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b bg-gray-800 border-gray-700">
                    <th scope="row" className="p-2 font-medium text-white">id_entreprise</th>
                    <td className="p-4">UUID (clé primaire)</td>
                  </tr>
                  <tr className="border-b bg-gray-800 border-gray-700">
                    <th scope="row" className="p-2 font-medium text-white">nom_entreprise</th>
                    <td className="p-4">CharField(100)</td>
                  </tr>
                  <tr className="border-b bg-gray-800 border-gray-700">
                    <th scope="row" className="p-2 font-medium text-white">descrip_entreprise</th>
                    <td className="p-4">CharField(1000)</td>
                  </tr>
                  <tr className="border-b bg-gray-800 border-gray-700">
                    <th scope="row" className="p-2 font-medium text-white">secteur_entreprise</th>
                    <td className="p-4">CharField(1000)</td>
                  </tr>
                  <tr className="border-b bg-gray-800 border-gray-700">
                    <th scope="row" className="p-2 font-medium text-white">url_site_entreprise</th>
                    <td className="p-4">CharField(1000)</td>
                  </tr>
                  <tr className="border-b bg-gray-800 border-gray-700">
                    <th scope="row" className="p-2 font-medium text-white">logo_entreprise</th>
                    <td className="p-4">FileField</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="w-full">
              <p className="text-xl font-semibold">Annonce</p>
              <table className="w-4/5 text-sm text-left rtl:text-right text-gray-400 rounded-xl">
                <thead className="text-xs bg-gray-700 text-gray-400">
                  <tr>
                    <th scope="col" className="px-6 py-3">CHAMP</th>
                    <th scope="col" className="px-6 py-3">TYPE</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b bg-gray-800 border-gray-700">
                    <th scope="row" className="p-2 font-medium text-white">id_annonce</th>
                    <td className="p-4">UUID (clé primaire)</td>
                  </tr>
                  <tr className="border-b bg-gray-800 border-gray-700">
                    <th scope="row" className="p-2 font-medium text-white">id_entreprise</th>
                    <td className="p-4">clé étrangère -&gt; Entreprise</td>
                  </tr>
                  <tr className="border-b bg-gray-800 border-gray-700">
                    <th scope="row" className="p-2 font-medium text-white">id_recruteur</th>
                    <td className="p-4">clé étrangère -&gt; Utilisateur</td>
                  </tr>
                  <tr className="border-b bg-gray-800 border-gray-700">
                    <th scope="row" className="p-2 font-medium text-white">cp_annonce</th>
                    <td className="p-4">CharField(100)</td>
                  </tr>
                  <tr className="border-b bg-gray-800 border-gray-700">
                    <th scope="row" className="p-2 font-medium text-white">ville_annonce</th>
                    <td className="p-4">CharField(100)</td>
                  </tr>
                  <tr className="border-b bg-gray-800 border-gray-700">
                    <th scope="row" className="p-2 font-medium text-white">type_contract</th>
                    <td className="p-4">CharField(100)</td>
                  </tr>
                  <tr className="border-b bg-gray-800 border-gray-700">
                    <th scope="row" className="p-2 font-medium text-white">salaire</th>
                    <td className="p-4">CharField(200)</td>
                  </tr>
                  <tr className="border-b bg-gray-800 border-gray-700">
                    <th scope="row" className="p-2 font-medium text-white">avantage</th>
                    <td className="p-4">CharField(100)</td>
                  </tr>
                  <tr className="border-b bg-gray-800 border-gray-700">
                    <th scope="row" className="p-2 font-medium text-white">descrip_annonce</th>
                    <td className="p-4">CharField(1000)</td>
                  </tr>
                  <tr className="border-b bg-gray-800 border-gray-700">
                    <th scope="row" className="p-2 font-medium text-white">date_publication</th>
                    <td className="p-4">DateTime</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="w-full justify-center">
              <p className="text-xl font-semibold">Candidature</p>
              <table className="w-4/5 text-sm text-left rtl:text-right text-gray-400 rounded-xl">
                <thead className="text-xs bg-gray-700 text-gray-400">
                  <tr>
                    <th scope="col" className="px-6 py-3">CHAMP</th>
                    <th scope="col" className="px-6 py-3">TYPE</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b bg-gray-800 border-gray-700">
                    <th scope="row" className="p-2 font-medium text-white">id_candidature</th>
                    <td className="p-4">UUID (clé primaire)</td>
                  </tr>
                  <tr className="border-b bg-gray-800 border-gray-700">
                    <th scope="row" className="p-2 font-medium text-white">id_annonce</th>
                    <td className="p-4">clé étrangère -&gt; Annonce</td>
                  </tr>
                  <tr className="border-b bg-gray-800 border-gray-700">
                    <th scope="row" className="p-2 font-medium text-white">id_user</th>
                    <td className="p-4">clé étrangère -&gt; Utilisateur</td>
                  </tr>
                  <tr className="border-b bg-gray-800 border-gray-700">
                    <th scope="row" className="p-2 font-medium text-white">date</th>
                    <td className="p-4">DateTime</td>
                  </tr>
                  <tr className="border-b bg-gray-800 border-gray-700">
                    <th scope="row" className="p-2 font-medium text-white">message</th>
                    <td className="p-4">CharField(1000)</td>
                  </tr>
                  <tr className="border-b bg-gray-800 border-gray-700">
                    <th scope="row" className="p-2 font-medium text-white">nom_user</th>
                    <td className="p-4">CharField(100)</td>
                  </tr>
                  <tr className="border-b bg-gray-800 border-gray-700">
                    <th scope="row" className="p-2 font-medium text-white">prenom_user</th>
                    <td className="p-4">CharField(100)</td>
                  </tr>
                  <tr className="border-b bg-gray-800 border-gray-700">
                    <th scope="row" className="p-2 font-medium text-white">tel_user</th>
                    <td className="p-4">PhoneNumberField</td>
                  </tr>
                  <tr className="border-b bg-gray-800 border-gray-700">
                    <th scope="row" className="p-2 font-medium text-white">email_user</th>
                    <td className="p-4">CharField(100)</td>
                  </tr>
                  <tr className="border-b bg-gray-800 border-gray-700">
                    <th scope="row" className="p-2 font-medium text-white">statut</th>
                    <td className="p-4">CharField(50)</td>
                  </tr>
                  <tr className="border-b bg-gray-800 border-gray-700">
                    <th scope="row" className="p-2 font-medium text-white">cv</th>
                    <td className="p-4">FileField</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

        </section>

        <section className="bg-gray-900 p-6 rounded-xl shadow-lg space-y-4">
          <h3 className="text-2xl font-semibold border-b border-gray-700">Fonctionnalités</h3>
          <ul className="list-disc list-inside space-y-1">
            <li><strong>Créer et gérer des annonces :</strong> Les recruteurs peuvent publier de nouvelles annonces, les modifier ou les supprimer.</li>
            <li><strong>Postuler aux offres :</strong> Les candidats peuvent postuler directement aux annonces disponibles.</li>
            <li><strong>Consulter les annonces :</strong> Tous les utilisateurs connectés peuvent naviguer et lire les annonces publiées.</li>
            <li><strong>Authentification sécurisée :</strong> Les utilisateurs doivent se connecter pour accéder aux fonctionnalités du site.</li>
            <li><strong>Trois interfaces distinctes :</strong> Administrateur, recruteur et candidat, chacune adaptée aux rôles et permissions.</li>
            <li><strong>Espace recruteur :</strong> Gestion des candidatures reçues, avec possibilité d’accepter ou de refuser les postulants.</li>
            <li><strong>Espace administrateur :</strong> Accès complet aux tables de la base de données, gestion des CRUDs pour tous les modèles.</li>
            <li><strong>Notifications :</strong> Indication si un candidat a déjà postulé à une annonce.</li>
            <li><strong>Affichage dynamique :</strong> Les annonces sont chargées via l’API et mises à jour en temps réel.</li>
            <li><strong>Pages détaillées :</strong> Chaque annonce dispose d’une page ou d’une fenêtre "Voir plus" pour afficher toutes les informations.</li>
          </ul>
        </section>

        <section className="bg-gray-900 p-6 rounded-xl shadow-lg space-y-4">
          <h3 className="text-2xl font-semibold border-b border-gray-700 ">Résultats et compétences</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Création d’une plateforme de recrutement complète avec gestion des annonces et candidatures</li>
            <li>Développement frontend avec Next.js pour une interface réactive et intuitive</li>
            <li>Implémentation backend avec Django REST Framework et API REST pour la communication front/back</li>
            <li>Conception et gestion d’une base de données MySQL avec relations entre utilisateurs, annonces, entreprises et candidatures</li>
            <li>Mise en place d’un système d’authentification et de rôles (candidat, recruteur, administrateur)</li>
            <li>Gestion des formulaires et des interactions utilisateurs (postuler, créer/modifier/supprimer annonces, consulter candidatures)</li>
            <li>Utilisation de Tailwind CSS pour un design moderne et responsive</li>
            <li>Déploiement et tests locaux de l’application avec synchronisation frontend/back-end</li>
          </ul>
          <a href="https://github.com/Haiku-na/Siet-recrutement" target="_blank" className="inline-block mt-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-500 rounded-lg transition">
            Voir le code sur GitHub
          </a>
        </section>
      </div>
      <div className="flex justify-between w-5/6 py-4">
        <a href="/portfolio/projets/tamagoshi" className="text-white p-3 bg-gray-800 rounded-xl hover:bg-gray-900 hover:text-gray-200">
          Projet précédent
        </a>
        <a href="/portfolio/projets/jeulumiere" className="text-white p-3 bg-gray-800 rounded-xl hover:bg-gray-900 hover:text-gray-200">
          Projet suivant
        </a>
      </div>
      <div className="flex flex-col w-5/6 space-y-12"></div>
    </div>
  );
}
