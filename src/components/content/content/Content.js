import React from "react";
import { Link } from "react-router-dom";
import "./Content.css";


function Content() {
  return (
    <div className="content_section">
      <div className="book_section">
        <Link to="/books">
          <button className="book_btn">Books</button>
        </Link>
      </div>
      <div className="podcast_section">
        <Link to="/podcasts">
          <button className="podcast_btn">Podcasts</button>
        </Link>
      </div>

      <div className="painting_section">
        <Link to="/paintings">
          <button className="painting_btn">Quotes & Paradoxes</button>
        </Link>
      </div>

      <div className="french_section">
        <Link to="/french">
          <button className="french_btn">Learn French</button>
        </Link>
      </div>

    </div>
  );
}

export default Content;
