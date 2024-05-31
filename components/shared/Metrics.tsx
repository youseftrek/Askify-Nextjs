import Image from "next/image";
import Link from "next/link";
import React from "react";

interface MetricsProps {
  imgUrl: string;
  alt: string;
  value: number | string;
  title: string;
  href?: string;
  textStyles?: string;
  isAuthor?: boolean;
}

const Metrics = ({
  imgUrl,
  alt,
  href,
  value,
  isAuthor,
  title,
  textStyles,
}: MetricsProps) => {
  const MetricContent = () => {
    return (
      <>
        <Image
          src={imgUrl}
          alt={alt}
          width={15}
          height={15}
          className={`object-contain ${href ? "rounded-full" : ""}`}
        />
        <p className={`${textStyles} flex items-center gap-1`}>
          {value}
          <span
            className={`small-regular line-clamp-1 ${
              isAuthor && "max-sm:hidden"
            }`}
          >
            {title}
          </span>
        </p>
      </>
    );
  };
  return (
    <div className="flex-center flex-wrap gap-1">
      {href ? (
        <Link className="flex-center gap-1" href={href}>
          <MetricContent />
        </Link>
      ) : (
        <div className="flex-center flex-wrap gap-1">
          <MetricContent />
        </div>
      )}
    </div>
  );
};

export default Metrics;
