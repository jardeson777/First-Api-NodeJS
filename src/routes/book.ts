import express from "express";

const book = express();

const bookRepos = [
  {
    id: 1,
    name: "A culpa é das estrelas",
  },
  {
    id: 2,
    name: "teste",
  },
];

book.get("/", function (req, res) {
  res.send("api de livros");
});

book.get("/livros", function (req, res) {
  res.json(bookRepos);
});

export { book };
