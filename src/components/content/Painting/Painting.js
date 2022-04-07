import React, { useState } from "react";
import "./Painting.css";
import { quoteData } from "../../../Data/QuotesData";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { paradoxData } from "../../../Data/ParadoxData";

function Painting() {
  const [currQuo, setCurrQuo] = useState(0);
  const [currpar, setCurrPar] = useState(0);

  const getRandom = () => {
    let randomNum = Math.floor(Math.random() * paradoxData.length - 1) + 1;
    setCurrPar(randomNum);
  };

  return (
    <div className="artContainer">
      <div className="art_desc">
        <h1>Quotes</h1>
        <p className="art_text">
          These are some of my favourite quotes that are on the top of my head
          when I worked on this section.
          Apologies in Advance, My comments are longer than the quotes!
        </p>
      </div>

      <div className="quotes_container">
        <div
          className="carousel_left"
          onClick={() => {
            currQuo > 0 ? setCurrQuo(currQuo - 1) : setCurrQuo(3);
          }}
        >
          <IoIosArrowBack />
        </div>

        <div className="quote_desc">
          <div className="quote_title">
            <p>
              {" "}
              {quoteData[currQuo].title} {quoteData[currQuo].author}
            </p>
          </div>
          <div className="quote_comment">
            <p>
              <h4>Comments: </h4>
              {quoteData[currQuo].comment}{" "}
            </p>
          </div>
        </div>

        <div
          className="carousel_right"
          onClick={() => {
            currQuo < quoteData.length - 1
              ? setCurrQuo(currQuo + 1)
              : setCurrQuo(0);
          }}
        >
          <IoIosArrowForward />
        </div>
      </div>

      <div className="paradox_desc">
        <h1 style={{color:   "#064663"}}>Brain Twisters</h1>
        <p className="paradox_text">
         We as Humans have always been fascinated by mind twisters like riddles and puzzles ,but nothing intruiges the human mind more than a paradox.
        </p>
      </div>

      <div className="paradox_container">
        <div className="paradox_wrapper">
          <div className="paradox_title">
            <h1>{paradoxData[currpar].title}</h1>
          </div>
          <div className="paradox_desc">
            <p>{paradoxData[currpar].desc} </p>
          </div>
</div>
<div className="paradox_btn">
          <button  onClick={getRandom}>
            Get a random paradox
          </button>
          </div>
        </div>
      
    </div>
  );
}

export default Painting;
