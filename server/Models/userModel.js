// const mongoose = require("mongoose");

// const UserSchema = mongoose.Schema(
//   {
//     fullName: {
//       type: String,
//       required: true,
//       min: 3,
//     },
//     phoneNumber: {
//       type: String,
//       required: true,
//       unique: true
//     },
//     username: {
//       type: String,
//       required: true,
//       min:3,
//       max:20,
//       unique: true
//     },
//     userEmail: {
//       type: String,
//       required: true,
//       max: 50,
//       unique: true
//     },
//     password: {
//       type: String,
//       required: true,
//       min: 6
//     },
//     isAmin: {
//       type: Boolean,
//       default: false
//     },
//     avatarURL: String,
//   },
//   {timestamps: true}
// )

// const UserModel = mongoose.model("Users", UserSchema);
// // export default UserModel;
// module.exports = UserModel;