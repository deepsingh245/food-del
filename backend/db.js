const mongoose = require("mongoose");

const MongoURI =
  "mongodb+srv://TapEat:tapeat123@cluster0.pnmy3lu.mongodb.net/?retryWrites=true&w=majority";

const mongoDB = () => {
  mongoose
    .connect(MongoURI)
    .then(() => {
      console.log("Connected to MongoDB");
      const fetched_data = mongoose.connection.db.collection("foodCategory");

      fetched_data.find({}).toArray(function (err, data) {
        if (!err) {
          console.log('Data received from the database:\n');
          // Now you can use the 'data' variable or pass it to another function
          processData(data);
        } else {
          console.error(err);
        }
      });
    })
    .catch((err) => {
      console.error(err);
    });
};
module.exports = mongoDB;
