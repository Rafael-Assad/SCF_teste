const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const app = express();

const login = require('./auth')

const teste1 = require("./teste1");
const teste2 = require("./teste2");
const teste3 = require("./teste3");
const teste4 = require("./teste4");
const teste5 = require("./teste5");


app.set('view engine', 'jade');

app.use(session({
  secret: 'dev scf',
  resave: false,
  saveUninitialized: true
}));

app.use(express.json());
app.use(express.urlencoded());

app.use(bodyParser.json());                        
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.send(`post user/authenticate </br>
            get user/:id </br>
            get users/ </br>
            post users/ </br>
            delete user/:id </br>
            put user/:id </br>
            get user/access/:id
  `);
});

app.post("/user/authenticate", login);

app.get("/user/:id", teste1.getUser);

app.get("/users", teste1.getUsers);

app.post("/users", teste2);

app.delete("/user/:id", teste3);

app.put("/user/:id", teste4);

app.get("/user/access/:id", teste5);


const port  = 3000;
app.listen(port, function(){
  console.log('Express server listening on port ' + port);
});