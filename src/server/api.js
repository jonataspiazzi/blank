var express = require('express');
var bodyParser = require('body-parser');

var app = new express();
app.use(bodyParser.json());

app.get('/about', (req, res) => {
  res.send({ name: "Express" });
});

app.listen(3000, function () {
  console.log('server api started in http://localhost:3000');
});
