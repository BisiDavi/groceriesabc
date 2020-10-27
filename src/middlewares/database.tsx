import mongoose from "mongoose";

const connection: any = {}; /* creating connection object*/

async function dbConnect() {
  if (connection.isConnected) {
    return;
  }

  const db = await mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  });
  console.log("you are connected!");

  connection.isConnected = db.connections[0].readyState;
}

export default dbConnect;
