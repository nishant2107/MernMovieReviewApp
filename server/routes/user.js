const express = require("express");
const { loginUser, signupUser } = require("../controller/user");
const router = express.Router();

// router.post("/login");
router.post("/signup", signupUser)
router.post("/login", loginUser  );



module.exports = router;
