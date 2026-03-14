const Footer = () => {
  return (
    <footer className="py-8 border-t border-border">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Idamir Duarte · CRP 04/48538
        </p>
        <p className="text-xs text-muted-foreground">
          Psicóloga · Terapia Cognitivo-Comportamental
        </p>
      </div>
    </footer>
  );
};

export default Footer;
