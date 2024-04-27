import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { EllipsisVerticalIcon } from "@heroicons/react/20/solid";
import { Link } from "react-router-dom";

const statuses = {
  Complete: "text-green-700 bg-green-50 ring-green-600/20",
  "In progress": "text-slate-600 bg-slate-50 ring-slate-500/10",
  Archived: "text-yellow-800 bg-yellow-50 ring-yellow-600/20",
};

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function ProjectApiList({ projects }) {
  return (
    <ul role="list" className="divide-y divide-slate-600">
      {projects.map((project) => (
        <li
          key={project._id}
          className="flex items-center justify-between gap-x-6 py-5"
        >
          <div className="min-w-0">
            <div className="flex items-start gap-x-3">
              <p className="text-sm font-semibold leading-6 text-slate-100">
                {project.name}
              </p>
              {/* <p
                className={classNames(
                  statuses[project.status],
                  'rounded-md whitespace-nowrap mt-0.5 px-1.5 py-0.5 text-xs font-medium ring-1 ring-inset'
                )}
              >
                {project.status}
              </p> */}
            </div>
            <div className="mt-1 flex items-center gap-x-2 text-xs leading-5 text-slate-400">
              <p className="whitespace-nowrap">
                Créer le :{" "}
                <time dateTime={project.date_created}>
                  {project.date_created}
                </time>
              </p>
              <svg viewBox="0 0 2 2" className="h-0.5 w-0.5 fill-current">
                <circle cx={1} cy={1} r={1} />
              </svg>
              <p className="truncate">/api/{project._id}/</p>
            </div>
          </div>
          <div className="flex flex-none items-center gap-x-4">
            <Link
              to={`/list/${project._id}`}
              className="rounded-md bg-indigo-500 px-3 py-2 text-xs font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              >
              Voir le project<span className="sr-only">, {project.name}</span>
            </Link>
            <Menu as="div" className="relative flex-none">
              <Menu.Button className="-m-2.5 block p-2.5 text-slate-500 hover:text-slate-200">
                <span className="sr-only">Open options</span>
                <EllipsisVerticalIcon className="h-5 w-5" aria-hidden="true" />
              </Menu.Button>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute right-0 z-10 mt-2 w-32 origin-top-right rounded-md bg-gray-900 py-2 shadow-lg ring-1 ring-slate-900/5 focus:outline-none">
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active ? "bg-slate-900" : "",
                          "block px-3 py-1 text-sm leading-6 text-slate-100"
                        )}
                      >
                        Edit<span className="sr-only">, {project.name}</span>
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active ? "bg-slate-900" : "",
                          "block px-3 py-1 text-sm leading-6 text-slate-100"
                        )}
                      >
                        Move<span className="sr-only">, {project.name}</span>
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href="#"
                        className={classNames(
                          active ? "bg-slate-900" : "",
                          "block px-3 py-1 text-sm leading-6 text-slate-100"
                        )}
                      >
                        Delete<span className="sr-only">, {project.name}</span>
                      </a>
                    )}
                  </Menu.Item>
                </Menu.Items>
              </Transition>
            </Menu>
          </div>
        </li>
      ))}
    </ul>
  );
}
