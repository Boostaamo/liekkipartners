import Link from "next/link";
import { Flame, ChevronRight } from "lucide-react";
import { site } from "@/lib/site";

export default function Header() {
  return (
    <header className="site-header">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="group flex items-center gap-2 no-underline" aria-label={`${site.name}, etusivu`}>
          <Flame className="h-8 w-8 text-orange-500 transition-transform duration-300 group-hover:scale-110" strokeWidth={2.5} aria-hidden="true" />
          <span className="text-xl font-bold tracking-widest text-white">
            LIEKKI <span className="text-orange-500">PARTNERS</span>
          </span>
        </Link>
        <a
          href="/#yhteydenotto"
          className="hidden items-center gap-2 rounded-full border border-neutral-700 bg-neutral-900 px-5 py-2.5 text-sm font-medium text-white no-underline transition-all duration-300 hover:border-orange-500/50 hover:bg-neutral-800 md:flex"
        >
          Jätä yhteydenotto
          <ChevronRight className="h-4 w-4 text-orange-500" aria-hidden="true" />
        </a>
      </div>
    </header>
  );
}
