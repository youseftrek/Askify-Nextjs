import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="flex min-w-full justify-between gap-2 max-sm:w-full max-sm:flex-col-reverse">
        <h1 className="h1-bold max-sm:text-center">All Questions</h1>
        <Link href="/ask-question">
          <Button className="primary-gradient hover:primary-gradient-hover min-h-[46px] min-w-full">
            Ask a Question
          </Button>
        </Link>
      </div>
    </>
  );
}
