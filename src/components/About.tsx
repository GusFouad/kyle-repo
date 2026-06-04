const stats = [
  { value: "5+", label: "Years Experience" },
  { value: "40+", label: "Projects Shipped" },
  { value: "15+", label: "Happy Clients" },
  { value: "∞", label: "Cups of Coffee" },
];

export default function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-6">
        {/* Section label */}
        <div className="flex items-center gap-3 mb-4">
          <span className="w-8 h-px bg-indigo-400" />
          <span className="text-indigo-400 text-sm font-semibold uppercase tracking-widest">About Me</span>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
              Turning ideas into{" "}
              <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                digital reality
              </span>
            </h2>
            <div className="space-y-4 text-gray-400 leading-relaxed">
              <p>
                Hey! I&apos;m Kyle — a full-stack developer with a passion for building products
                that are both technically solid and a joy to use. I thrive at the intersection
                of engineering and design.
              </p>
              <p>
                Over the past 5+ years I&apos;ve worked with startups and established companies
                alike, shipping everything from marketing sites to complex SaaS platforms. My
                stack of choice is React / Next.js on the front-end and Node.js or Python on
                the back-end, but I&apos;m always eager to pick up new tools.
              </p>
              <p>
                When I&apos;m not coding you&apos;ll find me hiking, tinkering with side projects,
                or obsessing over the perfect espresso shot.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {["Problem Solver", "Team Player", "Fast Learner", "Detail-Oriented"].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-full text-sm bg-indigo-500/10 border border-indigo-500/20 text-indigo-300"
                >
                  {tag}
                </span>
              ))}
            </div>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 mt-8 px-6 py-3 rounded-full bg-indigo-600 hover:bg-indigo-500 font-semibold transition-all duration-200 shadow-lg shadow-indigo-600/25 hover:-translate-y-0.5"
            >
              Let&apos;s Work Together
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

          {/* Stats grid */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((s) => (
              <div
                key={s.label}
                className="bg-gray-900/60 border border-white/5 rounded-2xl p-6 hover:border-indigo-500/30 transition-colors duration-300"
              >
                <p className="text-4xl font-extrabold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent mb-1">
                  {s.value}
                </p>
                <p className="text-sm text-gray-400">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

