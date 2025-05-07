const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

app.post('/claim', (req, res) => {
  const { name, username } = req.body;
  console.log(`Received claim from ${name} (@${username})`);
  res.sendStatus(200);
});

app.listen(3000, () => console.log('API running on port 3000'));

