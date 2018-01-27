let express = require('express');
let app = express();
app.use(express.static('styles'));
app.use(express.static('/fake.csv'));
let path = require('path');
let d3 = require('d3');

let bodyParser = require('body-parser');
let urlencodedParser = bodyParser.urlencoded({ extended: true });
app.use(bodyParser.json());//do I need?

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/index.html'));
});



app.get('/result', urlencodedParser, (req, res) => {
  //let name = req.body.pet-name-input;
  console.log(req.body);

  res.sendFile(path.join(__dirname + '/result.html'));


});

app.listen(8081, () => console.log('Listening on port 8081!'));