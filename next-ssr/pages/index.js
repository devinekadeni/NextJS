import Link from 'next/link';

const index = () => (
  <div>
    <h1>Server Side Magician</h1>
    <Link href="/about">
      <button>About</button>
    </Link>
    <Link href="/robots">
      <button>Robots</button>
    </Link>
  </div>
);

export default index;