"use client";

import React from "react";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import Link from "next/link";
import { SignedOut } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { sidebarLinks } from "@/constants";
import { usePathname } from "next/navigation";

const NavContent = () => {
  const pathName = usePathname();
  return (
    <section className="z-40 flex h-full flex-col gap-5 pt-14">
      {sidebarLinks.map((item) => {
        const isActive =
          (pathName.includes(item.route) && item.route.length > 1) ||
          pathName === item.route;
        return (
          <Link
            className={`${
              isActive ? "primary-gradient font-bold" : "font-thin"
            } flex gap-3 rounded-lg px-6 py-3 hover:bg-secondary`}
            href={item.route}
            key={item.label}
          >
            <Image
              className="invert-colors"
              src={item.imgURL}
              alt={item.label}
              height={20}
              width={20}
            />
            <p>{item.label}</p>
          </Link>
        );
      })}
    </section>
  );
};

const MobileNav = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Image
          src="/assets/icons/hamburger.svg"
          alt="menu"
          width={36}
          height={36}
          className="invert-colors sm:hidden"
        />
      </SheetTrigger>
      <SheetContent side="left">
        <SheetClose asChild>
          <Link className="flex w-fit items-center gap-1" href="/">
            <Image
              src="/assets/images/site-logo.svg"
              alt="Askify"
              height={23}
              width={23}
            />
            <p className="h2-bold primary-text-gradient">Askify</p>
          </Link>
        </SheetClose>
        <div>
          <SheetClose asChild>
            <NavContent />
          </SheetClose>

          <SignedOut>
            <div className="absolute bottom-4 left-0 right-0 w-full px-6">
              <div className="flex w-full flex-col gap-3">
                <SheetClose asChild>
                  <Link href="/sign-in">
                    <Button className="w-full">
                      <span>Log In</span>
                    </Button>
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link href="/sign-up">
                    <Button className="w-full" variant="secondary">
                      <span>Sign Up</span>
                    </Button>
                  </Link>
                </SheetClose>
              </div>
            </div>
          </SignedOut>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
