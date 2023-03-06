const express = require("express");
require('./db');
const userRouter = require("./routes/user");
const app = express();

// MVC --  Modal Controller
// controller we handle all of the logic which routes are having
app.use(express.json());
// This is the middleware function for api routing
app.use("/api/user", userRouter);
// this is the function for running the server
app.listen(8000, () => {
  console.log("Server is started ");
});
