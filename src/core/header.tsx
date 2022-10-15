import Link from "next/link";
import type { FC } from "react";

const Header: FC = () => {
  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        right: 0,
        padding: "1.5rem",
        display: "flex",
        gap: "1rem",
      }}
    >
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/profile-ssr">
        <a>Profile</a>
      </Link>
      <a href="/api/auth/logout">Logout</a>
    </div>
  );
};
export default Header;
