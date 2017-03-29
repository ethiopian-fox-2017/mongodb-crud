const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const books = require("./routes/books");

app.use(bodyParser.urlencoded({extended: true}))
app.use("/books", books);

app.listen(3000, () => {
  console.log(`Server started!`);
})
