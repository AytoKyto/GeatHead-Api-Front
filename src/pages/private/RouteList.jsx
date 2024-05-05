import React, { useEffect, useState } from "react";
import { faker } from "@faker-js/faker";
import ReactJson from "react-json-view";
import { Link } from "react-router-dom";
import { ArrowLeftCircleIcon } from "@heroicons/react/24/outline";

import DefaultLayoutApp from "../../components/layout/DefaultLayoutApp";
import RouteApiList from "../../components/Ui/List/RouteApiList";
import ApiJsonBuilder from "../../components/Ui/Other/ApiJsonBuilder";

import { fakeJsRenderer } from "../../logic/FakeJsRenderer";
import { getRouteList } from "../../api/RouteService";
import { getDataRoute } from "../../api/DataService";
import { getSingleProject } from "../../api/ProjectService";

export default function RouteList() {
  const [project, setProject] = useState(null);
  const [route, setRoute] = useState(null);
  const [projectDataArray, setProjectDataArray] = useState([]);
  const [loading, setLoading] = useState(true);
  const [dataId, setDataId] = useState(null);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchProjectData = async () => {
      const url = window.location.href;
      const urlArray = url.split("/");
      const projectIdUrl = urlArray[urlArray.length - 1];

      const data = await getRouteList(projectIdUrl);
      const dataProject = await getSingleProject(projectIdUrl);
      console.log(data[0]._id);
      const dataValue = await getDataRoute(data[0]._id);
      setProjectDataArray(data || []);
      setProject(dataProject);
      setData(dataValue[0].value || []);
      setDataId(dataValue[0]._id);
      setRoute(data[0]);
      setLoading(false);
    };

    fetchProjectData();
  }, []);

  return (
    <DefaultLayoutApp>
      <main className="p-2 h-screen">
        {loading ? (
          <div>Loading...</div>
        ) : (
          <div className="flex space-x-2">
            <div className="w-[15%] h-[98vh] flex flex-col space-y-2">
              <div className="bg-custom-600 h-[5vh] p-3 rounded-lg flex items-center justify-between">
                <Link to="/project">
                  <ArrowLeftCircleIcon
                    className="h-7 w-7 text-slate-300 p-1 border border-slate-700 rounded-md hover:bg-slate-700 cursor-pointer"
                    aria-hidden="true"
                  />
                </Link>
                <p className="text-slate-200 font-semibold text-2xl uppercase">
                  {project.name.length < 7
                    ? project.name
                    : project.name.substring(0, 7) + "..."}
                </p>
              </div>
              <div className="bg-custom-600 w-full h-[93vh] overflow-scroll p-2 rounded-lg flex flex-col justify-between">
                <div className="flex flex-col space-y-2">
                  <RouteApiList data={projectDataArray} />
                  <div className="py-4 bg-custom-500 p-2 rounded-lg">
                    <p className="text-slate-200 text-sm mb-2 font-semibold">
                      Ajouter une route
                    </p>
                    <div className="flex items-center gap-x-3">
                      <input
                        type="text"
                        className="block w-full mb-2 rounded-md bg-transparent h-7 border-0 py-1.5 text-gray-200 shadow-sm ring-1 ring-inset ring-slate-700 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        placeholder="Nom de la route"
                      />
                    </div>
                    <button
                      type="button"
                      className="rounded w-full bg-indigo-600 p-2 text-xs font-semibold text-white shadow-sm hover:bg-indigo-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      Ajouter
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[60%] overflow-scroll h-[98vh] bg-custom-600 p-2 rounded-lg">
              <ApiJsonBuilder
                project={project}
                data={data}
                setData={setData}
                route={route}
                dataId={dataId}
              />
            </div>
            <div className="w-[25%] p-2 bg-custom-600 rounded-lg h-full overflow-scroll">
              <ReactJson
                theme={"brewer"}
                src={{
                  status: true,
                  message: "Requête effectuée avec succès",
                  data: fakeJsRenderer(data),
                }}
                style={{
                  fontSize: 10,
                  height: "96.4vh",
                  backgroundColor: "#12121C",
                }}
              />
            </div>
          </div>
        )}
      </main>
    </DefaultLayoutApp>
  );
}
