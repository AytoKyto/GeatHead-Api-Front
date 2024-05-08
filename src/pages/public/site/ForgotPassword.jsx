import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import WallSvg from "../../../components/Ui/Other/WallSvg";
import DefaultAlert from "../../../components/Ui/DefaultAlert";
import { AuthContext } from "../../../context/AuthProvider";

import logo_full_white from "../../../assets/logo/logo_full_white.svg";

/**
 * Component for user sign in
 */
export default function ForgotPassword() {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

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
   * Handle the checkbox change event
   * @param {React.ChangeEvent<HTMLInputElement>} event - The checkbox change event
   */
  const handleCheckboxChange = (event) => {
    setData({ ...data, remember: event.target.checked });
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
    url: "http://localhost:3001/auth/login",
    headers: { "Content-Type": "application/json" },
    data: data,
  });

  /**
   * Handle the sign in form submission
   * @param {React.FormEvent<HTMLFormElement>} e - The form submission event
   */
  const handleSignIn = async (e) => {
    e.preventDefault();
    axios
      .request(options)
      .then(async function (response) {
        if (response.data.status) {
          await login(response.data.token);
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
      })
      .finally(() => {
        navigate("/project");
      });
  };

  return (
    <div className="min-h-screen relative isolate overflow-hidden bg-slate-900">
      <WallSvg />
      <div className="flex min-h-screen items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        {/* Retour with arrow */}
        {alertData.title && alertData.subTitle && alertData.error && (
          <DefaultAlert
            title={alertData.title}
            subTitle={alertData.subTitle}
            error={alertData.error}
            onClose={handleClose}
          />
        )}

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
        <form className="w-full max-w-md space-y-8" onSubmit={handleSignIn}>
          <div>
            <img
              className="mx-auto h-12 w-auto"
              src={logo_full_white}
              alt="Your Company"
            />
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-slate-100">
              Mot de passe oublié /!\ indisponible
            </h2>
            <p className="mt-6 text-center text-xl font-bold tracking-tight text-slate-100">
              <strong>Contact : </strong>m.fleury942@gmail.com
            </p>
          </div>
          {/* <div className="mt-8 space-y-6">
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
                  onChange={(e) => setData({ ...data, email: e.target.value })}
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              >
                Envoyer
              </button>
            </div>
          </div> */}
        </form>
      </div>
    </div>
  );
}
