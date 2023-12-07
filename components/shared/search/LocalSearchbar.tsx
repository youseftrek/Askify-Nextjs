import React from "react";
import Image from "next/image";
import { Input } from "@/components/ui/input";

interface CustomInputProbs {
  route: string;
  iconPosition: string;
  imgSrc: string;
  placeholder: string;
  otherClasses?: string;
}

const LocalSearchbar = ({
  route,
  iconPosition,
  imgSrc,
  placeholder,
  otherClasses = "",
}: CustomInputProbs) => {
  return (
    <div className="relative w-full">
      <div
        className={`flex min-h-[56px] grow items-center gap-3 rounded-xl bg-white px-4 dark:bg-bg_dark ${otherClasses} ${
          iconPosition === "right" ? "pl-2" : "pr-2"
        }`}
      >
        {iconPosition === "left" && (
          <Image
            src={imgSrc}
            width={25}
            height={25}
            alt="search"
            className="cursor-pointer"
          />
        )}
        <Input
          className="rounded-lg border-none bg-white dark:bg-bg_dark"
          placeholder={placeholder}
          type="text"
          value=""
        />
        {iconPosition === "right" && (
          <Image
            src={imgSrc}
            width={25}
            height={25}
            alt="search"
            className="cursor-pointer"
          />
        )}
      </div>
    </div>
  );
};

export default LocalSearchbar;
