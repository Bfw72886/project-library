export const myLibrary: BookData[] = [];

export class BookData {
  id: string;
  title: string;
  author: string;
  pageCount: number;
  isRead: boolean;

  constructor(
    id: string,
    title: string,
    author: string,
    pageCount: number,
    isRead: boolean
  ) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.pageCount = pageCount;
    this.isRead = isRead;
  }
}

export const addBookToLibrary = (
  title: string,
  author: string,
  pageCount: number,
  isRead: boolean
) => {
  myLibrary.push(
    new BookData(crypto.randomUUID(), title, author, pageCount, isRead)
  );
};
