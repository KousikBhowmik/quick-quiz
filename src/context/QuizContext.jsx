import React, { createContext, useState } from "react";
import axios from "axios";

export const quizContext = createContext();

const QuizContextProvider = ({ children }) => {
  const [category, setCategory] = useState("Programming");
  const [option, setOption] = useState(false);

  const [type, setType] = useState("");
  const [showType, setShowType] = useState("Difficulty");
  const [typeOption, setTypeOption] = useState(false);

  const [apiData, setApiData] = useState("");
  const [marks, setMarks] = useState([]);
  const [result, setResult] = useState("");
  const [msg, setMsg] = useState("");

  const fetchData = async () => {
    try {
      const apiKey = "oJ36li7zWlYKNCNleltExUsd8i09OulMsskl7BEp";
      console.log(import.meta.env.VITE_API_KEY);
      const URL = `https://quizapi.io/api/v1/questions?apiKey=${apiKey}&limit=10&${category}${type}`;
      const response = await axios.get(URL);
      console.log(URL);
      console.log(response.data);
      
      
      
      setApiData(response.data);
    } catch (error) {
      console.log(error.meeage);
    }
  };

  
  const comments = {
    1: "Keep trying!",
    2: "Don't give up!",
    3: "You can do better!",
    4: "Nice effort!",
    5: "Good work!",
    6: "Well done!",
    7: "Great job!",
    8: "Impressive!",
    9: "Almost perfect!",
    10: "Excellent!",
  };

  function getComment() {
    setResult(localStorage.getItem("point"))
    setMsg(localStorage.getItem("msg"))
  }

  const finalResult = ()=> {
    let sum = 0;
    for (const num of marks) {
      sum += num;
    }
    
    localStorage.setItem("point", sum);
    const temp = comments[sum] || "(●'◡'●)";
    localStorage.setItem("msg", temp);
    setMarks([]);
  };


  

  const value = {
    category,
    setCategory,
    option,
    setOption,
    type,
    setType,
    showType,
    setShowType,
    typeOption,
    setTypeOption,
    fetchData,
    result,
    setResult,
    apiData,
    marks,
    setMarks,
    finalResult,
    msg,
    setMsg,
    getComment,
  };

  return <quizContext.Provider value={value}>{children}</quizContext.Provider>;
};

export default QuizContextProvider;
