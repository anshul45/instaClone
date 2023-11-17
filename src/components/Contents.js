import React from "react";
import User from "./User";
import Post from "./Post";
import Status from "./Status";
import { useSelector } from "react-redux";

const Contents = () => {
  const userData = useSelector((store) => store.data.userInfo);
  const postData = useSelector((store) => store.data.postData);
  return (
    <div className="flex pt-7">
      <div className="flex-[2] pl-12">
        <div className="flex gap-7">
          <Status />
          <Status />
          <Status />
        </div>
        <div className="p-28 pt-0">
          {postData?.map((data) => (
            <Post data={data} key={data.id} />
          ))}
        </div>
      </div>
      <div className="flex-[1] px-11 flex flex-col gap-5 ">
        <div>
          <User
            name={userData.name}
            contents={userData.username}
            option={"Switch"}
          />
        </div>
        <div className="flex flex-col gap-4">
          <div className="flex justify-between items-center text-sm">
            <h1 className="font-medium text-gray-500">Suggested for you</h1>
            <h3>See All</h3>
          </div>
          <User
            name={"temp_name"}
            contents={"Suggested for you"}
            option={"Follow"}
          />
          <User
            name={"temp_name"}
            contents={"Suggested for you"}
            option={"Follow"}
          />
          <User
            name={"temp_name"}
            contents={"Suggested for you"}
            option={"Follow"}
          />
        </div>
        <div className="text-xs text-gray-500">© 2023 INSTAGRAM FROM META</div>
      </div>
    </div>
  );
};

export default Contents;
