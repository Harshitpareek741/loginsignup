
const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://b221190:dishank@cluster0.pq3jprq.mongodb.net/?retryWrites=true&w=majority")
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((error) => {
    console.error("MongoDB connection failed:", error);
  });

const newSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  name:{
    type:String,
    required:true
  }
});

const collection = mongoose.model("collection", newSchema);
module.exports = collection;
