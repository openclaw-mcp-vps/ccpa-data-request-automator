export default function Page() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-xs text-[#58a6ff] uppercase tracking-widest">
          CCPA Compliance
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Automate CCPA Data Requests<br />
          <span className="text-[#58a6ff]">in Minutes, Not Days</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Process deletion and export requests, generate legally compliant responses, and maintain a full audit trail — automatically. Built for California-serving businesses.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block px-8 py-3 rounded-lg bg-[#58a6ff] text-[#0d1117] font-semibold text-base hover:bg-[#79b8ff] transition-colors"
        >
          Start Automating — $18/mo
        </a>
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
          {[
            ["⚡", "Instant Processing", "Classify and respond to requests automatically"],
            ["📄", "Compliant Responses", "Legally vetted templates for deletion & export"],
            ["🔒", "Full Audit Trail", "Every action logged for regulatory review"]
          ].map(([icon, title, desc]) => (
            <div key={title as string} className="bg-[#161b22] border border-[#30363d] rounded-lg p-4 text-left">
              <div className="text-2xl mb-2">{icon}</div>
              <div className="font-semibold text-white mb-1">{title}</div>
              <div className="text-[#8b949e] text-xs">{desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-xl p-8 text-center shadow-lg">
          <div className="text-sm text-[#58a6ff] uppercase tracking-widest mb-2">Pro Plan</div>
          <div className="text-5xl font-bold text-white mb-1">$18</div>
          <div className="text-[#8b949e] text-sm mb-6">per month</div>
          <ul className="text-left space-y-3 mb-8 text-sm">
            {[
              "Unlimited CCPA request processing",
              "Auto-generated deletion & export responses",
              "Tamper-proof audit log",
              "Email delivery of responses",
              "Compliance dashboard",
              "Priority support"
            ].map(item => (
              <li key={item} className="flex items-center gap-2">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full py-3 rounded-lg bg-[#58a6ff] text-[#0d1117] font-semibold hover:bg-[#79b8ff] transition-colors"
          >
            Get Started
          </a>
          <p className="text-xs text-[#8b949e] mt-4">Cancel anytime. No contracts.</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            [
              "What is a CCPA data request?",
              "Under the California Consumer Privacy Act, California residents can request that businesses delete their personal data or provide a copy of it. Businesses must respond within 45 days."
            ],
            [
              "How does the automator work?",
              "You upload or forward incoming data requests. The system classifies the request type, generates a compliant response document, and logs every step in an immutable audit trail."
            ],
            [
              "Do I need legal expertise to use this?",
              "No. Responses are generated from legally vetted templates. We recommend a one-time review with your counsel, but day-to-day operations require no legal knowledge."
            ]
          ].map(([q, a]) => (
            <div key={q as string} className="bg-[#161b22] border border-[#30363d] rounded-lg p-5">
              <div className="font-semibold text-white mb-2">{q}</div>
              <div className="text-[#8b949e] text-sm leading-relaxed">{a}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-xs text-[#8b949e] pb-8">
        © {new Date().getFullYear()} CCPA Data Request Automator. Not legal advice.
      </footer>
    </main>
  );
}
