import React from "react";
import Logo from "../assets/logo/logo_full_white.svg";
import WallSvg from "../components/Ui/Other/WallSvg";

export default function InfoSizeScreen() {
    return (
        <div className="flex flex-col min-h-screen bg-slate-900 overflow-hidden isolate">
            <WallSvg />
            <div className="flex flex-col pt-16 pb-12">
                <main className="mx-auto flex w-full max-w-7xl flex-grow flex-col justify-center px-6 lg:px-8">
                    <div className="flex flex-shrink-0 justify-center">
                        <a href="/" className="inline-flex">
                            <img className="h-24 w-auto" src={Logo} alt="" />
                        </a>
                    </div>
                    <div className="py-16">
                        <div className="text-center">
                            <h1 className="mt-2 text-36 font-bold tracking-tight text-gray-100 sm:text-5xl">
                                Votre écran est trop petit pour afficher <br></br> cette page correctement.
                            </h1>
                            <p className="mt-4 text-20 text-gray-300">
                                Veuillez agrandir votre fenêtre ou utiliser un écran plus grand.
                            </p>
                            <div className="mt-6">
                            </div>
                        </div>
                    </div>
                </main>

            </div>
        </div>
    );
}
