import React, { useEffect, useState } from "react";
import { Transition } from "@headlessui/react";
import DefaultSelect from "../Form/DefaultSelect";
import DataLilLayout from "../../layout/DataLilLayout";
import ModalTypeData from "../Modal/ModalTypeData";
import BtnBuilderGroupe from "../Other/BtnBuilderGroupe";

const types = [
  { id: 1, name: "Default" },
  { id: 3, name: "Json" },
  { id: 2, name: "Array" },
];

const DefaultBuilder = ({ data = {}, datas, setData }) => {
  const [selected, setSelected] = useState({ id: 1, name: data.type });
  const [isModale, setIsModale] = useState(false);

  const updateDataValue = (targetId, newValue, currentData) => {
    if (!Array.isArray(currentData)) {
      return currentData; // Retourne immédiatement si ce n'est pas un tableau
    }

    return currentData.map((item) => {
      if (item.id === targetId) {
        // Trouvé l'élément cible, mettre à jour la valeur
        return { ...item, value: newValue };
      } else if (item.value && Array.isArray(item.value)) {
        // Si l'item contient une propriété value qui est un tableau, continue la recherche récursivement
        return {
          ...item,
          value: updateDataValue(targetId, newValue, item.value),
        };
      }
      return item;
    });
  };

  const handleUpdateData = (newValue) => {
    setData((currentData) => updateDataValue(data.id, newValue, currentData));
    setIsModale(false);
  };

  const updateDataValueName = (targetId, newValue, currentData) => {
    if (!Array.isArray(currentData)) {
      return currentData; // Retourne immédiatement si ce n'est pas un tableau
    }

    return currentData.map((item) => {
      if (item.id === targetId) {
        // Trouvé l'élément cible, mettre à jour la valeur
        return { ...item, name: newValue };
      } else if (item.value && Array.isArray(item.value)) {
        // Si l'item contient une propriété value qui est un tableau, continue la recherche récursivement
        return {
          ...item,
          value: updateDataValueName(targetId, newValue, item.value),
        };
      }
      return item;
    });
  };

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
            <DefaultSelect
              label="Type de contenu"
              data={types}
              selected={selected}
              setSelected={setSelected}
            />
            {selected.id === 1 && (
              <button
                onClick={() => setIsModale(!isModale)}
                type="button"
                className="rounded bg-indigo-600 h-8 px-2 py-1 text-xs font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
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
