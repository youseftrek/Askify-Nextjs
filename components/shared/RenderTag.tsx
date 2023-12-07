import Link from "next/link";
import React from "react";
import { Badge } from "../ui/badge";

interface Props {
  _id: number;
  name: string;
  totalQuestions?: number;
  showCount?: boolean;
}

const RenderTag = ({ _id, name, totalQuestions, showCount }: Props) => {
  return (
    <Link
      href={`/tags/${_id}`}
      className="flex items-center justify-between gap-2"
    >
      <Badge className="trans h-8 rounded-md border-2 border-primary bg-secondary text-xs hover:bg-accent hover:text-primary">
        {name}
      </Badge>
      {showCount && <p className="small-medium">{totalQuestions}</p>}
    </Link>
  );
};

export default RenderTag;
