import React from "react";
import moment from "moment";
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { TrashIcon } from "@heroicons/react/solid";
import { useSelector } from "react-redux";
import { selectChannelId } from "../features/channelSlice";
import { db } from "../firebase";

function Message({ message, timestamp, name, photoURL, id, email }) {
  const [user] = useAuthState(auth);
  const channelId = useSelector(selectChannelId);

  return (
    <div className="flex items-center p-1 pl-5 my-5 mr-2 hover:bg-[#32353B] group">
      <img
        src={photoURL}
        alt="profile pic"
        className="h-10 rounded-full cursor-pointer mr-3"
      />
      <div className="flex flex-col">
        <h4 className="flex items-center space-x-2 font-medium ">
          <span className="hover:underline text-white text-sm cursor-pointer">
            {name}
          </span>
          <span className="text-[#72767d] text-xs">
            {moment(timestamp?.toDate().getTime()).format("lll")}
          </span>
        </h4>
        <p className="text-sm text-[#dcddde]">{message}</p>
      </div>

      {user?.email === email && (
        <div
          className="flex items-center p-1 ml-auto rounded-sm cursor-pointer text-[#b9bbbe] hover:bg-[#40444b] "
          onClick={() => {
            db.collection("channels")
              .doc(channelId)
              .collection("messages")
              .doc(id)
              .delete();
          }}
        >
          <TrashIcon className="h-5 hidden group-hover:inline" />
        </div>
      )}
    </div>
  );
}

export default Message;
