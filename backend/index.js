const express = require("express");
const LoginController = require("./controllers/LoginController");

const app = express();
app.use(express.json());

app.post("/login", LoginController.index);

app.listen(3333);
