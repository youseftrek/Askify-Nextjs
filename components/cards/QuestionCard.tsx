import Link from "next/link";
import React from "react";
import RenderTag from "../shared/RenderTag";
import Metrics from "../shared/Metrics";
import { formatLargeNumber, getTimestamp } from "@/lib/utils";

interface QuestionCardProps {
  _id: string;
  title: string;
  tags: { _id: string; name: string }[];
  author: { _id: string; name: string; picture: string };
  upvotes: number;
  views: number;
  answers: Array<object>;
  createdAt: Date;
}

const QuestionCard = ({
  _id,
  title,
  tags,
  author,
  upvotes,
  views,
  answers,
  createdAt,
}: QuestionCardProps) => {
  return (
    <div className="rounded-lg bg-white p-9 shadow-sm dark:bg-bg_dark sm:px-11">
      <div className="flex flex-col-reverse items-start justify-between gap-5 sm:flex-row">
        <div>
          <span className="subtle-regular line-clamp-1 flex sm:hidden">
            {getTimestamp(createdAt)}
          </span>
          <Link href={`/question/${_id}`}>
            <h3 className="sm:h3-semibold base-semibold line-clamp-1 flex-1">
              {title}
            </h3>
          </Link>
        </div>
        {/* if signed add edit delete button */}
      </div>

      <div className="mt-3.5 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <RenderTag key={tag._id} _id={tag._id} name={tag.name} />
        ))}
      </div>

      <div className="flex-between mt-6 w-full flex-wrap gap-3">
        <Metrics
          imgUrl="/assets/icons/avatar.svg"
          alt="user"
          value={author.name}
          title={`- ${getTimestamp(createdAt)}`}
          href={`/profile/${author._id}`}
          isAuthor
          textStyles="body-medium"
        />
        <Metrics
          imgUrl="/assets/icons/like.svg"
          alt="upvotes"
          value={formatLargeNumber(upvotes)}
          title=" Votes"
          textStyles="small-medium"
        />
        <Metrics
          imgUrl="/assets/icons/message.svg"
          alt="message"
          value={formatLargeNumber(answers.length)}
          title=" Answers"
          textStyles="small-medium"
        />
        <Metrics
          imgUrl="/assets/icons/eye.svg"
          alt="eye"
          value={formatLargeNumber(views)}
          title=" Views"
          textStyles="small-medium"
        />
      </div>
    </div>
  );
};

export default QuestionCard;
