import express from "express";

const bookServer = express();

type BookProps = {
  id: number;
  name: string;
};

const bookRepos: BookProps[] = [
  {
    id: 1,
    name: "A culpa é das estrelas",
  },
  {
    id: 2,
    name: "teste",
  },
];

const searchIndexOfBook = (bookId: number) => {
  let indexFound = 0;
  bookRepos.forEach((bookItem, index) => {
    if (bookItem.id === bookId) {
      indexFound = index;
    }
  });

  return indexFound;
};

bookServer.use(express.json());

bookServer.get("/", (req, res) => {
  res.send("api de livros");
});

bookServer.get("/livros", (req, res) => {
  res.json(bookRepos);
});

bookServer.post("/livros", (req, res) => {
  bookRepos.push(req.body);
  res.status(201).send("Book register with success");
});

bookServer.put("/livros/:id", (req, res) => {
  const idBook = req.params.id;
  const indexFound = searchIndexOfBook(Number(idBook));
  bookRepos[indexFound].name = req.body.name;

  res.status(201).send("Book change with success");
});

bookServer.get("/livros/:id", (req, res) => {
  const idBook = req.params.id;
  const indexFound = searchIndexOfBook(Number(idBook));

  res.send(bookRepos[indexFound]);
});

export { bookServer };
