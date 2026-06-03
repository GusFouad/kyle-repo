const plans = [
  {
    name: "Starter",
    price: "Free",
    period: "",
    description: "Perfect for side projects and solo builders.",
    cta: "Get started",
    ctaStyle: "border border-indigo-600 text-indigo-600 hover:bg-indigo-50",
    features: [
      "Up to 3 projects",
      "1 team member",
      "5 GB storage",
      "Community support",
    ],
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$19",
    period: "/ mo",
    description: "For growing teams that need more power.",
    cta: "Start free trial",
    ctaStyle: "bg-indigo-600 text-white hover:bg-indigo-700",
    features: [
      "Unlimited projects",
      "Up to 20 team members",
      "100 GB storage",
      "Priority email support",
      "Advanced analytics",
      "Custom domain",
    ],
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    description: "Tailored solutions for large organisations.",
    cta: "Contact sales",
    ctaStyle: "border border-indigo-600 text-indigo-600 hover:bg-indigo-50",
    features: [
      "Unlimited everything",
      "SSO / SAML",
      "Dedicated SLA",
      "24 / 7 phone support",
      "Custom integrations",
      "On-prem option",
    ],
    highlighted: false,
  },
];

export default function PricingSection() {
  return (
    <section id="pricing" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-xs font-semibold tracking-widest text-indigo-600 uppercase mb-3">
            Pricing
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Simple, transparent pricing
          </h2>
          <p className="text-lg text-gray-500">
            No hidden fees. Cancel any time. Start free, upgrade when you&apos;re
            ready.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col rounded-2xl p-8 ${
                plan.highlighted
                  ? "bg-indigo-600 text-white shadow-2xl scale-105"
                  : "bg-white border border-gray-100 shadow-sm"
              }`}
            >
              {plan.highlighted && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-amber-400 text-amber-900 text-xs font-bold px-3 py-1 rounded-full">
                  Most popular
                </span>
              )}

              <div className="mb-6">
                <p
                  className={`text-sm font-semibold uppercase tracking-wide mb-1 ${
                    plan.highlighted ? "text-indigo-200" : "text-indigo-600"
                  }`}
                >
                  {plan.name}
                </p>
                <div className="flex items-end gap-1">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  {plan.period && (
                    <span
                      className={`text-sm mb-1 ${
                        plan.highlighted ? "text-indigo-200" : "text-gray-400"
                      }`}
                    >
                      {plan.period}
                    </span>
                  )}
                </div>
                <p
                  className={`text-sm mt-2 ${
                    plan.highlighted ? "text-indigo-200" : "text-gray-500"
                  }`}
                >
                  {plan.description}
                </p>
              </div>

              <ul className="flex-1 space-y-3 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      aria-hidden="true"
                    >
                      <circle
                        cx="8"
                        cy="8"
                        r="8"
                        fill={plan.highlighted ? "rgba(255,255,255,0.2)" : "#EEF2FF"}
                      />
                      <polyline
                        points="4.5 8 7 10.5 11.5 5.5"
                        stroke={plan.highlighted ? "white" : "#4F46E5"}
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span className={plan.highlighted ? "text-indigo-100" : "text-gray-600"}>
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="#"
                className={`block text-center text-sm font-semibold py-3 rounded-xl transition-colors ${plan.ctaStyle} ${
                  plan.highlighted
                    ? "!bg-white !text-indigo-600 hover:!bg-indigo-50"
                    : ""
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

