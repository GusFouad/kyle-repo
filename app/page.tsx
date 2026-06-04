export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-950 via-blue-900 to-blue-800 text-white font-sans">

      {/* ── Navbar ── */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-yellow-400 shadow-lg">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <span className="text-blue-900 font-extrabold text-2xl tracking-tight">
            BlueSpark
          </span>
          <ul className="hidden md:flex gap-8 text-blue-900 font-semibold text-sm uppercase tracking-wide">
            <li><a href="#features" className="hover:text-blue-600 transition-colors">Features</a></li>
            <li><a href="#how-it-works" className="hover:text-blue-600 transition-colors">How It Works</a></li>
            <li><a href="#testimonials" className="hover:text-blue-600 transition-colors">Testimonials</a></li>
            <li><a href="#pricing" className="hover:text-blue-600 transition-colors">Pricing</a></li>
          </ul>
          <a
            href="#get-started"
            className="bg-blue-900 text-yellow-400 font-bold px-5 py-2 rounded-full text-sm hover:bg-blue-700 transition-colors"
          >
            Get Started
          </a>
        </div>
      </nav>

      {/* ── Hero ── */}
      <section className="pt-40 pb-28 px-6 text-center relative overflow-hidden">
        {/* decorative blobs */}
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-blue-500 opacity-20 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-cyan-400 opacity-10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-4xl mx-auto">
          <span className="inline-block bg-yellow-400 text-blue-900 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
            Now in Public Beta
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6 drop-shadow-lg">
            Launch Faster.<br />
            <span className="text-yellow-400">Shine Brighter.</span>
          </h1>
          <p className="text-blue-200 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            BlueSpark gives your team the tools to build, ship, and scale
            beautiful products — without the headaches.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              id="get-started"
              href="#pricing"
              className="bg-yellow-400 text-blue-900 font-bold px-8 py-4 rounded-full text-lg hover:bg-yellow-300 transition-colors shadow-xl"
            >
              Start for Free
            </a>
            <a
              href="#how-it-works"
              className="border-2 border-blue-400 text-blue-200 font-semibold px-8 py-4 rounded-full text-lg hover:bg-blue-800 transition-colors"
            >
              See How It Works
            </a>
          </div>
        </div>
      </section>

      {/* ── Logos / Social Proof ── */}
      <section className="py-10 bg-blue-950/60 border-y border-blue-800">
        <p className="text-center text-blue-400 text-sm uppercase tracking-widest mb-6">
          Trusted by teams at
        </p>
        <div className="flex flex-wrap justify-center gap-10 px-6 opacity-60">
          {["Acme Corp", "NovaTech", "Pixel Labs", "CloudBase", "Synapse"].map((name) => (
            <span key={name} className="text-blue-200 font-bold text-lg tracking-wide">
              {name}
            </span>
          ))}
        </div>
      </section>

      {/* ── Features ── */}
      <section id="features" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-extrabold text-center mb-4">
            Everything You Need
          </h2>
          <p className="text-blue-300 text-center mb-16 max-w-xl mx-auto">
            From idea to production, BlueSpark has you covered at every step.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: "⚡",
                title: "Blazing Fast",
                desc: "Optimised for speed from day one. Your users will notice the difference immediately.",
              },
              {
                icon: "🔒",
                title: "Secure by Default",
                desc: "Enterprise-grade security baked in — so you can focus on building, not patching.",
              },
              {
                icon: "🎨",
                title: "Beautiful UI Kit",
                desc: "A comprehensive component library that makes every screen look polished.",
              },
              {
                icon: "📈",
                title: "Analytics Built-in",
                desc: "Real-time dashboards give you the insights you need to grow confidently.",
              },
              {
                icon: "🤝",
                title: "Team Collaboration",
                desc: "Invite your whole team and work together seamlessly in real time.",
              },
              {
                icon: "🌍",
                title: "Global CDN",
                desc: "Deploy to 200+ edge locations worldwide for ultra-low latency everywhere.",
              },
            ].map((f) => (
              <div
                key={f.title}
                className="bg-blue-800/40 border border-blue-700 rounded-2xl p-8 hover:bg-blue-700/40 transition-colors"
              >
                <div className="text-4xl mb-4">{f.icon}</div>
                <h3 className="text-xl font-bold mb-2">{f.title}</h3>
                <p className="text-blue-300 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── How It Works ── */}
      <section id="how-it-works" className="py-24 px-6 bg-blue-950/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold mb-4">How It Works</h2>
          <p className="text-blue-300 mb-16">Three simple steps to launch your next big thing.</p>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              { step: "01", title: "Sign Up", desc: "Create your free account in under 60 seconds — no credit card required." },
              { step: "02", title: "Build", desc: "Use our drag-and-drop editor and component library to craft your product." },
              { step: "03", title: "Launch", desc: "Hit publish and go live instantly on our global edge network." },
            ].map((item) => (
              <div key={item.step} className="flex flex-col items-center">
                <span className="text-yellow-400 text-6xl font-extrabold opacity-30 mb-2">{item.step}</span>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-blue-300">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section id="testimonials" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-extrabold text-center mb-4">What People Say</h2>
          <p className="text-blue-300 text-center mb-16">Don't just take our word for it.</p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote: "BlueSpark cut our time-to-launch in half. The DX is absolutely incredible.",
                name: "Sarah K.",
                role: "CTO at NovaTech",
              },
              {
                quote: "I've tried every platform out there. Nothing comes close to the polish and speed of BlueSpark.",
                name: "Marcus R.",
                role: "Founder, Pixel Labs",
              },
              {
                quote: "Our team went from prototype to production in a single weekend. Mind-blowing.",
                name: "Priya M.",
                role: "Lead Engineer, CloudBase",
              },
            ].map((t) => (
              <div
                key={t.name}
                className="bg-blue-800/40 border border-blue-700 rounded-2xl p-8"
              >
                <p className="text-blue-100 italic mb-6">"{t.quote}"</p>
                <div>
                  <p className="font-bold">{t.name}</p>
                  <p className="text-blue-400 text-sm">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Pricing ── */}
      <section id="pricing" className="py-24 px-6 bg-blue-950/50">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold mb-4">Simple Pricing</h2>
          <p className="text-blue-300 mb-16">No hidden fees. Cancel anytime.</p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { plan: "Starter", price: "$0", desc: "Perfect for side projects and experiments.", features: ["1 project", "5 GB storage", "Community support"] },
              { plan: "Pro", price: "$29", desc: "For growing teams that need more power.", features: ["Unlimited projects", "50 GB storage", "Priority support", "Analytics"], highlight: true },
              { plan: "Enterprise", price: "Custom", desc: "Tailored solutions for large organisations.", features: ["Everything in Pro", "SLA guarantee", "Dedicated manager", "SSO & SAML"] },
            ].map((p) => (
              <div
                key={p.plan}
                className={`rounded-2xl p-8 border flex flex-col ${
                  p.highlight
                    ? "bg-yellow-400 border-yellow-300 text-blue-900"
                    : "bg-blue-800/40 border-blue-700 text-white"
                }`}
              >
                <h3 className="text-2xl font-extrabold mb-1">{p.plan}</h3>
                <p className={`text-4xl font-extrabold my-4 ${p.highlight ? "text-blue-900" : "text-yellow-400"}`}>
                  {p.price}
                  {p.price !== "Custom" && <span className="text-base font-normal">/mo</span>}
                </p>
                <p className={`text-sm mb-6 ${p.highlight ? "text-blue-800" : "text-blue-300"}`}>{p.desc}</p>
                <ul className="space-y-2 mb-8 flex-1 text-left">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm">
                      <span className={p.highlight ? "text-blue-700" : "text-yellow-400"}>✓</span> {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="#"
                  className={`block text-center font-bold py-3 rounded-full transition-colors ${
                    p.highlight
                      ? "bg-blue-900 text-yellow-400 hover:bg-blue-700"
                      : "bg-yellow-400 text-blue-900 hover:bg-yellow-300"
                  }`}
                >
                  {p.price === "Custom" ? "Contact Us" : "Get Started"}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="py-24 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
            Ready to <span className="text-yellow-400">Spark</span> something great?
          </h2>
          <p className="text-blue-300 text-lg mb-10">
            Join thousands of teams already building with BlueSpark. It's free to start.
          </p>
          <a
            href="#"
            className="bg-yellow-400 text-blue-900 font-bold px-10 py-4 rounded-full text-lg hover:bg-yellow-300 transition-colors shadow-2xl"
          >
            Create Your Free Account →
          </a>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="bg-blue-950 border-t border-blue-800 py-10 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-blue-400 text-sm">
          <span className="font-bold text-white text-lg">BlueSpark</span>
          <p>© {new Date().getFullYear()} BlueSpark Inc. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Contact</a>
          </div>
        </div>
      </footer>

    </main>
  );
}

