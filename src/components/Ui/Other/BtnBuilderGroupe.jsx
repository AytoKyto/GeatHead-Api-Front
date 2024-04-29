import React from "react";
import { DocumentDuplicateIcon, TrashIcon } from "@heroicons/react/24/outline";

export default function BtnBuilderGroupe({ data, datas, setData }) {
  const deleteData = (nameToDelete) => {
    setData((currentData) =>
      currentData.filter((item) => item.name !== nameToDelete)
    );
  };

  return (
    <div className="flex space-x-2 items-center">
      <DocumentDuplicateIcon
        onClick={() =>
          setData((currentData) => [
            ...currentData,
            {
              type: data.type,
              typeId: data.typeId,
              name: data.name + "-copie-" + Math.floor(Math.random() * 100),
              value: data.value,
            },
          ])
        }
        className="h-7 w-7 text-slate-300 p-1 border border-slate-700 rounded-md hover:bg-slate-700 cursor-pointer"
        aria-hidden="true"
      />
      <TrashIcon
        onClick={() => deleteData(data.name)}
        className="h-7 w-7 text-red-600 p-1 border border-slate-700 rounded-md hover:bg-slate-700 cursor-pointer"
        aria-hidden="true"
      />
    </div>
  );
}
