import Logo from "#/icons/home/logo.svg";
import Link from "next/link";

const HomeHeader = () => {
  return (
    <header className="flex my-24pxr items-center fixed z-50">
      <Link href="/home">
        <Logo className="mr-25pxr" />
      </Link>

      <nav>
        <ul className="flex gap-25pxr">
          <li>TV Shows</li>
          <li>Movies</li>
          <li>My List</li>
        </ul>
      </nav>
    </header>
  );
};

export default HomeHeader;
