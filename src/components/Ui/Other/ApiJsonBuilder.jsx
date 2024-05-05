import React from "react";
import { faker } from "@faker-js/faker";

import {
  DocumentCheckIcon,
  TrashIcon,
  EyeIcon,
} from "@heroicons/react/24/outline";
import { PlusIcon } from "@heroicons/react/20/solid";

import {
  uodatereateDataRoute,
  postCreateDataRoute,
} from "../../../api/DataService";

import ArrayBuilder from "../JsonBuilderElements/ArrayBuilder";
import JsonBuilder from "../JsonBuilderElements/JsonBuilder";
import DefaultBuilder from "../JsonBuilderElements/DefaultBuilder";
import DefaultBox from "../../layout/DefaultBox";

const ApiJsonBuilder = ({ dataId, project, data, setData, route }) => {
  const addData = () => {
    const newData = {
      id: faker.datatype.uuid(),
      type: "default",
      typeId: 1,
      name: "new Data " + Math.floor(Math.random() * 100),
      value: "faker.company.name",
    };

    // Utiliser une fonction pour garantir que l'on travaille avec le dernier état
    setData((currentData) => [...currentData, newData]);
  };

  return (
    <div className="flex flex-col space-y-5">
      <DefaultBox customClass={"flex justify-between items-center"}>
        <input
          defaultValue={route?.endpoint}
          type="text"
          className="rounded-md bg-transparent text-slate-100 text-3xl font-semibold border-none"
        />
        <div className="flex space-x-3 items-center">
          <p className="text-slate-100 text-sm">Nombre de boucle</p>
          <input
            type="number"
            defaultValue={1}
            className="block w-16 rounded-md bg-transparent h-7 border-0 py-1.5 text-gray-200 shadow-sm ring-1 ring-inset ring-slate-700 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            placeholder="Nom de la données"
          />
          <EyeIcon
            className="h-7 w-7 text-slate-200 p-1 border border-slate-700 rounded-md hover:bg-slate-700 cursor-pointer"
            aria-hidden="true"
          />
          {data.length >= 1 ? (
            <DocumentCheckIcon
              onClick={() =>
                uodatereateDataRoute(dataId, {
                  value: data,
                })
              }
              className="h-7 w-7 text-indigo-600 p-1 border border-slate-700 rounded-md hover:bg-slate-700 cursor-pointer"
              aria-hidden="true"
            />
          ) : (
            <DocumentCheckIcon
              onClick={() =>
                postCreateDataRoute({
                  project_id: project._id,
                  route_id: route._id,
                  value: data,
                })
              }
              className="h-7 w-7 text-indigo-600 p-1 border border-slate-700 rounded-md hover:bg-slate-700 cursor-pointer"
              aria-hidden="true"
            />
          )}
          <TrashIcon
            className="h-7 w-7 text-red-600 p-1 border border-slate-700 rounded-md hover:bg-slate-700 cursor-pointer"
            aria-hidden="true"
          />
        </div>
      </DefaultBox>
      <DefaultBox>
        {" "}
        {data.map((item, index) => (
          <>
            {item.typeId === 1 && (
              <DefaultBuilder
                data={item}
                datas={data}
                setData={setData}
                index={index}
              />
            )}
            {item.typeId === 2 && (
              <ArrayBuilder
                data={item}
                datas={data}
                setData={setData}
                index={index}
              />
            )}
            {item.typeId === 3 && (
              <JsonBuilder
                data={item}
                datas={data}
                setData={setData}
                index={index}
              />
            )}
          </>
        ))}
      </DefaultBox>

      <div className="relative">
        <div className="absolute inset-0 flex items-center" aria-hidden="true">
          <div className="w-full border-t border-custom-450" />
        </div>
        <div className="relative flex justify-center">
          <button
            onClick={addData}
            type="button"
            className="inline-flex items-center gap-x-1.5 rounded-full bg-custom-500 px-3 py-1.5 text-sm font-semibold text-slate-300 shadow-sm ring-1 ring-inset ring-custom-450 hover:bg-custom-700"
          >
            <PlusIcon
              className="-ml-1 -mr-0.5 h-5 w-5 text-slate-400"
              aria-hidden="true"
            />
            Ajouter un block
          </button>
        </div>
      </div>
    </div>
  );
};

export default ApiJsonBuilder;
