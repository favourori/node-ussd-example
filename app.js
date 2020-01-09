const express = require("express");
let app = express();

let bodyParser = require("body-parser");
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse application/json
app.use(bodyParser.json());
app.use(express.json());
//app.use(bodyParser.text());

app.post("/", (req, res) => {
  //let sessionId = req.body.sessionId;
  let phone = req.body.phoneNumber;
  //let networkCode = req.body.networkCode;
  //let serviceCode = req.body.serviceCode;
  let text = req.body.text;
  let response = null;

  switch (text) {
    case "":
      response =
        "CON Welcome to Bank of Favour. What will you like to do today? \n  1. Manage account \n 2. Check phone number";

      break;
    case "1":
      response =
        "CON select an account option \n 1. Check account balance \n 2. Account number";
      break;

    case "2":
      response = `END Your phone number is ${phone}`;
      break;

    case "1*1":
      response = "END your account balance is $100";
      break;
    case "1*2":
      response = "END your account number is 0023478493";
  }

  res
    .header("Content-type: text/plain")
    .status(200)
    .send(response);
});

let port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});
