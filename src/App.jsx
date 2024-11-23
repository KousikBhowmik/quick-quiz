import { Routes, Route } from "react-router-dom";
import { ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home.jsx";
import Quiz from "./pages/Quiz.jsx";
import Result from "./pages/Result.jsx";

function App() {
  return (
    <div className="w-full  min-h-screen bg-[#100f0f] ">
      <ToastContainer />
      <Navbar />
      <hr className="h-[1px] border-none bg-gray-600 w-full " />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </div>
  );
}

export default App;
