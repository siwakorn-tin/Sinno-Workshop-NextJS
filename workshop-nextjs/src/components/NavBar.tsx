import React from "react";
import Link from "next/link";

export default function NavBar() {
  const PageName = [
    { name: "Home", path: "/" },
    { name: "Work", path: "/work" },
    { name: "Blog", path: "/blog" },
  ];
  return (
    <nav className="flex flex-row gap-x-7 mt-12">
      {PageName.map((page) => (
        <Link key={page.name} href={page.path}>
          {page.name}
        </Link>
      ))}
    </nav>
  );
}
