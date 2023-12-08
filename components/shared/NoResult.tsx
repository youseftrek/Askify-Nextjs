import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

interface NoResultProps {
  title: string;
  description: string;
  link: string;
  linkText: string;
}

const NoResult = ({ title, description, link, linkText }: NoResultProps) => {
  return (
    <div className="mt-10 flex w-full flex-col items-center justify-center">
      <Image
        src="/assets/images/light-illustration.png"
        alt="no result found"
        width={270}
        height={200}
        className="flex object-contain dark:hidden"
      />
      <Image
        src="/assets/images/dark-illustration.png"
        alt="no result found"
        width={270}
        height={200}
        className="hidden object-contain dark:flex"
      />
      <h2 className="h2-bold mt-8">{title}</h2>
      <p className="body-regular my-3.5 max-w-md text-center">{description}</p>
      <Link href={link}>
        <Button>{linkText}</Button>
      </Link>
    </div>
  );
};

export default NoResult;
