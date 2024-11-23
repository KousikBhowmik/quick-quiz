import React, { useContext, useEffect, useState } from "react";
import { quizContext } from "../context/QuizContext";
import loading from "../assets/loading.gif";
import { useNavigate } from "react-router-dom";

const Quiz = () => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [bg, setBg] = useState(null);
  const [answer, setAnswer] = useState(false);

  const { category, showType, apiData, fetchData, setMarks, finalResult } =
    useContext(quizContext);


  useEffect(() => {
    fetchData();
  }, []);



  return apiData === "" ? (
    <div className="w-full bg-black min-h-screen relative">
      <img
        className="w-20 absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 "
        src={loading}
      />
    </div>
  ) : (
    <div className="w-full  flex flex-col items-center  justify-center mt-[5vh] lg:mt-[10vh] ">
      <div className="flex items-center justify-center w-[90%] max-w-[700px] p-4 min-h-[60vh] sm:min-h-[50vh] bg-gray-800 rounded-md px-8 ">
        {apiData.map(
          (item, index) =>
            index === currentIndex && (
              <div
                key={index}
                className="  flex flex-col justify-center  items-center  gap-10  "
              >
                <div className="bg-[#f3ff4e] font-semibold px-3 rounded-md  py-2  text-black ">
                  Q: {item.question}
                </div>

                <div className="flex  flex-col w-full   gap-2">
                  {Object.entries(item.answers).map(
                    ([key, ans], count) =>
                      ans && (
                        <div
                          key={count}
                          className={`px-2 fontsem rounded-sm py-[4px] text-black cursor-pointer flex items-center w-full justify-center ${
                            bg === key ? "bg-green-300" : "bg-gray-400"
                          }`}
                          onClick={() => {
                            setBg(key);
                            const right = `${key}_correct`;

                            const isCorrect =
                              item.correct_answers[right] === "true";
                            if (isCorrect && !answer) {
                              setAnswer((prev) => !prev);
                            } else if (!isCorrect && answer) {
                              setAnswer((prev) => !prev);
                            }
                          }}
                        >
                          {ans}
                        </div>
                      )
                  )}
                </div>

                <div className="flex gap-10 ">
                  <button
                    className={`cursor-pointer bg-black px-4 py-1 rounded-md ${index === 0? "hidden": "block"} `}
                    onClick={() => {
                      setCurrentIndex(currentIndex - 1)
                      setMarks((prev) => prev.slice(0, -1));
                      setBg(null)
                    }}
                    disabled={currentIndex === 0}
                  >
                    Previous
                  </button>
                  <button
                    className={`${
                      currentIndex !== apiData.length - 1 ? "block" : "hidden"
                    }  bg-black px-4 py-1 rounded-md  `}
                    onClick={() => {
                      setMarks((prev) => [...prev, answer ? 1 : 0]);
                      setCurrentIndex(currentIndex + 1)
                      setBg(null)
                    }}
                  >
                    Next
                  </button>
                  <button
                    onClick={() => {
                      setBg(null);
                      setMarks((prev) => [...prev, answer ? 1 : 0]);
                      finalResult();
                      navigate("/result", { replace: true })
                  }}
                    className={`${
                      currentIndex === apiData.length - 1 ? "block" : "hidden"
                    }  bg-black px-4 py-1 rounded-md text-red-600 `}
                  >
                    Submit
                  </button>
                </div>
              </div>
            )
        )}
      </div>
    </div>
  );
};

export default Quiz;
