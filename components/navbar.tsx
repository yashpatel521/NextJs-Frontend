import Link from "next/link";

const Navbar = () => {
  return (
    <nav>
      <ul className="menu-bar">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/users">Users</Link>
        </li>
        <li>
          <Link href="/moules">Modules</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
