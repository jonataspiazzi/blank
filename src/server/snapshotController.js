var express = require('express');
var bodyParser = require('body-parser');
var snapshotStringfy = require('./snapshotStringfy');
var fs = require('fs');

var app = new express();
app.use(bodyParser.json());
app.use(express.static('dist'));

// GET /snapshots

app.get('/api/snapshots', (req, res) => {
  console.log('GET /snapshots called');
  var fileText = fs.readFileSync('src\\server\\snapshots.json');
  var allSnapshots = JSON.parse(fileText);

  res.send(allSnapshots);
});

// PUT /snapshots/abc

app.put('/api/snapshots/:name', (req, res) => {
  var name = req.params.name;
  var body = req.body;
  console.log(`PUT /snapshots/${name}`, body);

  var fileText = fs.readFileSync('src\\server\\snapshots.json');
  var allSnapshots = JSON.parse(fileText);

  allSnapshots[name] = body;

  fileText = snapshotStringfy(allSnapshots);

  fs.writeFileSync('src\\server\\snapshots.json', fileText);
  
  var successMessage = `snapshot ${name} saved.`;
  console.log(successMessage);
  res.send(successMessage);
});

app.listen(3001, function () {
  console.log('snapshot running.');
  console.log('Check healthy on: http://localhost:3001');
});
