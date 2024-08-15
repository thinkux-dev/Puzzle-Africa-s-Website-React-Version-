// const UserModel = require('../Models/userModel.js');
// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');

// // import dotenv from "dotenv";
// // dotenv.config();

// // Registering a new User
// const registerUser = async (req, res) => {
//     // const newUser = new UserModel(req.body);
//     // const {username} = req.body

//     try {
//         // Generating Hash password
//         const salt = await bcrypt.genSalt(10);
//         const hashedPass = await bcrypt.hash(req.body.password, salt);
//         // req.body.password = hashedPass;

//         //create new user
//         const newUser = new UserModel({
//           username: req.body.username,
//           email: req.body.email,
//           password: hashedPass,
//         });

//         // save user and respond
//         const user = await newUser.save();

//         const token = jwt.sign({
//           username: user.username, id: user._id
//         }, process.env.JWT_KEY, {expiresIn: '1h'});

//         res.status(200).json({user, token});
//         // res.status(200).json(user);

//     }catch(error) {
//         res.status(500).json(error);
//     }
// };

// // Login User
// const loginUser = async (req, res) => {
//   const {password} = req.body
//   // console.log(req.body)

//   try {
//     const user = await UserModel.findOne({email: req.body.email})

//     if(user){
//       // Comparing the user password to validate
//       const validity = await bcrypt.compare(password, user.password)

//       if(!validity){
//         res.status(400).json("Wrong password")
//       } else {
//         const token = jwt.sign({
//           username: user.username, id: user._id
//         }, process.env.JWT_KEY , {expiresIn: '1h'});
//         res.status(200).json({user, token});
//       }

//     } else {
//       res.status(404).json("User does not exists")
//     }
//   } catch (error) {
//       res.status(500).json(error);
//   }
// }

// module.exports = { registerUser, loginUser };



// User below section one

// const UserModel = require('../Models/userModel.js');
// const bcrypt = require('bcrypt');
// // const crypto = require('crypto');
// const jwt = require('jsonwebtoken');

// require('dotenv').config();
// const jwt_key = process.env.JWT_KEY

// const signup = async (req, res) => {
//   try {
//     console.log(req.body.userEmail);
//     console.log(req.body.fullName);
//     // const {fullName, username, password, phoneNumber, userEmail} = req.body;

//     // Generating Hash password
//     const salt = await bcrypt.genSalt(10);
//     const hashedPassword = await bcrypt.hash(req.body.password, salt);
//     // req.body.password = hashedPass;

//     // Check if the phoneNumber already exists in the database
//     const existingUserNumber = await UserModel.findOne({ phoneNumber: req.body.phoneNumber });
//     if (existingUserNumber) {
//       return res.status(400).json({ message: 'phoneNumber already exists' });
//     }

//     // Check if the phoneNumber already exists in the database
//     const existingUsername = await UserModel.findOne({ username: req.body.username });
//     if (existingUsername) {
//       return res.status(400).json({ message: 'username already exists' });
//     }

//     // Check if the email already exists in the database
//     const existingUser = await UserModel.findOne({ userEmail: req.body.userEmail });
//     if (existingUser) {
//       return res.status(400).json({ message: 'Email already exists' });
//     }

//     //create new user
//     const newUser = new UserModel({
//       fullName: req.body.fullName,
//       phoneNumber: req.body.phoneNumber,
//       username: req.body.username,
//       userEmail: req.body.userEmail,
//       password: hashedPassword,
//     });

//     // save user and respond
//     const user = await newUser.save();

//     const token = jwt.sign({
//       username: user.username, id: user._id
//     }, jwt_key, {expiresIn: '1h'});

//     res.status(200).json({user, hashedPassword, token});

//   } catch (error) {
//     console.log(error);
//     res.status(500).json({message: error})
//   }
// };

// const login = async (req, res) => {
//   try {
//     const {username, password} = req.body;

//     // Check if the user exists by username or email
//     const user = await UserModel.findOne({
//       $or: [{ username: username }, { userEmail: username }],
//     });

//     if (!user) {
//       return res.status(400).json({ message: 'User not found' });
//     }

//     // Verify password
//     const match = await bcrypt.compare(password, user.password);

//     if (match) {

//         const token = jwt.sign({
//           username: user.username, id: user._id
//         },jwt_key , {expiresIn: '1h'});
//         // res.status(200).json({user, token});

//       res.status(200).json({
//         token,
//         fullName: user.fullName,
//         username: user.username,
//         userEmail: user.userEmail,
//       });
//     } else {
//       res.status(400).json({ message: 'Incorrect password' });
//     }
//   } catch (error) {
//     console.log(error);

//     res.status(500).json({message: error})
//   }
// };

// const resetPassword = async (req, res) => {
  
//   try {
//     const { userEmail, newPassword } = req.body;
//     // Find the user by email
//     // const user = await User.findOne({ email });

//     if (!userEmail) {
//       return res.status(404).json({ error: 'User not found' });
//     }

//     // Find the user by their email
//     const user = await UserModel.findOne({ userEmail });

//     // Hash the new password
//     const hashedPassword = await bcrypt.hash(newPassword, 10);

//     // Update the user's password
//     user.password = hashedPassword;

//     // Save the updated user object
//     await user.save();
    

//     res.json({ success: true, message: 'Password reset successful' });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'An error occurred while resetting the password' });
//   }
// };

// module.exports = {signup, login, resetPassword}