import React from "react";
import Sidebar from "../components/Sidebar";
import Contents from "../components/Contents";
import { useSelector } from "react-redux";
import ShowComments from "../components/ShowComments";
import AddPost from "../components/AddPost";

const Home = () => {
  const isAddPost = useSelector((state) => state.data.isAddPost);
  const isShowComment = useSelector((state) => state.data.isShowComment.state);
  return (
    <div
      className={`flex static ${isAddPost ? "bg-gray-300" : ""} ${
        isShowComment ? "bg-gray-300" : ""
      }`}
    >
      {isAddPost && <AddPost />}
      {isShowComment && <ShowComments />}
      <div className="flex-[1] border-r-[1px]">
        <Sidebar />
      </div>
      <div className="flex-[4.6]">
        <Contents />
      </div>
    </div>
  );
};

export default Home;
