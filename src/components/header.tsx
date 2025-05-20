import { Button } from "./ui/button";
export default function Header() {
  return (
    <header className="border-b border-primary">
      <div className="flex items-center justify-between w-full px-6 py-5 md:px-10">
        <div className="font-serif text-3xl font-bold tracking-tight select-none">
          BLOG
        </div>
        <div className="flex items-center gap-8 ">
          <nav className="justify-center hidden md:flex">
            <ul className="flex items-center gap-8 text-sm font-base text-black/80">
              <li className="cursor-pointer hover:text-black">Our story</li>
              <li className="cursor-pointer hover:text-black">Membership</li>
              <li className="cursor-pointer hover:text-black">Write</li>
              <li className="cursor-pointer hover:text-black">Sign in</li>
            </ul>
          </nav>
          <Button className="p-4 text-sm font-light text-white bg-black rounded-full hover:bg-black/90 md:inline-flex">
            Get started
          </Button>
        </div>
      </div>
    </header>
  );
}
