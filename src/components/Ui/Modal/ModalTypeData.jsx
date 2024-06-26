import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import Data from "../../../data/FakeData";

const fixedDataTypes = [
  "String",
  "Number",
  "Boolean",
  // "Date",
  "Array",
  "Object",
];

export default function ModalTypeData({ onClose, onAdd }) {
  const [open, setOpen] = useState(true);

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 backdrop-filter bg-custom-500/20 backdrop-blur-lg" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 w-screen h-screen overflow-y-auto p-10">
          {/* Cross */}
          <div className="w-full flex justify-between border-b border-slate-700 px-5 pb-5">
            <h1 className="text-2xl font-bold text-slate-100">
              Choisissez votre données
            </h1>
            <div onClick={onClose} className="flex justify-end">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-slate-100 hover:text-slate-200 cursor-pointer"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>
          </div>
          {/* Content */}
          <div className="flex flex-col p-5">
            <p className="text-slate-400 mb-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
              quod.
            </p>
            <div className="flex flex-col p-3 bg-custom-500 border border-custom-450 rounded-lg">
              <h2 className="text-xl font-bold text-slate-100 mb-3">
                Données fixe
              </h2>
              <div className="flex justify-between gap-5 w-full">
                {fixedDataTypes.map((type) => (
                  <div
                    onClick={() => onAdd(type)}
                    className="p-2 px-5 bg-custom-600 w-full text-center border border-custom-450 rounded-lg cursor-pointer hover:bg-custom-700 transition-all"
                    key={type}
                  >
                    <p className="text-slate-100">{type}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* Content */}
          <div className="flex flex-col p-5 space-y-5">
            <h2 className="text-xl font-bold text-slate-100">
              Données Fake.js
            </h2>
            <p className="text-slate-400 mb-5">
              Si vous avez besoin de données plus précises, vous pouvez aller
              sur la documentation de Fake.js :{" "}
              <a
                className="text-indigo-500 hover:text-indigo-600"
                target="_blank"
                href="https://fakerjs.dev/api/"
                rel="noreferrer"
              >
                voir la documentation
              </a>
            </p>
            {Data.map((type) => (
              <div
                key={type.id} // Use a unique key
                className="flex flex-col p-3 bg-custom-500 border border-custom-450 rounded-lg"
              >
                <h2 className="text-xl font-bold text-slate-100 mb-5">
                  {type.name}
                </h2>
                <div className="flex gap-5 w-full flex-wrap">
                  {type.data.map((item) => (
                    <div
                      onClick={() => onAdd(item.value)}
                      className="group p-2 px-5 bg-custom-600 border border-custom-450 rounded-lg cursor-pointer hover:bg-custom-700 transition-all relative"
                      key={item.id} // Use a unique key
                    >
                      <p className="text-slate-100 text-lg">{item.name}</p>
                      <span className="absolute top-full mt-1 scale-0 rounded bg-gray-800 p-2 text-xs text-white group-hover:scale-100 transition-all">
                        Exemple : {item.value + "()"}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
