import React from "react";

const Result = ({ score, totalQuestionNum, reStartQuiz, reViewQuiz }) => {
  return (
    <div>
      <h2>Kết quả</h2>
      <p className="result">
        Bạn đã hoàn thành {score}/{totalQuestionNum} câu
      </p>
      <div className="resultButtonsContainer">
        <button className="result-button" onClick={reViewQuiz}>
          Xem lại
        </button>
        <button className="result-button" onClick={reStartQuiz}>
          Làm lại
        </button>
      </div>
    </div>
  );
};

export default Result;
