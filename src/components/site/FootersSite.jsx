/* eslint-disable jsx-a11y/no-redundant-roles */
import React from "react";
import { Link } from "react-router-dom";

import logo_full_white from "../../assets/logo/logo_full_white.svg";

const navigation = {
  solutions: [
    { name: "Mention Légal", href: "/mention-legal" },
    {
      name: "Politiques de Confidentialité",
      href: "/politiques-confidentialite",
    },
  ],
};

export default function FootersSite() {
  return (
    <footer className="bg-slate-900" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8 lg:py-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <img
            className="h-21 w-auto"
            src={logo_full_white}
            alt="Company name"
          />
        </div>
        <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
          <div role="list" className="mt-6 flex space-x-4">
            {navigation.solutions.map((item) => (
              <div key={item.name}>
                <Link
                  to={item.href}
                  className="text-sm leading-6 text-slate-300 hover:text-white"
                >
                  {item.name}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
