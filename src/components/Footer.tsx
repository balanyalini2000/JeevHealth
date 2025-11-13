import jeevLogo from "@/assets/jeev-logo.png";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center space-y-6">
          <img src={jeevLogo} alt="Jeev" className="h-10 brightness-0 invert" />
          <p className="text-lg text-center italic">
            Because the best hospital is the one you never need.
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <a
              href="#"
              className="hover:text-primary transition-colors"
            >
              Privacy Policy
            </a>
            <span className="text-background/40">|</span>
            <a
              href="#"
              className="hover:text-primary transition-colors"
            >
              Terms of Service
            </a>
            <span className="text-background/40">|</span>
            <a
              href="#"
              className="hover:text-primary transition-colors"
            >
              Contact Us
            </a>
          </div>
          <p className="text-sm text-background/60">
            © {new Date().getFullYear()} Jeev Health. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
