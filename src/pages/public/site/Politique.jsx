import React from "react";
import { Link } from "react-router-dom";

import WallSvg from "../../../components/Ui/Other/WallSvg";

export default function Politique() {
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

          <div className="mx-auto w-full lg:w-96 text-white">
            <h1 className="text-2xl font-semibold">Mentions Légales</h1>
            <p className="mt-4 text-gray-200">
              <strong>Nom de l'éditeur du site :</strong> Mathis Fleury
              <br />
              <strong>Responsable de la publication :</strong> Mathis Fleury
              <br />
              <strong>Hébergeur du site :</strong> Render
            </p>
            <h2 className="mt-6 text-xl font-semibold">
              Propriété intellectuelle
            </h2>
            <p className="mt-2 text-gray-200">
              Tous les contenus présents sur ce site (textes, images, logos)
              sont protégés par les droits d'auteur. Toute reproduction,
              distribution, modification ou utilisation de ces contenus sans
              autorisation préalable est strictement interdite.
            </p>
            <h2 className="mt-6 text-xl font-semibold">
              Limitation de responsabilité
            </h2>
            <p className="mt-2 text-gray-200">
              Nous nous efforçons de maintenir à jour les informations présentes
              sur notre site, mais nous ne pouvons garantir leur exactitude.
              Nous déclinons toute responsabilité en cas d'erreurs ou
              d'omissions dans le contenu du site.
            </p>
            <h2 className="mt-6 text-xl font-semibold">Règles de modération</h2>
            <p className="mt-2 text-gray-200">
              Il n'y a pas de modération active sur notre site. Cependant, en
              cas de besoin, nous nous réservons le droit de modérer les
              contenus selon notre jugement.
            </p>
            <h2 className="mt-6 text-xl font-semibold">
              Utilisation de cookies
            </h2>
            <p className="mt-2 text-gray-200">
              Notre site utilise des cookies pour améliorer l'expérience
              utilisateur. En continuant à naviguer sur notre site, vous
              acceptez l'utilisation des cookies.
            </p>
            <h2 className="mt-6 text-xl font-semibold">
              Loi applicable et juridiction compétente
            </h2>
            <p className="mt-2 text-gray-200">
              Les présentes mentions légales sont régies par la loi française.
              En cas de litige, les tribunaux français seront seuls compétents.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
