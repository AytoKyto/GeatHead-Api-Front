import React, { useState, useEffect, useContext, useRef } from "react";
import { Link } from "react-router-dom";
import ProjectCard from "../../components/Ui/Card/ProjectCard";
import DefaultBox from "../../components/layout/DefaultBox";

import { AuthContext } from "../../context/AuthProvider";

import { createProject, getProject } from "../../api/ProjectService";
import { getDataUser } from "../../api/UserService";

export default function ProjectDash() {
  const inputRef = useRef(null);
  const { userData } = useContext(AuthContext);
  const [userAllData, setUserAllData] = useState();
  const [projects, setProjects] = useState([]);
  const [dataProject, setDataProject] = useState({
    name: "",
  });
  const initData = async (id) => {
    const projects = await getProject(id);
    const userDatas = await getDataUser(userData.id);
    setProjects(projects);
    setUserAllData(userDatas);
  };

  useEffect(() => {
    initData(userData.id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="bg-custom-700 min-h-screen">
      <main className="p-5">
        <div className="flex justify-between items-center mb-5">
          <h1 className="text-3xl font-bold text-slate-100">Projets</h1>
          <div className="">
            <Link
              to="/user"
              className="flex items-center gap-x-4 px-6 py-3 text-sm font-semibold leading-6 text-slate-100"
            >
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-custom-300">
                <span className="text-sm font-medium leading-none text-slate-100 uppercase">
                  {userAllData?.email.substring(0, 2)}
                </span>
              </span>
              <span className="sr-only">Your profile</span>
              <span aria-hidden="true">{userAllData?.email}</span>
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.length > 0 &&
            projects.map((project) => (
              <ProjectCard
                key={project._id}
                name={project.name}
                id={project._id}
                date={project.date_created}
                fetchData={getProject}
              />
            ))}
          {/* <ProjectApiList projects={projects} /> */}
          {/* New project */}
          <DefaultBox customClass="flex flex-col flex-1 w-full transition-all">
            <form
              className="flex flex-col space-y-2"
              onSubmit={() =>
                createProject({
                  name: dataProject.name,
                  user_id: userData.id,
                })
              }
            >
              <input
                type="text"
                name="projectName"
                placeholder="Nom du nouveau projet"
                className="block max-w-52 rounded-md bg-transparent h-7 border-0 py-1.5 text-gray-200 shadow-sm ring-1 ring-inset ring-slate-700 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                ref={inputRef}
                onChange={(e) =>
                  setDataProject({ ...dataProject, name: e.target.value })
                }
              />
              {dataProject.name !== "" ? (
                <button
                  type="submit"
                  className="rounded bg-indigo-600 p-2 text-xs font-semibold text-white shadow-sm hover:bg-indigo-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Créer
                </button>
              ) : (
                <button
                  type="submit"
                  className="rounded bg-custom-400 p-2 text-xs font-semibold text-white shadow-sm cursor-not-allowed"
                  disabled
                >
                  Créer
                </button>
              )}
            </form>
          </DefaultBox>
        </div>
      </main>
    </div>
  );
}
