const express = require("express");
const cors = require("cors");
require("./db/config");
const User = require("./db/user");
const app = express();


app.use(express.json());
app.use(cors());

// add user
app.post("/register", async (req, resp) => {
  let user = new User(req.body);
  let result = await user.save();
  result = result.toObject();
  resp.send(result);
  // console.log(result)
});

//use list
app.get("/users", async (req, resp) => {
  const users = await User.find({});
  if (users.length > 0) {
    resp.send(users);
  } else {
    resp.status(401).send("No Users Found");
  }
});

// update user
app.put("/user/:id", async (req, resp) => {
  const result = await User.updateOne(
    { _id: req.params.id },
    {
      $set: req.body,
    }
  );
  if (result) {
    resp.send(result);
  } else {
    resp.status(203).send("User Not Updated");
  }
});

// delete user
app.delete("/user/:id", async (req, resp) => {
  const result = await User.deleteOne({
    _id: req.params.id,
  });
  if (result) {
    resp.send(result);
    return res.json("deleted successfully");
  } else {
    return res.json("no data found");
  }
});

// search users
app.get("/searchUsers/:key", async (req, resp) => {
  try {
    const key = req.params.key;
    const results = await User.find({
      $or: [
        {"firstName":{$regex : key}},
        {"lastName":{$regex : key}},
        {"emailId":{$regex : key}},
        // {"mobileNo":{$regex : key}}, //Not work
        {"addressOne":{$regex : key}},
        {"addressTwo":{$regex : key}},
        {"state":{$regex : key}},
        {"city":{$regex : key}},
        // {"zipCode":{$regex : key}} //Not work

      ],
    });

    resp.send(results);
  } catch (error) {
    console.log('abhishek')
    resp.status(500).send("Internal Server Error");
  }
});

// console.log("sachin")
// console.log("sachin")
// console.log("sachin")
app.listen(5000);
