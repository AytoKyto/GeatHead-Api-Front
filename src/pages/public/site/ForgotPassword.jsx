import React, { useState } from "react";
import { Link } from "react-router-dom";
import { LockClosedIcon } from "@heroicons/react/20/solid";
import { faker } from "@faker-js/faker";

import { forgotPassword } from "../../../api/UserService";

import WallSvg from "../../../components/Ui/Other/WallSvg";

import logo_full_white from "../../../assets/logo/logo_full_white.svg";

/**
 * Component for user sign in
 */
export default function ForgotPassword() {
  /**
   * User data state
   * @typedef {Object} UserData
   * @property {string} email - The user's email address
   * @property {string} password - The user's password
   * @property {boolean} remember - Whether to remember the user or not
   */
  const [email, setEmail] = useState("");

  return (
    <div className="min-h-screen relative isolate overflow-hidden bg-slate-900">
      <WallSvg />
      <div className="flex min-h-screen items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
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
        <div className="w-full max-w-md space-y-8">
          <div>
            <img
              className="mx-auto h-12 w-auto"
              src={logo_full_white}
              alt="Your Company"
            />
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-slate-100">
              Mot de passe oublié
            </h2>
          </div>
          <div className="mt-8 space-y-6">
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="-space-y-px rounded-md shadow-sm">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Adresse email
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="relative block w-full bg-transparent text-white appearance-none rounded-none rounded-t-md border border-slate-300 px-3 py-2 placeholder-slate-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Adresse email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            <div>
              {email.includes("@") ? (
                <button
                  onClick={() => {
                    const newPassword = faker.internet.password();
                    forgotPassword({
                      email: email,
                      newPassword: newPassword,
                    });
                  }}
                  type="submit"
                  className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Envoyer
                </button>
              ) : (
                <button
                  type="submit"
                  disabled
                  className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-500 py-2 px-4 text-sm font-medium text-white"
                >
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <LockClosedIcon
                      className="h-5 w-5 text-indigo-300"
                      aria-hidden="true"
                    />
                  </span>
                  Envoyer
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
