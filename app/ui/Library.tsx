'use client';

import { useRef, useState } from 'react';
import { BookData, exampleBook } from '@/app/lib/data';
import Book from '@/app/ui/Book';
import Button from '@/app/ui/Button';
import CloseButton from '@/app/ui/CloseButton';

export default function Library() {
  const [books, setBooks] = useState<BookData[]>([exampleBook]);
  const dialogRef = useRef<HTMLDialogElement>(null);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries()) as {
      title: string;
      author: string;
      pageCount: string;
      read?: string;
    };
    const { title, author, pageCount, read } = data;
    const isRead = read === 'on';
    const newBook = new BookData(title, author, +pageCount, isRead);
    setBooks([...books, newBook]);
    e.currentTarget.reset();
  }

  function handleDialogOpen() {
    dialogRef.current?.showModal();
  }

  function handleDialogClose() {
    dialogRef.current?.close();
  }

  function deleteBook(id: string) {
    setBooks(books.filter((book) => book.id != id));
  }

  return (
    <>
      <header className="flex justify-center items-center p-8">
        <Button onClick={handleDialogOpen}>Add new Book</Button>
        <dialog
          ref={dialogRef}
          className="justify-center items-center m-auto rounded-xl p-4 border-background border-2"
        >
          <div className="flex flex-col w-80 h-62">
            <CloseButton onClick={handleDialogClose} />
            <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-y-2">
              <label htmlFor="title">Title:</label>
              <input type="text" name="title" id="title" required />
              <label htmlFor="author">Author:</label>
              <input type="text" name="author" id="author" required />
              <label htmlFor="pageCount">How many pages:</label>
              <input type="number" name="pageCount" id="pageCount" required />
              <label htmlFor="read">Read:</label>
              <input
                type="checkbox"
                name="read"
                id="read"
                className="accent-black"
              />
              <Button type="submit">Create Book</Button>
            </form>
          </div>
        </dialog>
      </header>
      <div className="flex flex-wrap">
        {books.map((book) => (
          <Book bookData={book} key={book.id} onDelete={deleteBook} />
        ))}
      </div>
    </>
  );
}
