import { bookServer } from "./routes/book";

const port = 3000;

bookServer.listen(port, () => console.log("Server starting in localhost:3000"));
