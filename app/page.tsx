import Book from '@/app/ui/Book';
import { BookData, myLibrary, addBookToLibrary } from './lib/data';
import Library from './ui/Library';

export default function Home() {
  return (
    <div>
      <Library />
    </div>
  );
}
