let express = require('express');
let app = express();
app.use(express.static('styles'));
app.use(express.static('assets'));
let path = require('path');
let csv = require('csv');

let hbs = require('express-handlebars');
app.engine('hbs', hbs({extname: '.hbs', defaultLayout: 'layout'}));
app.set('views', path.join(__dirname, 'views/'));
app.set('view engine', 'hbs');

let bodyParser = require('body-parser');
let urlencodedParser = bodyParser.urlencoded({ extended: true });
app.use(bodyParser.json());//do I need?

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/index.html'));
});



app.get('/result', urlencodedParser, (req, res) => {
  console.log(req.query);
  let age = req.query.age;
  let weight = req.query.weight;

  let ranges = {
    'corgi': {
    min: 27,
    max: 38
    },
    'germanshepherd': {
      min: 75,
      max: 95
    }
  }
  //TODO: Extract breed data from drop down instead of assuming corgi
  let breed = 'germanshepherd';

  let upper = ranges[breed].max * Math.pow(age, .5)/(Math.pow(age, .5) + 1);
  let lower = ranges[breed].min * Math.pow(age, .5)/(Math.pow(age, .5) + 1);

  let over = weight > upper;
  let under = weight < lower;
  let normal = !over && !under;


  // res.sendFile(path.join(__dirname + '/result.html'));
  res.render('template', {
    title: 'Chow Watchers - Results',
    name: req.query.name,
    age: age,
    weight: weight,
    over: over,
    under: under,
    normal: normal
  });

});

app.listen(8081, () => console.log('Listening on port 8081!'));
