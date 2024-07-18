import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-white py-4 shadow-md">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/"> 
          <div className="text-xl font-bold">[Your Name]</div>
        </Link>
        <ul className="flex space-x-6">
          <li>
            <Link href="/">
              <div className="hover:text-gray-600">Home</div> 
            </Link>
          </li>
          <li>
            <Link href="/about">
              <div className="hover:text-gray-600">About</div> 
            </Link>
          </li>
          <li>
            <Link href="/projects">
              <div className="hover:text-gray-600">Projects</div>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;