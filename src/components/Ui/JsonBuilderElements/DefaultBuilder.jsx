import React, { useState, Fragment } from "react";
import { Transition } from "@headlessui/react";
import DefaultSelect from "../Form/DefaultSelect";
import DataLilLayout from "../../layout/DataLilLayout";
import ModalTypeData from "../Modal/ModalTypeData";

const types = [
  { id: 1, name: "Default" },
  { id: 2, name: "Array" },
  { id: 3, name: "Json" },
];

const DefaultBuilder = ({ data = {} }) => {
  const [selected, setSelected] = useState({ id: 1, name: data.type });
  const [isModale, setIsModale] = useState(false);

  const handleOnAdd = (data) => {
    setIsModale(false);
    alert(data);
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
        <ModalTypeData onClose={() => setIsModale(false)} onAdd={handleOnAdd} />
      </Transition>
      <DataLilLayout sustitle={data.value} data={data}>
        <div className="pl-6 flex space-x-5 z-50 items-end">
          <DefaultSelect
            label="Type de contenu"
            data={types}
            selected={selected}
            setSelected={setSelected}
          />
          {selected.id === 1 && data.value && (
            <p className="text-sm text-slate-200 mb-2">{data.value}</p>
          )}

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
      </DataLilLayout>
    </>
  );
};

export default DefaultBuilder;
