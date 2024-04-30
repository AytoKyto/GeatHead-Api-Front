import React from "react";

import { PlusIcon } from "@heroicons/react/20/solid";

import ArrayBuilder from "../JsonBuilderElements/ArrayBuilder";
import JsonBuilder from "../JsonBuilderElements/JsonBuilder";
import DefaultBuilder from "../JsonBuilderElements/DefaultBuilder";
import DefaultBox from "../../layout/DefaultBox";

const ApiJsonBuilder = ({ data, setData }) => {
  const addData = () => {
    const newData = {
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
      <DefaultBox customClass={"flex space-x-3 items-baseline"}>
        <h2 className="text-slate-100 text-3xl font-semibold">Michael Foster</h2>
        <p className="text-slate-100 text-lg font-semibold">/api8797643</p>
      </DefaultBox>
      <DefaultBox>
        {" "}
        {data.map((item, index) => (
          <>
            {item.typeId === 1 && <DefaultBuilder data={item} datas={data} setData={setData} index={index} />}
            {item.typeId === 2 && <ArrayBuilder data={item} datas={data} setData={setData} index={index} />}
            {item.typeId === 3 && <JsonBuilder data={item} datas={data} setData={setData} index={index} />}
          </>
        ))}
      </DefaultBox>

      <div className="relative">
        <div className="absolute inset-0 flex items-center" aria-hidden="true">
          <div className="w-full border-t border-slate-600" />
        </div>
        <div className="relative flex justify-center">
          <button
            onClick={addData}
            type="button"
            className="inline-flex items-center gap-x-1.5 rounded-full bg-slate-800 px-3 py-1.5 text-sm font-semibold text-slate-300 shadow-sm ring-1 ring-inset ring-slate-500 hover:bg-slate-900"
          >
            <PlusIcon
              className="-ml-1 -mr-0.5 h-5 w-5 text-slate-400"
              aria-hidden="true"
            />
            Button text
          </button>
        </div>
      </div>
    </div>
  );
};

export default ApiJsonBuilder;
