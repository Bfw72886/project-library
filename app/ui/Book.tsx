import { BookData, addBookToLibrary, myLibrary } from '@/app/lib/data';

export default function Book(bookData: BookData) {
  return (
    <>
      <h1>{bookData.title}</h1>
      <p>{bookData.author}</p>
    </>
  );
}
