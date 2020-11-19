// jshint esversion: 6
/*
 *   express.js server boilerplate
 *   Run with  -
 *   "node server.js"
 */

const express = require("express");
const app = express();

app.get("/", (_req, res) => {
  res.send("It works! The boilerplate works! Yay!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
