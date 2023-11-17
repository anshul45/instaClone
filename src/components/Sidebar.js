import React, { useState } from "react";
import Logo from "../assets/name.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleUser,
  faClapperboard,
  faCommentDots,
  faCompass,
  faHeart,
  faHouse,
  faMagnifyingGlass,
  faSquarePlus,
} from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { addPost } from "../utils/dataSlice";

const Sidebar = () => {
  const dispatch = useDispatch();
  const [isAddPost, setIsAddPost] = useState(false);
  const handleClick = (event) => {
    setIsAddPost(!isAddPost);
    dispatch(addPost());
  };
  return (
    <div className="w-full sticky top-0  h-screen pl-5 pt-5">
      <img src={Logo} alt="app_logo" className="w-28 py-6" />
      <div className="flex flex-col gap-7 mt-5">
        <div className="flex items-center gap-3">
          <FontAwesomeIcon icon={faHouse} className="w-6 h-6" />
          <span>Home</span>
        </div>
        <div className="flex items-center gap-3">
          <FontAwesomeIcon icon={faMagnifyingGlass} className="w-6 h-6" />
          <span>Search</span>
        </div>
        <div className="flex items-center gap-3">
          <FontAwesomeIcon icon={faCompass} className="w-6 h-6" />
          <span>Explore</span>
        </div>
        <div className="flex items-center gap-3">
          <FontAwesomeIcon icon={faClapperboard} className="w-6 h-6" />
          <span>Reels</span>
        </div>
        <div className="flex items-center gap-3">
          <FontAwesomeIcon icon={faCommentDots} className="w-6 h-6" />
          <span>Message</span>
        </div>
        <div className="flex items-center gap-3">
          <FontAwesomeIcon icon={faHeart} className="w-6 h-6" />
          <span>Notification</span>
        </div>
        <div
          className="flex items-center gap-3 cursor-pointer"
          onClick={handleClick}
        >
          <FontAwesomeIcon icon={faSquarePlus} className="w-6 h-6" />
          <span>Create</span>
        </div>
        <div className="flex items-center gap-3">
          <FontAwesomeIcon icon={faCircleUser} className="w-6 h-6" />
          <span>Profile</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
