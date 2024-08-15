// const express = require("express");
// const {
//     deleteUser,
//     getAllUser,
//     getUser,
//     updateUser,
// } = require("../Controllers/UserController.js");
// const authMiddleWare = require("../MiddleWare/authMiddleWare.js");

// const router = express.Router();

// // // For testing if the route works fine
// // router.get('/', async(req, res) => {
// //   res.send("UserRoute")
// // })

// router.get('/', getAllUser)
// router.get("/:id", getUser);
// router.put("/:id", authMiddleWare, updateUser);
// router.delete("/:id", authMiddleWare, deleteUser);

// // export { router as userRoute };
// module.exports = router;