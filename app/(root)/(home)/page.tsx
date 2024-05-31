import QuestionCard from "@/components/cards/QuestionCard";
import Filter from "@/components/shared/Filter";
import NoResult from "@/components/shared/NoResult";
import LocalSearchbar from "@/components/shared/search/LocalSearchbar";
import { Button } from "@/components/ui/button";
import { HomePageFilters } from "@/constants/filters";
import Link from "next/link";

export default function Home() {
  const questions = [
    {
      _id: "1",
      title: "Cascading Deletes in SQLAlchemy?",
      tags: [
        { _id: "1", name: "Python" },
        { _id: "2", name: "SQL" },
      ],
      author: { _id: "1", name: "Jack Doe", picture: "profile.jpg" },
      upvotes: 1200,
      views: 1500,
      answers: [{}, {}],
      createdAt: new Date("2021-09-01T12:00:00.000Z"),
    },
    {
      _id: "2",
      title: "How to center a div?",
      tags: [
        { _id: "1", name: "Css" },
        { _id: "2", name: "Tailwind" },
      ],
      author: { _id: "2", name: "Tony Jack", picture: "tony.jpg" },
      upvotes: 7,
      views: 83,
      answers: [{}, {}, {}],
      createdAt: new Date("2023-07-26T08:10:26.000Z"),
    },
    {
      _id: "3",
      title: "How to use TypeScript with React?",
      tags: [
        { _id: "3", name: "TypeScript" },
        { _id: "4", name: "React" },
      ],
      author: { _id: "3", name: "Alice Smith", picture: "alice.jpg" },
      upvotes: 15,
      views: 120,
      answers: [{}, {}],
      createdAt: new Date(),
    },
  ];

  return (
    <>
      <div className="flex min-w-full justify-between gap-10 max-sm:w-full max-sm:flex-col-reverse">
        <h1 className="h1-bold max-sm:text-center">All Questions</h1>
        <Link href="/ask-question">
          <Button className="primary-gradient hover:primary-gradient-hover min-h-[46px] min-w-full">
            Ask a Question
          </Button>
        </Link>
      </div>
      <div className="mt-4 flex justify-between gap-5 max-sm:flex-col sm:items-center">
        <LocalSearchbar
          route="/"
          iconPosition="left"
          imgSrc="/assets/icons/search.svg"
          placeholder="Search Questions"
        />
        <Filter
          filters={HomePageFilters}
          otherClasses="min-h-[56px] sm:min-w-[170px] rounded-lg"
          containerClasses="flex"
        />
      </div>
      <div className="mt-10 flex w-full flex-col gap-5">
        {questions.length > 0 ? (
          questions.map((question) => (
            <QuestionCard
              key={question._id}
              _id={question._id}
              title={question.title}
              tags={question.tags}
              author={question.author}
              upvotes={question.upvotes}
              views={question.views}
              answers={question.answers}
              createdAt={question.createdAt}
            />
          ))
        ) : (
          <NoResult
            title="There's no questions to show"
            description="Be the first to break the silence! 🚀ask a question and kickstart the
          discussion. Our query could be the next big thing others learn from. Get
          involved!💡"
            link="/ask-question"
            linkText="Ask a Question"
          />
        )}
      </div>
    </>
  );
}
