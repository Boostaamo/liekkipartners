import { ArrowRight, ShieldCheck, Clock, UserCheck, Factory, LineChart, Flame, CheckCircle2, CalendarCheck } from "lucide-react";
import data from "@/content/landing.json";
import LeadForm from "@/components/LeadForm";

const icons = { clock: Clock, user: UserCheck, factory: Factory, chart: LineChart } as const;
const BOOKING_URL = process.env.NEXT_PUBLIC_BOOKING_URL || "";

const primary =
  "inline-flex items-center justify-center gap-2 rounded-full bg-orange-500 px-8 py-4 text-lg font-semibold text-white shadow-[0_0_20px_rgba(249,115,22,0.3)] transition-all duration-300 hover:bg-orange-600 hover:shadow-[0_0_30px_rgba(249,115,22,0.5)]";
const secondary =
  "inline-flex items-center justify-center gap-2 rounded-full border border-neutral-700 bg-neutral-900 px-8 py-4 text-lg font-semibold text-white transition-all duration-300 hover:border-orange-500/50 hover:bg-neutral-800";

function Actions() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
      <a href="#yhteydenotto" className={primary}>
        {data.cta.contact}
        <ArrowRight className="h-5 w-5" aria-hidden="true" />
      </a>
      {BOOKING_URL && (
        <a href={BOOKING_URL} className={secondary} rel="noopener">
          <CalendarCheck className="h-5 w-5 text-orange-500" aria-hidden="true" />
          {data.cta.book}
        </a>
      )}
    </div>
  );
}

export default function Landing() {
  const { hero, route, audience, process, finalCta } = data;
  return (
    <div className="selection:bg-orange-500/30">
      <section className="relative overflow-hidden px-4 pb-20 pt-32 md:pb-32 md:pt-48">
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[800px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-orange-500/10 opacity-50 blur-[120px]" />
        <div className="relative mx-auto max-w-5xl text-center">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-orange-500/20 bg-orange-500/10 px-3 py-1 text-sm font-medium text-orange-500">
            <span className="h-2 w-2 animate-pulse rounded-full bg-orange-500" />
            {hero.badge}
          </div>
          <h1 className="mb-8 text-4xl font-extrabold leading-tight tracking-tight text-white md:text-6xl lg:text-7xl">
            {hero.titleBefore} <br className="hidden md:block" />
            <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">{hero.titleAccent}</span>{" "}
            {hero.titleAfter}
          </h1>
          <p className="mx-auto mb-10 max-w-3xl text-lg leading-relaxed text-neutral-400 md:text-xl">{hero.lead}</p>
          <Actions />
        </div>
      </section>

      <section className="border-y border-neutral-900 bg-neutral-950 px-4 py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-16 lg:grid-cols-2">
          <div>
            <h2 className="mb-6 text-3xl font-bold text-white md:text-4xl">{route.title}</h2>
            <div className="mb-8 h-1 w-20 rounded-full bg-gradient-to-r from-orange-500 to-orange-600" />
            <p className="mb-2 text-lg leading-relaxed text-neutral-400">{route.p1}</p>
            <p className="mb-6 text-sm text-neutral-500">{route.source}</p>
            <p className="text-lg leading-relaxed text-neutral-400">{route.p2}</p>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-transparent blur-3xl" />
            <div className="relative flex min-h-[400px] flex-col justify-center overflow-hidden rounded-3xl border border-neutral-800 bg-neutral-900 p-8 md:p-12">
              <ShieldCheck className="mb-8 h-24 w-24 text-orange-500/80" strokeWidth={1.5} aria-hidden="true" />
              <h3 className="mb-4 text-2xl font-semibold text-white">{route.cardTitle}</h3>
              <ul className="space-y-4">
                {route.cardItems.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-neutral-300">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-orange-500" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-black px-4 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">{audience.title}</h2>
            <p className="mx-auto max-w-2xl text-neutral-400">{audience.lead}</p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {audience.items.map((item) => {
              const Icon = icons[item.icon as keyof typeof icons];
              return (
                <div key={item.title} className="rounded-2xl border border-neutral-800 bg-neutral-900/50 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-orange-500/30 hover:bg-neutral-900">
                  <Icon className="mb-6 h-10 w-10 text-orange-500" strokeWidth={1.5} aria-hidden="true" />
                  <h3 className="mb-3 text-xl font-bold text-white">{item.title}</h3>
                  <p className="text-sm text-neutral-400">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative border-t border-neutral-900 bg-neutral-950 px-4 py-24">
        <div className="relative mx-auto max-w-7xl">
          <div className="mb-20 text-center">
            <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">{process.title}</h2>
            <p className="text-neutral-400">{process.lead}</p>
          </div>
          <ol className="grid list-none gap-8 p-0 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {process.steps.map((step, i) => (
              <li key={step.title} className="group flex flex-col rounded-2xl border border-neutral-800 bg-black p-8 transition-colors hover:border-orange-500/50">
                <div className="mb-6 text-5xl font-black text-neutral-700 transition-colors group-hover:text-orange-500/40" aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="mb-3 text-xl font-bold text-white">{step.title}</h3>
                <p className="mt-auto text-sm leading-relaxed text-neutral-400">{step.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="yhteydenotto" className="relative overflow-hidden border-t border-neutral-900 bg-black px-4 pb-20 pt-24">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-orange-500/5 to-transparent" />
        <div className="relative mx-auto max-w-4xl text-center">
          <Flame className="mx-auto mb-8 h-12 w-12 text-orange-500 opacity-80" strokeWidth={1.5} aria-hidden="true" />
          <h2 className="mb-6 text-3xl font-bold text-white md:text-4xl">{finalCta.title}</h2>
          <p className="mx-auto mb-6 max-w-2xl text-lg leading-relaxed text-neutral-400">{finalCta.p1}</p>
          <p className="mx-auto mb-10 max-w-2xl text-base italic text-neutral-400">{finalCta.p2}</p>
          {BOOKING_URL && (
            <div className="mb-10">
              <a href={BOOKING_URL} className={primary} rel="noopener">
                <CalendarCheck className="h-5 w-5" aria-hidden="true" />
                {data.cta.book}
              </a>
            </div>
          )}
          <div className="mx-auto max-w-xl text-left">
            <LeadForm source="etusivu" />
          </div>
        </div>
      </section>
    </div>
  );
}
