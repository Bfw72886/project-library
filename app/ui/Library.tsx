'use client';

import { useRef, useState } from 'react';
import { BookData, myLibrary } from '@/app/lib/data';
import Book from '@/app/ui/Book';

export default function Library() {
  const [books, setBooks] = useState<BookData[]>(myLibrary);
  const dialogRef = useRef<HTMLDialogElement>(null);

  return (
    <>
      <header className="flex justify-center items-center p-8">
        <button
          className="bg-foreground hover:bg-foreground/80 text-background p-3 not-active:shadow-lg/70 shadow-foreground/50 active:inset-shadow-sm inset-shadow-background"
          type="button"
          onClick={() => dialogRef.current?.showModal()}
        >
          Add new Book
        </button>
        <dialog
          ref={dialogRef}
          className="justify-center items-center m-auto rounded-xl p-2"
        >
          <div className="flex flex-col w-80 h-60">
            <div
              className="flex justify-end"
              onClick={() => dialogRef.current?.close()}
            >
              <div className="text-red-600 hover:text-red-700 p-1.5 border-current border-4 rounded-2xl">
                <svg
                  version="1.1"
                  id="Layer_1"
                  x="0px"
                  y="0px"
                  width="20px"
                  height="20px"
                  viewBox="0 0 121.31 122.876"
                  enable-background="new 0 0 121.31 122.876"
                >
                  <g>
                    <path
                      fill="currentColor"
                      fillRule="evenodd"
                      clip-rule="evenodd"
                      d="M90.914,5.296c6.927-7.034,18.188-7.065,25.154-0.068 c6.961,6.995,6.991,18.369,0.068,25.397L85.743,61.452l30.425,30.855c6.866,6.978,6.773,18.28-0.208,25.247 c-6.983,6.964-18.21,6.946-25.074-0.031L60.669,86.881L30.395,117.58c-6.927,7.034-18.188,7.065-25.154,0.068 c-6.961-6.995-6.992-18.369-0.068-25.397l30.393-30.827L5.142,30.568c-6.867-6.978-6.773-18.28,0.208-25.247 c6.983-6.963,18.21-6.946,25.074,0.031l30.217,30.643L90.914,5.296L90.914,5.296z"
                    />
                  </g>
                </svg>
              </div>
            </div>
            test?
          </div>
        </dialog>
      </header>
      {books.map((book) => (
        <Book bookData={book} key={book.id} />
      ))}
    </>
  );
}
