import Link from "next/link";
import Image from "next/image";
import React from "react";
import RenderTag from "@/components/shared/RenderTag";

const RightSidebar = () => {
  const hotQuestions = [
    {
      _id: "1",
      title: "How do i use express as a custom server in NextJS?",
    },
    {
      _id: "2",
      title: "Cascading Deletes in SQLAlchemy",
    },
    {
      _id: "3",
      title: "How to perfect center a Div with Tailwind css?",
    },
    {
      _id: "4",
      title: "Best practices for data fetching in NextJS",
    },
    {
      _id: "5",
      title: "Redux tool kit Not updating state as expected",
    },
  ];
  const popularTags = [
    {
      _id: "1",
      name: "Javascript",
      totalQuestions: 5,
    },
    {
      _id: "2",
      name: "React",
      totalQuestions: 4,
    },
    {
      _id: "3",
      name: "Angular",
      totalQuestions: 2,
    },
    {
      _id: "4",
      name: "Nextjs",
      totalQuestions: 6,
    },
    {
      _id: "5",
      name: "Tailwind",
      totalQuestions: 2,
    },
    {
      _id: "6",
      name: "Redux",
      totalQuestions: 3,
    },
  ];
  return (
    <section className="custom-scrollbar sticky right-0 top-0 flex h-screen w-[350px] flex-col gap-5 overflow-y-auto border-l bg-white px-6 pt-36 dark:bg-bg_dark max-xl:hidden">
      <div>
        <h3 className="h3-bold">Top Questions</h3>
        <div className="mt-7 flex w-full flex-col gap-[30px]">
          {hotQuestions.map((question) => (
            <Link
              href={`/question/${question._id}`}
              key={question._id}
              className="trans flex cursor-pointer items-center justify-between gap-7 hover:text-primary"
            >
              <p className="body-medium">{question.title}</p>
              <Image
                src="/assets/icons/chevron-right.svg"
                alt="hot question"
                width={20}
                height={20}
                className="invert-colors"
              ></Image>
            </Link>
          ))}
        </div>
      </div>
      <div className="mt-16">
        <h3 className="h3-bold">Popular Tags</h3>
        <div className="mt-7 flex flex-col gap-4">
          {popularTags.map((tag) => (
            <RenderTag
              key={tag._id}
              _id={tag._id}
              name={tag.name}
              totalQuestions={tag.totalQuestions}
              showCount
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RightSidebar;
