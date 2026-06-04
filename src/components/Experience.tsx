const experiences = [
  {
    role: "Senior Full-Stack Engineer",
    company: "Acme Corp",
    period: "2022 – Present",
    description:
      "Led a team of 4 engineers building a real-time analytics dashboard used by 50k+ users. Migrated legacy REST API to GraphQL, reducing payload sizes by 40%.",
    tags: ["Next.js", "GraphQL", "PostgreSQL", "AWS"],
    current: true,
  },
  {
    role: "Full-Stack Developer",
    company: "Bright Labs",
    period: "2020 – 2022",
    description:
      "Built and maintained three SaaS products from scratch. Owned the entire front-end architecture and contributed heavily to the Node.js back-end services.",
    tags: ["React", "Node.js", "MongoDB", "Docker"],
    current: false,
  },
  {
    role: "Front-End Developer",
    company: "Pixel Studio",
    period: "2019 – 2020",
    description:
      "Developed pixel-perfect marketing sites and e-commerce storefronts for 10+ clients. Improved Lighthouse performance scores from ~50 to 95+ across all projects.",
    tags: ["React", "TypeScript", "Tailwind", "Shopify"],
    current: false,
  },
  {
    role: "Junior Developer",
    company: "DevHouse",
    period: "2018 – 2019",
    description:
      "Started my professional journey building internal tools and dashboards. Gained strong fundamentals in JavaScript, REST APIs, and agile workflows.",
    tags: ["JavaScript", "Vue.js", "Express", "MySQL"],
    current: false,
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-6">
        {/* Section label */}
        <div className="flex items-center gap-3 mb-4">
          <span className="w-8 h-px bg-indigo-400" />
          <span className="text-indigo-400 text-sm font-semibold uppercase tracking-widest">Experience</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
          Where I&apos;ve{" "}
          <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
            Worked
          </span>
        </h2>
        <p className="text-gray-400 max-w-xl mb-14">
          A timeline of my professional journey — each role shaping the developer I am today.
        </p>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500/50 via-purple-500/30 to-transparent -translate-x-1/2" />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <div
                key={exp.company}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Dot */}
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-indigo-500 border-2 border-gray-950 shadow-lg shadow-indigo-500/50 z-10 mt-6" />

                {/* Spacer for opposite side */}
                <div className="hidden md:block md:w-1/2" />

                {/* Card */}
                <div className="ml-12 md:ml-0 md:w-1/2 md:px-8">
                  <div
                    className={`bg-gray-900/60 border rounded-2xl p-6 hover:border-indigo-500/30 transition-all duration-300 hover:-translate-y-1 ${
                      exp.current ? "border-indigo-500/30" : "border-white/5"
                    }`}
                  >
                    {exp.current && (
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-medium mb-3">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                        Current
                      </span>
                    )}
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <div>
                        <h3 className="text-lg font-bold text-white">{exp.role}</h3>
                        <p className="text-indigo-400 font-medium">{exp.company}</p>
                      </div>
                      <span className="text-sm text-gray-500 whitespace-nowrap">{exp.period}</span>
                    </div>
                    <p className="text-gray-400 text-sm leading-relaxed mb-4">{exp.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-0.5 rounded-full bg-gray-800 border border-white/5 text-xs text-gray-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

