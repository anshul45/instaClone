import { createSlice } from "@reduxjs/toolkit";
import { postData } from "../assets/data";

const dataSlice = createSlice({
  name: "data",
  initialState: {
    postData: postData,
    userInfo: [],
    isAddPost: false,
    isShowComment: {
      postId: null,
      state: false,
    },
  },

  reducers: {
    setUser: (state, action) => {
      state.userInfo = action.payload;
    },
    addPost: (state) => {
      state.isAddPost = !state.isAddPost;
    },
    postComment: (state, action) => {
      const { postId, newComment, username } = action.payload;
      state.postData = state.postData.map((post) =>
        post.id === postId
          ? {
              ...post,
              comments: [...post.comments, { username, desc: newComment }],
            }
          : post
      );
    },
    showComment: (state, action) => {
      state.isShowComment.postId = action.payload.postId;
      state.isShowComment.state = !state.isShowComment.state;
    },
    toggleLike: (state, action) => {
      const { postId } = action.payload;
      state.postData = state.postData.map((post) =>
        post.id === postId ? { ...post, likes: post.likes === 1 ? 0 : 1 } : post
      );
    },
    uploadImage: (state, action) => {
      function numbers() {
        return Math.floor(Math.random() * 90) + 10;
      }
      const { name, image } = action.payload;
      const newPost = {
        id: numbers(),
        name,
        caption: "",
        img: image,
        likes: 0,
        comments: [],
      };
      state.postData.push(newPost);
    },
  },
});

export const {
  setUser,
  addPost,
  showComment,
  postComment,
  toggleLike,
  uploadImage,
} = dataSlice.actions;

export default dataSlice.reducer;
