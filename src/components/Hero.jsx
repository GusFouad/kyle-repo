export default function Hero() {
  return (
    <section className="bg-blue-700 py-28 px-6 text-center">
      <div className="max-w-4xl mx-auto">
        <span className="inline-block bg-yellow-400 text-blue-900 text-sm font-bold px-4 py-1 rounded-full mb-6 tracking-widest uppercase">
          Welcome to BlueSpark
        </span>
        <h1 className="text-5xl md:text-7xl font-black text-white leading-tight mb-6">
          Build Something <span className="text-yellow-400">Brilliant</span>
        </h1>
        <p className="text-blue-200 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          BlueSpark is the all-in-one platform that helps teams move fast, stay
          aligned, and ship products their users love.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-yellow-400 text-blue-900 font-bold px-8 py-4 rounded-full text-lg hover:bg-yellow-300 transition-colors duration-200 shadow-xl">
            Start for Free
          </button>
          <button className="border-2 border-white text-white font-bold px-8 py-4 rounded-full text-lg hover:bg-white hover:text-blue-700 transition-colors duration-200">
            See How It Works
          </button>
        </div>
      </div>
    </section>
  )
}

