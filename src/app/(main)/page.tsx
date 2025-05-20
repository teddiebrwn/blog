"use client";

import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

export default function Page() {
  return (
    <main className="flex flex-col justify-center">
      <section className="">
        <div className="font-serif text-6xl font-bold leading-tight">
          <h1>Human</h1>
          <h1>stories & ideas</h1>
        </div>
        <p className="text-lg text-secondary-foreground sm:text-lg md:text-xl">
          A place to read, write, and deepen your understanding
        </p>
        <Button className="p-6 mt-4 text-xl transition-colors rounded-2xl bg-primary sm:text-2xl w-fit">
          <a href="/blog/the-future-of-ai">Start reading</a>
          <ChevronRight className="w-4 h-4" />
        </Button>
      </section>
    </main>
  );
}
