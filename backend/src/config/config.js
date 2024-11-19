require('dotenv').config();

module.exports = {
  port: process.env.PORT || 5000,
  dbURI: process.env.DB_URI || "mongodb+srv://himanshu:himanshu@cluster0.bpfct.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
  jwtSecret: process.env.JWT_SECRET || "supersecretkey",
};
