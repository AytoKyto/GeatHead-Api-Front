import React, { useState, useEffect, useContext, useRef } from "react";
import axios from "axios";

import ProjectCard from "../../components/Ui/Card/ProjectCard";
import DefaultAlert from "../../components/Ui/DefaultAlert";

import { AuthContext } from "../../context/AuthProvider";

export default function ProjectDash() {
  // useRef for the input
  const inputRef = useRef(null);
  const { userData } = useContext(AuthContext);
  const [projects, setProjects] = useState([]);
  const [dataProject, setDataProject] = useState({
    name: "",
  });

  const [error, setIsError] = useState({
    isError: false,
    title: "",
    subTitle: "",
  });

  const options = {
    method: "GET",
    url: "http://localhost:3001/projects/get-projects/" + userData.id,
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  };

  const optionCreate = {
    method: "POST",
    url: "http://localhost:3001/projects/create-project",
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
    data: { name: dataProject.name, user_id: userData.id },
  };

  const handleCreateProject = (e) => {
    e.preventDefault();
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
        inputRef.current.value = "";
        fetchData();
      });
  };

  const fetchData = async () => {
    axios
      .request(options)
      .then(function (response) {
        setProjects(response.data.data);
        console.log(response.data.data);
      })
      .catch(function (error) {
        console.error(error);
        setIsError({
          isError: true,
          title: "Erreur",
          subTitle: error.response.data.message,
        });
      });
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="bg-custom-700 min-h-screen">
      {" "}
      {error.title !== "" && (
        <DefaultAlert
          title={error.title}
          subTitle={error.subTitle}
          error={error.isError}
          onClose={() =>
            setIsError({ isError: false, title: "", subTitle: "" })
          }
        />
      )}
      <main className="p-5">
        <div className="flex justify-between items-center mb-12">
          <h1 className="text-2xl font-bold text-slate-100">Projets</h1>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects &&
            projects.map((project) => (
              <ProjectCard
                key={project._id}
                name={project.name}
                id={project._id}
                date={project.date_created}
                fetchData={fetchData}
              />
            ))}
          {/* <ProjectApiList projects={projects} /> */}
          {/* New project */}
          <div className="flex flex-col flex-1 w-full transition-all">
            <form
              className="flex flex-col space-y-3 mt-1"
              onSubmit={handleCreateProject}
            >
              <input
                type="text"
                name="projectName"
                placeholder="Nom du nouveau projet"
                className="peer block w-full border-0 bg-transparent border-b-2 border-slate-100 py-1.5 text-gray-900 focus:ring-0 sm:text-sm sm:leading-6"
                ref={inputRef}
                onChange={(e) =>
                  setDataProject({ ...dataProject, name: e.target.value })
                }
              />
              {dataProject.name !== "" ? (
                <button
                  type="submit"
                  className="bg-indigo-600 hover:bg-indigo-500 text-slate-100 hover:text-slate-200 font-bold py-2 px-4 rounded-lg"
                >
                  Créer
                </button>
              ) : (
                <button
                  type="submit"
                  className="bg-indigo-300 hover:bg-indigo-400 text-slate-100 hover:text-slate-200 font-bold py-2 px-4 rounded-lg"
                  disabled
                >
                  Créer
                </button>
              )}
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}
