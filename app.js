const express = require("express");
let app = express();
require("dotenv").config();
let bodyParser = require("body-parser");

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

//configure options
const options = {
  apiKey: process.env.API_KEY, // use your sandbox app API key for development in the test environment
  username: "sandbox" // use 'sandbox' for development in the test environment
};

const AfricasTalking = require("africastalking")(options);

app.post("/", (req, res) => {
  //let sessionId = req.body.sessionId;
  //let phoneNumber = req.body.phoneNumber;
  //let networkCode = req.body.networkCode;
  //let serviceCode = req.body.serviceCode;
  let text = req.body.text;
  let response = null;

  switch (text) {
    case "":
      response = `Welcome to Bank of Favour. What do you want to to? \n 1. My account balance \n 1. Check phone number`;
  }

  res.status(200).send(response);
});

app.get("/", (req, res) => {
  res.send("First USSD app - Africa's Talking");
});

let port = 3000 || process.env.PORT;
app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});
