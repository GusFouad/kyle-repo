"use client";

import { useState } from "react";
import { EyeIcon, EyeSlashIcon } from "@/components/Icons";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Please fill in all fields.");
      return;
    }

    setLoading(true);
    // Simulate an API call
    await new Promise((r) => setTimeout(r, 1500));
    setLoading(false);
    // Demo: show error for wrong credentials
    if (email !== "demo@myapp.com" || password !== "password") {
      setError("Invalid email or password. Try demo@myapp.com / password");
    } else {
      alert("Welcome back! 🎉");
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* ── Left panel (branding) ── */}
      <div className="hidden lg:flex lg:w-1/2 bg-hero-gradient flex-col justify-between p-12 relative overflow-hidden">
        {/* Decorative circles */}
        <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-brand-blue-700 opacity-40" />
        <div className="absolute -bottom-32 -right-16 w-[28rem] h-[28rem] rounded-full bg-brand-blue-800 opacity-50" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-brand-yellow-400 opacity-10 blur-3xl" />

        {/* Logo */}
        <div className="relative z-10 flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-brand-yellow-400 flex items-center justify-center shadow-lg">
            <span className="text-brand-blue-900 font-extrabold text-lg leading-none">M</span>
          </div>
          <span className="text-white font-bold text-xl tracking-wide">MyApp</span>
        </div>

        {/* Hero copy */}
        <div className="relative z-10 space-y-6">
          <h1 className="text-white text-4xl xl:text-5xl font-extrabold leading-tight">
            Welcome <br />
            <span className="text-brand-yellow-400">back.</span>
          </h1>
          <p className="text-brand-blue-200 text-lg max-w-sm leading-relaxed">
            Sign in to access your dashboard, manage your projects, and stay
            connected with your team.
          </p>

          {/* Feature pills */}
          <div className="flex flex-wrap gap-3 pt-2">
            {["🔒 Secure", "⚡ Fast", "🌍 Global"].map((f) => (
              <span
                key={f}
                className="px-4 py-1.5 rounded-full bg-white/10 text-white text-sm font-medium backdrop-blur-sm border border-white/20"
              >
                {f}
              </span>
            ))}
          </div>
        </div>

        {/* Testimonial */}
        <div className="relative z-10 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 space-y-3">
          <p className="text-white/90 text-sm leading-relaxed italic">
            "MyApp transformed how our team collaborates. The interface is
            intuitive and the performance is outstanding."
          </p>
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-brand-yellow-400 flex items-center justify-center text-brand-blue-900 font-bold text-sm">
              SJ
            </div>
            <div>
              <p className="text-white text-sm font-semibold">Sarah Johnson</p>
              <p className="text-brand-blue-300 text-xs">Product Manager, Acme Corp</p>
            </div>
          </div>
        </div>
      </div>

      {/* ── Right panel (form) ── */}
      <div className="w-full lg:w-1/2 flex items-center justify-center bg-white p-6 sm:p-12">
        <div className="w-full max-w-md space-y-8">
          {/* Mobile logo */}
          <div className="flex lg:hidden items-center gap-3 mb-2">
            <div className="w-9 h-9 rounded-xl bg-brand-blue-700 flex items-center justify-center shadow">
              <span className="text-brand-yellow-400 font-extrabold text-base leading-none">M</span>
            </div>
            <span className="text-brand-blue-900 font-bold text-xl tracking-wide">MyApp</span>
          </div>

          {/* Heading */}
          <div className="space-y-1">
            <h2 className="text-3xl font-extrabold text-brand-blue-900">Sign in</h2>
            <p className="text-gray-500 text-sm">
              Don&apos;t have an account?{" "}
              <a href="#" className="text-brand-blue-600 font-semibold hover:underline">
                Create one free
              </a>
            </p>
          </div>

          {/* Social buttons */}
          <div className="grid grid-cols-2 gap-3">
            <SocialButton icon="G" label="Google" />
            <SocialButton icon="in" label="LinkedIn" />
          </div>

          {/* Divider */}
          <div className="flex items-center gap-3">
            <div className="flex-1 h-px bg-gray-200" />
            <span className="text-xs text-gray-400 font-medium">or continue with email</span>
            <div className="flex-1 h-px bg-gray-200" />
          </div>

          {/* Error banner */}
          {error && (
            <div className="flex items-start gap-3 bg-red-50 border border-red-200 text-red-700 rounded-xl px-4 py-3 text-sm">
              <span className="mt-0.5">⚠️</span>
              <span>{error}</span>
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5" noValidate>
            {/* Email */}
            <div className="space-y-1.5">
              <label htmlFor="email" className="block text-sm font-semibold text-brand-blue-900">
                Email address
              </label>
              <input
                id="email"
                type="email"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-900 placeholder-gray-400 text-sm
                           focus:outline-none focus:ring-2 focus:ring-brand-blue-500 focus:border-transparent
                           transition duration-150"
              />
            </div>

            {/* Password */}
            <div className="space-y-1.5">
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-semibold text-brand-blue-900">
                  Password
                </label>
                <a href="#" className="text-xs text-brand-blue-600 font-medium hover:underline">
                  Forgot password?
                </a>
              </div>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="current-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full px-4 py-3 pr-12 rounded-xl border border-gray-200 bg-gray-50 text-gray-900 placeholder-gray-400 text-sm
                             focus:outline-none focus:ring-2 focus:ring-brand-blue-500 focus:border-transparent
                             transition duration-150"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-brand-blue-600 transition"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? <EyeSlashIcon /> : <EyeIcon />}
                </button>
              </div>
            </div>

            {/* Remember me */}
            <div className="flex items-center gap-2.5">
              <button
                type="button"
                role="checkbox"
                aria-checked={rememberMe}
                onClick={() => setRememberMe(!rememberMe)}
                className={`w-5 h-5 rounded-md border-2 flex items-center justify-center transition-colors duration-150 flex-shrink-0
                  ${rememberMe
                    ? "bg-brand-blue-600 border-brand-blue-600"
                    : "bg-white border-gray-300 hover:border-brand-blue-400"
                  }`}
              >
                {rememberMe && (
                  <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 12 12" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2 6l3 3 5-5" />
                  </svg>
                )}
              </button>
              <span className="text-sm text-gray-600 select-none cursor-pointer" onClick={() => setRememberMe(!rememberMe)}>
                Remember me for 30 days
              </span>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3.5 rounded-xl bg-brand-blue-700 hover:bg-brand-blue-800 active:bg-brand-blue-900
                         text-white font-bold text-sm tracking-wide shadow-md
                         focus:outline-none focus:ring-2 focus:ring-brand-blue-500 focus:ring-offset-2
                         transition-all duration-150 disabled:opacity-70 disabled:cursor-not-allowed
                         flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <svg className="animate-spin w-4 h-4 text-white" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                  </svg>
                  Signing in…
                </>
              ) : (
                "Sign in"
              )}
            </button>
          </form>

          {/* Demo hint */}
          <div className="flex items-center gap-2 bg-brand-yellow-50 border border-brand-yellow-200 rounded-xl px-4 py-3">
            <span className="text-brand-yellow-600 text-lg">💡</span>
            <p className="text-xs text-brand-yellow-700">
              <span className="font-semibold">Demo credentials:</span>{" "}
              demo@myapp.com &nbsp;/&nbsp; password
            </p>
          </div>

          {/* Footer */}
          <p className="text-center text-xs text-gray-400">
            By signing in, you agree to our{" "}
            <a href="#" className="text-brand-blue-600 hover:underline">Terms</a>{" "}
            and{" "}
            <a href="#" className="text-brand-blue-600 hover:underline">Privacy Policy</a>.
          </p>
        </div>
      </div>
    </div>
  );
}

/* ── Social button sub-component ── */
function SocialButton({ icon, label }: { icon: string; label: string }) {
  return (
    <button
      type="button"
      className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-gray-200 bg-white
                 hover:bg-gray-50 hover:border-gray-300 active:bg-gray-100
                 text-gray-700 text-sm font-medium shadow-sm
                 focus:outline-none focus:ring-2 focus:ring-brand-blue-400 focus:ring-offset-1
                 transition duration-150"
    >
      <span className="w-5 h-5 rounded-full bg-brand-blue-100 text-brand-blue-700 font-bold text-xs flex items-center justify-center">
        {icon}
      </span>
      {label}
    </button>
  );
}

