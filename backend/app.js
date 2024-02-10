// app.js
const express = require('express');
var cors = require("cors");

const app = express();
const port = process.env.PORT || 5000;

app.use(cors())

// Define a simple route
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});