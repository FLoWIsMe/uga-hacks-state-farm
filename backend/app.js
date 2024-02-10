// app.js
const express = require('express');
var cors = require("cors");
const path = require("path");

const app = express();
const port = process.env.PORT || 5000;

app.use(cors())

//app.get("/", (req, res) => {
//  res.sendFile(path.join(__dirname, "public", "index.html"));
 //});
 
 app.use(express.static("../frontend/public"));


// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});