import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div>
      <h1 className="flex flex-col items-center text-5xl font-black">
        Welcome it&apos;s Yousef Tarek
        <Button className="primary-gradient hover:primary-gradient-hover">
          Click Me
        </Button>
      </h1>
    </div>
  );
}
