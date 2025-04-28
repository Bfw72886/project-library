import Image from 'next/image';

export default function Home() {
  return (
    <div>
      <Image src="/book.png" alt="book" width={400} height={600} />
    </div>
  );
}
