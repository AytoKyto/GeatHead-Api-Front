import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { CodeBracketIcon, EllipsisVerticalIcon, FlagIcon, TrashIcon } from '@heroicons/react/20/solid'



function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function ProjectMenu({ id, deleteProject }) {

    return (
        <div className="flex flex-shrink-0 self-start cursor-pointer">
            <Menu as="div" className="relative inline-block text-left">
                <div>
                    <Menu.Button className="-m-2 flex items-center rounded-full p-2 text-gray-400 hover:text-gray-600">
                        <span className="sr-only">Open options</span>
                        <EllipsisVerticalIcon className="h-5 w-5 rotate-90" aria-hidden="true" />
                    </Menu.Button>
                </div>

                <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-slate-800 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <div className="py-1">
                            <Menu.Item>
                                {({ active }) => (
                                    <button
                                        className={classNames(
                                            active ? 'text-gray-100' : 'text-slate-200',
                                            'flex px-4 py-2 text-sm'
                                        )}
                                    >
                                        <FlagIcon className="mr-3 h-5 w-5 text-gray-100" aria-hidden="true" />
                                        <span>Documentation</span>
                                    </button>
                                )}
                            </Menu.Item>
                            <Menu.Item>
                                {({ active }) => (
                                    <button
                                        className={classNames(
                                            active ? 'text-gray-100' : 'text-slate-200',
                                            'flex px-4 py-2 text-sm'
                                        )}
                                    >
                                        <CodeBracketIcon className="mr-3 h-5 w-5 text-gray-100" aria-hidden="true" />
                                        <span>Voir l'API</span>
                                    </button>
                                )}
                            </Menu.Item>
                            <Menu.Item>
                                {({ active }) => (
                                    <button
                                        onClick={() => deleteProject(id)}
                                        className={classNames(
                                            active ? 'text-gray-100' : 'text-slate-200',
                                            'flex px-4 py-2 text-sm'
                                        )}
                                    >
                                        <TrashIcon className="mr-3 h-5 w-5 text-gray-100" aria-hidden="true" />
                                        <span>Supprimer</span>
                                    </button>
                                )}
                            </Menu.Item>
                        </div>
                    </Menu.Items>
                </Transition>
            </Menu>
        </div>
    )
} 
