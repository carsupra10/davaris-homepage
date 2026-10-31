import type { ReactNode } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { useReveal, useScrollProgress, useStickyProgress } from "@/hooks/use-scroll";
import hero from "@/assets/hero.jpg";
import plain from "@/assets/plain.jpg";
import fancy from "@/assets/fancy.jpg";
import prints from "@/assets/prints.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Davaris — Fashion textiles that inspire" },
      { name: "description", content: "Family-owned textile company since 1980: plain, fancy and printed fabrics designed in Greece." },
      { property: "og:title", content: "Davaris — Fashion textiles that inspire" },
      { property: "og:description", content: "Plain, fancy and printed fabrics for the women's fashion industry." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const collections = [
  { name: "Plain Collection", text: "Premium fabrics crafted for elegance, versatility, and superior quality.", img: plain },
  { name: "Fancy Collection", text: "Bold and luxurious fancy fabrics — lace, jacquards, metallics, and more.", img: fancy },
  { name: "Prints Collection", text: "Vibrant prints, always on trend, designed and printed in Greece.", img: prints },
];
const stats = [
  ["35K", "Prints in our archive"],
  ["100", "Years of textile heritage"],
  ["25", "Countries served"],
  ["2K", "Customers worldwide"],
  ["1.5K", "New items per season"],
];
const events = [
  ["January 12 — 13 2027 • London, UK", "London Textile Fair | Spring-Summer 2027/28", fancy],
  ["January 12 — 13 2027 • Paris, France", "Preco Paris | Spring-Summer 2027/28", prints],
  ["January 20 — 22 2027 • Munich, Germany", "Munich Fabric Start | Spring-Summer 2027/28", plain],
  ["February 2 — 4 2027 • Milano, Italy", "Milano Unica | Spring-Summer 2027/28", hero],
] as const;

function Label({ children }: { children: string }) {
  return <p className="mb-6 text-xs uppercase tracking-[0.25em] text-muted-foreground">{children}</p>;
}
function More() {
  return (
    <a href="#" className="mt-8 inline-flex items-center gap-2 border-b border-foreground pb-1 text-sm uppercase tracking-widest">
      Read more <ArrowUpRight className="h-4 w-4" />
    </a>
  );
}

const intro = "We are a family-owned company built on heritage, excellence, and a human-centric approach.";
function IntroText() {
  const [ref, p] = useScrollProgress<HTMLHeadingElement>();
  const words = intro.split(" ");
  const lit = Math.floor(Math.min(1, p * 1.8) * words.length);
  return (
    <h2 ref={ref} className="max-w-5xl text-3xl leading-tight md:text-6xl">
      {words.map((w, i) => (
        <span key={i} className={`transition-colors duration-300 ${i < lit ? "text-foreground" : "text-muted-foreground/40"}`}>{w} </span>
      ))}
    </h2>
  );
}

function ExpandingImage() {
  const [ref, p] = useStickyProgress<HTMLDivElement>();
  const e = Math.min(1, p * 1.25);
  return (
    <div ref={ref} className="relative h-[250vh]">
      <div className="sticky top-0 flex h-screen flex-col items-center justify-center overflow-hidden">
        <h2 className="absolute top-[18vh] z-0 text-5xl uppercase md:text-8xl" style={{ opacity: 1 - e }}>Collections</h2>
        <img src={fancy} alt="" className="relative z-10 rounded-md object-cover"
          style={{ width: `${25 + e * 75}vw`, height: `${22 + e * 78}vh`, borderRadius: `${(1 - e) * 8}px` }} />
      </div>
    </div>
  );
}

const statColors = ["bg-card", "bg-peach-1", "bg-peach-2", "bg-peach-3", "bg-primary"];
function StackedStats() {
  const [ref, p] = useStickyProgress<HTMLDivElement>();
  return (
    <div ref={ref} className="relative h-[300vh] bg-muted">
      <div className="sticky top-0 grid h-screen items-center gap-12 px-6 md:grid-cols-2 md:px-12">
        <div>
          <Label>Who we are</Label>
          <h2 className="text-3xl leading-tight md:text-5xl">A leading creative partner of the women's fashion industry, we stand beside our clients to help them succeed.</h2>
          <More />
        </div>
        <div className="relative h-[70vh]">
          {stats.map(([n, l], i) => {
            const t = Math.min(1, Math.max(0, p * stats.length - i + 0.6));
            return (
              <div key={l} className={`absolute inset-x-0 rounded-md p-6 shadow-sm ${statColors[i]}`}
                style={{ top: `${i * 9}vh`, opacity: t, transform: `translateY(${(1 - t) * 60}px)` }}>
                <p className="text-xs uppercase tracking-widest opacity-70">{l}</p>
                <p className="mt-8 text-5xl md:text-6xl">{n}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function Parallax({ src, children }: { src: string; children: ReactNode }) {
  const [ref, p] = useScrollProgress<HTMLElement>();
  return (
    <section ref={ref} className="relative h-screen overflow-hidden bg-ink">
      <img src={src} alt="" loading="lazy" className="absolute inset-0 h-[130%] w-full object-cover opacity-70" style={{ transform: `translateY(${-p * 25}%) scale(${1.1 - p * 0.1})` }} />
      <div className="relative z-10 flex h-full items-center justify-center px-6 text-ink-foreground">{children}</div>
    </section>
  );
}

function Index() {
  useReveal();
  return (
    <main className="overflow-x-clip bg-background text-foreground">
      <section className="relative h-screen min-h-[600px] overflow-hidden bg-rose">
        <img src={hero} alt="Draped printed silk" width={1920} height={1088} className="absolute inset-0 h-full w-full animate-hero-zoom object-cover" />
        <header className="fixed inset-x-0 top-0 z-50 flex items-center justify-between px-6 py-4 text-ink-foreground mix-blend-difference md:px-12">
          <button className="flex items-center gap-3 text-sm uppercase tracking-wide">
            <span className="block h-px w-12 bg-ink-foreground" /> Menu
          </button>
          <span className="text-3xl tracking-[0.15em]">DAVARIS</span>
          <span className="w-32" />
        </header>
        <a href="#" className="fixed right-6 top-3 z-50 inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2.5 text-sm uppercase text-primary-foreground md:right-12">
          E-Showroom <ArrowUpRight className="h-4 w-4" />
        </a>
        <div className="absolute bottom-16 left-6 z-10 text-ink-foreground md:left-12">
          <p className="mb-4 animate-rise text-xs uppercase tracking-[0.3em]">Est. 1980 · Textile excellence</p>
          <h1 className="animate-rise text-6xl font-normal leading-[0.95] tracking-tight [animation-delay:0.3s] md:text-9xl">Fashion textiles<br />that inspire</h1>
        </div>
      </section>

      <section className="px-6 py-40 md:px-12">
        <IntroText />
      </section>

      <ExpandingImage />

      <section className="px-6 py-28 md:px-12">
        <div className="grid gap-6 md:grid-cols-3">
          {collections.map((c, i) => (
            <a key={c.name} href="#" className="reveal group block" style={{ transitionDelay: `${i * 150}ms` }}>
              <div className="overflow-hidden rounded-md">
                <img src={c.img} alt={c.name} loading="lazy" width={768} height={1024} className="aspect-[3/4] w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <h3 className="mt-5 text-2xl">{c.name}</h3>
              <p className="mt-2 text-muted-foreground">{c.text}</p>
              <span className="mt-4 inline-flex items-center gap-2 text-sm uppercase tracking-widest">View category <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" /></span>
            </a>
          ))}
        </div>
      </section>

      <StackedStats />

      <Parallax src={hero}>
        <div className="reveal max-w-3xl">
          <Label>Production</Label>
          <h2 className="text-3xl leading-tight md:text-5xl">Experience cutting-edge digital printing ― designed, developed, and produced in Greece with precision and style.</h2>
          <More />
        </div>
      </Parallax>

      <section className="px-6 py-28 md:px-12">
        <div className="reveal max-w-3xl">
          <Label>Sustainability</Label>
          <h2 className="text-3xl leading-tight md:text-4xl">We are committed to creating high-quality textiles responsibly, with care for people and nature.</h2>
          <More />
        </div>
        <div className="mt-16 grid gap-8 md:grid-cols-[1.4fr_1fr]">
          <img src={plain} alt="Sustainable fabric" loading="lazy" width={768} height={1024} className="reveal aspect-[4/5] w-full rounded-md object-cover" />
          <div className="reveal [transition-delay:200ms]">
            <img src={prints} alt="Fabric rolls" loading="lazy" width={768} height={1024} className="aspect-square w-full rounded-md object-cover" />
            <p className="mt-6 border-t border-foreground/20 pt-4">We try to reduce our emission levels by <span className="text-primary">20%</span>.</p>
            <p className="mt-4 border-t border-foreground/20 pt-4">We try to reduce water waste by <span className="text-primary">30%</span>.</p>
          </div>
        </div>
      </section>

      <section className="py-28">
        <div className="reveal px-6 md:px-12">
          <Label>Upcoming events</Label>
          <h2 className="mb-14 max-w-4xl text-3xl leading-tight md:text-4xl">Join us around Europe as we showcase our latest collections at top industry events.</h2>
        </div>
        <div className="flex snap-x gap-6 overflow-x-auto px-6 pb-4 md:px-12">
          {events.map(([date, title, img], i) => (
            <article key={title} className="reveal group w-[80vw] shrink-0 snap-start sm:w-[40vw] lg:w-[30vw]" style={{ transitionDelay: `${i * 120}ms` }}>
              <div className="overflow-hidden rounded-md">
                <img src={img} alt={title} loading="lazy" className="aspect-[16/10] w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <p className="mt-4 text-xs uppercase tracking-widest text-muted-foreground">{date}</p>
              <h3 className="mt-2 text-lg">{title}</h3>
            </article>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden bg-rose px-6 py-24 md:px-12">
        <img src={hero} alt="" loading="lazy" className="absolute inset-0 h-full w-full object-cover opacity-60" />
        <a href="#" className="reveal group relative flex items-center justify-between rounded-md bg-background p-8">
          <span className="text-3xl md:text-5xl">Let's start a new<br />collaboration.</span>
          <span className="rounded-md bg-primary p-4 text-primary-foreground transition-transform group-hover:rotate-45"><ArrowUpRight className="h-6 w-6" /></span>
        </a>
      </section>

      <footer className="bg-ink px-6 py-16 text-ink-foreground md:px-12">
        <p className="text-6xl tracking-[0.15em] md:text-9xl">DAVARIS</p>
        <div className="mt-10 flex flex-wrap justify-between gap-4 text-sm opacity-70">
          <span>© 2026 Davaris. Textile excellence since 1980.</span>
          <span>Athens, Greece</span>
        </div>
      </footer>
    </main>
  );
}
