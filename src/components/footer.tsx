export default function Footer() {
  return (
    <footer className="w-full text-white bg-black border-t border-black/10">
      <div className="px-6 py-2">
        <div className="flex flex-row gap-4 text-sm font-light ">
          <a href="#" className="hover:underline">
            About
          </a>
          <a href="#" className="hover:underline">
            Help
          </a>
          <a href="#" className="hover:underline">
            Terms
          </a>
          <a href="#" className="hover:underline">
            Privacy
          </a>
        </div>
      </div>
    </footer>
  );
}
