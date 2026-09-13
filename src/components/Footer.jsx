import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

function Footer() {
  const productLinks = [
    { name: "Features", path: "/features" },
    { name: "Product", path: "/product" },
    { name: "How It Works", path: "/how-it-works" },
    { name: "Pricing", path: "/pricing" },
  ];

  const companyLinks = [
    { name: "Solutions", path: "/solutions" },
    { name: "FAQ", path: "/faq" },
  ];

  return (
    <footer className="border-t border-[var(--nova-border)] bg-[var(--nova-bg)] text-[var(--nova-text)]">

      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8">

        {/* Main Footer */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8 xl:gap-12">

          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">

            <Link
              to="/"
              className="inline-block text-2xl font-extrabold tracking-widest text-[var(--nova-logo)] drop-shadow-[var(--nova-logo-glow)] transition-colors duration-300"
            >
              NOVA
            </Link>

            <p className="mt-4 max-w-sm text-sm leading-6 text-[var(--nova-muted)]">
              AI-powered productivity for modern teams.
              Build better. Work smarter.
            </p>

          </div>

          {/* Product */}
          <div>

            <h3 className="text-sm font-semibold text-[var(--nova-text)]">
              Product
            </h3>

            <div className="mt-4 flex flex-col gap-3">

              {productLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="w-fit text-sm text-[var(--nova-muted)] transition-all duration-300 hover:translate-x-1 hover:text-[var(--nova-hover)]"
                >
                  {link.name}
                </Link>
              ))}

            </div>

          </div>

          {/* Company */}
          <div>

            <h3 className="text-sm font-semibold text-[var(--nova-text)]">
              Company
            </h3>

            <div className="mt-4 flex flex-col gap-3">

              {companyLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="w-fit text-sm text-[var(--nova-muted)] transition-all duration-300 hover:translate-x-1 hover:text-[var(--nova-hover)]"
                >
                  {link.name}
                </Link>
              ))}

            </div>

          </div>

          {/* CTA */}
          <div>

            <h3 className="text-sm font-semibold text-[var(--nova-text)]">
              Get started
            </h3>

            <p className="mt-4 max-w-xs text-sm leading-6 text-[var(--nova-muted)]">
              Start building smarter workflows with NOVA.
            </p>

            <Link
              to="/pricing"
              className="mt-5 inline-flex items-center gap-2 rounded-full bg-[var(--nova-button)] px-5 py-3 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--nova-button-glow)]"
            >
              Get Started Free
              <ArrowUpRight size={16} />
            </Link>

          </div>

        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col gap-5 border-t border-[var(--nova-border)] pt-7 text-sm text-[var(--nova-muted)] sm:mt-16 sm:pt-8 md:flex-row md:items-center md:justify-between">

          <p className="text-center md:text-left">
            © 2026 NOVA. All rights reserved.
          </p>

          <div className="flex justify-center gap-6 md:justify-end">

            <a
              href="#"
              className="transition-colors duration-300 hover:text-[var(--nova-hover)]"
            >
              Privacy
            </a>

            <a
              href="#"
              className="transition-colors duration-300 hover:text-[var(--nova-hover)]"
            >
              Terms
            </a>

          </div>

        </div>

      </div>

    </footer>
  );
}

export default Footer;
