export class BookData {
  id: string;
  title: string;
  author: string;
  pageCount: number;
  isRead: boolean;

  constructor(
    title: string,
    author: string,
    pageCount: number,
    isRead: boolean
  ) {
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pageCount = pageCount;
    this.isRead = isRead;
  }
}

const exampleBook = new BookData('Cthulhus Ruf', 'H. P. Lovecraft', 464, true);

export const myLibrary: BookData[] = [exampleBook];

export function addBookToLibrary(bookData: BookData) {
  myLibrary.push(bookData);
}
