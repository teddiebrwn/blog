import { Button } from "./ui/button";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">
        <div className="font-serif text-3xl font-bold tracking-tight select-none">
          BLOG
        </div>
        <div className="flex items-center gap-8">
          <nav className="justify-center hidden md:flex">
            <ul className="flex items-center gap-8 text-sm font-base text-muted-foreground">
              <li className="cursor-pointer hover:text-foreground transition-colors">
                Our story
              </li>
              <li className="cursor-pointer hover:text-foreground transition-colors">
                Membership
              </li>
              <li className="cursor-pointer hover:text-foreground transition-colors">
                Write
              </li>
              <li className="cursor-pointer hover:text-foreground transition-colors">
                Sign in
              </li>
            </ul>
          </nav>
          <Button className="p-4 text-sm font-light text-primary-foreground bg-primary rounded-full hover:bg-primary/90 md:inline-flex transition-colors">
            Get started
          </Button>
        </div>
      </div>
    </header>
  );
}
