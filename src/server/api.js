var express = require('express');
var bodyParser = require('body-parser');
var initialData = require('./initialData');

var data = Array.apply([], initialData);
var app = new express();
app.use(bodyParser.json());

app.get('/characters', (req, res) => {
  res.send(data);
});

getItem = (req, res) => {
  var item = data.filter(d => d.id == req.params.id)[0];
  if (item) return item;

  res.statusMessage = `There is no character with id equal to ${req.params.id}`;
  res.status(400).end();
  return undefined;
};

app.get('/characters/:id', (req, res) => {
  var item = getItem(req, res);
  if (!item) return;

  res.send(item);
});

app.post('/characters', (req, res) => {
  var item = req.body;
  item.id = data.map(d => d.id).reduce((ac, i) => ac > i ? ac : i, 0) + 1; 
  data.push(item);
  res.send('created');
});

getIndex = (req, res) => {
  var item = getItem(req, res);
  if (!item) return -1;
  var index = data.indexOf(item);

  if (index >= 0) return index;

  res.statusMessage = `There is no character with id equal to ${req.params.id}`;
  res.status(400).end();
  return -1;
};

app.put('/characters/:id', (req, res) => {
  var index = getIndex(req, res);
  if (index < 0) return;

  var item = req.body;
  item.id = req.params.id;
  item = JSON.parse(JSON.stringify(item));
  data[index] = item;

  res.send('updated');
});

app.delete('/characters/:id', (req, res) => {
  var index = getIndex(req, res);
  if (index < 0) return;

  data.splice(index, 1);

  res.send('deleted');
});

app.listen(3000, function () {
  console.log('server api started in http://localhost:3000');
});
