import React from "react";
import "./howcom.css";

const Article = ({ text, para, number, bimage }) => (
  <div
    className="fanuun__blog-container_article"
    style={{
      backgroundImage: `url(${bimage})`,
      backgroundRepeat: "no-repeat",
      backgroundPosition: "bottom",
    }}
  >
    <div className="fanuun__blog-container_article-content">
      <div>
        <h3>{text}</h3>
        <h5>{para}</h5>
      </div>
      <p>{number}</p>
    </div>
  </div>
);

export default Article;
