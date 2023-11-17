import React from "react";
import UserImage from "../assets/istockphoto-1337144146-612x612.jpg";

const User = ({ name, contents, option }) => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-3">
        <img
          src={UserImage}
          alt="user_img"
          className={` rounded-full ${
            option === "..." ? "w-9 h-9" : "w-12 h-12"
          }`}
        />
        <div className="text-sm leading-4">
          <h1 className="font-semibold">{name}</h1>
          <h1 className="text-gray-500">{contents ? contents : ""}</h1>
        </div>
      </div>
      <div
        className={`text-sm  font-semibold ${
          option === "..." ? "text-2xl" : "text-blue-500"
        } `}
      >
        {option}
      </div>
    </div>
  );
};

export default User;
