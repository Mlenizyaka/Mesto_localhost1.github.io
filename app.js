const express = require("express");
const path = require("path");
const getCards = require("./routes/cards");
const getUsers = require("./routes/users");

const { PORT = 3000 } = process.env;
const app = express();

app.use(express.static(path.join(__dirname, "public")));
app.get("*", (req, res) => {
  res.status(404).send({ message: "Запрашиваемый ресурс не найден" });
});
app.use("/", getCards);
app.use("/", getUsers);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
