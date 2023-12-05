import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ThemeMenu } from "./ThemeMenu";
import MobileNav from "./MobileNav";
import GlobalSearch from "../search/GlobalSearch";

const Navbar = () => {
  return (
    <nav className="flex-between dark:bg-bg_dark fixed z-50 w-full gap-5 bg-white p-6 shadow-sm sm:px-12">
      <Link className="flex items-center gap-1" href="/">
        <Image
          src="/assets/images/site-logo.svg"
          alt="Askify"
          height={23}
          width={23}
        />
        <p className="font-spaceGrotesk h2-bold primary-text-gradient max-sm:hidden">
          Askify
        </p>
      </Link>
      <GlobalSearch />
      <div className="flex-between gap-2">
        <ThemeMenu />
        <UserButton
          afterSignOutUrl="/"
          appearance={{
            elements: {
              avatarBox: "w-10 h-10",
            },
            variables: {
              colorPrimary: "#6d28d9",
            },
          }}
        />
        <MobileNav />
      </div>
    </nav>
  );
};

export default Navbar;
