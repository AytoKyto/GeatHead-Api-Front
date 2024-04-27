import React, { useState, Fragment } from "react";
import { Transition } from "@headlessui/react";
import { ChevronRightIcon, ChevronDownIcon } from "@heroicons/react/20/solid";

const DataLilLayout = ({ children, sustitle, data }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col space-y-3 w-full border border-slate-600 rounded-md p-2">
      <div className="cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
        <div className="relative flex items-center space-x-4">
          <div className="min-w-0 flex-auto">
            <div className="flex items-center gap-x-3 pl-3">
              <h2 className="min-w-0 text-sm font-semibold leading-6 text-white">
                <span className="flex gap-x-2">
                  <span className="truncate">{data.name}</span>
                  <span className="text-gray-400">/</span>
                  <span className="whitespace-nowrap">{sustitle}</span>
                </span>
              </h2>
            </div>
          </div>
          <div className="flex justify-end items-start space-x-2 px-3">
            <div className="rounded-full flex-none py-1 px-2 text-xs font-medium ring-1 ring-inset text-indigo-400 bg-indigo-400/10">
              {data.type}
            </div>
            {isOpen ? (
              <ChevronDownIcon
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            ) : (
              <ChevronRightIcon
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            )}
          </div>
        </div>
      </div>
      <Transition
        show={isOpen}
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0"
        enterTo="transform opacity-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100"
        leaveTo="transform opacity-0"
      >
        {children}
      </Transition>
    </div>
  );
};

export default DataLilLayout;
