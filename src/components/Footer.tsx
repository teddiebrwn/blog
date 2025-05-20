export default function Footer() {
  return (
    <footer className="mt-auto bg-background text-foreground py-4 px-4 border-t border-border">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex flex-row gap-4 text-sm font-light text-muted-foreground">
          <a
            href="#"
            className="hover:text-foreground hover:underline transition-colors"
          >
            About
          </a>
          <a
            href="#"
            className="hover:text-foreground hover:underline transition-colors"
          >
            Help
          </a>
          <a
            href="#"
            className="hover:text-foreground hover:underline transition-colors"
          >
            Terms
          </a>
          <a
            href="#"
            className="hover:text-foreground hover:underline transition-colors"
          >
            Privacy
          </a>
        </div>
      </div>
    </footer>
  );
}
