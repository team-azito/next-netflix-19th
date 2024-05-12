import Logo from "#/icons/home/logo.svg";
import Link from "next/link";

const HomeHeader = () => {
  return (
    // fixed를 쓰면 부모의 width 영향 X. 그래서 width를 375로 한번 더 써줬는데 더 효율적인 코드가 없을지 고민..
    <header className="flex items-center my-24pxr px-25pxr fixed z-50 w-375pxr">
      <Link href="/home">
        <Logo alt="로고" className="mr-25pxr" />
      </Link>

      <nav className="w-full">
        <ul className="flex w-auto justify-between">
          <li>TV Shows</li>
          <li>Movies</li>
          <li>My List</li>
        </ul>
      </nav>
    </header>
  );
};

export default HomeHeader;
