const skillGroups = [
  {
    category: "Front-End",
    color: "from-indigo-500 to-blue-500",
    skills: [
      { name: "React / Next.js", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "Tailwind CSS", level: 92 },
      { name: "Framer Motion", level: 78 },
    ],
  },
  {
    category: "Back-End",
    color: "from-purple-500 to-indigo-500",
    skills: [
      { name: "Node.js / Express", level: 88 },
      { name: "Python / FastAPI", level: 82 },
      { name: "PostgreSQL", level: 85 },
      { name: "Redis", level: 72 },
    ],
  },
  {
    category: "DevOps & Tools",
    color: "from-pink-500 to-purple-500",
    skills: [
      { name: "Docker / Kubernetes", level: 75 },
      { name: "AWS / Vercel", level: 80 },
      { name: "Git / CI-CD", level: 90 },
      { name: "Figma", level: 70 },
    ],
  },
];

const techBadges = [
  "React", "Next.js", "TypeScript", "Node.js", "Python", "PostgreSQL",
  "Redis", "Docker", "AWS", "Tailwind", "GraphQL", "Prisma",
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-gray-900/30 relative">
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-6">
        {/* Section label */}
        <div className="flex items-center gap-3 mb-4">
          <span className="w-8 h-px bg-indigo-400" />
          <span className="text-indigo-400 text-sm font-semibold uppercase tracking-widest">Skills</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
          My{" "}
          <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
            Tech Stack
          </span>
        </h2>
        <p className="text-gray-400 max-w-xl mb-14">
          A curated set of tools and technologies I use to bring ideas to life — from pixel-perfect UIs to robust back-end systems.
        </p>

        {/* Skill bars */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {skillGroups.map((group) => (
            <div
              key={group.category}
              className="bg-gray-900/60 border border-white/5 rounded-2xl p-6 hover:border-indigo-500/20 transition-colors duration-300"
            >
              <h3 className={`text-lg font-bold mb-6 bg-gradient-to-r ${group.color} bg-clip-text text-transparent`}>
                {group.category}
              </h3>
              <div className="space-y-5">
                {group.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between text-sm mb-1.5">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="h-1.5 bg-gray-800 rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full bg-gradient-to-r ${group.color}`}
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tech badge cloud */}
        <div className="flex flex-wrap gap-3 justify-center">
          {techBadges.map((tech) => (
            <span
              key={tech}
              className="px-4 py-2 rounded-full bg-gray-900 border border-white/5 text-sm text-gray-300 hover:border-indigo-500/40 hover:text-white hover:bg-indigo-500/10 transition-all duration-200 cursor-default"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

