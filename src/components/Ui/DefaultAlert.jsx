import { Fragment, useState } from "react";
import { Transition } from "@headlessui/react";
import { XCircleIcon, CheckCircleIcon } from "@heroicons/react/24/outline";
import { XMarkIcon } from "@heroicons/react/20/solid";
import PropTypes from "prop-types";

export default function DefaultAlert({ customClass, ...props }) {
  const [show, setShow] = useState(true);

  const errorClose = () => {
    setShow(!show);
  };

  /**
   * Props:
   * - @param {string} title - Title of the alert
   * - @param {string} subTitle - Subtitle of the alert
   * - @param {boolean} error - Boolean to display the error style
   * - @param {function} onClose - Function to call when the alert is closed
   * - @param {string} customClass - Custom class to add to the component
   *
   * @example
   * <DefaultAlert
   * title="Titre"
   * subTitle="Sous-titre"
   * error={true} true = error, false = success
   * onClose={handleClose}
   * />
   *
   * @returns {JSX}
   */

  return (
    <>
      {props.error ? (
        <div
          aria-live="assertive"
          className="pointer-events-none fixed inset-0 flex items-end px-4 py-6 sm:items-start z-10 sm:p-6"
        >
          <div className="flex w-full flex-col items-center space-y-4 sm:items-end">
            {/* Notification panel, dynamically insert this into the live region when it needs to be displayed */}
            <Transition
              show={show}
              as={Fragment}
              enter="transform ease-out duration-300 transition"
              enterFrom="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
              enterTo="translate-y-0 opacity-100 sm:translate-x-0"
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="pointer-events-auto w-fit overflow-hidden rounded-lg bg-slate-300 shadow-lg ring-1 ring-black ring-opacity-5">
                <div className="p-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <XCircleIcon
                        className="h-6 w-6 text-red-600"
                        aria-hidden="true"
                      />
                    </div>
                    <div className="ml-3 w-fit whitespace-nowrap flex-1 pt-0.5">
                      <p className="font-medium">{props.title}</p>
                      <p classame="font-normal text-capem_slate">
                        {props.subTitle}
                      </p>
                    </div>
                    <div className="ml-4 flex flex-shrink-0">
                      <button
                        type="button"
                        className="inline-flex rounded-md bg-slate-300 text-slate-400 hover:text-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        onClick={() => {
                          errorClose();
                        }}
                      >
                        <span className="sr-only">Close</span>
                        <XMarkIcon className="h-5 w-5" aria-hidden="true" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </Transition>
          </div>
        </div>
      ) : (
        <div
          aria-live="assertive"
          className="pointer-events-none fixed inset-0 flex items-end px-4 py-6 sm:items-start sm:p-6"
        >
          <div className="flex w-full flex-col items-center space-y-4 sm:items-end">
            {/* Notification panel, dynamically insert this into the live region when it needs to be displayed */}
            <Transition
              show={show}
              as={Fragment}
              enter="transform ease-out duration-300 transition"
              enterFrom="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
              enterTo="translate-y-0 opacity-100 sm:translate-x-0"
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="pointer-events-auto w-fit overflow-hidden rounded-lg bg-slate-300 shadow-lg ring-1 ring-black ring-opacity-5">
                <div className="p-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0">
                      <CheckCircleIcon
                        className="h-6 w-6 text-green-600"
                        aria-hidden="true"
                      />
                    </div>
                    <div className="ml-3 w-fit whitespace-nowrap flex-1 pt-0.5">
                      <p className="font-medium">{props.title}</p>
                      <p className="font-normal text-capem_slate">
                        {props.subTitle}
                      </p>
                    </div>
                    <div className="ml-4 flex flex-shrink-0">
                      <button
                        type="button"
                        className="inline-flex rounded-md bg-slate-300 text-slate-400 hover:text-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        onClick={() => {
                          errorClose();
                        }}
                      >
                        <span className="sr-only">Close</span>
                        <XMarkIcon className="h-5 w-5" aria-hidden="true" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </Transition>
          </div>
        </div>
      )}
    </>
  );
}

DefaultAlert.propTypes = {
  customClass: PropTypes.string,
  title: PropTypes.string,
  subTitle: PropTypes.string,
  error: PropTypes.bool,
  onClose: PropTypes.func,
};
