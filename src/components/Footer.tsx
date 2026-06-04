const links = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Logo */}
        <a href="#" className="text-lg font-bold tracking-tight text-white">
          Kyle<span className="text-indigo-400">.</span>
        </a>

        {/* Links */}
        <ul className="flex flex-wrap items-center gap-6">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm text-gray-500 hover:text-white transition-colors duration-200"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Copyright */}
        <p className="text-sm text-gray-600">
          © {year} Kyle. Built with Next.js &amp; Tailwind.
        </p>
      </div>
    </footer>
  );
}

