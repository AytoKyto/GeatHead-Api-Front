import React, { useEffect, useState } from "react";
import { faker } from "@faker-js/faker";
import axios from "axios";
import ReactJson from "react-json-view";

import DefaultLayoutApp from "../../components/layout/DefaultLayoutApp";
import RouteApiList from "../../components/Ui/List/RouteApiList";
import ApiJsonBuilder from "../../components/Ui/Other/ApiJsonBuilder";

import { fakeJsRenderer } from "../../logic/FakeJsRenderer";

export default function RouteList() {
  const [projectId, setProjectId] = useState(null);
  const [projectDataArray, setProjectDataArray] = useState([]);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([
    {
      id: faker.datatype.uuid(),
      type: "default",
      typeId: 1,
      name: "companyName",
      parentName: null,
      value: "faker.address.cardinalDirection",
      subValue: 10,
    },
    {
      id: faker.datatype.uuid(),
      type: "array",
      typeId: 2,
      name: "nestedData",
      parentName: null,
      value: [
        {
          id: faker.datatype.uuid(),
          type: "default",
          typeId: 1,
          name: "nestedCompanyName1",
          parentName: "nestedData",
          value: "faker.company.name",
        },
        {
          id: faker.datatype.uuid(),
          type: "default",
          typeId: 1,
          name: "nestedCompanyName2",
          parentName: "nestedData",
          value: "faker.company.name",
        },
        {
          id: faker.datatype.uuid(),
          type: "array",
          typeId: 2,
          name: "nestedInnerData",
          parentName: "nestedData",
          value: [
            {
              id: faker.datatype.uuid(),
              type: "default",
              typeId: 1,
              name: "innerCompanyName11",
              parentName: "nestedInnerData",
              value: "faker.company.name",
            },
            {
              id: faker.datatype.uuid(),
              typeId: 1,
              type: "default",
              name: "innerCompanyName12",
              parentName: "nestedInnerData",
              value: "faker.company.name",
            },
            {
              id: faker.datatype.uuid(),
              type: "object",
              typeId: 3,
              name: "nestedInnerData2",
              parentName: "nestedInnerData",
              value: [
                {
                  id: faker.datatype.uuid(),
                  type: "default",
                  typeId: 1,
                  parentName: "nestedInnerData",
                  name: "innerCompanyName1",
                  parentName: "nestedInnerData2",
                  value: "faker.company.name",
                },
                {
                  id: faker.datatype.uuid(),
                  typeId: 1,
                  type: "default",
                  parentName: "nestedInnerData",
                  name: "innerCompanyName2",
                  parentName: "nestedInnerData2",
                  value: "faker.company.name",
                },
              ],
            },
          ],
        },
      ],
    },
  ]);

  useEffect(() => {
    console.log(data);
  }, [data]);

  useEffect(() => {
    const url = window.location.href;
    const urlArray = url.split("/");
    const projectIdUrl = urlArray[urlArray.length - 1];
    setProjectId(projectIdUrl);

    axios
      .request({
        method: "GET",
        url: "http://localhost:3001/routes/get-route/" + projectIdUrl,
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then(function (response) {
        console.log(response);
        setProjectDataArray(response.data.data);
      })
      .catch(function (error) {
        console.error(error);
      })
      .finally(function () {
        setLoading(false);
      });
  }, []);

  return (
    <DefaultLayoutApp>
      <main className="flex-grow p-5">
        {loading ? (
          <div>Loading...</div>
        ) : (
          <div className="flex space-x-5">
            <div className="w-[15%] h-screen overflow-scroll">
              <RouteApiList />
            </div>
            <div className="w-[55%] h-screen overflow-scroll">
              <ApiJsonBuilder data={data} setData={setData} />
            </div>
            <div className="w-[30%] bg-[#0c0d0e] p-3 h-screen overflow-scroll">
              <ReactJson
                theme={"brewer"}
                src={{
                  status: true,
                  message: "Requête effectuée avec succès",
                  data: fakeJsRenderer(data),
                }}
                style={{ fontSize: 10 }}
              />
            </div>
          </div>
        )}
      </main>
    </DefaultLayoutApp>
  );
}
