import Book from "@/app/ui/Book";
import { BookData, myLibrary, addBookToLibrary } from "./lib/data";

export default function Home() {
  const exampleBook = new BookData(
    "Cthulhus Ruf",
    "H. P. Lovecraft",
    464,
    true
  );

  addBookToLibrary(exampleBook);

  return (
    <div>
      {myLibrary.map((libraryBook) => (
        <Book bookData={libraryBook} key={libraryBook.id}></Book>
      ))}
    </div>
  );
}
