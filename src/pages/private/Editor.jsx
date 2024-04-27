import React, { useState, useEffect } from "react";
import axios from "axios";

import ValueTable from "../../components/Ui/Table/ValueTable";
import WallSvg from "../../components/Ui/Other/WallSvg";
import BtnLoop from "../../components/Ui/Other/BtnLoop";

import DefaultHeader from "../../components/Ui/Other/DefaultHeader";

export default function Editor() {
    const [endpointData, setEndpointData] = useState("test");
    const [routeId, setRouteId] = useState(null);
    const [projectId, setProjectId] = useState(null);
    const [projectData, setProjectData] = useState({
        endpoint: "",
        number_of_loops: 0
    });


    const handelUpdate = (value) => {
        axios.request({
            method: 'PUT',
            url: 'http://localhost:3001/routes/update-route/' + routeId,
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem("token")
            },
            data: value
        }).then(function (response) {
            console.log(response.data);
        }).catch(function (error) {
            console.error(error);
        });
    }

    const onChangeLoop = (value) => {
        handelUpdate({ number_of_loops: value });
        setProjectData({ ...projectData, number_of_loops: value });
    }


    // Get id in url
    useEffect(() => {
        const projectId = window.location.href.split("/")[4];
        const id = window.location.href.split("/")[5];
        setRouteId(id);
        setProjectId(projectId);

        const options = {
            method: 'GET',
            url: 'http://localhost:3001/routes/get-one-route/' + id,
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem("token")
            }
        };

        axios.request(options).then(function (response) {
            setProjectData(response.data.data);
        }).catch(function (error) {
            console.error(error);
        });
    }, []);

    console.log('projectID', projectId);


    return (
        <div className="flex flex-col min-h-screen bg-slate-900 overflow-hidden isolate">
            <WallSvg />
            <DefaultHeader />
            <main className="flex-grow p-5">
                <div className="flex mb-12">
                    <BtnLoop value={projectData.number_of_loops} onChange={onChangeLoop} />
                    <div className="flex flex-col mb-12 ml-5">
                        <input
                            type="text"
                            className="text-2xl font-bold text-slate-100 bg-transparent border-0 mb-2"
                            value={projectData.endpoint}
                            onChange={
                                (e) => {
                                    handelUpdate({ endpoint: e.target.value });
                                    setProjectData({ ...projectData, endpoint: e.target.value });
                                }
                            }
                        />
                        <a href={`http://localhost:3001/api/${routeId}`}
                            target="_blank" rel="noreferrer" className="text-slate-300 hover:text-slate-400 text-sm">http://gethead.fr/api/{routeId}</a>
                    </div>
                </div>
                <div className="w-full bg-slate-800 rounded-lg p-5">
                    <ValueTable routeId={routeId} projectId={projectId} />
                </div>
            </main>
        </div>
    );
}