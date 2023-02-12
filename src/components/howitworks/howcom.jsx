import React from "react";
import "./howcom.css";

const Article = ({ text, para, number }) => (
  <div className="immi__blog-container_article">
    <div className="immi__blog-container_article-content">
      <div>
        <h3>{text}</h3>
        <h5>{para}</h5>
      </div>
      <p>{number}</p>
    </div>
  </div>
);

export default Article;
