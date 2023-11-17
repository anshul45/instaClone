import React, { useEffect, useState } from "react";
import User from "./User";
import tempImage from "../assets/istockphoto-1337144146-612x612.jpg";

import { useDispatch, useSelector } from "react-redux";
import { postComment, showComment, toggleLike } from "../utils/dataSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBookmark,
  faComment,
  faShare,
} from "@fortawesome/free-solid-svg-icons";

const ShowComments = () => {
  const userData = useSelector((store) => store.data.userInfo);
  const isShowComment = useSelector((state) => state.data.isShowComment.state);
  const postId = useSelector((state) => state.data.isShowComment.postId);
  const data = useSelector((state) => state.data.postData);
  const dispatch = useDispatch();

  const commentsData = data.find((post) => post.id === postId);
  console.log(commentsData);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (isShowComment) {
        const modal = document.querySelector(".modal");
        if (modal && !modal.contains(event.target)) {
          dispatch(showComment({ postId: null }));
        }
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [dispatch, isShowComment, commentsData]);

  useEffect(() => {
    if (isShowComment) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isShowComment]);

  const handleLike = () => {
    dispatch(toggleLike({ postId: commentsData.id }));
  };

  const [newComment, setNewComment] = useState("");

  const handleCommentSubmit = () => {
    if (newComment.trim() !== "") {
      dispatch(
        postComment({
          postId: commentsData.id,
          newComment,
          username: userData.name,
        })
      );
      setNewComment("");
    }
  };

  return (
    <div className="fixed flex  top-10 h-[90%] w-[90%]  left-16 z-10 modal">
      <img
        alt="postedImage"
        className="h-[100%] w-[55%]"
        src={commentsData.img}
      />

      <div className="w-[45%] h-[100%] flex flex-col bg-white gap-3 py-3">
        <div className="px-5">
          <User
            name={commentsData.name}
            contents={commentsData.caption}
            option={"..."}
          />
        </div>
        <hr />
        <div className="h-96 px-5">
          <div>
            {commentsData.comments.map((comment, index) => (
              <div key={index} className="flex gap-2 items-center">
                <img
                  alt="user_Image"
                  src={tempImage}
                  className="w-9 h-9 rounded-full"
                />
                <div className="flex gap-1 text-sm">
                  <div className="font-bold">{comment.username}</div>
                  <div>{comment.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <hr />
        <div>
          <div className="flex justify-between items-center text-2xl px-5">
            <div className="flex gap-2 ">
              <span className="text-3xl cursor-pointer" onClick={handleLike}>
                {commentsData.likes ? "♥" : "♡"}
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
          <div className="px-5">{commentsData.likes} likes</div>
        </div>
        <hr />
        <div className="flex justify-between px-5">
          <input
            type="text"
            className="outline-none placeholder:text-gray-500"
            name="comment"
            placeholder="Add comment.."
            required
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
          />
          <button
            className="font-bold text-blue-600"
            onClick={handleCommentSubmit}
          >
            Post
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShowComments;
