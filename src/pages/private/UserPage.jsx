import React, { useState, useEffect, useContext } from "react";
import { toast } from "sonner";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeftCircleIcon } from "@heroicons/react/24/outline";
import {
  getDataUser,
  updateDataUser,
  updatePasswordUser,
} from "../../api/UserService";

import { AuthContext } from "../../context/AuthProvider";

import DefaultLayoutApp from "../../components/layout/DefaultLayoutApp";
import DefaultBox from "../../components/layout/DefaultBox";

export default function UserPage() {
  const navigate = useNavigate();

  const { userData } = useContext(AuthContext);
  const [userAllData, setUserAllData] = useState();
  const [userEmail, sertUserEmail] = useState();
  const [userPassword, setUserPassword] = useState({
    password: null,
    passwordConfirme: null,
  });

  const initData = async (id) => {
    const userDatas = await getDataUser(userData.id);
    setUserAllData(userDatas);
    sertUserEmail(userDatas.email);
  };

  const resetPassword = async () => {
    if (userPassword.password === userPassword.passwordConfirme) {
      updatePasswordUser({
        newPassword: userPassword.password,
        id: userData.id,
      });
    } else {
      toast.error("Mauvais mot de passe de confirmation");
    }
  };

  useEffect(() => {
    initData(userData.id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <DefaultLayoutApp>
      <div className="pt-10 px-10">
        <div className="flex justify-between items-center">
          <Link to="/project">
            <ArrowLeftCircleIcon
              className="h-7 w-7 mb-10 text-slate-300 p-1 border border-slate-700 rounded-md hover:bg-slate-700 cursor-pointer"
              aria-hidden="true"
            />
          </Link>
          <button
            onClick={() => {
              localStorage.removeItem("token");
              navigate("/");
            }}
            className="px-5 mb-10 text-sm text-slate-300 p-1 border border-slate-700 rounded-md hover:bg-slate-700 cursor-pointer"
            aria-hidden="true"
          >
            Déconnection
          </button>
        </div>
        <DefaultBox customClass="p-5">
          <div className="space-y-12">
            <div className="border-b border-white/10 pb-12">
              <h2 className="font-semibold leading-7 text-slate-100 text-xl">
                Information personnel
              </h2>
              {/* <p className="mt-1 text-sm leading-6 text-gray-400">
              Use a permanent address where you can receive mail.
            </p> */}

              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-4">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 text-white"
                  >
                    Adresse e-mail
                  </label>
                  <div className="mt-2">
                    <input
                      defaultValue={userEmail}
                      onChange={(e) => sertUserEmail(e.target.value)}
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>
              <div className="mt-6 flex items-center justify-end gap-x-6">
                <button
                  onClick={() =>
                    updateDataUser(userData.id, { email: userEmail })
                  }
                  type="submit"
                  className="rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                >
                  Sauvegarder
                </button>
              </div>
            </div>
            <div className="border-b border-white/10 pb-12">
              <h2 className="font-semibold leading-7 text-slate-100 text-xl">
                Modifier ou réinitialiser votre mot de passe
              </h2>
              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="sm:col-span-4">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 text-white"
                  >
                    Nouveau mot de passe
                  </label>
                  <div className="mt-2">
                    <input
                      onChange={(e) =>
                        setUserPassword({
                          ...userPassword,
                          password: e.target.value,
                        })
                      }
                      type="password"
                      className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-4">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 text-white"
                  >
                    Confimer le mot de passe
                  </label>
                  <div className="mt-2">
                    <input
                      onChange={(e) =>
                        setUserPassword({
                          ...userPassword,
                          passwordConfirme: e.target.value,
                        })
                      }
                      type="password"
                      className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-6 flex items-center justify-end gap-x-6">
              <button
                onClick={() => resetPassword()}
                type="submit"
                className="rounded-md bg-indigo-500 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              >
                Sauvegarder
              </button>
            </div>
          </div>
        </DefaultBox>
      </div>
    </DefaultLayoutApp>
  );
}
