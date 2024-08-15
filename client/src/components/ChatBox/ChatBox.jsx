import React, { useEffect, useState, useRef } from "react";
import { getAllMessages, sendMessage } from "../../api/MessageRequest";
import { getUser } from "../../api/UserRequest";
import { format } from "timeago.js";
import InputEmoji from 'react-input-emoji'
import './ChatBox.css'
import { useSelector } from "react-redux";

const ChatBox = ({ currentUser, setSendMessage, receivedMessage, username }) => {
  const [userData, setUserData] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  // const [username, setUsername] = useState("");
  const [senderNames, setSenderNames] = useState({});
  const [usernames, setUsernames] = useState({});

  const user  = useSelector((state) => state.authReducer.authData);
  // const username = user ? username : ''; //Access username from redux store

  console.log("currentUser", currentUser)


  const handleChange = (newMessage)=> {
    setNewMessage(newMessage)
  }

  // fetching data for header
  useEffect(() => {
    const getUserData = async () => {
      try {
        const userId = user?._id;
        console.log("userId:", userId)
        if(userId){
          const { data } = await getUser(userId);
          console.log("data=>", data)
          setUserData(data);
        }
        
      } catch (error) {
        console.log(error);
      }
    };

    if(user?.username){  
      getUserData();
    }
  }, [user]);

  // // fetching data for header
  // useEffect(() => {
  //   if (chat !== null) {
  //     console.log("chat:", chat);
  //     console.log("currentUser:", currentUser);
  //     const userId = chat?.members?.find((id) => id !== currentUser);
  //     console.log("userId:", userId)

  //     if (userId) {
  //       const getUserData = async () => {
  //         try {
  //           const { data } = await getUser(userId);
  //           setUserData(data);
  //         } catch (error) {
  //           console.log(error);
  //         }
  //       };
  
  //       getUserData();
  //     } 
  //   }
  // }, [chat, currentUser]);


  // // Fetch user data for the current user
  // useEffect(() => {
  //   const fetchUserData = async () => {
  //     try {
  //       const { data } = await getUser(currentUser);
  //       setUserData(data);
  //     } catch (error) {
  //       console.error("Error fetching user data:", error);
  //     }
  //   };

  //   if (currentUser) {
  //     fetchUserData();
  //   }
  // }, [currentUser]);

  // fetch messages
  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await getAllMessages();
        setMessages(response.data);

      } catch (error) {
        console.error("Error fetching messages:", error);
      }
    };

    fetchMessages();
  }, []);

  // useEffect(() => {
  //   if(user){
  //     setUsername(user.username); 
  //   }
  // }, [user]);

  // Send Message handler
  const handleSendMessage = async (e) => {
    e.preventDefault()
    if (newMessage.trim() !== ""){
      const message = {
        senderId: currentUser,
        username: user?.username || '',
        text: newMessage,
      };
      // const receiverId = chat.members.find((id)=> id !==currentUser);
      // send message to socket server
      // const username = user.username;
      setSendMessage({...message});
  
      // send message to database
      try {
        const { data } = await sendMessage(message);
        setMessages([...messages, data]);
        setNewMessage("");
      } catch (error) {
        console.error(error);
      }
    }
  };

  // Receive Message from parent component
  useEffect(()=> {
    console.log("Message Arrived: ", receivedMessage)
    // console.log("Message Arrived(receivedMessage.senderId): ", receivedMessage.senderId)
    console.log("Message sender Id: ", currentUser)
    if (receivedMessage !== null && receivedMessage.senderId) {
      setMessages([...messages, receivedMessage]);

      // Fetch sender usermane of the received message and add it to the senderNames state
      console.log("currentUser.senderId", currentUser)
      console.log("receivedMessage:", receivedMessage)
      console.log("receivedMessage.senderId:", receivedMessage.senderId)

      const fetchUsername = async () => {
        try {
          const response = await getUser(receivedMessage.senderId);
          const senderUsername = response.data.username;
          const updatedMessage = {
            ...receivedMessage,
            username: senderUsername,
          };
          setSenderNames((prevState) => ({
            ...prevState,
            [receivedMessage.senderId]: senderUsername,
          }));
          setMessages((prevMessages) => [...prevMessages, updatedMessage]);
          console.log("response.data.username:", response.data.username);
        } catch (error) {
          console.log("Error fetching sender username:", error);
        }
      };
  
      fetchUsername();

    }
  }, [receivedMessage])

  // socket.on('receive-message', (data) => {

  //   // directly set username on message object
  //   const msg = {
  //     ...data,
  //     username: data.username
  //   }
  
  //   setMessages(prev => [...prev, msg])
  // })

  const scroll = useRef();
  const imageRef = useRef();
  // Always scroll to last Message
  useEffect(()=> {
    scroll.current?.scrollIntoView({ behavior: "smooth" });
  },[messages])
  

  return (
    <div className="ChatBox-container">
      <h1>General Chat</h1>

      {/* chatbox message body */}
      <div className="chat-body" >
        {/* <span>{userData.username}</span> */}
        
        {messages.map((message, key) => (
            <div key={key} ref={scroll}
              className={
                message.senderId === currentUser
                  ? "message own"
                  : "message"
              }
            >
              <span>
                {message.senderId === currentUser
                  ? "You"
                  : message.username
                  ? message.username
                  : message.senderId
                  ? (senderNames[message.senderId] || 'Loading...') : 'unknown'
                }
              </span>
              {/* <span>{message.username}</span> */}
              <strong>{message.text}</strong>
              <span>{format(message.createdAt)}</span>
            </div>
        ))}
      </div>

      {/* Chat sender */}
      <div className="chat-sender">
        <div onClick={() => imageRef.current.click()}>+</div>
        <InputEmoji
          value={newMessage}
          onChange={handleChange}
        />
        <div 
          className="send-button button" 
          onClick={handleSendMessage}
          disabled={!newMessage} // Set disabled attribute based on newMessage
          style={{ cursor: !newMessage ? "not-allowed" : "pointer" }}
        >
          Send Message
        </div>
        <input
          type="file"
          name=""
          id=""
          style={{ display: "none" }}
          ref={imageRef}
        />
      </div>
    </div>
  );
};

export default ChatBox;
