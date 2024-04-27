import React from "react";
import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/react/20/solid";

export default function BtnLoop({ value, onChange }) {
    return (
        <div className="flex flex-col h-20 items-center justify-center border-2 border-slate-400 rounded-full">
            <button
                onClick={() => onChange(value + 1)}
            >
                <ChevronUpIcon className="h-5 w-5 text-slate-400 hover:scale-150 transform transition duration-100 hover:text-slate-50" />
            </button>
            <input
                type="text"
                className="w-10 text-center text-slate-200 bg-transparent border-0"
                value={value}
                onChange={(e) => onChange(e.target.value)}
            />
            <button
                onClick={() => onChange(value - 1)}
            >
                <ChevronDownIcon className="h-5 w-5 text-slate-400 hover:scale-150 transform transition duration-100 hover:text-slate-50" />
            </button>
        </div>
    );
}