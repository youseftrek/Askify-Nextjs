import Filter from "@/components/shared/Filter";
import LocalSearchbar from "@/components/shared/search/LocalSearchbar";
import { Button } from "@/components/ui/button";
import { HomePageFilters } from "@/constants/filters";
import Link from "next/link";

export default function Home() {
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
      <div className="mt-10 flex w-full flex-col gap-5"></div>
    </>
  );
}
