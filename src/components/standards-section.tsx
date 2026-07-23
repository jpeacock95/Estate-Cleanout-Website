import { FileText, Camera, HeartHandshake } from "lucide-react";

const standards = [
  {
    icon: FileText,
    title: "Price in Writing First",
    text: "You get one written price after the free walk-through, before any work starts. No hourly meters, no surprise fees, no upsells at the truck.",
  },
  {
    icon: Camera,
    title: "Photos at Every Step",
    text: "Out-of-state or can't be there? We send before and after photos, and set aside valuables, paperwork, and family photos for your review before anything leaves.",
  },
  {
    icon: HeartHandshake,
    title: "Donate First, Dump Last",
    text: "Usable furniture and clothing gets routed to Pittsburgh charities like Goodwill and Construction Junction. Donation receipts on request. The rest goes to licensed disposal.",
  },
];

export function StandardsSection() {
  return (
    <section id="standards" className="bg-[#f8f9fa] py-20 max-md:py-10">
      <div className="container-wide">
        <h2
          className="mb-4 text-center uppercase text-[#1d1d1d] font-[family-name:var(--font-heading)]"
          style={{ fontSize: "clamp(32px, 4vw, 48px)" }}
        >
          How We Work
        </h2>
        <p className="mx-auto mb-10 max-w-[640px] text-center text-[16px] leading-[26px] text-[#1d1d1d]/75 font-[family-name:var(--font-body)]">
          Cleanouts happen during hard weeks. Here&apos;s what you can hold us to on every job.
        </p>

        <div className="mx-auto grid max-w-[1200px] grid-cols-3 gap-8 max-lg:grid-cols-1">
          {standards.map((s) => (
            <div
              key={s.title}
              className="relative rounded-[20px] border-2 border-[#1d1d1d] bg-white p-8 shadow-[6px_6px_0_#000]"
            >
              <s.icon className="mb-4 h-10 w-10 text-[#ed6623]" strokeWidth={2} />
              <h3
                className="mb-3 uppercase text-[#1d1d1d] font-[family-name:var(--font-heading)]"
                style={{ fontSize: 22, lineHeight: 1.1, margin: "0 0 12px" }}
              >
                {s.title}
              </h3>
              <p className="m-0 text-[15px] leading-[24px] text-[#1d1d1d] font-[family-name:var(--font-body)]">
                {s.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
