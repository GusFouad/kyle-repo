const projects = [
  {
    title: "Pulse Analytics",
    description:
      "A real-time analytics dashboard with live charts, user segmentation, and custom event tracking. Built for scale — handles 1M+ events per day.",
    tags: ["Next.js", "GraphQL", "PostgreSQL", "Redis"],
    emoji: "📊",
    color: "from-indigo-500/20 to-blue-500/20",
    border: "hover:border-indigo-500/40",
    link: "#",
    featured: true,
  },
  {
    title: "Shopify Booster",
    description:
      "A performance-focused Shopify theme that improved average store Lighthouse scores by 35 points. Used by 200+ merchants.",
    tags: ["React", "TypeScript", "Liquid", "Tailwind"],
    emoji: "🛒",
    color: "from-purple-500/20 to-pink-500/20",
    border: "hover:border-purple-500/40",
    link: "#",
    featured: true,
  },
  {
    title: "DevFlow CLI",
    description:
      "An open-source CLI tool that scaffolds full-stack projects with best-practice configurations in under 30 seconds.",
    tags: ["Node.js", "TypeScript", "Ink", "Oclif"],
    emoji: "⚡",
    color: "from-green-500/20 to-teal-500/20",
    border: "hover:border-green-500/40",
    link: "#",
    featured: false,
  },
  {
    title: "Notion Clone",
    description:
      "A collaborative note-taking app with real-time sync, nested pages, and rich-text editing — built as a deep-dive into CRDTs.",
    tags: ["React", "Yjs", "Hocuspocus", "Supabase"],
    emoji: "📝",
    color: "from-orange-500/20 to-yellow-500/20",
    border: "hover:border-orange-500/40",
    link: "#",
    featured: false,
  },
  {
    title: "AI Image Studio",
    description:
      "A web UI for generating, editing, and upscaling images using Stable Diffusion. Supports custom LoRA models via drag-and-drop.",
    tags: ["Next.js", "Python", "FastAPI", "Diffusers"],
    emoji: "🎨",
    color: "from-pink-500/20 to-rose-500/20",
    border: "hover:border-pink-500/40",
    link: "#",
    featured: false,
  },
  {
    title: "Finance Tracker",
    description:
      "A personal finance dashboard that aggregates bank transactions, categorises spending, and surfaces saving opportunities.",
    tags: ["React", "Plaid API", "Node.js", "Chart.js"],
    emoji: "💰",
    color: "from-cyan-500/20 to-blue-500/20",
    border: "hover:border-cyan-500/40",
    link: "#",
    featured: false,
  },
];

export default function Projects() {
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-24 bg-gray-900/30 relative">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-6">
        {/* Section label */}
        <div className="flex items-center gap-3 mb-4">
          <span className="w-8 h-px bg-indigo-400" />
          <span className="text-indigo-400 text-sm font-semibold uppercase tracking-widest">Projects</span>
        </div>
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
          Things I&apos;ve{" "}
          <span className="bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
            Built
          </span>
        </h2>
        <p className="text-gray-400 max-w-xl mb-14">
          A selection of projects I&apos;m proud of — from open-source tools to production SaaS products.
        </p>

        {/* Featured projects */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {featured.map((project) => (
            <a
              key={project.title}
              href={project.link}
              className={`group relative bg-gray-900/60 border border-white/5 ${project.border} rounded-2xl p-8 transition-all duration-300 hover:-translate-y-1 overflow-hidden`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              <div className="relative">
                <span className="text-5xl mb-4 block">{project.emoji}</span>
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h3 className="text-xl font-bold text-white">{project.title}</h3>
                  <svg className="w-5 h-5 text-gray-500 group-hover:text-white transition-colors shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed mb-5">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="px-2.5 py-0.5 rounded-full bg-gray-800 border border-white/5 text-xs text-gray-300">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Other projects */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {rest.map((project) => (
            <a
              key={project.title}
              href={project.link}
              className={`group relative bg-gray-900/60 border border-white/5 ${project.border} rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1 overflow-hidden`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              <div className="relative">
                <span className="text-3xl mb-3 block">{project.emoji}</span>
                <h3 className="text-base font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-400 text-xs leading-relaxed mb-4 line-clamp-3">{project.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.slice(0, 2).map((tag) => (
                    <span key={tag} className="px-2 py-0.5 rounded-full bg-gray-800 border border-white/5 text-xs text-gray-400">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

