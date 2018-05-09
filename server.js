var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');

var port = process.env.PORT || 8080;

var app = express();

app.use(express.static(process.cwd() + '/public'));

app.use(bodyParser.urlencoded({extended: false}));

//override with POST
app.use(methodOverride('_method'));

var exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({defalutLayout: 'main'}));
app.set('view engine', 'handlebars');

var router = require('./controllers/burgers_controller.js');

app.use('/', router);



// Start our server so that it can begin listening to client requests.
app.listen(port, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + port);
  });