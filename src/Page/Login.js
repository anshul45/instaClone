import React, { useState } from "react";
import Name from "../assets/name.png";
import { useDispatch } from "react-redux";
import { setUser } from "../utils/dataSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: "",
    username: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    const alphanumeric = /^[0-9a-zA-Z\s]+$/;

    if (
      formData.name.trim() !== "" &&
      formData.username.trim() !== "" &&
      alphanumeric.test(formData.name) &&
      alphanumeric.test(formData.username)
    ) {
      dispatch(setUser(formData));
      navigate("/");
    } else {
      alert(
        "Please fill only alphanumeric characters for the username and name."
      );
    }
  };

  return (
    <div className="flex justify-center items-center flex-col gap-10 mt-5">
      <div className="border flex flex-col items-center gap-10 p-12">
        <img className="w-48" src={Name} alt="app_logo" />
        <div className="flex flex-col gap-5 w-64">
          <input
            className="border-[1px] p-1  border-black outline-none bg-gray-50"
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />

          <input
            className="border-[1px] p-1 border-black outline-none bg-gray-50"
            type="text"
            name="username"
            placeholder="UserName"
            value={formData.username}
            onChange={handleInputChange}
            required
          />
          <button
            className="bg-sky-500 w-64 rounded-lg p-1 font-semibold text-white"
            onClick={handleSubmit}
            disabled={!formData.name.trim() || !formData.username.trim()}
          >
            Log in
          </button>
        </div>
      </div>
      <div className="border-[1px] w-[355px] p-5 text-sm text-center">
        <span>Don't have an account?</span>
        <span className="text-sky-500"> Sign up</span>
      </div>
      <div className="mt-10">
        <div className="flex gap-3 text-xs text-gray-500">
          <span>Meta</span>
          <span>About</span>
          <span>Blog</span>
          <span>Jobs</span>
          <span>Help</span>
          <span>Api</span>
          <span>Privacy</span>
          <span>Terms</span>
          <span>Locations</span>
          <span>Instagram Lite</span>
          <span>Threads</span>
          <span>Contact uploading and non-users</span>
          <span>Meta Verified</span>
        </div>
        <div className="flex gap-5 mt-5 text-xs text-gray-500 justify-center">
          <span>English (US)</span>
          <span>© 2023 Instagram from Meta</span>
        </div>
      </div>
    </div>
  );
};

export default Login;
