import React, { useEffect, useState } from "react";
import { Transition } from "@headlessui/react";
import DataLilLayout from "../../layout/DataLilLayout";
import ModalTypeData from "../Modal/ModalTypeData";
import BtnBuilderGroupe from "../Other/BtnBuilderGroupe";

import { updateDataValue } from "../../../logic/UpdateDataValue";
import { updateDataValueName } from "../../../logic/UpdateDataValueName";

const DefaultBuilder = ({ data = {}, datas, setData }) => {
  const [selected, setSelected] = useState({ id: 1, name: data.type });
  const [isModale, setIsModale] = useState(false);

  const handleUpdateData = (newValue) => {
    setData((currentData) => updateDataValue(data.id, newValue, currentData));
    setIsModale(false);
  };

  useEffect(() => {
    console.log("datas", datas);
  }, [datas]);

  const handleUpdateDataName = (newValue) => {
    setData((currentData) =>
      updateDataValueName(data.id, newValue, currentData)
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
      <DataLilLayout sustitle={data.value} data={data}>
        <div className="flex justify-between items-end">
          <div className="flex space-x-3 z-50 items-end w-[85%]">
            <input
              type="text"
              defaultValue={data.name}
              onChange={(event) => handleUpdateDataName(event.target.value)}
              className="block max-w-52 rounded-md bg-transparent h-7 border-0 py-1.5 text-gray-200 shadow-sm ring-1 ring-inset ring-slate-700 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder="Nom de la données"
            />
            {selected.id === 1 && (
              <button
                onClick={() => setIsModale(!isModale)}
                type="button"
                className="rounded bg-indigo-600 p-2 text-xs font-semibold text-white shadow-sm hover:bg-indigo-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                {data.value ? "Changer la valeur" : "Ajouter une valeur"}
              </button>
            )}
          </div>
          <BtnBuilderGroupe data={data} datas={datas} setData={setData} />
        </div>
      </DataLilLayout>
    </>
  );
};

export default DefaultBuilder;
