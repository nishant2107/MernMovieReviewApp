exports.signupUser = (req, res) => {
  const a = req.body;
  console.log(a);
  res.json({ user: req.body });
};

exports.loginUser = (req, res) => {
  res.send("Hi i will login the user");
};
