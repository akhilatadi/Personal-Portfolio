import React, { useState } from "react";
import { workData } from "../../Data/WorkData";
import "./Work.css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";

function Work() {
  const [currData, setCurrData] = useState(0);

  return (
    <div className="work_container">
      <h1 className="work_heading"> Works</h1>

      <div className="work_wrapper">
        <div
          className="work_left"
          onClick={() => {
            currData > 0 ? setCurrData(currData - 1) : setCurrData(2);
          }}
        >
          <IoIosArrowBack />
        </div>

        <div className="work_cont">
          <div className="workImageCont">
            <img className="work_img" src={workData[currData].img} />
          </div>
          <div className="work_info">
            <h4 className="work_title"> {workData[currData].title}</h4>
            <Link to={`/view/${workData[currData].id}`}>
              <button className="work_btn" key={workData[currData].id}>
                View more
              </button>
            </Link>
          </div>
        </div>
        <div
          className="work_right"
          onClick={() => {
            currData < workData.length - 1
              ? setCurrData(currData + 1)
              : setCurrData(0);
          }}
        >
          <IoIosArrowForward />
        </div>
      </div>
    </div>
  );
}

export default Work;
