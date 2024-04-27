import React from "react";

import ArrayBuilder from "../JsonBuilderElements/ArrayBuilder";
import JsonBuilder from "../JsonBuilderElements/JsonBuilder";
import DefaultBuilder from "../JsonBuilderElements/DefaultBuilder";

const ApiJsonBuilder = ({ data }) => {
  return (
    <div className="flex flex-col items-center justify-center space-y-2">
      {data.map((item, index) => (
        <>
          {item.typeId === 1 && <DefaultBuilder data={item} index={index} />}
          {item.typeId === 2 && <ArrayBuilder data={item} index={index} />}
          {item.typeId === 3 && <JsonBuilder data={item} index={index} />}
        </>
      ))}
    </div>
  );
};

export default ApiJsonBuilder;
