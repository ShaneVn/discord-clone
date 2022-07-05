import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db, app } from "../firebase";
import { Navigate } from "react-router-dom";
import ServerIcon from "./ServerIcon";
import { ChevronDownIcon, CogIcon, MicrophoneIcon, PhoneIcon, PlusIcon } from "@heroicons/react/outline";
import Channel from "./Channel";
import { addDoc, collection, getFirestore, query } from "firebase/firestore";
import firebase from "firebase/compat/app";
import { useCollection } from "react-firebase-hooks/firestore";
import Chat from "./Chat";

function Home() {
  const [user] = useAuthState(auth);
  const [channels] = useCollection(db.collection("channels"));

  
// create channel to firebase
  const handleAddChannel = () => {
    const channelName = prompt("Enter a new channel name");

    if (channelName) {
      db.collection("channels").add({
        channelName: channelName,
      });
    }
  };


  return (
    <>
      {!user && <Navigate replace to="/" />}
      <div className="flex h-screen">
        <div className="flex flex-col bg-discord_serverContainer space-y-3 p-3 min-w-max">
          <div className="server-default hover:bg-discord_purple">
            <img src="../topicon.png" alt="" className="h-5" />
          </div>
          <hr className="border-gray-700 border w-8 mx-auto" />
          <ServerIcon image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3YraeeRnBhf1Sd-QQndtiCYLL5RTFWDhvjcooa9c8NqWeU6D0vP3x-3l1bfX5vskcToE&usqp=CAU" />
          <ServerIcon image="https://cdn.iconscout.com/icon/free/png-256/javascript-2752148-2284965.png" />
          <ServerIcon image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3YraeeRnBhf1Sd-QQndtiCYLL5RTFWDhvjcooa9c8NqWeU6D0vP3x-3l1bfX5vskcToE&usqp=CAU" />
          <ServerIcon image="https://cdn.iconscout.com/icon/free/png-256/javascript-2752148-2284965.png" />
          <div className="server-default hover:bg-discord_green group">
            <PlusIcon className="text-discord_green h-7 group-hover:text-white" />
          </div>
        </div>

        <div className="bg-discord_channelsBg flex flex-col min-w-max">
          <h2
            className="text-white font-bold text-sm flex items-center justify-between
          border-b border-gray-800 p-4 cursor-pointer
          hover:bg-discord_serverNameHoverBg"
          >
            Official Server
            <ChevronDownIcon className="h-5 ml-2" />
          </h2>

          <div className="text-discord_channel flex-grow overflow-y-scroll scrollbar-hide">
            <div className="flex items-center p-2 mb-2">
              <ChevronDownIcon className="h-3 mr-2" />
              <h4 className="font-semibold">channels</h4>
              <PlusIcon
                className="h-6 ml-auto cursor-pointer hover:text-white"
                onClick={handleAddChannel}
              />
            </div>

            <div className="flex flex-col space-y-2 px-2 mb-4">
              {channels?.docs.map((doc) => {
                return (
                  <Channel
                    id={doc.id}
                    key={doc.id}
                    channelName={doc.data().channelName}
                  />
                );
              })}
            </div>
          </div>

          <div className="flex bg-[#292b2f] p-2 justify-between items-center space-x-8  cursor-pointer" >
            <div className="flex items-center space-x-1 ">
              
              <img
                src={user?.photoURL}
                alt=""
                className="h-10 rounded-full"
                onClick={() => auth.signOut()}
              />
             
              <h4 className="text-white text-xs font-medium">
                {user?.displayName}
                <span className="text-[#b9bbbe] block">#{user?.uid.substring(0, 4)}</span>
              </h4>
            </div>

            <div className="text-gray-400 flex items-center">
              
              <div className="hover:bg-[#3a3c43] p-1 rounded-md ">
                <MicrophoneIcon className="h-5 icon" />
              </div>
              <div className="hover:bg-[#3a3c43] p-1 rounded-md  ">
                <PhoneIcon className="h-5 icon"/>
              </div>
              <div className="hover:bg-[#3a3c43] p-1 rounded-md ">
                <CogIcon className="h-5 icon"/>
              </div>
              
            </div>
          </div>
        </div>


            <div className="bg-[#36393f] flex-grow">
              <Chat/>
            </div>
         
      </div>
    </>
  );
}

export default Home;
