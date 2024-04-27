import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import useAxiosFunction from '../../../hooks/useAxiosFunction'
import DefaultApi from '../../../api/DefaultApi'

import ProjectMenu from '../Menu/ProjectMenu'
import DefaultAlert from '../DefaultAlert';

export default function ProjectCard({ name, id, date, fetchData }) {
    const { response, error, loading, axiosFetch } = useAxiosFunction();
    const [alert, setIsAlert] = useState({
        isError: false,
        title: "",
        subTitle: ""
    });

    const deleteProject = (id_project) => {
        axiosFetch({
            axiosInstance: DefaultApi,
            method: "DELETE",
            url: "/projects/delete-project/" + id_project,
        });
    };

    useEffect(() => {
        if (response !== null) {
            setIsAlert({ isError: false, title: "Succès", subTitle: "Le projet a bien été supprimé." });
            // after 3 seconds, close the alert
            setTimeout(() => {
                fetchData();
            }, 1500);
        }
        if (error) {
            setIsAlert({ isError: true, title: "Erreur", subTitle: "Une erreur est survenue lors de la suppression du projet." });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [response, error]);


    return (
        <>
            {alert.title !== ""
                && <DefaultAlert title={alert.title} subTitle={alert.subTitle} error={alert.isError} onClose={() => setIsAlert({ isError: false, title: "", subTitle: "" })} />
            }
            <div>
                <div
                    //to={`/list/${id}`}
                    className="p-5 flex justify-between items-center bg-slate-800 rounded-lg space-x-5">
                    <Link
                        to={`/list/${id}`}
                        className="w-auto h-full p-5 bg-slate-700 rounded-lg flex justify-center items-center cursor-pointer hover:bg-slate-600 focus:bg-slate-600 transition-all">
                        <p
                            className="text-2xl font-bold text-slate-100 uppercase">
                            {name.substring(0, 3)}
                        </p>
                    </Link>
                    <div className="w-3/4 h-full flex flex-col justify-between">
                        <div className="flex justify-between">
                            <div className="w-full flex flex-col space-y-3">
                                <div className="flex justify-between w-full">
                                    <p className="text-xl font-bold text-slate-100 uppercase">
                                        {name.length < 10 ? name : name.substring(0, 10) + "..."}
                                    </p>
                                    <ProjectMenu id={id} deleteProject={deleteProject} />
                                </div>
                                <div className="flex flex-col space-y-1">
                                    <p className="text-slate-100 hover:text-slate-200 text-sm lowercase">
                                        /api/{id}/
                                    </p>
                                    <p className="text-slate-100 text-sm">
                                        Créer le : {date.substring(8, 10)}/{date.substring(5, 7)}/{date.substring(0, 4)}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
