var express = require('express');
var bodyParser = require('body-parser');
var snapStringfy = require('./snapStringfy.js');
var fs = require('fs');

var app = new express();
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send({ healthy: true });
});

// GET /snapshots
app.get('/snapshots', (req, res) => {
  console.log('GET /snapshots called');
  var fileText = fs.readFileSync('src\\server\\snapshots.json');
  var allSnapshots = JSON.parse(fileText);

  res.send(allSnapshots);
});

// PUT /snapshots/abc
app.put('/snapshots/:name', (req, res) => {
  console.log(`PUT /snapshots/${req.params.name} called`);
  var name = req.params.name;
  var body = req.body;

  var fileText = fs.readFileSync('src\\server\\snapshots.json');
  var allSnapshots = JSON.parse(fileText);

  allSnapshots[name] = body;
  fileText = snapStringfy(allSnapshots);

  fs.writeFileSync('src\\server\\snapshots.json', fileText);
  
  var successMessage = `snapshot ${name} saved.`;
  console.log(successMessage);
  res.send(successMessage);
});

app.listen(3000, function () {
  console.log('snapshot running.');
  console.log('Check healthy on: http://localhost:3000');
});
