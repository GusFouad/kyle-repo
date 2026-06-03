const steps = [
  {
    step: "01",
    title: "Create your workspace",
    description:
      "Sign up in seconds and set up your workspace with a name, logo, and team members.",
  },
  {
    step: "02",
    title: "Connect your tools",
    description:
      "Link Slack, GitHub, Figma, and 100+ other integrations in one click.",
  },
  {
    step: "03",
    title: "Ship with confidence",
    description:
      "Use built-in review flows, automated tests, and one-click deploys to go live fast.",
  },
];

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-xs font-semibold tracking-widest text-indigo-600 uppercase mb-3">
            How it works
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Up and running in minutes
          </h2>
          <p className="text-lg text-gray-500">
            No lengthy onboarding. No confusing setup. Just three simple steps
            to get your team moving.
          </p>
        </div>

        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Connector line (desktop only) */}
          <div className="hidden md:block absolute top-8 left-[calc(16.67%+1rem)] right-[calc(16.67%+1rem)] h-px bg-indigo-100" />

          {steps.map((s) => (
            <div key={s.step} className="flex flex-col items-center text-center">
              <div className="relative z-10 w-16 h-16 rounded-full bg-indigo-600 text-white flex items-center justify-center text-xl font-bold shadow-lg mb-6">
                {s.step}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {s.title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed max-w-xs">
                {s.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

