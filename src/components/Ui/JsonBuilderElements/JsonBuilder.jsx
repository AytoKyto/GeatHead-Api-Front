import React from "react";

import { PlusIcon } from "@heroicons/react/20/solid";
import { faker } from "@faker-js/faker";

import DefaultBuilder from "./DefaultBuilder";
import ArrayBuilder from "./ArrayBuilder";
import DataLilLayout from "../../layout/DataLilLayout";
import BtnBuilderGroupe from "../Other/BtnBuilderGroupe";

const JsonBuilder = ({ data, datas, setData }) => {
  // Recursively add data to a nested structure based on parentName
  const addDataToNestedStructure = (newData, currentData, data) => {
    if (!Array.isArray(currentData)) {
      return currentData;
    }

    return currentData.map((item) => {
      if (
        item.id === data.id &&
        (item.type === "array" || item.type === "object")
      ) {
        // Found the target parent, insert new data
        return { ...item, value: [...item.value, newData] };
      } else if (item.value && Array.isArray(item.value)) {
        // Recursively update children
        return {
          ...item,
          value: addDataToNestedStructure(newData, item.value, data),
        };
      }
      return item;
    });
  };
  const handleAddData = () => {
    const newData = {
      id: faker.datatype.uuid(),
      type: "default",
      typeId: 1,
      name: "new Data " + Math.floor(Math.random() * 100),
      parentName: data.name,
      value: "faker.company.name",
    };

    setData((currentData) =>
      addDataToNestedStructure(newData, currentData, data)
    );
  };

  return (
    <DataLilLayout
      sustitle={`${data.value.length} element${
        data.value.length > 1 ? "s" : ""
      }`}
      data={data}
      datas={data}
      setData={setData}
    >
      <div className="pl-6 flex flex-col space-y-5">
        {data.value.map((item, index) => {
          // Directly return the conditional component based on typeId
          return (
            <div key={index}>
              {" "}
              {/* Using div as a wrapper for each item */}
              {item.typeId === 1 && (
                <DefaultBuilder data={item} setData={setData} />
              )}
              {item.typeId === 2 && (
                <ArrayBuilder data={item} setData={setData} />
              )}
              {item.typeId === 3 && (
                <JsonBuilder data={item} setData={setData} />
              )}
            </div>
          );
        })}
        <div className="relative">
          <div
            className="absolute inset-0 flex items-center"
            aria-hidden="true"
          >
            <div className="w-full border-t border-slate-600" />
          </div>
          <div className="relative flex justify-center">
            <button
              onClick={handleAddData}
              type="button"
              className="inline-flex items-center gap-x-1.5 rounded-full bg-custom-600 px-3 py-1.5 text-sm font-semibold text-slate-300 shadow-sm ring-1 ring-inset ring-slate-600 hover:bg-custom-700"
            >
              <PlusIcon
                className="-ml-1 -mr-0.5 h-5 w-5 text-slate-400"
                aria-hidden="true"
              />
              Ajouter un block
            </button>
          </div>
        </div>
        <div className="w-full flex justify-end">
          <BtnBuilderGroupe data={data} setData={setData} />
        </div>
      </div>
    </DataLilLayout>
  );
};

export default JsonBuilder;
