const mongoose = require("mongoose");

if (process.argv.length < 3) {
  console.log(
    "Please provide the password as an argument: node mongo.js <password>"
  );
  process.exit(1);
}

const password = process.argv[2];
console.log(password);

const url = `mongodb+srv://azureuser:${password}@cluster0.rfrjntx.mongodb.net/phonebook?retryWrites=true&w=majority`;

const phoneSchema = new mongoose.Schema({
  user: String,
  number: String,
});

const Phone = mongoose.model("Phone", phoneSchema);

if (process.argv.length < 4) {
  mongoose.connect(url).then((result) => {
    Phone.find({})
      .then((result) => {
        result.forEach((phone) => {
          console.log(phone);
        });
        return mongoose.connection.close();
      })
      .catch((err) => console.log(err));
  });
} else {
  mongoose
    .connect(url)
    .then((result) => {
      console.log("connected");

      const note = new Phone({
        user: process.argv[3],
        number: process.argv[4],
      });
      return note.save();
    })
    .then(() => {
      console.log(
        "added" + process.argv[3] + "number" + process.argv[4] + "to phonebook"
      );

      return mongoose.connection.close();
    })
    .catch((err) => console.log(err));
}
