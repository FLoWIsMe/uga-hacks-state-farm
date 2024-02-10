// app.js
import express from 'express'
import cors from 'cors'
import path from 'path'
import bodyParser from 'body-parser'

import {Customer} from "./nessie-javascript-sdk/lib/customer.js"
import {Account} from "./nessie-javascript-sdk/lib/account.js"

const app = express();
const port = process.env.PORT || 5000;

const apiKey = "e3b5d57f300e223d100b0d7198b0f5fa";

app.use(cors())
// Middleware to parse JSON in request body
app.use(bodyParser.json());

// POST endpoint example
app.post('/api/createCustomer', (req, res) => {
    const requestData = req.body;

  Customer.createCustomer(requestData).then(res1 =>
    res1).then(d => {
        if (d.status==201) {
          res.status(200).send(res1.json())
        }
    });

});

app.get("/api/getCustomerById/:id", (req, res) => {
  const id = req.params.id; //65c7aa5b9683f20dd5188e76
  
  Customer.getCustomerById(id).then(res1 =>
    res1).then(d => {
        if (d.status==201) {
          res.status(200).send(res1.json())
        }
    });
})


app.get("api/getAccountsByCustomerId/:id", (req, res) => {
  const id = req.params.id;

  Account.getAllByCustomerId(id).then(res1 =>
    res1).then(d => {
        if (d.status==201) {
          res.status(200).send(res1.json())
        }
    });
    
})

//app.get("/", (req, res) => {
//  res.sendFile(path.join(__dirname, "public", "index.html"));
 //});
 
 app.use(express.static("../frontend/public"));

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

