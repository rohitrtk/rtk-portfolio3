const Footer = () => {
  return (
    <footer className="relative overflow-hidden border-t bg-background">
      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 py-10 sm:px-8 lg:px-10">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col items-center justify-between gap-3 text-center text-sm text-muted-foreground sm:flex-row sm:text-left">
            <p>
              © {new Date().getFullYear()} Rohit Kisto. All rights reserved.
            </p>

            <p>Built with React, TypeScript, Tailwind CSS, and Shadcn.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
