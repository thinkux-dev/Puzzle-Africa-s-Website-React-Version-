// const MessageModel = require('../Models/MessageModel.js');

// const getAllMessages = async (req, res) => {
//     try {
//         const messages = await MessageModel.find();
//         res.status(200).json(messages);
//     } catch (error) {
//         console.log("Error fetching messages=>", error)
//         res.status(500).json(error);
//     }
// };

// const sendMessage = async (req, res) => {
//     const { senderId, username, text } = req.body; // Change senderName to senderId

//     const message = new MessageModel({
//       senderId,
//       username,
//       text
//     });
//     try {
//         // const chat = await ChatModel.findOne();

//         // chat.messages.push({ senderId, text }); // Change senderName to senderId
//         const result = await message.save();
//         res.status(200).json(result);

//     } catch (error) {
//         console.log("Error sending message=>", error)
//         res.status(500).json(error);
//     }
// };

// module.exports = { getAllMessages, sendMessage};