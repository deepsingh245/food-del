const mongoose = require("mongoose");

const MongoURI =
  "mongodb+srv://TapEat:tapeat123@cluster0.pnmy3lu.mongodb.net/tapEat?retryWrites=true&w=majority";


const mongoDB = async () => {
  try {
    await mongoose.connect(MongoURI);
    console.log("Connected to MongoDB");
    
    const fetchedData = await mongoose.connection.db.collection("foodItems").find({}).toArray();
      // console.log(fetchedData)
      global.food_items = fetchedData;
      const foodCategory = await mongoose.connection.db.collection("foodCategory").find({}).toArray();
    
      global.foodCategory = foodCategory;
 
 }
  catch (err) {
    console.error(err);
  }

};
module.exports = mongoDB;
