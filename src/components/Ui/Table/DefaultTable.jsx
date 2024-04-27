import React, { useState, useContext, useEffect, useRef } from 'react'
import axios from 'axios'
import { Link } from "react-router-dom";

import { AuthContext } from "../../../context/AuthProvider";

export default function DefaultTable({ projectId }) {
    const { userData } = useContext(AuthContext);
    // useRef for the input
    const inputRefEnd = useRef(null);
    const inputRefDesc = useRef(null);

    const [routes, setRoutes] = useState([]);
    const [error, setIsError] = useState({
        isError: false,
        title: "",
        subTitle: ""
    });
    const [data, setData] = useState({
        endpoint: "",
        project_id: "",
        description: "",
        date_create: "",
        date_update: ""
    });

    const options = {
        method: 'GET',
        url: 'http://localhost:3001/routes/get-route/' + projectId,
        headers: {
            Authorization: 'Bearer ' + localStorage.getItem("token")
        }
    };

    const optionCreate = {
        method: 'POST',
        url: 'http://localhost:3001/routes/create-route',
        headers: {
            Authorization: 'Bearer ' + localStorage.getItem("token")
        },
        data: { endpoint: data.endpoint, project_id: data.project_id, description: data.description }
    };


    const fetchData = async () => {
        axios.request(options).then(function (response) {
            setRoutes(response.data.data);
        }).catch(function (error) {
            console.error(error);
            setIsError({
                isError: true,
                title: "Erreur",
                subTitle: "Une erreur est survenue lors de la création du projet."
            });
        });
    };

    useEffect(() => {
        const projectId = window.location.pathname.split("/")[2];
        setData(prevData => ({ ...prevData, project_id: projectId }));
        fetchData();
    }, [projectId]);

    const handleCreateRoutes = () => {
        axios.request(optionCreate).then(function (response) {
            setIsError({
                isError: false,
                title: "Succès",
                subTitle: "Le projet a été créé avec succès."
            });
        }).catch(function (error) {
            console.error(error);
            setIsError({
                isError: true,
                title: "Erreur",
                subTitle: "Une erreur est survenue lors de la création du projet."
            });
        }).finally(() => {
            // Reset the input value
            inputRefEnd.current.value = "";
            inputRefDesc.current.value = "";
            fetchData();
        });
    }

    const handleDeleteRoutes = (id) => {
        const options = {
            method: 'DELETE',
            url: 'http://localhost:3001/routes/' + id,
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem("token")
            }
        };
        axios.request(options).then(function (response) {
            setIsError({
                isError: false,
                title: "Succès",
                subTitle: "Le projet a été créé avec succès."
            });
        }).catch(function (error) {
            console.error(error);
            setIsError({
                isError: true,
                title: "Erreur",
                subTitle: "Une erreur est survenue lors de la création du projet."
            });
        }).finally(() => {
            fetchData();
        });
    }


    return (
        <div className="py-10">
            <div className="px-6 lg:px-8">
                <div className="sm:flex sm:items-center">
                    <div className="sm:flex-auto">
                        <h1 className="text-2xl font-semibold text-white">Liste des routes</h1>
                        <p className="mt-2 text-sm text-gray-300">
                            A list of all the users in your account including their name, title, email and role.
                        </p>
                    </div>
                    {/* <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
                        <button
                            type="button"
                            className="block rounded-md bg-indigo-500 py-1.5 px-3 text-center text-sm font-semibold leading-6 text-white hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                        >
                            Créer une nouvelle route
                        </button>
                    </div> */}
                </div>
                <div className="mt-8 flow-root">
                    <div className="-my-2 -mx-6 overflow-x-auto lg:-mx-8">
                        <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                            <table className="min-w-full divide-y divide-gray-700">
                                <thead>
                                    <tr>
                                        <th scope="col" className="py-3.5 pl-6 pr-3 text-left text-sm font-light text-white uppercase sm:pl-0">
                                            Endpoint
                                        </th>
                                        <th scope="col" className="py-3.5 px-3 text-left text-sm font-light text-white uppercase">
                                            Description
                                        </th>
                                        <th scope="col" className="py-3.5 px-3 text-left text-sm font-light text-white uppercase">
                                            Date de modification
                                        </th>
                                        <th scope="col" className="py-3.5 px-3 text-left text-sm font-light text-white uppercase">
                                            Date de création
                                        </th>
                                        <th scope="col" className="relative py-3.5 pl-3 pr-6 sm:pr-0">
                                            <span className="sr-only">Edit</span>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-800">
                                    {routes.map((routes, key) => (
                                        <tr key={key}>
                                            <td className="whitespace-nowrap py-4 pl-6 pr-3 text-sm font-medium text-white sm:pl-0">
                                                {routes.endpoint}
                                            </td>
                                            <td className="whitespace-nowrap py-4 px-3 text-sm text-gray-300">{routes.description}</td>
                                            <td className="whitespace-nowrap py-4 px-3 text-sm text-gray-300">{new Date(routes.date_updated).toLocaleDateString()}</td>
                                            <td className="whitespace-nowrap py-4 px-3 text-sm text-gray-300">{new Date(routes.date_created).toLocaleDateString()}</td>
                                            <td className="relative whitespace-nowrap py-4 pl-3 pr-6 text-right text-sm font-medium sm:pr-0">
                                                <Link
                                                    to={"/editor/" + projectId + "/" + routes._id}
                                                    className="text-indigo-400 hover:text-indigo-300">
                                                    Modifier<span className="sr-only">, {routes.endpoint}</span>
                                                </Link>
                                                <button className="ml-4 text-red-400 hover:text-red-300" onClick={() => handleDeleteRoutes(routes._id)}>
                                                    Supprimer<span className="sr-only">, {routes.endpoint}</span>
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                    {/* New row */}
                                    <tr>
                                        <td className="whitespace-nowrap py-4 pl-6 pr-3 text-sm font-medium text-white sm:pl-0">
                                            <div className="flex items-center">
                                                <p className="text-sm font-medium text-gray-300 mr-2">/</p>
                                                <input
                                                    type="text"
                                                    className="w-full px-3 py-2 bg-transparent text-sm text-slate-100 placeholder-slate-300 border border-slate-800 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                    placeholder="Endpoint"
                                                    onChange={(e) => {
                                                        setData({
                                                            ...data,
                                                            endpoint: e.target.value
                                                        })
                                                    }}
                                                    ref={inputRefEnd}
                                                />
                                            </div>
                                        </td>
                                        <td className="whitespace-nowrap py-4 px-3 text-sm text-gray-300">
                                            <input
                                                type="text"
                                                className="w-full px-3 py-2 bg-transparent text-sm text-slate-100 placeholder-slate-300 border border-slate-800 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                placeholder="Description"
                                                onChange={(e) => {
                                                    setData({
                                                        ...data,
                                                        description: e.target.value
                                                    })
                                                }}
                                                ref={inputRefDesc}
                                            />
                                        </td>
                                        <td className="whitespace-nowrap py-4 px-3 text-sm text-gray-300">
                                        </td>
                                        <td className="whitespace-nowrap py-4 px-3 text-sm text-gray-300">
                                        </td>
                                        <td className="relative whitespace-nowrap py-4 pl-3 pr-6 text-right text-sm font-medium sm:pr-0">
                                            <button
                                                onClick={handleCreateRoutes}
                                                className="text-indigo-400 hover:text-indigo-300"
                                            >
                                                Ajouter
                                            </button>
                                            <button
                                                className="ml-4 text-red-400 hover:text-red-300"
                                                onClick={() => {
                                                    // reset input value
                                                    inputRefEnd.current.value = ''
                                                    inputRefDesc.current.value = ''

                                                    // reset data
                                                    setData({
                                                        endpoint: '',
                                                        description: ''
                                                    })
                                                }}
                                            >
                                                Annuler
                                            </button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
