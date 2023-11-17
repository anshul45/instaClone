import React from "react";
import UserImage from "../assets/istockphoto-1337144146-612x612.jpg";

const Status = () => {
  return (
    <div>
      <img
        alt="user_image"
        src={UserImage}
        className="w-12 h-12 rounded-full"
      />
      <span className="text-xs">{"random_Name".slice(0, 6)}...</span>
    </div>
  );
};

export default Status;
