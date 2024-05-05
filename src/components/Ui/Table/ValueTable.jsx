import React, { useState, useContext, useEffect } from "react";
import { Transition } from "@headlessui/react";
import axios from "axios";

import { AuthContext } from "../../../context/AuthProvider";

import ModalTypeData from "../Modal/ModalTypeData";


export default function ValueTable({ routeId, projectId }) {
  const { userData } = useContext(AuthContext);
  const [isModale, setIsModale] = useState(false);
  const [isLoad, setIsLoad] = useState(false);
  const [error, setIsError] = useState({
    isError: false,
    title: "",
    subTitle: "",
  });

  const [data, setData] = useState([]);

  const option = {
    method: "GET",
    url: "http://localhost:3001/datas/get-data/" + routeId,
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
    }
  };

  const optionCreate = {
    method: "GET",
    url: "http://localhost:3001/datas/get-datas/" + routeId,
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
    }
  };

  const handleCreateRoutes = () => {
    axios
      .request(optionCreate)
      .then(function (response) {
        setIsError({
          isError: false,
          title: "Succès",
          subTitle: "Le projet a été créé avec succès.",
        });
      })
      .catch(function (error) {
        console.error(error);
        setIsError({
          isError: true,
          title: "Erreur",
          subTitle: "Une erreur est survenue lors de la création du projet.",
        });
      })
      .finally(() => {
        // Reset the input value
        //inputRefEnd.current.value = "";
        //inputRefDesc.current.value = "";
        setIsLoad(false);
      });
  };

  const handelDuplicate = (value) => {
    const optionDuplicate = {
      method: "POST",
      url: "http://localhost:3001/datas/create-data",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
      data: value
    };

    axios
      .request(optionDuplicate)
      .then(function (response) {
        console.info(response);
      })
      .catch(function (error) {
        console.error(error);
      })
      .finally(() => {
        fetchData();
      });
  };


  const handelUpdate = (id, value) => {
    const optionUpdate = {
      method: "PUT",
      url: "http://localhost:3001/datas/update-data/" + id,
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
      data: value
    };

    axios
      .request(optionUpdate)
      .then(function (response) {
        console.info(response)
      })
      .catch(function (error) {
        console.error(error);
      })
  };




  const fetchData = async () => {
    axios
      .request(option)
      .then(function (response) {
        console.info(response);
        setData(response.data.data);
      })
      .catch(function (error) {
        console.error(error);
      })
      .finally(() => {
        setIsLoad(false);
      });
  };

  useEffect(() => {
    fetchData();
  }, [routeId]);

  const handleOnAdd = (data) => {
    setIsModale(false);
    alert(data);
  };

  return (
    <>
      <Transition
        show={isModale}
        enter="transition-opacity duration-100"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-100"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <ModalTypeData onClose={() => setIsModale(false)} onAdd={handleOnAdd} />
      </Transition>

      <div className="py-10">
        <div className="px-6 lg:px-8">
          <div className="sm:flex sm:items-center">
            <div className="sm:flex-auto">
              <h1 className="text-2xl font-semibold text-white">
                Liste des routes
              </h1>
              <p className="mt-2 text-sm text-gray-300">
                A list of all the users in your account including their name,
                title, email and role.
              </p>
            </div>
            <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none flex space-x-4">
              <a
              href="https://fakerjs.dev/api/"
                target="_blank"
                className="block rounded-md border-indigo-500 border py-1.5 px-3 text-center text-sm font-semibold leading-6 text-indigo-500 hover:bg-indigo-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              >
                Documentation Faker.js
              </a>
              <button
                onClick={() => setIsModale(true)}
                type="button"
                className="block rounded-md bg-indigo-500 py-1.5 px-3 text-center text-sm font-semibold leading-6 text-white hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              >
                Ajouter une donnée
              </button>
            </div>
          </div>
          <div className="mt-8 flow-root">
            <div className="-my-2 -mx-6 overflow-x-auto lg:-mx-8">
              <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                <table className="min-w-full divide-y divide-gray-700">
                  <thead>
                    <tr>
                      <th
                        scope="col"
                        className="py-3.5 pl-6 pr-3 text-left text-sm font-light text-white uppercase sm:pl-0"
                      >
                        Endpoint
                      </th>
                      <th
                        scope="col"
                        className="py-3.5 px-3 text-left text-sm font-light text-white uppercase"
                      >
                        Type
                      </th>
                      <th
                        scope="col"
                        className="py-3.5 px-3 text-left text-sm font-light text-white uppercase"
                      >
                        Valeur{" "}
                      </th>
                      <th
                        scope="col"
                        className="py-3.5 px-3 text-left text-sm font-light text-white uppercase"
                      >
                        ARGUMENT (optionnel){" "}
                      </th>
                      <th
                        scope="col"
                        className="relative py-3.5 pl-3 pr-6 sm:pr-0"
                      >
                        <span className="sr-only">Edit</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-800">
                    {data.map((person, personIdx) => (
                      <tr key={personIdx}>
                        <td className="whitespace-nowrap text-sm font-medium text-white sm:pl-0">
                          <input
                            type="text"
                            className="bg-custom-700 py-2 pl-3 pr-3  text-white rounded-md w-full"
                            value={person.name}
                            onChange={(e) => {
                              setData(
                                data.map((item) =>
                                  item._id === person._id
                                    ? { ...item, name: e.target.value }
                                    : item
                                )
                              );
                              handelUpdate(person._id, {
                                name: e.target.value,
                              });
                            }}
                          />
                        </td>
                        <td className="whitespace-nowrap py-4 px-3 text-sm text-gray-300">
                          {person.type}
                        </td>
                        <td className="whitespace-nowrap py-4 px-3 text-sm text-gray-300">
                          {person.valeur}
                        </td>
                        <input
                          type="text"
                          className="bg-custom-700 py-2 pl-3 pr-3 text-sm text-gray-300 rounded-md w-full"
                          value={person.argument}
                          onChange={(e) => {
                            setData(
                              data.map((item) =>
                                item._id === person._id
                                  ? { ...item, argument: e.target.value }
                                  : item
                              )
                            );
                            handelUpdate(person._id, {
                              argument: e.target.value,
                            });
                          }}
                        />
                        <td className="whitespace-nowrap py-4 px-3 text-sm text-gray-300">
                          {person.date_update}
                        </td>
                        <td className="whitespace-nowrap py-4 px-3 text-sm text-gray-300">
                          {person.date_create}
                        </td>
                        <td className="relative whitespace-nowrap py-4 pl-3 pr-6 text-right text-sm font-medium sm:pr-0">
                          <button
                            className="text-slate-200 hover:text-slate-300"
                            onClick={() => {
                              handelDuplicate({
                                project_id: projectId,
                                route_id: routeId,
                                name: person.name + "_copie",
                                type: person.type,
                                valeur: person.valeur,
                                argument: person.argument,
                              });
                            }}
                          >
                            Dupliquer
                            <span className="sr-only">, {person.name}</span>
                          </button>
                          <button className="ml-4 text-red-400 hover:text-red-300">
                            Supprimer
                            <span className="sr-only">, {person.name}</span>
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
