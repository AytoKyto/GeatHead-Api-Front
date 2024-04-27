import React, { Fragment, useState } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { useNavigate } from "react-router-dom";
import axios from "axios";

import logo_full_white from "../../../assets/logo/logo_full_white.svg";


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function DefaultHeader() {
    const navigate = useNavigate();

    const [userNavigation] = useState([
        { name: 'Votre profil', function: null },
        { name: 'Paramètres', function: null },
        { name: 'Déconnexion', function: null }
    ])

    const logout = () => {
        // Remove the token from the localStorage
        localStorage.removeItem("token");
        // Redirect to the login page
        navigate("/signin");
    }

    return (
        <header className="flex w-full p-5 justify-between">
            <img
                onClick={() => navigate("/project")}
                src={logo_full_white}
                className="h-10 w-auto cursor-pointer"
                alt="logo"
            />
            <Disclosure as="nav" className="">
                {({ open }) => (
                    <>
                        {/* Profile dropdown */}
                        <Menu as="div" className="relative ml-3">
                            <div>
                                <Menu.Button className="flex h-8 w-8 overflow-hidden items-center rounded-full bg-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                                    <span className="sr-only">Open user menu</span>
                                    <svg className="h-full w-full text-gray-500" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                                    </svg>
                                </Menu.Button>
                            </div>
                            <Transition
                                as={Fragment}
                                enter="transition ease-out duration-200"
                                enterFrom="transform opacity-0 scale-95"
                                enterTo="transform opacity-100 scale-100"
                                leave="transition ease-in duration-75"
                                leaveFrom="transform opacity-100 scale-100"
                                leaveTo="transform opacity-0 scale-95"
                            >
                                <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                    {userNavigation.map((item) => (
                                        <Menu.Item key={item.name}>
                                            {({ active }) => (
                                                <button
                                                    onClick={() => item.function ? item.function() : null}
                                                    className={classNames(
                                                        active ? 'bg-gray-100' : '',
                                                        'block px-4 py-2 text-sm text-gray-700'
                                                    )}
                                                >
                                                    {item.name}
                                                </button>
                                            )}
                                        </Menu.Item>
                                    ))}
                                </Menu.Items>
                            </Transition>
                        </Menu>
                    </>
                )}
            </Disclosure>
        </header>
    )
}

