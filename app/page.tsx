import Image from 'next/image';
import Book from '@/app/ui/Book';

export default function Home() {
  return (
    <div>
      <Book
        id="hehe"
        title="Cthulhus Ruf"
        author="H. P. Lovecraft"
        pageCount={464}
        isRead={true}
      ></Book>
    </div>
  );
}
