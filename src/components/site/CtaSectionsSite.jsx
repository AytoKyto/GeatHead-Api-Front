import React from "react";
import { Link } from "react-router-dom";

export default function CtaSectionSite() {
  return (
    <div className="relative isolate overflow-hidden bg-slate-900">
      <div className="py-24 px-6 sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-bold tracking-tight text-white">
            Découvrez notre application !
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-slate-300">
            Créez un compte dès maintenant et accédez à toutes les
            fonctionnalités de notre solution pour améliorer votre processus de
            développement et tester vos applications plus rapidement.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              to="/register"
              className="rounded-md bg-white px-3.5 py-1.5 text-base font-semibold leading-7 text-slate-900 shadow-sm hover:bg-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
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
      </div>
      <svg
        viewBox="0 0 1024 1024"
        className="absolute top-1/2 left-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
        aria-hidden="true"
      >
        <circle
          cx={512}
          cy={512}
          r={512}
          fill="url(#8d958450-c69f-4251-94bc-4e091a323369)"
          fillOpacity="0.7"
        />
        <defs>
          <radialGradient id="8d958450-c69f-4251-94bc-4e091a323369">
            <stop stopColor="#312E81" />
            <stop offset={1} stopColor="#4F46E5" />
          </radialGradient>
        </defs>
      </svg>
    </div>
  );
}
