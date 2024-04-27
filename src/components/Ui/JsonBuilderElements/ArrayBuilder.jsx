import React from "react";
import DefaultBuilder from "./DefaultBuilder";
import JsonBuilder from "./JsonBuilder";
import DataLilLayout from "../../layout/DataLilLayout";

const ArrayBuilder = ({ data }) => {
  return (
    <DataLilLayout
      sustitle={`${data.value.length} element${
        data.value.length > 1 ? "s" : ""
      }`}
      data={data}
    >
      <div className="pl-6 flex flex-col space-y-5">
        {data.value.map((item, index) => (
          <React.Fragment key={index}>
            {item.typeId === 1 && <DefaultBuilder data={item} />}
            {item.typeId === 2 && <ArrayBuilder data={item} />}
            {item.typeId === 3 && <JsonBuilder data={item} />}
          </React.Fragment>
        ))}
      </div>
    </DataLilLayout>
  );
};

export default ArrayBuilder;
