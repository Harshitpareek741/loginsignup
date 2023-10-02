const express = require("express");
const app = express();
const collection = require("./mongo");
const cors = require("cors");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/", (req, res) => {
  res.send("Welcome to the homepage");
});

app.post("/SignIn", async (req, res) => {
  const { email, password ,name } = req.body;

  try {
    const user = await collection.findOne({ email: email });

    if (user) {
      res.json({ status: "exist" });
    } else {
      res.json({ status: "notexist" });
    }
  } catch (e) {
    console.error(e);
    res.json({ status: "error" });
  }
});

app.post("/SignUp", async (req, res) => {
  const { email, password ,name } = req.body;

  try {
    // Add data validation here if needed

    const existingUser = await collection.findOne({ email: email });

    if (existingUser) {
      res.json({ status: "exist" });
    } else {
      // Use collection.create() for Mongoose
      await collection.create({ email, password ,name });
      res.json({ status: "success" });
    }
  } catch (e) {
    console.error(e);
    res.json({ status: "error" });
  }
});

app.listen(8000, () => {
  console.log("Server is running on port 8000");
});
