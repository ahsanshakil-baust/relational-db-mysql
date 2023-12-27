const express = require("express");
const bodyParser = require("body-parser");
const {
  addUser,
  getUsers,
  getUser,
  deleteUser,
  updateUser,
} = require("./controllers/userController");

require("./connection");

const app = express();

app.use(bodyParser.json());

app.post("/user", addUser);
app.get("/users", getUsers);
app.get("/user/:id", getUser);
app.delete("/user/:id", deleteUser);
app.patch("/user/:id", updateUser);

app.listen(4000, () => {
  console.log("App running on port 4000....");
});
