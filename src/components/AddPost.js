import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addPost, uploadImage } from "../utils/dataSlice";

const AddPost = () => {
  const isAddPost = useSelector((state) => state.data.isAddPost);
  const user = useSelector((state) => state.data.userInfo);
  const dispatch = useDispatch();
  const [filePreview, setFilePreview] = useState(null);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFilePreview(reader.result);
      };
      reader.readAsDataURL(selectedFile);
    }
  };

  const handlePostClick = () => {
    if (filePreview) {
      const newPostData = {
        name: user.name,
        image: filePreview,
      };
      dispatch(uploadImage(newPostData));
      dispatch(addPost());
      setFilePreview(null);
    }
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (isAddPost) {
        const modal = document.querySelector(".modal");
        if (modal && !modal.contains(event.target)) {
          dispatch(addPost());
        }
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [dispatch, isAddPost]);

  useEffect(() => {
    if (isAddPost) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isAddPost]);
  return (
    <div className="fixed top-1/4 left-1/3 z-10 modal">
      <div className="w-96 h-96 bg-white rounded-lg">
        {filePreview ? (
          <div className="flex justify-between px-2 py-2 items-center">
            <h1
              className="cursor-pointer"
              onClick={() => {
                dispatch(addPost());
                setFilePreview(null);
              }}
            >
              ❌
            </h1>
            <h1
              className="font-semibold text-blue-600 cursor-pointer"
              onClick={handlePostClick}
            >
              Post
            </h1>
          </div>
        ) : (
          <h1 className="py-1 mb-1 font-semibold text-center">
            Create new post
          </h1>
        )}
        <hr />
        <div className={`text-center ${filePreview ? "mt-0" : "mt-[40%]"} `}>
          {filePreview ? (
            <img
              alt="preview_image"
              src={filePreview}
              className="w-full h-80 object-cover"
            />
          ) : (
            <input type="file" name="uploadfile" onChange={handleFileChange} />
          )}
        </div>
      </div>
    </div>
  );
};

export default AddPost;
