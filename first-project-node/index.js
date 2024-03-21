const express = require("express"); // importando o express
const uuid = require("uuid"); // bibiloteca de id
const cors = require("cors");
const port = 3001; // porta que esta rodando
const app = express(); //armazena o express dentro de uma variavel
app.use(express.json()); //configura sempre antes das rotas
app.use(cors());

const users = [];

const checkUserId = (request, response, next) => {
  //middlewares
  const { id } = request.params;
  const index = users.findIndex((user) => user.id === id);
  if (index < 0) {
    return response.status(404).json({ message: "user not found" });
  }
  request.userIndex = index;
  request.userId = id;
  next();
};

app.get("/users", (request, response) => {
  return response.json(users);
});

app.post("/users", (request, response) => {
  const { name, age } = request.body;
  const user = { id: uuid.v4(), name, age };
  users.push(user);
  return response.status(201).json(user);
});
app.put("/users/:id", checkUserId, (request, response) => {
  const { name, age } = request.body;
  const index = request.userIndex;
  const id = request.userId;
  const updateUser = { id, name, age };

  users[index] = updateUser;

  return response.json(updateUser);
});
app.delete("/users/:id", checkUserId, (request, response) => {
  const index = request.userIndex;
  users.splice(index, 1);

  return response.status(204).json();
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
