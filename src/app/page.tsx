export default function Page() {
  return (
    <main className="min-h-screen w-full px-6 py-24 flex flex-col items-center justify-between text-center space-y-10">
      <h1 className="text-6xl md:text-7xl lg:text-8xl font-medium tracking-tight leading-[1.1] font-inherit">
        Blog
      </h1>

      <p className="text-xl md:text-2xl text-muted-foreground font-inherit max-w-2xl">
        A space to share thoughts, stories, and perspectives — technical or
        personal.
      </p>

      <div className="max-w-2xl text-left space-y-6 text-base leading-relaxed font-inherit text-muted-foreground">
        <p>
          This blog was built not just to publish, but to listen. Writing helps
          me clarify what matters. Publishing opens the door to conversations —
          not conclusions.
        </p>

        <p>
          Here, I&apos;ll explore problems I care about, ideas I&apos;m
          uncertain about, and moments that made me stop and think. Some posts
          might be about code, others about decisions. Some might not have
          answers at all.
        </p>

        <p>
          If any of it resonates — feel free to reach out, build on it, disagree
          with it, or simply sit with it. This space exists so we can think
          better, together.
        </p>

        <p>
          I don&apos;t believe in perfect solutions, only honest attempts. Some
          posts will change over time — not because I was wrong, but because I
          learned. And that&apos;s the point.
        </p>

        <p>
          You might find a technical breakdown next to a personal reflection.
          That&apos;s intentional. We write code, but we also write reasons.
          Both deserve space here.
        </p>

        <p>No noise. No SEO traps. Just unpolished clarity in progress.</p>
      </div>

      <p className="text-sm text-muted-foreground font-inherit underline">
        Updated May 20, 2025
      </p>
    </main>
  );
}
