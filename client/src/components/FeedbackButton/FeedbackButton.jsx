// import React from 'react';
// import './FeedbackButton.css'; // Import CSS file for styling
// import { useNavigate } from 'react-router-dom';
// // import { useSelector } from 'react-redux';

// import {StreamChat} from 'stream-chat';
// import Cookies from 'universal-cookie';
// // import { useSelector } from 'react-redux';

// const apiKey = "sgkphqy29c4b";
// const client = StreamChat.getInstance(apiKey);

// const cookies = new Cookies();
// const authToken = cookies.get("token");

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

// const FeedbackButton = () => {
//   const navigate = useNavigate();
//   // const user = useSelector((state) => state.authReducer.authData)
  
//   const handleClick = () => {
//     if(authToken){
//       navigate('/feedback');
//     } else {
//       navigate('/auth')
//     }
//   };

//   return (
//     <button className="feedback-button" onClick={handleClick}>
//       Feedback
//     </button>
//   );
// };

// export default FeedbackButton;
