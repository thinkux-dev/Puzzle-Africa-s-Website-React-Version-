import React, { useRef, useState, useEffect } from "react";
import './Feedback.css';
// import '../../App.css';
import ChatBox from '../../components/ChatBox/ChatBox';
import { io } from "socket.io-client";

import { useDispatch, useSelector } from "react-redux";
import { logOut } from '../../action/AuthAction';
import { userChats } from "../../api/ChatRequest";
import { getUser } from "../../api/UserRequest";
import { getAllMessages, sendMessage } from "../../api/MessageRequest";

import HospitalIcon from '../../assets/assets/hospital.png';
import LogoutIcon from '../../assets/assets/logout.png';

const SideBar = ({logout}) => (
  <div className="channel-list__sidebar">

    <div className="channel-list__sidebar__icon1">
      <div className="icon1__inner">
        <img src={HospitalIcon} alt="Hospital" width="25" />
      </div>
    </div>

    <div className="channel-list__sidebar__icon2">
      <div className="icon1__inner" onClick={logout}>
        <img src={LogoutIcon} alt="Logout" width="25"/>
      </div>
    </div>

  </div>
);

const Feedback = () => {
  const socket = useRef();
  const user  = useSelector((state) => state.authReducer.authData);
  const dispatch = useDispatch();

  console.log("user=>", user)
  console.log("user.id=>", user.id)
  console.log("user._id=>", user._id)
  console.log("user.username=>", user?.username)

  // const [chats, setChats] = useState([]);
  // const [currentChat, setCurrentChat] = useState(null);
  const [username, setUsername] = useState('');
  const [sendMessage, setSendMessage] = useState(null);
  const [receivedMessage, setReceivedMessage] = useState(null);
  // const [senderNames, setSenderNames] = useState({});

  //  // Get the user data for the current user
  //  useEffect(() => {
  //   const getChats = async () => {
  //     try {
  //       const { data } = await getUser(user.id);
  //       console.log("user=>", user)
  //       console.log("data=>", data)
  //       setCurrentChat(data);

  //       // Set current chat to first chat
  //       if(data.length > 0) {
  //         setCurrentChat(data[0]);
  //       }

  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
    
  //   if(user._id){
  //     getChats();
  //   }
  // }, [user._id]);

  // Send Message to socket server
  useEffect(() => {
    if (sendMessage !== null) {
      socket.current.emit("send-message", sendMessage);
    }

    // return () => {
    //   // Clean up message sending when component unmounts
    //   // (optional depending on your use case)
    //   setSendMessage(null);
    // };
  }, [sendMessage]);

  // Connect to Socket.io
  useEffect(() => {
    socket.current = io("ws://localhost:8801");
    // Emit the new-user-add event with the user's ID
    if (user?.id){
      socket.current.emit("new-user-add", user?._id);
      socket.current.emit("new-user-add", user.username);
    }
    // socket.current.on("get-users", (users) => {
    //   setOnlineUsers(users);
    // });

    return () => {
      // Clean up socket connection when component unmounts
      socket.current.disconnect();
    };
  }, [user]);

  // Fetch user data for the current user and set the username
  useEffect(() => {
    if (user && user.username) {
      setUsername(user.username);
    }
  }, [user]);

  // Recieve the message from socket server
  useEffect(() => {
    // Clean up previous event listener
    // socket.current.off('recieve-message');

    socket.current.on('recieve-message', (data) => {
      console.log("Data Received in parent feedback.jsx", data)
      console.log("Data Received from", data.username)
      setReceivedMessage(data);
    });

    return () => {
      // Clean up socket event listener when component unmounts
      socket.current.off("receive-message");
    };
  }, []);

  const logout = () => {
    dispatch(logOut())
  };

  return (
    <>
    <div className="Chat">
      {/* Left Side */}
      <SideBar logout={logout}/>
    </div>

    {/* Right side */}
    <div className="Right-side-chat"> 
        <ChatBox 
          username={username}
          // chat={currentChat}
          setSendMessage={setSendMessage}
          // senderNames={senderNames}
          currentUser={user?.username}
          receivedMessage={receivedMessage}
        />
    </div>
    </>
  )
};

export default Feedback;



// import React, { useState, useEffect } from 'react';
// import './Feedback.css';
// import {StreamChat} from 'stream-chat';
// import {Chat} from 'stream-chat-react';
// import Cookies from 'universal-cookie';

// import { ChannelListContainer, ChannelContainer} from '../../components';

// // import 'stream-chat-react/dist/css/index.css';
// import '../../App.css';

// const cookies = new Cookies();

// // const apiKey = process.env.REACT_APP_STREAM_API_KEY;
// const apiKey = "6kxekq7pbyvv";
// const authToken = cookies.get("token");


// // import {Auth} from '../Auth'
// const client = StreamChat.getInstance(apiKey);

// if(authToken){
//   client.connectUser({
//     id: cookies.get('userId'),
//     name: cookies.get('username'),
//     fullName: cookies.get('fullName'),
//     image: cookies.get('avatarURL'),
//     hashedPassword: cookies.get('hashedPassword'),
//     phoneNumber: cookies.get('phoneNumber'),
//   }, authToken)
// }

// const Feedback = () => {
//   const [createType, setCreateType] = useState('');
//   const [isCreating, setIsCreating] = useState(false);
//   const [isEditing, setIsEditing] = useState(false);

//   // if(!authToken) return <Auth/>

//   return (
//     <div className="app__wrapper">
//       <Chat client={client} theme='team light'>
//         <ChannelListContainer 
//           isCreating={isCreating}
//           setIsCreating={setIsCreating}
//           setCreateType={setCreateType}
//           setIsEditing={setIsEditing}
          
//         />
//         <ChannelContainer 
//           isCreating={isCreating}
//           setIsCreating={setIsCreating}
//           setIsEditing={setIsEditing}
//           isEditing={isEditing}
//           createType={createType}
          
//         />
//       </Chat>
//     </div>
//   )
// }

// export default Feedback;