"use client";

import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

export default function Page() {
  return (
    <main className="flex flex-col justify-center flex-1 min-h-0">
      <section className="">
        <div className="font-serif text-6xl font-bold leading-tight">
          <h1>Human</h1>
          <h1>stories & ideas</h1>
        </div>
        <p className="text-lg text-secondary-foreground sm:text-lg md:text-xl">
          A place to read, write, and deepen your understanding
        </p>
        <Button className="p-6 mt-4 text-xl transition-colors rounded-lg bg-primary sm:text-2xl w-fit">
          <Link href="/blog/the-future-of-ai">Start reading</Link>
          <ChevronRight className="w-16 h-16" />
        </Button>
      </section>
    </main>
  );
}
