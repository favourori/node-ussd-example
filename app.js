const express = require("express");
let app = express();
require("dotenv").config();

let bodyParser = require("body-parser");
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());
app.use(bodyParser.text({type:"*/*"}));

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
      break;
    case "1":
      response = "Your account balance is $100";
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
