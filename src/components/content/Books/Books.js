import React, { useEffect, useState } from "react";
import { books } from "../../../Data/BooksData";
import $ from 'jquery'

import "./Books.css";
function Books() {
  const [search, setSearch] = useState("");
  const [items, setItems] = useState(books);

  const filterCat = (categItem) => {
    const updatedItems = books.filter((data) => {
      return data.category === categItem;
    });
    setItems(updatedItems);
    console.log(updatedItems);
  };
  
 ///// ////for button active on click
  
  var selector = '.books_category div';

 $(selector).on('click', function(){
      $(selector).removeClass('active');
      $(this).addClass('active');
  });
//////
  return (
    <div className="books_container">
      <h1 className="books_heading">Books</h1>
      <div className="header_wrapper ">
        <div className="search_wrapper">
          <input
            className="searchBar"
            placeholder="Search by Title or Author"
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          ></input>
        </div>
        <div className="books_category" >
          <div
            className="category_btn active"
            onClick={() => {
              setItems(books);
            }}
          >
            All
          </div>
          <div
            className="category_btn "
            onClick={() => {
              filterCat("Investing");
            }}
          >
            Investing
          </div>
          <div
            className="category_btn"
            onClick={() => {
              filterCat("Entrepreneur");
            }}
          >
            Entrepreneur
          </div>
          <div
            className="category_btn"
            onClick={() => {
              filterCat("Selfhelp");
            }}
          >
            Self-Help
          </div>
         
          <div
            className="category_btn"
            onClick={() => {
              filterCat("PersonalFinance");
            }}
          >
           Finance
          </div>

          <div
            className="category_btn "
            onClick={() => {
              filterCat("SocialEngineering");
            }}
          >
            Social Engineering
          </div>

          <div
            className="category_btn"
            onClick={() => {
              filterCat("Biography");
            }}
          >
        Biography
          </div>
        </div>
      </div>

      <div className="books_wrapper">
        {items
          .filter((data) => {
            if (search === "") {
              return data;
            } else if (
              data.title.toLowerCase().includes(search.toLowerCase())
            ) {
              return data;
            } else if (
              data.author.toLowerCase().includes(search.toLowerCase())
            ) {
              return data;
            }
          })
          .map((data) => (
            <div className="books_card" key={data.id}>
              <img className="books_image" src={data.img} />
              <div className="books_info">
                <div className="books_title">{data.title}</div>
                <div className="books_author"> by {data.author}</div>
              </div>

              <button className="books_btn" key={data.id}>
                View More
              </button>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Books;
