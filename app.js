'use strict';

var express = require('express');
var app = express();

var port = 3000;

var server = app.listen(port, function() {
  console.log("node is running. PORT : " + server.address().port);
  console.log("access : http://localhost:3000/api/test")
  console.log("stop : ctrl + c")
});

var list = [
  {
    id: "111",
    name: "bill"
  },
  {
    id: "222",
    name: "jobs"
  }
];

app.set('view engine', 'ejs');

// get : /api/test
app.get("/api/test", function(req, res, next) {
  res.json(list)
});

// get : /api/test/:id
app.get("/api/test/:id", function(req, res, next) {
  var user;
  for (var i = 0; i < list.length; i++) {
    if (list[i].id === req.params.id) {
      user = list[i];
    }
  }
  res.json(user);
});

// get : /
app.get("/", function(req, res, next) {
  var data = {"text": "test value"};
  res.render("index", data);
});
