import Link from "next/link";

const links = [
  //   {
  //     id: 1,
  //     title: "Home",
  //     url: "/",
  //   },
  {
    id: 2,
    title: "Portfolio",
    url: "/portfolio",
  },
  {
    id: 3,
    title: "Blog",
    url: "/blog",
  },
  {
    id: 4,
    title: "About",
    url: "/about",
  },
  {
    id: 5,
    title: "Contact",
    url: "/contact",
  },
  {
    id: 6,
    title: "Dashboard",
    url: "/dashboard",
  },
];

const Navbar = () => {
  return (
    <nav>
      <Link href="/">
        ase<span>Design</span>.
      </Link>

      <div>
        {links.map((link) => (
          <Link href={link.url} key={link.id}>
            {link.title}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
