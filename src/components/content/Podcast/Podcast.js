import React, { useState } from 'react'
import "./Podcast.css"
import {podcasts} from "../../../Data/PodcastsData";
import $ from 'jquery'

function Podcast() {

  const [search, setSearch] = useState("");
  const [items, setItems] = useState(podcasts);

  const filterCat = (categItem) => {
    const updatedItems = podcasts.filter((data) => {
      return data.category === categItem;
    });
    setItems(updatedItems);
    console.log(updatedItems);
  };
  
  var selector = '.podcasts_category div';

  $(selector).on('click', function(){
       $(selector).removeClass('active');
       $(this).addClass('active');
   });

  return (
    <div className="podcastContainer">
    <h1 className='podcast_heading'>Podcasts</h1>


    <div className="header_wrapper ">
        <div className="search_wrapper">
          <input
            className="searchBar"
            placeholder="Search by Title"
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          ></input>
        </div>
        <div className="podcasts_category" id="category">
          <div
            className="category_btn active"
            onClick={() => {
              setItems(podcasts);
            }}
          >
            All
          </div>
          <div
            className="category_btn  "
            onClick={() => {
              filterCat("WebDevelopment");
            }}
          >
           Web Development
          </div>
          <div
            className="category_btn"
            onClick={() => {
              filterCat("DarkWeb");
            }}
          >
           DarkWeb
          </div>
          <div
            className="category_btn"
            onClick={() => {
              filterCat("SelfHelp");
            }}
          >
            Self-Help
          </div>
         
          <div
            className="category_btn"
            onClick={() => {
              filterCat("Science");
            }}
          >
         Science
          </div>
          <div
            className="category_btn"
            onClick={() => {
              filterCat("Crime");
            }}
          >
        Crime
          </div>
        </div>
      </div>


    <div className='podcast_wrapper'>
{items.map((data)=>(
 <div className='podcast_card'>

<div className='img_container'>

<img className='podcast_img' src={data.img}/>
 </div>

 <div className='info_container'>
   <h2 className='podcast_title'>{data.title}</h2>
   <div className='podcast_host'> hosted by {data.host}</div>
 
  <div className='link_wrapper'> <a href={data.url} target="_blank" className='podcast_link'>Listen now</a> </div>
 </div>
</div>

))}

</div>

  
       
              
             
    </div>
  )
}

export default Podcast