import React from 'react'
import "./Fun.css"
import { IoIosArrowDown  } from "react-icons/io";

function Fun(props) {
  return (
    <div className='funContainer'>
        <div className='fun_wrapper'>
    <div className="fun_content">
       <h1>{props.title}</h1>
    <p className='fun_desc'>{props.desc}</p>
   
    </div>
            <div className='fun_arrow'>
                <IoIosArrowDown/>
                <p className='fun_scroll'>scroll down</p>
            </div>
        </div>
    </div>
  )
}

export default Fun