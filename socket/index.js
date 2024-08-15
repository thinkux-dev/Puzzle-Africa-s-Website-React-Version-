// const io = require("socket.io")(8801, {
//   cors: {
//     origin: "http://localhost:5173",
//   },
// });

// let activeUsers = [];

// io.on("connection", (socket) => {
//   // add new User
//   socket.on("new-user-add", (newUserId) => {
//     // if user is not added previously
//     if (!activeUsers.some((user) => user.userId === newUserId)) {
//       activeUsers.push({ userId: newUserId, socketId: socket.id });
//       console.log("New User Connected", activeUsers);
//     }
//     // send all active users to new user
//     io.emit("get-users", activeUsers);
//   });

//   // send message to users
//   socket.on('send-message', (message) => {
//     console.log("message=>", message)
    
//     io.emit("recieve-message", {
//       senderId: message.senderId, // Include senderId along with other message details
//       username: message.username,
//       text: message.text,
//       createdAt: message.createdAt
//     })

//   })

//   // // send message to a specific user
//   // socket.on('send-message', (data) => {
//   //   // const { receiverId } = data;
//   //   // const user = activeUsers.find((user) => user.userId === receiverId);
//   //   // console.log("Sending from socket to :", receiverId)
//   //   console.log("Data: ", data)
    
//   //   io.emit("recieve-message", data);
//   // })

//   socket.on("disconnect", () => {
//     // remove user from active users
//     activeUsers = activeUsers.filter(user => user.socketId !== socket.id);
//     console.log("User Disconnected", activeUsers);
//     // send all active users to all users
//     io.emit("get-users", activeUsers);
//   });
// });