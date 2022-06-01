import { FC } from "react";
import Link from "next/link";

const Header: FC = () => {
  return (
    <div>
      <Link href="/">
        <a style={{ marginRight: 17 }}>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
    </div>
  );
};

export default Header;
