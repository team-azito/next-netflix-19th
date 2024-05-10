import FooterItem from "./FooterItem";

const Footer = () => {
  return (
    <nav className="z-50 bg-black h-48pxr">
      <ul className="flex-center gap-40pxr">
        <li>
          <FooterItem item="home">Home</FooterItem>
        </li>
        <li>
          <FooterItem item="search">Search</FooterItem>
        </li>
        <li>
          <FooterItem item="comingsoon">Coming soon</FooterItem>
        </li>
        <li>
          <FooterItem item="downloads">Downloads</FooterItem>
        </li>
        <li>
          <FooterItem item="more">More</FooterItem>
        </li>
      </ul>
    </nav>
  );
};

export default Footer;
