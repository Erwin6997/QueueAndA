import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import QuestionForm from "./QuestionForm";
import PlainHeader from './PlainHeader';

const AskQuestionPage = () => {
  return (
    <div>
       <PlainHeader/>
      <div className="mt-2">
        <div>
          <button type="button" className="ml-3 button ">
            <Link to="/" style={{ textDecoration: "none", color: "white" }}>
              Back
            </Link>
          </button>
        </div>
        <label className="title_question">
          <i className="fas fa-question-circle"></i>
          Ask a Question
        </label>
        <QuestionForm />
      </div>
    </div>
  );
};

export default AskQuestionPage;
