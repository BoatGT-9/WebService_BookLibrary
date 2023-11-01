const express = require("express");
const sql = require("./model/db");
const cors = require("cors");
const LibraryRouter = require("./router/Book.router");
const PORT = 5000;

// การประเรียกใช้service ของ express
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.get("/", (req, res,next) => {
  res.send("<h1> เราต่อได้แล้วนะ API-Library </h1>");
  next();
});

 app.use("/book", LibraryRouter);
app.listen(PORT, () => {
  console.log("เซอร์เวอร์ต่ออยู่ที่ http://localhost:" + PORT);
  
});