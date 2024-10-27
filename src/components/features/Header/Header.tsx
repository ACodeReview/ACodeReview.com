"use client";

import Link from "next/link";

import DesktopNav from "./DesktopNav";
import Logo from "./Logo";
import MobileNav from "./MobileNav";

const Header = () => (
  <header className="subtle-border-color flex items-center justify-between border-b px-6 py-2 lg:py-4">
    <Link
      className="flex items-center gap-2 text-primary-600 transition-colors hover:text-secondary lg:gap-4"
      href="/"
    >
      <Logo className="h-9 lg:h-10" />
      <h1 className="text-3xl font-semibold lg:text-4xl">ACodeReview</h1>
    </Link>
    <MobileNav />
    <DesktopNav />
  </header>
);

export default Header;
