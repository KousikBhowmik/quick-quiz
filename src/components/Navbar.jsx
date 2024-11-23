import React from 'react'
import { NavLink } from 'react-router-dom'
import git_icon from '../assets/git_hub_logo.png'
import x_icon from '../assets/X_logo.png'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="flex  w-full items-center justify-between px-6 py-2 sm:px-10 sm:py-3 xl:px-20 xl:py-4">
      <h1
        onClick={() => {
          localStorage.removeItem("point");
          localStorage.removeItem("msg");
          navigate("/");
        }}
        className="text-white text-[18px] md:text-xl cursor-pointer lg:text-2xl "
      >
        quick quiz
      </h1>
      <div className=" flex gap-4 lg:gap-6">
        <NavLink
          to={"https://github.com/KousikBhowmik/quick-quiz.git"}
          target="_blank"
        >
          <img className="w-4 lg:w-5 cursor-pointer " src={git_icon} />
        </NavLink>
        <NavLink to={"https://x.com/kousikgg"} target="_blank">
          <img className="w-4 lg:w-5 cursor-pointer " src={x_icon} />
        </NavLink>
      </div>
    </div>
  );
}

export default Navbar