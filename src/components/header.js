import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    <header className="p-4 border border-yellow-400">
      <ul className="flex space-x-4">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/about/projects">Projects</Link>
        </li>
      </ul>
    </header>
  );
}
