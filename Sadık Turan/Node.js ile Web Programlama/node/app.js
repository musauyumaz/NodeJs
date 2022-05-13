// const path = require('path')

// let result =path.resolve("app.js");

// result =path.parse(__filename);
// console.log(result);

// const url = require('url')

const fs = require("fs");

const files = fs.readdir("./", function (error, data) {
  if (error) {
    console.log(error);
  } else {
    console.log(data);
  }
});
