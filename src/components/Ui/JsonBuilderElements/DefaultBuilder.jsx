import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import DataLilLayout from "../../layout/DataLilLayout";
import ModalTypeData from "../Modal/ModalTypeData";
import BtnBuilderGroupe from "../Other/BtnBuilderGroupe";

import { updateDataValue } from "../../../logic/UpdateDataValue";
import { updateDataValueSubValue } from "../../../logic/UpdateDataValueSubValue";

import { Switch } from "@headlessui/react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const DefaultBuilder = ({ data = {}, datas, setData }) => {
  const selected = { id: 1, name: data.type };
  const [isModale, setIsModale] = useState(false);
  const [enabled, setEnabled] = useState(false);

  const handleUpdateData = (newValue) => {
    setData((currentData) => updateDataValue(data.id, newValue, currentData));
    setIsModale(false);
  };

  const handleUpdateDataSubValue = (newValue) => {
    setData((currentData) =>
      updateDataValueSubValue(data.id, newValue, currentData)
    );
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
        <ModalTypeData
          datas={data}
          setData={setData}
          onClose={() => setIsModale(false)}
          onAdd={handleUpdateData}
        />
      </Transition>
      <DataLilLayout sustitle={data.value} data={data} isNotAnime={true}>
        <div className="flex justify-between items-end">
          <div className="flex space-x-3 z-50 items-end">
            {selected.id === 1 && (
              <>
                {data.value === "Array" || data.value === "Object" ? (
                  <textarea
                    type="text"
                    defaultValue={data.subValue}
                    onChange={(event) =>
                      handleUpdateDataSubValue(event.target.value)
                    }
                    className="block max-w-52 rounded-md bg-transparent h-7 border-0 py-1.5 text-gray-200 shadow-sm ring-1 ring-inset ring-slate-700 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                    placeholder="Nom de la données"
                  />
                ) : data.value === "Boolean" ? (
                  <Switch
                    checked={enabled}
                    onChange={(event) => {
                      const value = event;
                      handleUpdateDataSubValue(value);
                      setEnabled(value);
                    }}
                    className={classNames(
                      enabled ? "bg-green-600" : "bg-red-600",
                      "relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out"
                    )}
                  >
                    <span className="sr-only">Use setting</span>
                    <span
                      className={classNames(
                        enabled ? "translate-x-5" : "translate-x-0",
                        "pointer-events-none relative inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out"
                      )}
                    >
                      <span
                        className={classNames(
                          enabled
                            ? "opacity-0 duration-100 ease-out"
                            : "opacity-100 duration-200 ease-in",
                          "absolute inset-0 flex h-full w-full items-center justify-center transition-opacity"
                        )}
                        aria-hidden="true"
                      >
                        <svg
                          className="h-3 w-3 text-red-600"
                          fill="none"
                          viewBox="0 0 12 12"
                        >
                          <path
                            d="M4 8l2-2m0 0l2-2M6 6L4 4m2 2l2 2"
                            stroke="currentColor"
                            strokeWidth={2}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </span>
                      <span
                        className={classNames(
                          enabled
                            ? "opacity-100 duration-200 ease-in"
                            : "opacity-0 duration-100 ease-out",
                          "absolute inset-0 flex h-full w-full items-center justify-center transition-opacity"
                        )}
                        aria-hidden="true"
                      >
                        <svg
                          className="h-3 w-3 text-green-600"
                          fill="currentColor"
                          viewBox="0 0 12 12"
                        >
                          <path d="M3.707 5.293a1 1 0 00-1.414 1.414l1.414-1.414zM5 8l-.707.707a1 1 0 001.414 0L5 8zm4.707-3.293a1 1 0 00-1.414-1.414l1.414 1.414zm-7.414 2l2 2 1.414-1.414-2-2-1.414 1.414zm3.414 2l4-4-1.414-1.414-4 4 1.414 1.414z" />
                        </svg>
                      </span>
                    </span>
                  </Switch>
                ) : (
                  <input
                    type={
                      data.value === "String"
                        ? "text"
                        : data.value === "Number"
                        ? "number"
                        : "text"
                    }
                    defaultValue={data.name}
                    onChange={(event) =>
                      handleUpdateDataSubValue(event.target.value)
                    }
                    className="block max-w-52 rounded-md bg-transparent h-7 border-0 py-1.5 text-gray-200 shadow-sm ring-1 ring-inset ring-slate-700 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="Nom de la données"
                  />
                )}

                <button
                  onClick={() => setIsModale(!isModale)}
                  type="button"
                  className="rounded bg-indigo-600 p-2 text-xs font-semibold text-white shadow-sm hover:bg-indigo-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  {data.value ? "Changer la valeur" : "Ajouter une valeur"}
                </button>
              </>
            )}
          </div>
          <BtnBuilderGroupe data={data} datas={datas} setData={setData} />
        </div>
      </DataLilLayout>
    </>
  );
};

export default DefaultBuilder;
