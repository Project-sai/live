const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// parse incoming requests with JSON payloads
app.use(bodyParser.json());

// define an array to hold data
let data = [{
  "TagID":"dfd3ac5d", 
  "PIN":"9876", 
  "Time":"201710",
}];

// define a GET endpoint to retrieve data
app.get('/api/data', (req, res) => {
  res.json(data);
});

// define a POST endpoint to add data
app.post('/api/data', (req, res) => {
  const newData = req.body;
  data.push(newData);
  res.status(201).json(newData);
});

// start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});




