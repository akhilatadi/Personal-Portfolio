import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

import { workData } from "../../Data/WorkData";

import "./View.css";
function View() {
  const [currData, setCurrData] = useState(workData);

  const { id } = useParams();

  useEffect(() => {
    const viewData = currData.filter((data) => data.id == id);
    setCurrData(viewData);
  }, [id]);

  return (
    <div className="viewContainer">
      {/* <video autoPlay loop muted>
        <source src={sofa} type="video/mp4" />
      </video> */}
      <div className="viewContent">
        {currData.map((data) => (
          <div className="viewItems" key={data.id}>
            <div className="propTitle">{data.title}</div>
            <a href={data.url} target="_blank">
         
              <img src={data.img} className="view_image" />
            </a>
            <div className="view_info">
            <h1>About</h1>
              <div className="propDesc">{data.desc}</div>
              <div className="btn_wrapper">
              <a href={data.url} target="_blank">
                <button>Visit Site</button>
              </a>
              <a href={data.git} target="_blank">
                <button>Github</button>
              </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default View;
