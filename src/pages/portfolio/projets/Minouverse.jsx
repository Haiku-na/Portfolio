import "../../../index.css";
import Navbar_portfolio from "../../../components/navbar_portfolio";
import React from "react";

export default function Minouverse() {
  return (
    <div className="flex flex-col items-center min-h-screen text-white">
      <Navbar_portfolio />
      <div className="flex w-5/6 justify-between py-4">
        <a href="/portfolio/projets/jeulumiere" className="text-white p-3 bg-gray-800 rounded-xl hover:bg-gray-900 hover:text-gray-200">
          Projet précédent
        </a>
        <a href="/portfolio/projets/tamagoshi" className="text-white p-3 bg-gray-800 rounded-xl hover:bg-gray-900 hover:text-gray-200">
          Projet suivant
        </a>
      </div>

      <div className="flex flex-col w-5/6 space-y-12">

        <section className="bg-gray-900 rounded-xl shadow-lg space-y-4">
          <img src="/projets/minouverse/minouverse.png" className="w-full rounded-t-xl max-h-100 object-contain md:object-cover" alt="Accueil Minouverse" />
          <div className="p-6">
            <h2 className="text-3xl font-bold border-b-2 border-white pb-2">Minouverse – Application Web Twitter-Like</h2>
            <p className="leading-relaxed">
              Projet réalisé dans le cadre du Bachelor Informatique à l’école Hexagone. <br />
              <strong>Minouverse</strong> est une application web inspirée de Twitter, développée en équipe, qui permet aux utilisateurs de publier, commenter, aimer, échanger des messages privés et recevoir des notifications en temps réel. <br />
              Ce projet a mobilisé des compétences en développement web fullstack, conception d’API REST et modélisation UML.
            </p>
          </div>
        </section>

$        <section className="bg-gray-900 p-6 rounded-xl shadow-lg space-y-4">
          <h3 className="text-2xl font-semibold border-b border-gray-700">Architecture et Technologies</h3>
          <ul className="list-disc list-inside space-y-1">
            <li><strong>Backend :</strong> Flask (Python) – création de l’API REST et logique serveur</li>
            <li><strong>Frontend :</strong> Next.js / HTML / CSS / JavaScript – interface utilisateur dynamique</li>
            <li><strong>Base de données :</strong> Supabase – stockage des utilisateurs, posts, commentaires, notifications et messages</li>
            <li><strong>Authentification :</strong> NextAuth – gestion sécurisée des sessions utilisateur</li>
            <li><strong>Stockage médias :</strong> Cloudinary – hébergement des images et vidéos</li>
            <li><strong>Prototypage :</strong> Figma – maquettes des pages principales (fil d’actualité, messagerie, notifications)</li>
          </ul>
        </section>

        <section className="bg-gray-900 p-6 rounded-xl shadow-lg space-y-4">
          <h3 className="text-2xl font-semibold border-b border-gray-700">Fonctionnalités principales</h3>
          <ul className="list-disc list-inside space-y-1">
            <li><strong>CRUD des publications :</strong> créer, consulter, modifier et supprimer ses posts</li>
            <li><strong>Commentaires et réponses :</strong> commenter un post et répondre à d’autres utilisateurs</li>
            <li><strong>Likes et favoris :</strong> liker un post et l’ajouter à ses favoris</li>
            <li><strong>Système de notifications :</strong> notifications automatiques pour les nouveaux posts, commentaires et réponses</li>
            <li><strong>Suivis :</strong> suivre ou se désabonner d’un utilisateur pour personnaliser son fil d’actualité</li>
            <li><strong>Messagerie privée :</strong> envoi de messages directs entre utilisateurs</li>
            <li><strong>Signalement de contenu :</strong> signaler des posts inappropriés (notification aux modérateurs)</li>
            <li><strong>Sondages :</strong> création et participation à des sondages interactifs via les posts</li>
          </ul>
        </section>

        <section className="bg-gray-900 p-6 rounded-xl shadow-lg space-y-4">
          <h3 className="text-2xl font-semibold border-b border-gray-700">Maquette figma</h3>
          <div className="flex flex-col items-center">
            <img className="rounded-xl shadow-md w-100 md:w-2/3 pb-5" src="/projets/minouverse/uml.png" alt="Schéma UML du projet Minouverse" />
            <p className="text-gray-300 text-center">
              Diagramme UML représentant les entités principales : <em>User</em>, <em>Post</em>, <em>Comment</em>, <em>Notification</em>, <em>Message</em> et leurs relations.
            </p>
          </div>
        </section>

        <section className="bg-gray-900 p-6 rounded-xl shadow-lg space-y-4">
          <h3 className="text-2xl font-semibold border-b border-gray-700">Difficultés rencontrées</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Gestion des réponses imbriquées dans les commentaires</li>
            <li>Déclenchement automatique et cohérent des notifications sans duplication</li>
            <li>Mise à jour dynamique du frontend via AJAX pour les likes et notifications</li>
            <li>Organisation du code Flask pour séparer routes, modèles et logique métier</li>
          </ul>
        </section>

        <section className="bg-gray-900 p-6 rounded-xl shadow-lg space-y-4">
          <h3 className="text-2xl font-semibold border-b border-gray-700">Résultats et compétences acquises</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Maîtrise du développement d’une application web complète (frontend + backend)</li>
            <li>Conception et utilisation d’une API REST avec Flask</li>
            <li>Intégration d’un système de notifications automatisé</li>
            <li>Utilisation de Supabase pour la gestion de données relationnelles</li>
            <li>Modélisation UML et prototypage d’interfaces sur Figma</li>
            <li>Amélioration du travail collaboratif et de la gestion de projet</li>
          </ul>
          <a href="https://github.com/Haiku-na/Minouverse" target="_blank" className="inline-block mt-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-500 rounded-lg transition">
            Voir le code sur GitHub
          </a>
        </section>
        <section className="bg-gray-900 p-6 rounded-xl shadow-lg space-y-4">
          <h3 className="text-2xl font-semibold border-b border-gray-700">Ressources supplémentaires</h3>
          <p className="text-gray-300">Retrouvez ci-dessous la présentation du projet et la documentation technique :</p>
          <div className="flex flex-col items-center">
            <div className="w-full sm:w-1/2">
              <video className="rounded-xl shadow-md w-full" controls src="/projets/minouverse/demo.mp4">
                Votre navigateur ne supporte pas la vidéo.
              </video>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 m-2">
              <a href="/projets/minouverse/documentation_technique.pdf" download className="inline-block px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded-lg text-white text-center transition">
                Télécharger la documentation technique
              </a>
              <a href="https://www.figma.com/design/IvmaNKMV9T1yBaM1iIBT3E/Projet-Groupe-Minouverse?node-id=0-1&t=u8OuMHAeZMKHXnLB-1" className="inline-block px-4 py-2 bg-green-600 hover:bg-green-500 rounded-lg text-white text-center transition">
                Lien vers la maquette final
              </a>
            </div>
          </div>
        </section>

      </div>

      <div className="flex w-5/6 justify-between py-4">
        <a href="/portfolio/projets/jeulumiere" className="text-white p-3 bg-gray-800 rounded-xl hover:bg-gray-900 hover:text-gray-200">
          Projet précédent
        </a>
        <a href="/portfolio/projets/tamagoshi" className="text-white p-3 bg-gray-800 rounded-xl hover:bg-gray-900 hover:text-gray-200">
          Projet suivant
        </a>
      </div>
    </div>
  );
}
