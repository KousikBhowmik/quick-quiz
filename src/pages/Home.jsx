import React, { useContext, useEffect } from "react";
import down_arrow_black from "../assets/down_arrow_black.png";
import up_arrow_black from "../assets/up_arrow_black.png";
import { useNavigate } from "react-router-dom";
import { quizContext } from "../context/QuizContext";

const Home = () => {
  const {
    category,
    setCategory,
    option,
    setOption,
    setType,
    showType,
    setShowType,
    typeOption,
    setTypeOption,
  } = useContext(quizContext);

  const navigate = useNavigate();

  const handaleForm = (e) => {
    e.preventDefault();
    navigate("/quiz");
  };

  return (
    <div className="w-full mt-4  px-6 py-2 sm:px-10 sm:py-3 xl:px-20 xl:py-4 flex flex-col items-center gap-[5vh] sm:gap-[7vh] ">
      {/* Home message section */}

      <div className="flex flex-col gap-2 sm:gap-4  items-center ">
        <div className="flex flex-col sm:flex-row  items-center sm:gap-2">
          <p className="text-[24px] text-gray-400  ">Hello there👋</p>
          <p className="text-[20px] text-gray-500 sm:text-gray-400 sm:text-[24px]">
            Welcome to{" "}
            <span className="text-violet-500 font-semibold ">quick quiz!</span>
          </p>
        </div>
        <p className="text-yellow-100 text-center text-[20px] md:text-[26px] ">
          Are you ready to <span className="text-yellow-300">test</span> &{" "}
          <span className="text-yellow-300">expand</span> your knowlage? 😀
        </p>
      </div>

      {/* ------------------- qustion selection form -------------------- */}

      <form
        onSubmit={handaleForm}
        className="flex flex-col items-center gap-[3vh] w-[90%] max-w-[500px] bg-[#313131c1] rounded-md py-[30px]   "
      >
        <h1 className="font-semibold text-[17px] sm:tex-[20px] lg:text-[24px] text-purple-500 ">
          Customize your Quiz
        </h1>

        <div className="flex flex-col gap-5 sm:flex-row  ">
          {/* -------------- Category dropdown menu -------------- */}
          <div className="w-[150px] ">
            <div className="flex  justify-between items-center  h-[30px] rounded-sm   px-2  bg-[#ffec17] ">
              <p className="text-[14px] font-[600] text-black">
                {category === "And lots more" ? "More": category}
              </p>
              <img
                className="w-4 cursor-pointer"
                onClick={() => setOption((prev) => !prev)}
                src={option ? up_arrow_black : down_arrow_black}
              />
            </div>
            <div
              className={`${
                option ? "block" : "hidden"
              } max-h-[150px] absolute overflow-y-scroll rounded-sm w-[130px] pl-2 pt-1 text-yellow-400  mt-2 bg-black `}
            >
              <ul>
                <li
                  onClick={() => {
                    setCategory("Programming");
                    setOption((prev) => !prev);
                  }}
                >
                  Programming
                </li>
                <li
                  onClick={() => {
                    setCategory("Linux");
                    setOption((prev) => !prev);
                  }}
                >
                  Linux
                </li>
                <li
                  onClick={() => {
                    setCategory("DevOps");
                    setOption((prev) => !prev);
                  }}
                >
                  DevOps
                </li>
                <li
                  onClick={() => {
                    setCategory("Networking");
                    setOption((prev) => !prev);
                  }}
                >
                  Networking
                </li>
                <li
                  onClick={() => {
                    setCategory("Cloud");
                    setOption((prev) => !prev);
                  }}
                >
                  Cloud
                </li>
                <li
                  onClick={() => {
                    setCategory("Docker");
                    setOption((prev) => !prev);
                  }}
                >
                  Docker
                </li>
                <li
                  onClick={() => {
                    setCategory("And lots more");
                    setOption((prev) => !prev);
                  }}
                >
                  More
                </li>
              </ul>
            </div>
          </div>

          {/* -------------- deifculty dropdown menu -------------- */}
          <div className="w-[150px] ">
            <div className="flex  justify-between items-center  h-[30px] rounded-sm   px-2  bg-[#ffec17] ">
              <p className="text-[14px] font-[600] text-black">{showType}</p>
              <img
                className="w-4 cursor-pointer"
                onClick={() => setTypeOption((prev) => !prev)}
                src={typeOption ? up_arrow_black : down_arrow_black}
              />
            </div>
            <div
              className={`${
                typeOption ? "block" : "hidden"
              } max-h-[125px] absolute overflow-y-scroll rounded-sm w-[130px] pl-2 pt-1 text-yellow-400  mt-2 bg-black `}
            >
              <ul>
                <li
                  onClick={() => {
                    setType("");
                    setShowType("Mix");
                    setTypeOption((prev) => !prev);
                  }}
                >
                  Mix
                </li>
                <li
                  onClick={() => {
                    setType("&difficulty=easy");
                    setShowType("Easy");
                    setTypeOption((prev) => !prev);
                  }}
                >
                  Easy
                </li>
                <li
                  onClick={() => {
                    setType("&difficulty=medium");
                    setShowType("Medium");
                    setTypeOption((prev) => !prev);
                  }}
                >
                  Medium
                </li>
                <li
                  onClick={() => {
                    setType("&difficulty=hard");
                    setShowType("Hard");
                    setTypeOption((prev) => !prev);
                  }}
                >
                  Hard
                </li>
              </ul>
            </div>
          </div>
        </div>

        <button
          type="submit"
          className={`px-5 py-2 bg-black rounded-sm text-sm mt-[1vh]`}
        >
          Let's start
        </button>
      </form>
    </div>
  );
};

export default Home;
