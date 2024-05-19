import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { LockClosedIcon } from "@heroicons/react/20/solid";

import InfoSiteAuth from "../../../components/site/InfoSiteAuth";
import WallSvg from "../../../components/Ui/Other/WallSvg";
import { AuthContext } from "../../../context/AuthProvider";
import DefaultAlert from "../../../components/Ui/DefaultAlert";
import { createUser } from "../../../api/UserService";

import logo_full_white from "../../../assets/logo/logo_full_white.svg";

export default function Register() {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  /**
   * Handle the checkbox change event
   * @param {React.ChangeEvent<HTMLInputElement>} event - The checkbox change event
   */
  const handleCheckboxChange = (event) => {
    setData({ ...data, remember: event.target.checked });
  };

  /**
   * Alert data state
   * @typedef {Object} AlertData
   * @property {string} title - The title of the alert
   * @property {string} subTitle - The subtitle of the alert
   * @property {boolean} error - Whether the alert is an error or not
   */
  const [alertData, setAlertData] = useState(
    /** @type AlertData */ ({
      title: "",
      subTitle: "",
      error: false,
    })
  );

  /**
   * User data state
   * @typedef {Object} UserData
   * @property {string} email - The user's email address
   * @property {string} password - The user's password
   * @property {boolean} remember - Whether to remember the user or not
   */
  const [data, setData] = useState(
    /** @type UserData */ ({
      email: "",
      password: "",
      remember: false,
    })
  );

  /**
   * Close the alert
   */
  const handleClose = () => {
    setAlertData({
      title: "",
      subTitle: "",
      error: false,
    });
  };

  /**
   * Options for the axios request
   * @typedef {Object} RequestOptions
   * @property {string} method - The HTTP method
   * @property {string} url - The URL to request
   * @property {Object} headers - The request headers
   * @property {UserData} data - The request data
   */
  const options = /** @type RequestOptions */ ({
    method: "POST",
    url: "http://localhost:3001/auth/register",
    headers: { "Content-Type": "application/json" },
    data: data,
  });

  /**
   * Handle the sign in form submission
   * @param {React.FormEvent<HTMLFormElement>} e - The form submission event
   */
  const handleRegister = (e) => {
    e.preventDefault();
    axios
      .request(options)
      .then(async function (response) {
        if (response.data.status) {
          await login(response.data.token);
          navigate("/project");
        } else {
          setAlertData({
            title: "Une erreur est survenue !",
            subTitle: response.data.message,
            error: true,
          });
        }
      })
      .catch(function (error) {
        console.error(error);
        if (error.response) {
          setAlertData({
            title: "Une erreur est survenue !",
            subTitle: error.response.data.message,
            error: true,
          });
        }
      });
  };

  return (
    <>
      {/* Retour with arrow */}

      <div className="flex min-h-screen bg-slate-900 isolate overflow-hidden">
        <WallSvg />
        {alertData.title && (
          <DefaultAlert
            title={alertData.title}
            subTitle={alertData.subTitle}
            error={alertData.error}
            onClose={handleClose}
          />
        )}
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

          <div className="mx-auto w-full max-w-sm lg:w-96">
            <div>
              <img
                className="w-auto h-20"
                src={logo_full_white}
                alt="Your Company"
              />
              <h2 className="mt-12 text-3xl font-bold tracking-tight text-slate-100">
                Créer un compte
              </h2>
            </div>

            <div className="mt-8 space-y-6">
              <div className="mt-6">
                <div className="space-y-6">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-slate-200"
                    >
                      Email
                    </label>
                    <div className="mt-1">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        autoComplete="email"
                        required
                        className="block w-full appearance-none text-white bg-transparent rounded-md border border-slate-300 px-3 py-2 placeholder-slate-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                        onChange={(e) =>
                          setData({ ...data, email: e.target.value })
                        }
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium text-slate-200"
                    >
                      Mot de passe
                    </label>
                    <div className="mt-1">
                      <input
                        id="password"
                        name="password"
                        type="password"
                        autoComplete="current-password"
                        required
                        className="block w-full appearance-none text-white bg-transparent rounded-md border border-slate-300 px-3 py-2 placeholder-slate-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                        onChange={(e) =>
                          setData({ ...data, password: e.target.value })
                        }
                      />
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <input
                        id="remember-me"
                        name="remember-me"
                        type="checkbox"
                        className="h-4 w-4 rounded  border-slate-300 text-indigo-600 focus:ring-indigo-500"
                        onChange={handleCheckboxChange}
                        checked={data.remember}
                      />
                      <label
                        htmlFor="remember-me"
                        className="ml-2 block text-sm text-slate-100"
                      >
                        Accepter les conditions d'utilisation
                      </label>
                    </div>

                    <div className="text-sm">
                      <Link
                        to="/forgot-password"
                        className="font-medium text-indigo-600 hover:text-indigo-500"
                      >
                        Mot de passe oublié ?
                      </Link>
                    </div>
                  </div>

                  <div>
                    {data.remember ? (
                      <button
                        onClick={async () => {
                          try {
                            const createUserData = await createUser(data);
                            if (createUserData) {
                              await login(createUserData.data.token);
                              navigate("/project");
                            } else {
                              // Gérer le cas où createUserData est null ou non valide
                              console.error(
                                "Échec de la création de l'utilisateur."
                              );
                            }
                          } catch (error) {
                            console.error(
                              "Erreur lors de la création de l'utilisateur:",
                              error
                            );
                            // Vous pouvez également afficher une notification ou un message d'erreur à l'utilisateur ici
                          }
                        }}
                        type="submit"
                        className="flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                      >
                        Créer un compte
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
                        Créer un compte
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative hidden w-0 flex-1 lg:block">
          <InfoSiteAuth />
        </div>
      </div>
    </>
  );
}
