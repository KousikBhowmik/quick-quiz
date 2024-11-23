import React, { useContext, useEffect, useState } from "react";
import { quizContext } from "../context/QuizContext";
import loading from "../assets/loading.gif";
import { useNavigate } from "react-router-dom";

const Result = () => {
  const { result, msg, getComment } = useContext(quizContext);

  useEffect(() => {
    getComment();
  }, [])

  const navigate = useNavigate();


  // localStorage.removeItem();

  return result === "" ? (
    <div className="w-full bg-black min-h-screen relative">
      <img
        className="w-20 absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 "
        src={loading}
      />
    </div>
  ) : (
    <div className="w-full flex items-center justify-center min-h-[50vh] sm:min-h-[60vh] ">
      <div className="w-[80%] max-w-[550px] flex flex-col items-center justify-center gap-10 py-8  bg-slate-700 rounded-md ">
        <div className="flex flex-col items-center justify-center border-[3px] w-[100px] h-[100px] rounded-full gap-1 ">
          <p className="text-[20px] text-green-500 font-semibold ">{result}</p>
          <hr className="border w-full  " />
          <p className="text-[20px] text-green-500 font-semibold">10</p>
        </div>

        <div className="py-2 px-4 bg-yellow-400 text-black font-semibold rounded-md ">{msg}</div>

        <button className="py-2 px-4 bg-black " onClick={() =>{
          localStorage.removeItem("point");
          localStorage.removeItem("msg");
          navigate('/')
        }} >Back To Home</button>
      </div>
    </div>
  );
};

export default Result;
