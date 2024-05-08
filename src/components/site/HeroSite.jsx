import React from "react";
import { Link } from "react-router-dom";
import { ChevronRightIcon } from "@heroicons/react/20/solid";

import logo_full_white from "../../assets/logo/logo_full_white.svg";
import WallSvg from "../Ui/Other/WallSvg";
import image from "../../assets/images/screen1.png";

export default function HeroSite() {
  return (
    <div className="relative isolate overflow-hidden bg-slate-900">
      <WallSvg />
      <div className="mx-auto max-w-7xl px-6 pt-10 pb-24 sm:pb-32 lg:flex lg:py-40 lg:px-8">
        <div className="mx-auto max-w-2xl flex-shrink-0 lg:mx-0 lg:max-w-xl lg:pt-8">
          <img className="h-13" src={logo_full_white} alt="Gethead logo" />
          <div className="mt-24 sm:mt-32 lg:mt-16">
            <Link to="/" className="inline-flex space-x-6">
              <span className="rounded-full bg-indigo-500/10 px-3 py-1 text-sm font-semibold leading-6 text-indigo-400 ring-1 ring-inset ring-indigo-500/20">
                Quoi de neuf ?
              </span>
              <span className="inline-flex items-center space-x-2 text-sm font-medium leading-6 text-slate-300">
                <span>BETA v0.1</span>
                <ChevronRightIcon
                  className="h-5 w-5 text-slate-500"
                  aria-hidden="true"
                />
              </span>
            </Link>
          </div>
          <h1 className="mt-10 text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Création rapide d'API de test
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-300">
            Créez facilement des API de test personnalisées avec des données
            fictives en quelques clics, grâce à notre générateur d'API alimenté
            par Faker.js. Simplifiez votre processus de développement et
            améliorez la qualité de vos tests avec nos solutions sur mesure.
          </p>
          <div className="mt-10 flex items-center gap-x-6">
            <Link
              to="/register"
              className="rounded-md bg-indigo-500 px-3.5 py-1.5 text-base font-semibold leading-7 text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-400"
            >
              Commencer
            </Link>
            <Link
              to="/signin"
              className="text-base font-semibold leading-7 text-white"
            >
              Vous connecter
            </Link>
          </div>
        </div>
        <div className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mt-0 lg:mr-0 lg:max-w-none lg:flex-none xl:ml-32">
          <div className="max-w-3xl flex-none sm:max-w-5xl lg:max-w-none">
            <img
              src={image}
              alt="App screenshot"
              width={2432}
              height={1442}
              className="w-[76rem] rounded-md bg-white/5 shadow-2xl ring-1 ring-white/10"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
