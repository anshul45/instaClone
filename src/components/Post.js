import React, { useState } from "react";
import User from "./User";
import { useDispatch, useSelector } from "react-redux";
import { postComment, showComment, toggleLike } from "../utils/dataSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookmark,
  faComment,
  faShare,
} from "@fortawesome/free-solid-svg-icons";

const Post = ({ data }) => {
  const userData = useSelector((store) => store.data.userInfo);
  const dispatch = useDispatch();
  const [newComment, setNewComment] = useState("");

  const handleCommentSubmit = () => {
    if (newComment.trim() !== "") {
      dispatch(
        postComment({ postId: data.id, newComment, username: userData.name })
      );
      setNewComment("");
    }
  };

  const handleLike = () => {
    dispatch(toggleLike({ postId: data.id }));
  };

  return (
    <div className="flex flex-col gap-3 py-5">
      <div>
        <User name={data.name} option={"..."} />
      </div>
      <img
        src={data.img}
        alt="user_image"
        className="w-full  h-[calc(100vh-140px)] rounded-md"
      />
      <div className="flex justify-between items-center text-2xl">
        <div className="flex gap-2 ">
          <span className="text-3xl cursor-pointer" onClick={handleLike}>
            {data.likes ? "♥" : "♡"}
          </span>
          <div>
            <FontAwesomeIcon icon={faComment} />
          </div>

          <div>
            <FontAwesomeIcon icon={faShare} />
          </div>
        </div>
        <div>
          <FontAwesomeIcon icon={faBookmark} />
        </div>
      </div>
      <h1 className="font-semibold">{data.likes} likes</h1>
      <h1 className="text-sm text-gray-500">{data.caption}</h1>
      <h1
        className="text-sm text-gray-500 cursor-pointer"
        onClick={() => dispatch(showComment({ postId: data.id }))}
      >
        View all comments
      </h1>
      <div className="flex">
        <input
          className="w-full p-1 outline-none"
          type="text"
          name="comment"
          placeholder="Add comment.."
          required
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        />
        <button
          className="text-blue-600 font-semibold"
          onClick={handleCommentSubmit}
        >
          Post
        </button>
      </div>
      <hr />
    </div>
  );
};

export default Post;
