import { BookData, addBookToLibrary, myLibrary } from '@/app/lib/data';
import { useState } from 'react';
import CloseButton from './CloseButton';

export default function Book({ bookData }: { bookData: BookData }) {
  const [isRead, setIsRead] = useState(bookData.isRead);

  function bookDataUpdate() {
    setIsRead(!isRead);
    bookData.isRead = isRead;
  }

  function deleteBook() {
    alert('deleteBook triggered');
  }

  return (
    <div className="relative flex flex-col justify-center items-center gap-4 font-book px-12 py-20 bg-[url('/book.png')] bg-cover p-6 bg-center w-[400] h-[600] text-center text-black">
      <CloseButton className="absolute top-26 right-20" onClick={deleteBook} />
      <h1 className="text-xl">{bookData.title}</h1>
      <h2 className="text-lg">
        <span className="text-sm">by</span> {bookData.author}
      </h2>
      <span>{bookData.pageCount} Pages</span>
      <span
        className="hover:line-through cursor-pointer"
        onClick={bookDataUpdate}
      >
        has {isRead ? '' : 'not'} been read
      </span>
    </div>
  );
}
