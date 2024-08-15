// const UserModel = require('../Models/userModel.js');
// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');
// const { isValidObjectId } = require("mongoose");


// // get all user
// const getAllUser = async(req, res) => {
//   try {
//     let users = await UserModel.find();

//     users = users.map((user) => {
//       const {password, ...otherDetails} = user._doc
//       return otherDetails
//     });
//     res.status(200).json(users)

//   } catch (error) {
//     res.status(500).json(error);
//   }
// }

// // get a User
// const getUser = async(req, res) => {
  
//   try {
//     const id = req.params.id;

//     // Check if id is undefined or not a valid ObjectId
//     if (!id || !isValidObjectId(id)) {
//       return res.status(400).json({ message: "Invalid user ID" });
//     }

//     const user = await UserModel.findById(id);

//     if(user){
//       // Making sure you don't send other users password to a none admin
//       const {password, ...otherDetails} = user._doc
//       res.status(200).json(otherDetails);
//     } else {
//       res.status(404).json({data: {message: "User does not exists"}})
//     }
//   } catch (error) {
//     console.log("Error fetching user:", error)
//     res.status(500).json({data: error});
//   }
// };

// // update a user
// const updateUser = async(req, res) => {
//   const id = req.params.id;
//   const { _id, currentUserAdminStatus, password} = req.body

//   if(id === _id){
//     try {
//       if(password){
//         const salt = await bcrypt.genSalt(10);
//         req.body.password = await bcrypt.hash(password, salt);
//       }

//       const user = await UserModel.findByIdAndUpdate(id, req.body, {new: true});

//       const token = jwt.sign(
//         {username: user.username, id: user._id},
//         process.env.JWT_KEY, {expiresIn: "1h"}
//       )

//       res.status(200).json({user, token});

//     } catch (error) {
//       res.status(500).json(error);
//     }
//   } else {
//     res.status(403).json("Access Denied! you can only update your own profile")
//   }
// }

// // Delete user
// const deleteUser = async(req, res) => {
//   const id = req.params.id;
//   const {currentUserId, currentUserAdminStatus} = req.body

//   if(id===currentUserId || currentUserAdminStatus){
//     try {
//       await UserModel.findByIdAndDelete(id)
//       res.status(200).json("User deleted successfully")
//     } catch (error) {
//       res.status(500).json(error);
//     }
//   } else {
//     res.status(403).json("Access Denied! you can only delete your own profile")
//   }
// }

// module.exports = { getAllUser, getUser, updateUser, deleteUser };