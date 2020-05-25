import React, { Fragment, useEffect } from "react";
import "../../assets/css/success.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBoxOpen } from "@fortawesome/free-solid-svg-icons";

const SuccessPage = () => {
  useEffect(() => {
    setTimeout(function () {
      window.location.href = "/";
    }, 2000);
  });
  return (
    <Fragment>
      <div className="rs-container">
        <div className="success-card">
          <div className="success-checkmark">
            <i className="checkmark">✓</i>
          </div>
          <h1>Success</h1>
          <p>
            We received your Order{" "}
            <FontAwesomeIcon color="#88b04b" icon={faBoxOpen} />
            <br /> we'll be in touch shortly!
          </p>
        </div>
      </div>
    </Fragment>
  );
};

export default SuccessPage;
