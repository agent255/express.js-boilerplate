// jshint esversion: 6
/*
 *   express.js server boilerplate
 *   Run with either -
 *   "node server.js"
 *   OR
 *   "nodemon server.js"
 */

const express = require("express");
const app = express();

const prompt = require("prompt-sync")();

const port = prompt("Which port? ");

if (isNaN(port)) {
  //port should be a number
  console.log("error :");
  console.error("Port should be a number.");
} else if (port == "1" || port == 1) {
  //port 1 cant be used
  console.log("error :");
  console.error("Give a port other than one.");
} else {
  // if it gets past all guards, send the response

  app.get("/", (_req, res) => {
    res.send("It works! The boilerplate works! Yay!");
  });

  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
  });
}
