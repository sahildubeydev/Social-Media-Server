const mongoose = require("mongoose");

module.exports = async () => {
  const mongoUri =
    "mongodb+srv://sahildubey:EkoxG29b3FNGxViC@cluster0.vfllkrc.mongodb.net/?retryWrites=true&w=majority";
  try {
    const connect = await mongoose.connect(mongoUri, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log(`MongoDB connected: ${connect.connection.host}`);
  } catch (error) {
    console.log(`Error while connecting mongodb :${error}`);
    process.exit(1);
  }
};
