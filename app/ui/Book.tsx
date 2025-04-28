import { BookData, addBookToLibrary, myLibrary } from "@/app/lib/data";

export default function Book({ bookData }: { bookData: BookData }) {
  return (
    <div className="flex flex-col justify-center items-center gap-4 font-book px-12 py-20 bg-[url('/book.png')] bg-cover p-6 bg-center w-[400] h-[600] text-center text-black">
      <h1 className="text-xl">{bookData.title}</h1>
      <h2 className="text-lg">
        <span className="text-sm">by</span> {bookData.author}
      </h2>
      <span>{bookData.pageCount} Pages</span>
      <span>has {bookData.isRead ? "" : "not"} been read</span>
    </div>
  );
}
