import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
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

function Index() {
  return (
    <main className="bg-background text-foreground">
      <section className="relative h-screen min-h-[600px] overflow-hidden bg-rose">
        <img src={hero} alt="Draped printed silk" width={1920} height={1088} className="absolute inset-0 h-full w-full object-cover" />
        <header className="relative z-10 flex items-center justify-between px-6 py-4 text-ink-foreground md:px-12">
          <button className="flex items-center gap-3 text-sm uppercase tracking-wide">
            <span className="block h-px w-12 bg-ink-foreground" /> Menu
          </button>
          <span className="text-3xl tracking-[0.15em]">DAVARIS</span>
          <a href="#" className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2.5 text-sm uppercase text-primary-foreground">
            E-Showroom <ArrowUpRight className="h-4 w-4" />
          </a>
        </header>
        <div className="absolute bottom-16 left-6 z-10 text-ink-foreground md:left-12">
          <p className="mb-4 text-xs uppercase tracking-[0.3em]">Est. 1980 · Textile excellence</p>
          <h1 className="text-6xl font-normal leading-[0.95] tracking-tight md:text-9xl">Fashion textiles<br />that inspire</h1>
        </div>
      </section>

      <section className="px-6 py-28 md:px-12">
        <h2 className="max-w-5xl text-3xl leading-tight md:text-5xl">
          We are a family-owned company built on heritage, excellence, and a human-centric approach.
        </h2>
      </section>

      <section className="px-6 pb-28 md:px-12">
        <Label>Textile</Label>
        <h2 className="mb-12 text-5xl md:text-7xl">Collections</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {collections.map((c) => (
            <a key={c.name} href="#" className="group block">
              <div className="overflow-hidden rounded-md">
                <img src={c.img} alt={c.name} loading="lazy" width={768} height={1024} className="aspect-[3/4] w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <h3 className="mt-5 text-2xl">{c.name}</h3>
              <p className="mt-2 text-muted-foreground">{c.text}</p>
              <span className="mt-4 inline-flex items-center gap-2 text-sm uppercase tracking-widest">View category <ArrowUpRight className="h-4 w-4" /></span>
            </a>
          ))}
        </div>
      </section>

      <section className="bg-ink px-6 py-28 text-ink-foreground md:px-12">
        <Label>Who we are</Label>
        <h2 className="max-w-5xl text-3xl leading-tight md:text-5xl">
          A leading creative partner of the women's fashion industry, we stand beside our clients to help them succeed.
        </h2>
        <More />
        <div className="mt-20 grid grid-cols-2 gap-10 md:grid-cols-5">
          {stats.map(([n, l]) => (
            <div key={l} className="border-t border-ink-foreground/30 pt-6">
              <p className="text-5xl md:text-6xl">{n}</p>
              <p className="mt-3 text-sm opacity-70">{l}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="grid items-center gap-12 px-6 py-28 md:grid-cols-2 md:px-12">
        <div>
          <Label>Production</Label>
          <h2 className="text-3xl leading-tight md:text-4xl">Experience cutting-edge digital printing ― designed, developed, and produced in Greece with precision and style.</h2>
          <More />
        </div>
        <img src={prints} alt="Digitally printed fabric" loading="lazy" width={768} height={1024} className="aspect-[4/5] w-full rounded-md object-cover" />
      </section>

      <section className="grid items-center gap-12 bg-muted px-6 py-28 md:grid-cols-2 md:px-12">
        <img src={plain} alt="Sustainable fabric" loading="lazy" width={768} height={1024} className="aspect-[4/5] w-full rounded-md object-cover" />
        <div>
          <Label>Sustainability</Label>
          <h2 className="text-3xl leading-tight md:text-4xl">We are committed to creating high-quality textiles responsibly, with care for people and nature.</h2>
          <More />
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            <p className="border-t border-foreground/20 pt-4">We try to reduce our emission levels by <span className="text-primary">20%</span>.</p>
            <p className="border-t border-foreground/20 pt-4">We try to reduce water waste by <span className="text-primary">30%</span>.</p>
          </div>
        </div>
      </section>

      <section className="px-6 py-28 md:px-12">
        <Label>Upcoming events</Label>
        <h2 className="mb-14 max-w-4xl text-3xl leading-tight md:text-4xl">Join us around Europe as we showcase our latest collections at top industry events.</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {events.map(([date, title, img]) => (
            <article key={title}>
              <img src={img} alt={title} loading="lazy" className="aspect-[16/10] w-full rounded-md object-cover" />
              <p className="mt-4 text-xs uppercase tracking-widest text-muted-foreground">{date}</p>
              <h3 className="mt-2 text-lg">{title}</h3>
            </article>
          ))}
        </div>
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
