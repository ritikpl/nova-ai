import { Link } from "react-router-dom";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useState } from "react";

function Navbar({ darkMode, setDarkMode }) {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Features", path: "/features" },
    { name: "Product", path: "/product" },
    { name: "How It Works", path: "/how-it-works" },
    { name: "Solutions", path: "/solutions" },
    { name: "Pricing", path: "/pricing" },
    { name: "FAQ", path: "/faq" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav
      className="fixed inset-x-0 top-0 z-50 border-b backdrop-blur-xl"
      style={{
        borderColor: "var(--nova-border)",
        backgroundColor: "color-mix(in srgb, var(--nova-bg) 90%, transparent)",
      }}
    >
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-4 sm:h-20 sm:px-6 lg:px-7 xl:px-8">

        {/* Logo */}
        <Link
          to="/"
          onClick={() => setIsOpen(false)}
          className="shrink-0 text-xl font-extrabold tracking-[0.18em] text-[var(--nova-logo)] drop-shadow-[var(--nova-logo-glow)] sm:text-2xl"
        >
          NOVA
        </Link>

        {/* Desktop / Laptop Navigation */}
        <div className="hidden items-center lg:flex xl:gap-7 lg:gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="group relative whitespace-nowrap text-xs font-medium transition-all duration-300 hover:-translate-y-0.5 xl:text-sm"
              style={{ color: "var(--nova-nav-text)" }}
            >
              <span
                className="transition-colors duration-300"
                style={{ color: "var(--nova-nav-text)" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "var(--nova-hover)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "var(--nova-nav-text)";
                }}
              >
                {link.name}
              </span>

              <span
                className="absolute -bottom-2 left-0 h-[2px] w-0 rounded-full transition-all duration-300 group-hover:w-full"
                style={{ backgroundColor: "var(--nova-hover)" }}
              />
            </Link>
          ))}
        </div>

        {/* Desktop / Laptop Actions */}
        <div className="hidden shrink-0 items-center gap-2 lg:flex xl:gap-4">

          {/* Theme */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="rounded-full border p-2 transition-all duration-300 hover:border-[#00F2FE]/50 hover:text-[#00F2FE] xl:p-2.5"
            style={{
              borderColor: "var(--nova-border)",
              color: "var(--nova-nav-text)",
            }}
            aria-label="Toggle theme"
          >
            {darkMode ? <Sun size={17} /> : <Moon size={17} />}
          </button>

          {/* Get Started */}
          <Link
            to="/pricing"
            className="whitespace-nowrap rounded-full px-4 py-2.5 text-xs font-bold text-white transition-all duration-300 hover:-translate-y-0.5 xl:px-6 xl:text-sm"
            style={{
              backgroundColor: "var(--nova-button)",
              boxShadow: "var(--nova-button-glow)",
            }}
          >
            Get Started Free
          </Link>
        </div>

        {/* Tablet + Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-xl border transition-all duration-300 hover:border-[#00F2FE]/40 hover:text-[#00F2FE] lg:hidden"
          style={{
            borderColor: "var(--nova-border)",
            color: "var(--nova-nav-text)",
          }}
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={23} /> : <Menu size={23} />}
        </button>

      </div>

      {/* Tablet + Mobile Menu */}
      {isOpen && (
        <div
          className="border-t px-4 py-5 sm:px-6 lg:hidden"
          style={{
            borderColor: "var(--nova-border)",
            backgroundColor: "var(--nova-bg)",
          }}
        >

          <div className="mx-auto max-w-2xl">

            <div className="grid gap-1 sm:grid-cols-2">

              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className="rounded-xl px-4 py-3 text-sm font-medium transition-all duration-300 hover:bg-[#13102B] hover:text-[#00F2FE]"
                  style={{ color: "var(--nova-nav-text)" }}
                >
                  {link.name}
                </Link>
              ))}

            </div>

            <div
              className="mt-4 flex items-center gap-3 border-t pt-4"
              style={{ borderColor: "var(--nova-border)" }}
            >
              {/* Mobile Theme Toggle */}
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border transition-all duration-300 hover:border-[rgb(var(--nova-cyan-rgb)/0.5)] hover:text-[var(--nova-hover)]"
                style={{
                  borderColor: "var(--nova-border)",
                  color: "var(--nova-nav-text)",
                }}
                aria-label="Toggle theme"
              >
                {darkMode ? <Sun size={18} /> : <Moon size={18} />}
              </button>

              <Link
                to="/pricing"
                onClick={() => setIsOpen(false)}
                className="flex flex-1 items-center justify-center rounded-full px-5 py-3 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-0.5"
                style={{
                  backgroundColor: "var(--nova-button)",
                  boxShadow: "var(--nova-button-glow)",
                }}
              >
                Get Started Free
              </Link>
            </div>

          </div>

        </div>
      )}

    </nav>
  );
}

export default Navbar;