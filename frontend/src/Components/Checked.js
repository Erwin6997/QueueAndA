import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Loader from "./Loader";

const Checked = ({ questionDetails }) => {
  return (
    <div className="container">
      {questionDetails ? (
        <div>
          {questionDetails.length === 0 ? (
            <div className="question_needs_answer">
              This Question Needs &nbsp;Answers{" "}
            </div>
          ) : (
            <div className="question_has_answer">
              <div className="fas fa-check-square h1 checked rounded" />
              <span className="pl-2">{questionDetails.length} Answers</span>
            </div>
          )}
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default Checked;
