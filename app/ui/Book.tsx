import { BookData, addBookToLibrary, myLibrary } from '@/app/lib/data';

export default function Book(bookData: BookData) {
  return (
    <div className="bg-[url('/book.png')]">
      <h1>{bookData.title}</h1>
      <p>{bookData.author}</p>
    </div>
  );
}
