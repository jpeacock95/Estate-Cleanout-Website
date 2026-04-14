type Faq = { q: string; a: string };

export function PageFaq({ faqs, heading = "Frequently Asked Questions" }: { faqs: Faq[]; heading?: string }) {
  if (!faqs.length) return null;
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="mx-auto max-w-[820px] px-5">
        <h2 className="mb-10 text-center uppercase text-[#1d1d1d] font-[family-name:var(--font-heading)] text-[32px] lg:text-[44px]">
          {heading}
        </h2>
        <div className="space-y-5">
          {faqs.map((f) => (
            <details
              key={f.q}
              className="group rounded-xl border-2 border-[#1d1d1d]/10 bg-[#fafafa] p-5 transition-all open:border-[#ed6623]"
            >
              <summary className="cursor-pointer list-none font-[family-name:var(--font-heading)] text-[18px] uppercase text-[#1d1d1d] lg:text-[20px]">
                {f.q}
              </summary>
              <p className="mt-3 text-[15px] leading-[1.65] text-[#1d1d1d]/80 font-[family-name:var(--font-body)]">
                {f.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
