import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import ProjectMenu from "../Menu/ProjectMenu";

import DefaultBox from "../../layout/DefaultBox";

export default function ProjectCard({ name, id, date, deleteProject }) {

  return (
    <div>
      <DefaultBox customClass="flex space-x-5 justify-between">
        <div>
          <DefaultBox customClass="w-auto h-full p-5 bg-custom-700 rounded-lg flex justify-center items-center cursor-pointer hover:bg-custom-600 focus:bg-custom-600 transition-all">
            <Link to={`/list/${id}`}>
              <p className="text-2xl font-bold text-slate-100 uppercase">
                {name.substring(0, 3)}
              </p>
            </Link>
          </DefaultBox>
        </div>
        <div className="w-3/4 h-full flex flex-col justify-between">
          <div className="flex justify-between">
            <div className="w-full flex flex-col space-y-3">
              <div className="flex justify-between w-full">
                <p className="text-xl font-bold text-slate-100 uppercase">
                  {name.length < 10 ? name : name.substring(0, 10) + "..."}
                </p>
                <ProjectMenu id={id} deleteProject={deleteProject} />
              </div>
              <div className="flex flex-col space-y-1">
                <p className="text-slate-100 hover:text-slate-200 text-sm lowercase">
                  /api/{id}/
                </p>
                <p className="text-slate-100 text-sm">
                  Créer le : {date.substring(8, 10)}/{date.substring(5, 7)}/
                  {date.substring(0, 4)}
                </p>
              </div>
            </div>
          </div>
        </div>
      </DefaultBox>
    </div>
  );
}
