"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { SignedOut } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";
import { sidebarLinks } from "@/constants";
import { usePathname } from "next/navigation";

const LeftSidebarContent = () => {
  const pathName = usePathname();
  return (
    <section className="flex w-fit max-w-[266px] flex-col justify-center gap-5 border-r px-6">
      {sidebarLinks.map((item) => {
        const isActive =
          (pathName.includes(item.route) && item.route.length > 1) ||
          pathName === item.route;
        return (
          <Link
            className={`${
              isActive ? "primary-gradient font-bold" : "font-thin"
            } flex gap-3 rounded-lg px-4 py-3 hover:bg-secondary`}
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
            <p className="max-lg:hidden">{item.label}</p>
          </Link>
        );
      })}
    </section>
  );
};

const LeftSidebar = () => {
  return (
    <section className="custom-scrollbar sticky left-0 top-0 flex h-screen w-fit overflow-y-auto bg-white dark:bg-bg_dark max-sm:hidden">
      <LeftSidebarContent />

      <SignedOut>
        <div className="absolute bottom-3 flex w-full flex-col gap-3 px-6">
          <Link href="/sign-in">
            <Button variant="outline" className="w-full">
              <Image
                src="/assets/icons/account.svg"
                alt="login"
                width={20}
                height={20}
                className="invert-colors lg:hidden"
              />
              <span className="max-lg:hidden">Log In</span>
            </Button>
          </Link>

          <Link href="/sign-up">
            <Button className="w-full" variant="secondary">
              <Image
                src="/assets/icons/sign-up.svg"
                alt="login"
                width={20}
                height={20}
                className="invert-colors lg:hidden"
              />
              <span className="max-lg:hidden">Sign Up</span>
            </Button>
          </Link>
        </div>
      </SignedOut>
    </section>
  );
};

export default LeftSidebar;
