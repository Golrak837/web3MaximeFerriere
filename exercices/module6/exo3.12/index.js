const mongoose = require("mongoose");
const url = `mongodb+srv://azureuser:${password}@cluster0.rfrjntx.mongodb.net/phonebook?retryWrites=true&w=majority`;
mongoose.connect(url);
const phoneSchema = new mongoose.Schema({
  user: String,
  number: String,
});

const Phone = mongoose.model("Phone", phoneSchema);
