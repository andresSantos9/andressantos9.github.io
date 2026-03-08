export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-muted-foreground text-sm mb-2">
            Department of Computer Science • University of Technology
          </p>
          <p className="text-muted-foreground text-sm">
            © {currentYear} Dr. Jane Smith. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
