import React from "react";

const JsonBuilder = ({ data, index }) => {
  return (
    <div
      className="flex flex-col items-center justify-center border-b-2 m-5 border-slate-200 w-full bg-green-400"
      key={index}
    >
      <p className="text-white">{data.name}</p>
      <p className="text-white">{data.type}</p>
    </div>
  );
};

export default JsonBuilder;
