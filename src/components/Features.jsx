const features = [
  {
    icon: '⚡',
    title: 'Lightning Fast',
    description:
      'Optimised for speed at every layer. Your users get instant responses and buttery-smooth interactions.',
  },
  {
    icon: '🔒',
    title: 'Secure by Default',
    description:
      'Enterprise-grade security baked in from day one. Sleep easy knowing your data is always protected.',
  },
  {
    icon: '📈',
    title: 'Built to Scale',
    description:
      'From startup to enterprise, BlueSpark grows with you — no painful migrations, ever.',
  },
  {
    icon: '🎨',
    title: 'Fully Customisable',
    description:
      'Tailor every pixel to match your brand. Our design system makes it effortless.',
  },
  {
    icon: '🤝',
    title: 'Team Collaboration',
    description:
      'Real-time collaboration tools keep your whole team in sync, wherever they are.',
  },
  {
    icon: '📊',
    title: 'Deep Analytics',
    description:
      'Understand your users with powerful, actionable insights right out of the box.',
  },
]

export default function Features() {
  return (
    <section className="bg-blue-800 py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Everything You <span className="text-yellow-400">Need</span>
          </h2>
          <p className="text-blue-300 text-lg max-w-xl mx-auto">
            A complete toolkit to design, build, and grow your product.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((f) => (
            <div
              key={f.title}
              className="bg-blue-700 rounded-2xl p-8 hover:bg-blue-600 transition-colors duration-200 shadow-lg"
            >
              <div className="text-4xl mb-4">{f.icon}</div>
              <h3 className="text-xl font-bold text-yellow-400 mb-2">{f.title}</h3>
              <p className="text-blue-200 leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

