import React from "react";

import DefaultBuilder from "./DefaultBuilder";
import ArrayBuilder from "./ArrayBuilder";
import DataLilLayout from "../../layout/DataLilLayout";
import BtnBuilderGroupe from "../Other/BtnBuilderGroupe";

const JsonBuilder = ({ data, datas, setData }) => {
  return (
    <DataLilLayout
      sustitle={`${data.value.length} element${
        data.value.length > 1 ? "s" : ""
      }`}
      data={data}
      datas={data}
      setData={setData}
    >
      <div className="pl-6 flex flex-col space-y-5">
        {data.value.map((item, index) => {
          // Directly return the conditional component based on typeId
          return (
            <div key={index}>
              {" "}
              {/* Using div as a wrapper for each item */}
              {item.typeId === 1 && (
                <DefaultBuilder data={item} setData={setData} />
              )}
              {item.typeId === 2 && (
                <ArrayBuilder data={item} setData={setData} />
              )}
              {item.typeId === 3 && (
                <JsonBuilder data={item} setData={setData} />
              )}
            </div>
          );
        })}
        <div className="w-full flex justify-end">
          <BtnBuilderGroupe data={data} setData={setData} />
        </div>
      </div>
    </DataLilLayout>
  );
};

export default JsonBuilder;
