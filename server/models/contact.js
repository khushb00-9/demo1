let mongoose = require("mongoose");

// create a model class
let contactSchema = mongoose.Schema(
  {
    firstName: String,
    lastName: String,
    age: Number
  },
  {
    collection: "usersdb"
  }
);

module.exports = mongoose.model("contact", contactSchema);
