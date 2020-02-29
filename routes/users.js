const router = require("express").Router();
const users = require("../data/users.json");

router.get("/users", (req, res) => {
  res.send(users);
});

router.get("/users/:id", (req, res) => {
  const userToFind = users.find(item => {
    return item._id === req.params.id;
  });
  if (!userToFind) {
    res.status(404).send({ message: "Нет пользователя с таким id" });
    return;
  }
  res.send(userToFind);
});

module.exports = router;
