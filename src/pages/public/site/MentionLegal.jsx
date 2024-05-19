import React from "react";
import { Link } from "react-router-dom";
import WallSvg from "../../../components/Ui/Other/WallSvg";

export default function MentionLegal() {
  return (
    <>
      {/* Retour with arrow */}

      <div className="flex min-h-screen bg-slate-900 justify-center items-center isolate overflow-hidden">
        <WallSvg />
        <div className="flex flex-1 flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
          {/* Retour with arrow */}

          <div className="absolute top-0 left-0 m-4">
            <Link to="/" className="flex items-center space-x-2">
              <svg
                className="h-6 w-6 text-slate-100 hover:text-slate-200"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              <p className="text-slate-100 hover:text-slate-200">Retour</p>
            </Link>
          </div>

          <div className="mx-auto w-full  lg:w-96 text-white">
            <h1 className="text-2xl font-semibold">
              Politiques de Confidentialité
            </h1>
            <p className="mt-4 text-gray-200">
              <strong>Nom de l'entreprise :</strong> GetHead
              <br />
              <strong>Adresse :</strong> 66 rue de Verdun, 76160 Darnetal,
              France
              <br />
              <strong>Téléphone :</strong> contact@getheadapi.com
              <br />
              <strong>URL du site web :</strong>{" "}
              <a href="https://getheadapi.com" className="text-blue-500">
                getheadapi.com
              </a>
            </p>
            <h2 className="mt-6 text-xl font-semibold">
              Types de données personnelles collectées
            </h2>
            <p className="mt-2 text-gray-200">
              Nous collectons les données personnelles suivantes :<br />
              - Email
              <br />- Mot de passe
            </p>
            <h2 className="mt-6 text-xl font-semibold">
              Méthodes de collecte des données
            </h2>
            <p className="mt-2 text-gray-200">
              Les données personnelles sont collectées par le biais de :<br />
              - Formulaires en ligne
              <br />- Inscription sur notre application
            </p>
            <h2 className="mt-6 text-xl font-semibold">
              Finalités de la collecte des données
            </h2>
            <p className="mt-2 text-gray-200">
              Nous collectons ces données dans le but de permettre le
              fonctionnement de notre application SAAS.
            </p>
            <h2 className="mt-6 text-xl font-semibold">
              Partage des données avec des tiers
            </h2>
            <p className="mt-2 text-gray-200">
              Nous ne partageons pas les données personnelles de nos
              utilisateurs avec des tiers.
            </p>
            <h2 className="mt-6 text-xl font-semibold">
              Protection des données personnelles
            </h2>
            <p className="mt-2 text-gray-200">
              Nous mettons en œuvre les mesures suivantes pour protéger les
              données personnelles de nos utilisateurs :<br />
              - Cryptage des données
              <br />- Contrôle d'accès strict
            </p>
            <h2 className="mt-6 text-xl font-semibold">
              Durée de conservation des données
            </h2>
            <p className="mt-2 text-gray-200">
              Nous conservons les données personnelles pour la durée de
              fonctionnement de l'application.
            </p>
            <h2 className="mt-6 text-xl font-semibold">
              Droits des utilisateurs
            </h2>
            <p className="mt-2 text-gray-200">
              Les utilisateurs ont les droits suivants concernant leurs données
              personnelles :<br />
              - Accès à leurs données
              <br />
              - Rectification de leurs données
              <br />- Suppression de leurs données
            </p>
            <h2 className="mt-6 text-xl font-semibold">
              Exercice des droits des utilisateurs
            </h2>
            <p className="mt-2 text-gray-200">
              Les utilisateurs peuvent exercer leurs droits en contactant notre
              service client à l'adresse suivante : contact@getheadapi.com
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
