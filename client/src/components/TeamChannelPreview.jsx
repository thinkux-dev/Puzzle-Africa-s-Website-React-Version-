// import React from 'react';
// import '../App.css';
// import { Avatar, useChatContext } from 'stream-chat-react';

// const TeamChannelPreview = ({ setActiveChannel, setIsCreating, setIsEditing, setToggleContainer, channel, type}) => {
//   const {channel: activeChannel} = useChatContext();

//   // Preview for channels with muutiple users
//   const ChannelPreview = () => (
//     <p className='channel-preview__item' style={{color: 'black'}}>
//       # {channel?.data?.name || channel?.data?.id}
//     </p>
//   );

//   // // Preview for direct messages
//   // const DirectPreview = () => {
//   //   const members = Object.values(channel.state.members).filter(({user}) => user.id !== client.userID);

//   //   console.log(members[0]);

//   //   return (
//   //     <div className="channel-preview__item single" style={{color: 'black'}}>
//   //       <Avatar 
//   //         image={members[0]?.user?.image}
//   //         name={members[0]?.user?.fullName || members[0]?.user?.id}
//   //         size={24}
//   //       />
//   //       <p>{members[0]?.user?.fullName || members[0]?.user?.id}</p>
//   //     </div>
//   //   )
//   // }
  
//   return (
//     <div 
//       className={channel?.id === activeChannel?.id 
//         ? 'channel-preview__wrapper__selected' 
//         : 'channel-preview__wrapper'
//       }
//       onClick={() => {
//         setIsCreating(false);
//         setIsEditing(false);
//         setActiveChannel(channel);
//         if(setToggleContainer){
//           setToggleContainer((prevState) => !prevState)
//         }
//       }}
//     >
//       {type === 'team' ? <ChannelPreview/> : 'No channel yet'}
//     </div>
//   )
// }

// export default TeamChannelPreview;