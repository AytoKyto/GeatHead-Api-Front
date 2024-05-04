import React, { useState } from "react";
import { DocumentDuplicateIcon, TrashIcon } from "@heroicons/react/24/outline";
import { faker } from "@faker-js/faker";

import DefaultSelect from "../Form/DefaultSelect";

import { updateDataValueType } from "../../../logic/UpdateDataValueType";
import { updateDataValueName } from "../../../logic/UpdateDataValueName";

export default function BtnBuilderGroupe({ data, datas, setData }) {
  const [selected, setSelected] = useState({ id: 1, name: data.type });

  const types = [
    { id: 1, name: "default" },
    { id: 2, name: "array" },
    { id: 3, name: "json" },
  ];

  const handleUpdateDataType = (newValue) => {
    setData((currentData) =>
      updateDataValueType(data.id, newValue, currentData)
    );
    setSelected(newValue);
  };

  const handleUpdateDataName = (newValue) => {
    setData((currentData) =>
      updateDataValueName(data.id, newValue, currentData)
    );
  };

  const deleteDataToNestedStructure = (newData, currentData) => {
    if (!Array.isArray(currentData)) {
      return currentData;
    }

    // Utiliser 'reduce' pour reconstruire le tableau avec la possibilité d'ajouter des éléments
    return currentData.reduce((acc, item) => {
      if (item.id === newData.id) {
        // Ajouter l'élément existant et le nouvel élément au même niveau
      } else if (item.value && Array.isArray(item.value)) {
        // Recursion si l'élément contient une valeur qui est un tableau
        acc.push({
          ...item,
          value: deleteDataToNestedStructure(newData, item.value),
        });
      } else {
        acc.push(item);
      }
      return acc;
    }, []);
  };

  const deleteData = () => {
    const newData = {
      id: data.id, // L'ID doit correspondre à celui de l'élément à dupliquer
      type: data.type,
      typeId: data.typeId,
      name: data.name + "-copie-" + Math.floor(Math.random() * 100),
      value: data.value,
    };

    setData((currentData) => deleteDataToNestedStructure(newData, currentData));
  };

  const duplicateDataToNestedStructure = (newData, currentData) => {
    if (!Array.isArray(currentData)) {
      return currentData;
    }

    // Utiliser 'reduce' pour reconstruire le tableau avec la possibilité d'ajouter des éléments
    return currentData.reduce((acc, item) => {
      if (item.id === newData.id) {
        // Ajouter l'élément existant et le nouvel élément au même niveau
        acc.push(item);
        const newItem = { ...newData, id: faker.datatype.uuid() }; // Générer un nouvel ID pour le nouvel élément
        acc.push(newItem);
      } else if (item.value && Array.isArray(item.value)) {
        // Recursion si l'élément contient une valeur qui est un tableau
        acc.push({
          ...item,
          value: duplicateDataToNestedStructure(newData, item.value),
        });
      } else {
        acc.push(item);
      }
      return acc;
    }, []);
  };

  const handleAddData = () => {
    const newData = {
      id: data.id, // L'ID doit correspondre à celui de l'élément à dupliquer
      type: data.type,
      typeId: data.typeId,
      name: data.name + "-copie-" + Math.floor(Math.random() * 100),
      value: data.value,
    };

    setData((currentData) =>
      duplicateDataToNestedStructure(newData, currentData)
    );
  };

  return (
    <div className="flex space-x-2 items-center">
      <DefaultSelect
        label="Type de contenu"
        data={types}
        selected={selected}
        setSelected={handleUpdateDataType}
      />
      <input
        type="text"
        defaultValue={data.name}
        onChange={(event) => handleUpdateDataName(event.target.value)}
        className="block max-w-52 rounded-md bg-transparent h-7 border-0 py-1.5 text-gray-200 shadow-sm ring-1 ring-inset ring-slate-700 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        placeholder="Nom de la données"
      />
      <DocumentDuplicateIcon
        onClick={handleAddData}
        className="h-7 w-7 text-slate-300 p-1 border border-slate-700 rounded-md hover:bg-slate-700 cursor-pointer"
        aria-hidden="true"
      />
      <TrashIcon
        onClick={() => deleteData()}
        className="h-7 w-7 text-red-600 p-1 border border-slate-700 rounded-md hover:bg-slate-700 cursor-pointer"
        aria-hidden="true"
      />
    </div>
  );
}
