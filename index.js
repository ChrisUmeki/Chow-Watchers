let express = require('express');
let app = express();
app.use(express.static('styles'));
app.use(express.static('fakedata.json'));
let path = require('path');

let bodyParser = require('body-parser');
let urlencodedParser = bodyParser.urlencoded({ extended: true });


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/index.html'));
});

app.post('/result', urlencodedParser, (req, res) => {
  //let name = req.body.pet-name-input;
  console.log(req.body);

  res.send();
});

app.listen(8081, () => console.log('Listening on port 8081!'));