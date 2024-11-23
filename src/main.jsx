import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import QuizContextProvider from "./context/QuizContext.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <QuizContextProvider>
      <App />
    </QuizContextProvider>
  </BrowserRouter>
);
