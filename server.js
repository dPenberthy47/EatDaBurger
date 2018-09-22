let express = require("express");
let bodyParser = require("body-parser");

let PORT = 8080;

let app = express();

//serve static content for the app from the "public" directory
app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true}));

//parse apllication json
app.use(bodyParser.json());

//set handlebars
let exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main"}));
app.set("view engine", "handlebars");

//import routes and give the server access to them
let routes = require("./controllers/burgers_controller.js");

app.use(routes);

app.listen(PORT, () => {
    console.log("Server listening on: http://localhost:" + PORT);
})