import React, { useState } from "react";
import "./position.css";

import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import axios from "axios";

const Position = () => {
  const [selectedFile, setSelectedFile] = useState("");
  const MySwal = withReactContent(Swal);

  function onSubmit() {
    var data = new FormData();
    data.append("profileImg", selectedFile);

    var config = {
      method: "post",
      url: "http://localhost:5000/user-profile",
      data: data,
    };
    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));

        return MySwal.fire({
          title: <h2 className="swal-css">Thankyou</h2>,
          text: "Our team will connect with you, if you seem a good fit for FANUUN",

          icon: "success",
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <div className="position__container section__padding">
      <div className="position__cta">
        <div className="position__cta-content">
          <div className="position__heading">
            <h3>Upload Your Resume</h3>
          </div>
        </div>
        <div className="position__cta-btn">
          <input
            type="file"
            onChange={(e) => setSelectedFile(e.target.files[0])}
          />
          <button type="button" onClick={onSubmit}>
            Upload
          </button>
        </div>
      </div>
    </div>
  );
};
export default Position;
