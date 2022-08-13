import { book } from "./routes/book";

const port = 3000;

book.listen(port, () => console.log("Server starting in localhost:3000"));
