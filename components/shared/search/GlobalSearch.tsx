import React from "react";
import Image from "next/image";
import { Input } from "@/components/ui/input";

const GlobalSearch = () => {
  return (
    <div className="relative w-full max-w-[600px] max-lg:hidden">
      <div className="flex min-h-[56px] grow items-center gap-3 rounded-xl bg-background px-4 pr-2">
        <Image
          src="/assets/icons/search.svg"
          width={25}
          height={25}
          alt="search"
          className="cursor-pointer"
        />
        <Input
          className="rounded-lg border-none"
          placeholder="Search Globally"
          type="text"
          value=""
        />
      </div>
    </div>
  );
};

export default GlobalSearch;
