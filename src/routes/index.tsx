import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState, type ReactNode } from "react";
import {
  ArrowRight,
  Mail,
  Phone,
  Palette,
  PenTool,
  Megaphone,
  Share2,
  Globe,
  FileText,
  Sparkles,
  Layout,
  Quote,
  Linkedin,
  Instagram,
  Twitter,
  Facebook,
  Check,

  Zap,
  Users,
  Lightbulb,
  Rocket,
  Clock,
  Paintbrush,
  Wallet,
  MessageCircle,
  Eye,
  MapPin,
  ChevronsDown,
  User,
  Send,
  CheckCircle,
  ArrowUp,
  Smartphone,
  ExternalLink,
  Github,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";

const portraitUrl = "/lov.img.jpeg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sharon Amondi — Digital Growth Partner" },
      {
        name: "description",
        content:
          "Portfolio of Sharon Amondi: graphic design, branding, digital marketing, and web development for startups and entrepreneurs.",
      },
      { property: "og:title", content: "Sharon Amondi — Digital Growth Partner" },
      {
        property: "og:description",
        content:
          "Graphic design, branding, digital marketing, and web development for growing brands.",
      },
      { property: "og:image", content: portraitUrl },
      { name: "twitter:image", content: portraitUrl },
    ],
  }),
  component: Index,
});

function BrandMark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      aria-hidden="true"
      className={`size-12 ${className}`}
      style={{ shapeRendering: "geometricPrecision" }}
    >
      <defs>
        <linearGradient id="bm-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="hsl(217 91% 60%)" />
          <stop offset="100%" stopColor="hsl(270 91% 65%)" />
        </linearGradient>
      </defs>
      <rect x="1" y="1" width="38" height="38" rx="10" fill="url(#bm-grad)" />
      <text
        x="50%"
        y="54%"
        textAnchor="middle"
        dominantBaseline="middle"
        fontFamily="Inter, system-ui, sans-serif"
        fontWeight="800"
        fontSize="17"
        letterSpacing="-0.5"
        fill="white"
      >
        SA
      </text>
    </svg>
  );
}

function Reveal({ children, delay = 0 }: { children: ReactNode; delay?: number }) {

  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.12 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div
      ref={ref}
      style={{
        opacity: shown ? 1 : 0,
        transform: shown ? "translateY(0)" : "translateY(24px)",
        transition: `opacity 0.8s cubic-bezier(0.16,1,0.3,1) ${delay}ms, transform 0.8s cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}

const services = [
  { icon: Palette, title: "Graphic Design", desc: "Visual systems that communicate purpose and clarity." },
  { icon: PenTool, title: "Logo Design & Branding", desc: "Memorable marks and complete brand guidelines." },
  { icon: Layout, title: "Poster & Flyer Design", desc: "High-impact print media for events and campaigns." },
  { icon: Share2, title: "Social Media Design", desc: "Cohesive feed visuals that stop the scroll." },
  { icon: Megaphone, title: "Digital Marketing", desc: "Strategies that turn attention into conversion." },
  { icon: Sparkles, title: "Social Media Promotion", desc: "Targeted growth to reach the right audience." },
  { icon: Globe, title: "Website Development", desc: "Fast, responsive sites built to grow your brand." },
];

const portfolio = [
  {
    img: "/car.png.jpeg",
    title: "Designing Brands, Driving Growth",
    tag: "Brand Profile Design",
    category: "Branding",
    problem: "Client needed a professional brand profile to attract corporate partnerships and pitch confidently.",
    solution: "Designed a bold, editorial-style profile combining strong typography, cohesive color, and clear service positioning.",
    tools: ["Adobe Illustrator", "Photoshop", "Canva"],
    result: "Secured 3 new corporate partnerships within the first month of using the new profile.",
  },
  {
    img: "/shan.png.jpeg",
    title: "Digital Marketing Agency",
    tag: "Agency Branding",
    category: "Branding",
    problem: "New agency needed a memorable visual identity to stand out in a crowded market.",
    solution: "Built a complete brand system — logo, color palette, typography, and marketing collateral rooted in strategy.",
    tools: ["Illustrator", "Photoshop", "Canva"],
    result: "Established a distinctive, trusted brand presence that attracted its first 10 retainer clients.",
  },
  {
    img: "/my graphic design.jpeg",
    title: "Creative Graphic Design",
    tag: "Graphic Design",
    category: "Branding",
    problem: "Client needed eye-catching graphic designs to elevate their brand presence.",
    solution: "Crafted visually compelling designs blending modern aesthetics with clear messaging.",
    tools: ["Photoshop", "Illustrator", "Figma"],
    result: "Delivered a standout design suite that boosted brand recognition and client engagement.",
  },
  {
    img: "/my design.jpeg",
    title: "Transform Your Startup Growth",
    tag: "Marketing Poster",
    category: "Marketing",
    problem: "Startup needed high-impact promotional visuals to launch a growth-focused campaign online.",
    solution: "Created a vibrant, conversion-driven poster series with clear CTAs optimized for social media reach.",
    tools: ["Photoshop", "Illustrator", "Figma"],
    result: "Boosted campaign engagement by 180% and doubled sign-ups in two weeks.",
  },
];

const featuredProject = {
  title: "Sharon Amondi — Digital Showcase",
  subtitle: "Personal Portfolio Website",
  description:
    "A modern, responsive portfolio website built to showcase graphic design, branding, digital marketing, and web development work. Designed and developed end-to-end — from UI/UX concept to production deployment.",
  technologies: [
    "React 19",
    "TypeScript",
    "TanStack Router",
    "Tailwind CSS",
    "Vite",
    "Vercel",
    "Framer Motion",
    "Radix UI",
  ],
  features: [
    "Fully responsive design with mobile-first approach",
    "Smooth scroll-triggered animations and reveal effects",
    "Interactive navigation with active section highlighting",
    "Contact form with WhatsApp, SMS, and email integration",
    "Optimized performance with lazy loading and code splitting",
    "SEO-friendly with meta tags and Open Graph support",
  ],
  role: "UI/UX Designer & Full-Stack Developer",
  challenge:
    "Creating a portfolio that not only displays creative work but also demonstrates technical capability — balancing visual richness with fast load times and accessibility.",
  solution:
    "Built a single-page React application with server-side rendering, leveraged Tailwind CSS for a consistent design system, and implemented custom scroll animations that enhance UX without impacting performance.",
  result:
    "A polished, production-ready portfolio that loads in under 2 seconds, scores 95+ on Lighthouse, and effectively communicates expertise across design and development disciplines.",
  liveUrl: "https://sharon-amondi-digital-showcase.vercel.app",
  githubUrl: "https://github.com/sharoncarister3-create/sharon-amondi-digital-showcase",
};

const expertise = [
  { icon: Palette, label: "Graphic Design" },
  { icon: PenTool, label: "Branding & Logo Design" },
  { icon: Share2, label: "Social Media Marketing" },
  { icon: FileText, label: "Content Creation" },
  { icon: Globe, label: "Website Development" },
  { icon: Megaphone, label: "Digital Marketing Strategy" },
];

const differentiators = [
  {
    icon: Lightbulb,
    title: "Creativity & Detail",
    desc: "Every pixel, headline, and interaction is intentional — crafted to feel considered, never generic.",
  },
  {
    icon: Users,
    title: "Client-Focused Approach",
    desc: "I listen deeply, ask the right questions, and treat your goals as my own from kickoff to launch.",
  },
  {
    icon: Zap,
    title: "Design + Marketing + Tech",
    desc: "One partner across visual identity, campaigns, and web — for complete, cohesive digital solutions.",
  },
];


const whyChooseMe = [
  {
    icon: Clock,
    title: "Fast Turnaround",
    desc: "Quick delivery without sacrificing quality, so your brand can launch and grow on time.",
  },
  {
    icon: Paintbrush,
    title: "Creative, Custom Designs",
    desc: "No templates. Every design is crafted from scratch to match your unique brand personality.",
  },
  {
    icon: Wallet,
    title: "Affordable Pricing",
    desc: "Professional creative work that fits your budget — great value for startups and small businesses.",
  },
  {
    icon: MessageCircle,
    title: "Excellent Communication",
    desc: "Clear, friendly updates at every step. You'll always know what's happening with your project.",
  },
  {
    icon: Eye,
    title: "Attention to Detail",
    desc: "From typography to spacing to messaging, every detail is polished and purposeful.",
  },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <About />
      <Services />
      <WhyChooseMe />
      <Portfolio />
      <section className="pt-10 md:pt-14 pb-4">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-lg md:text-xl text-muted-foreground">
            Have a project in mind? Let's create something{" "}
            <span className="text-gradient-brand font-semibold">meaningful</span> together.
          </p>
        </div>
      </section>
      <Contact />
      <section className="py-8 md:py-12">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-lg md:text-xl text-muted-foreground">
            Thank you for visiting my portfolio. I look forward to hearing about your next project.
          </p>
        </div>
      </section>
      <Footer />
      <BackToTop />
    </div>
  );
}

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeHref, setActiveHref] = useState("#top");
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12);

      const sectionIds = ["top", "about", "services", "work", "contact"];
      let currentSection = "top";

      for (const id of sectionIds) {
        const section = document.getElementById(id);
        if (section && section.offsetTop <= window.scrollY + 120) {
          currentSection = id;
        }
      }

      setActiveHref(`#${currentSection}`);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const links = [
    { href: "#top", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#work", label: "Projects" },

    { href: "#contact", label: "Contact" },
  ];
  const navLinkClass = (href: string) =>
    `rounded-full px-4 py-2 text-base font-medium transition-all ${
      activeHref === href
        ? "bg-gradient-brand/10 text-primary"
        : "text-muted-foreground hover:bg-secondary hover:text-foreground"
    }`;
  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all ${
        scrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border shadow-[0_1px_8px_rgba(0,0,0,0.06)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-10 h-[80px] flex items-center justify-between">
        <a href="#top" className="flex items-center">
          <img src="/logo.png" alt="Sharon Amondi — Digital Growth Partner" className="h-[92px] w-auto object-contain" style={{ imageRendering: "auto" }} />
        </a>

        <nav className="hidden md:flex items-center gap-3 rounded-full border border-border bg-background/75 p-1 shadow-[var(--shadow-soft)] backdrop-blur">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setActiveHref(l.href)}
              className={navLinkClass(l.href)}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center">
          <Button asChild size="sm" className="rounded-full bg-gradient-brand text-primary-foreground hover:opacity-90 transition-opacity">
            <a href="#contact">
              Let's Work Together <ArrowRight className="size-4" />
            </a>
          </Button>
        </div>
        <button
          aria-label="Menu"
          className="md:hidden flex flex-col gap-1.5 rounded-full border border-border bg-background/75 p-3 shadow-sm backdrop-blur"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="block h-0.5 w-5 bg-foreground" />
          <span className="block h-0.5 w-5 bg-foreground" />
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-border bg-background/95 px-6 py-4 shadow-[var(--shadow-soft)] backdrop-blur">
          <div className="grid grid-cols-2 gap-2">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => {
                  setActiveHref(l.href);
                  setOpen(false);
                }}
                className={navLinkClass(l.href)}
              >
                {l.label}
              </a>
            ))}
          </div>
          <Button asChild size="sm" className="mt-4 w-full rounded-full bg-gradient-brand text-primary-foreground">
            <a href="#contact" onClick={() => setOpen(false)}>Let's Work Together</a>
          </Button>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative pt-10 pb-12 md:pt-12 md:pb-16 overflow-hidden">
      <div className="absolute inset-0 bg-hero-glow pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/60 via-transparent to-purple-50/40 pointer-events-none" />
      <div
        className="absolute -top-20 -left-20 size-[420px] rounded-full opacity-30 blur-3xl animate-blob"
        style={{ background: "var(--gradient-brand)" }}
      />
      <div
        className="absolute -bottom-32 -right-20 size-[500px] rounded-full opacity-20 blur-3xl animate-blob"
        style={{ background: "var(--gradient-brand)", animationDelay: "4s" }}
      />
      <div
        className="absolute top-1/3 right-1/4 size-[300px] rounded-full opacity-10 blur-3xl"
        style={{ background: "var(--brand-blue)" }}
      />

      <div className="relative max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-16 items-center">
        <div className="rounded-3xl bg-card/40 backdrop-blur-sm border border-border/50 p-8 md:p-10 shadow-[var(--shadow-soft)] animate-float-slow">
          <div className="space-y-8">
          <div className="space-y-0.5 animate-fade-up">
            <p className="text-[18px] font-medium text-muted-foreground leading-none">Hello, I'm</p>
            <h1 className="text-[60px] font-bold leading-[1.05] tracking-tight text-gradient-brand">
              Sharon Amondi
            </h1>
            <p className="text-[22px] font-semibold min-h-[2.5rem]">
              <TypewriterSubtitles subtitles={["Graphic Design", "Web Developer", "Digital Marketer"]} />
            </p>
          </div>
          <p
            className="text-[18px] text-muted-foreground max-w-xl leading-relaxed animate-fade-up"
            style={{ animationDelay: "120ms" }}
          >
            I design memorable brands, build responsive websites, and create digital marketing strategies that help businesses grow.
          </p>
          <div className="flex items-center gap-4 text-sm text-muted-foreground animate-fade-up flex-wrap" style={{ animationDelay: "280ms" }}>
            <span className="inline-flex items-center gap-1.5">
              <Palette className="size-4 text-primary" />
              Graphic Design
            </span>
            <span className="text-muted-foreground/40">•</span>
            <span className="inline-flex items-center gap-1.5">
              <Globe className="size-4 text-primary" />
              Web Development
            </span>
            <span className="text-muted-foreground/40">•</span>
            <span className="inline-flex items-center gap-1.5">
              <Megaphone className="size-4 text-primary" />
              Digital Marketing
            </span>
          </div>

          <div
            className="inline-flex items-center gap-2 rounded-full border border-border bg-background/60 backdrop-blur px-4 py-1.5 text-xs font-medium text-muted-foreground animate-fade-up"
            style={{ animationDelay: "480ms" }}
          >
            <MapPin className="size-3.5 text-primary" />
            Based in Nairobi, Kenya • Available Worldwide
          </div>
          </div>
        </div>

        <div className="relative animate-fade-in self-center" style={{ animationDelay: "200ms" }}>
          <div className="absolute -inset-4 bg-gradient-brand rounded-3xl blur-2xl opacity-30" />
          <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-border shadow-[var(--shadow-glow)]">
            <div className="absolute inset-0 z-10" style={{ background: "linear-gradient(135deg, rgba(59,130,246,0.35) 0%, rgba(139,92,246,0.25) 100%)" }} />
            <img
              src={portraitUrl}
              alt="Sharon Amondi"
              width={1024}
              height={1280}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-[hsl(270,91%,65%)]/80 to-transparent z-20">
              <div className="text-primary-foreground">
                <p className="text-xs uppercase tracking-widest opacity-80">Sharon Amondi</p>
                <p className="font-display font-semibold">Design · Marketing · Web</p>
              </div>
            </div>
          </div>
          <div className="absolute -bottom-6 -left-6 hidden sm:flex items-center gap-3 bg-card border border-border rounded-2xl px-4 py-3 shadow-[var(--shadow-soft)] animate-float-slow">
            <div className="size-9 rounded-full bg-gradient-brand grid place-items-center">
              <Sparkles className="size-4 text-primary-foreground" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Creative + Strategy</p>
              <p className="text-sm font-semibold">Brand · Marketing · Web</p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronsDown className="size-5 text-muted-foreground/50" />
      </div>
    </section>
  );
}

function TypewriterSubtitles({ subtitles }: { subtitles: string[] }) {
  const [text, setText] = useState("");
  const [subtitleIndex, setSubtitleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = subtitles[subtitleIndex];

    if (!isDeleting) {
      if (text.length < current.length) {
        const t = setTimeout(() => setText(current.slice(0, text.length + 1)), 70);
        return () => clearTimeout(t);
      }
      const t = setTimeout(() => setIsDeleting(true), 2000);
      return () => clearTimeout(t);
    }

    if (text.length > 0) {
      const t = setTimeout(() => setText(text.slice(0, -1)), 35);
      return () => clearTimeout(t);
    }

    setIsDeleting(false);
    setSubtitleIndex((p) => (p + 1) % subtitles.length);
  }, [text, isDeleting, subtitleIndex, subtitles]);

  return (
    <span className="text-gradient-brand">
      {text}
      <span className="animate-pulse font-thin">|</span>
    </span>
  );
}

function SectionHeader({ kicker, title, sub }: { kicker: string; title: string; sub?: string }) {
  return (
    <Reveal>
      <div className="max-w-2xl mb-14">
        <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gradient-brand mb-3">
          {kicker}
        </p>
        <h2 className="text-[42px] font-bold leading-tight mb-4">{title}</h2>
        {sub && <p className="text-muted-foreground text-lg">{sub}</p>}
      </div>
    </Reveal>
  );
}

function About() {
  const skills = [
    { icon: Palette, label: "Graphic Design" },
    { icon: Globe, label: "Web Development" },
    { icon: Megaphone, label: "Digital Marketing" },
    { icon: PenTool, label: "Brand Identity" },
  ];

  return (
    <section id="about" className="py-18 md:py-[90px] px-5 md:px-20 border-t border-border bg-gradient-to-b from-transparent via-secondary/10 to-transparent relative overflow-hidden">
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 size-[350px] rounded-full bg-gradient-brand opacity-10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative space-y-16 md:space-y-20">

        {/* About Me */}
        <div className="grid lg:grid-cols-[2fr_3fr] gap-12 lg:gap-16 items-center">
          <Reveal>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-brand rounded-3xl blur-2xl opacity-30" />
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden border border-border shadow-[var(--shadow-glow)]">
                <div className="absolute inset-0 z-10" style={{ background: "linear-gradient(135deg, rgba(59,130,246,0.35) 0%, rgba(139,92,246,0.25) 100%)" }} />
                <img
                  src={portraitUrl}
                  alt="Sharon Amondi"
                  width={1024}
                  height={1280}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 p-5 bg-gradient-to-t from-[hsl(270,91%,65%)]/80 to-transparent z-20">
                  <div className="text-primary-foreground">
                    <p className="text-xs uppercase tracking-widest opacity-80">Sharon Amondi</p>
                    <p className="font-display font-semibold">Design · Marketing · Web</p>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -left-6 hidden sm:flex items-center gap-3 bg-card border border-border rounded-2xl px-4 py-3 shadow-[var(--shadow-soft)] animate-float-slow">
                <div className="size-9 rounded-full bg-gradient-brand grid place-items-center">
                  <Sparkles className="size-4 text-primary-foreground" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Creative + Strategy</p>
                  <p className="text-sm font-semibold">Brand · Marketing · Web</p>
                </div>
              </div>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="space-y-8">
              <div className="space-y-8">
                <span className="inline-flex items-center gap-1.5 text-xs font-bold tracking-[0.2em] uppercase text-gradient-brand bg-gradient-brand/10 px-3.5 py-1.5 rounded-full w-fit mb-4">
                  <Sparkles className="size-3" /> About Me
                </span>
                <h3 className="text-[42px] font-bold font-display leading-[1.1] tracking-tight">
                  Helping businesses grow through design and technology.
                </h3>
              </div>
              <div className="space-y-6 text-[18px] text-muted-foreground leading-[1.75] text-left">
                <p>
                  My journey into digital design started with a simple curiosity — how great visuals
                  influence the way people connect with brands.
                </p>
                <p>
                  Over the years, I developed skills in graphic design, web development, and digital
                  marketing, combining creativity with strategy to solve real business problems.
                </p>
                <p>
                  Today, I help businesses build professional brands, engaging websites, and marketing
                  campaigns that attract customers and drive growth.
                </p>
              </div>
              <div className="flex flex-wrap gap-2.5 pt-1">
                {skills.map((s) => (
                  <span key={s.label} className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-4 py-2 text-sm font-medium">
                    <s.icon className="size-4 text-primary" />
                    {s.label}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        {/* My Journey Timeline */}
        <div className="space-y-12">
          <Reveal>
            <div className="text-center space-y-6">
              <span className="inline-flex items-center gap-1.5 text-xs font-bold tracking-[0.2em] uppercase text-gradient-brand bg-gradient-brand/10 px-3.5 py-1.5 rounded-full">
                <Rocket className="size-3" /> My Journey
              </span>
              <h3 className="text-[42px] font-bold font-display leading-tight tracking-tight">
                The path that shaped me.
              </h3>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <div className="relative max-w-2xl mx-auto">
              <div className="absolute left-[19px] top-2 bottom-2 w-px bg-border" />
              <div className="space-y-10">
                {[
                  { year: "2023", text: "Started learning Graphic Design" },
                  { year: "2024", text: "Expanded into Digital Marketing" },
                  { year: "2025", text: "Started building websites" },
                  { year: "2026", text: "Helping businesses grow through branding, websites, and digital marketing" },
                ].map((item, i) => (
                  <Reveal key={item.year} delay={i * 80}>
                    <div className="relative flex items-start gap-6">
                      <div className="relative z-10 size-10 rounded-full bg-gradient-brand grid place-items-center text-primary-foreground font-display font-bold text-sm shrink-0 shadow-[var(--shadow-soft)]">
                        {item.year.slice(2)}
                      </div>
                      <div className="pt-2">
                        <p className="text-xs font-bold tracking-wider uppercase text-gradient-brand mb-1">{item.year}</p>
                        <p className="text-[18px] text-muted-foreground leading-relaxed">{item.text}</p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        {/* My Philosophy */}
        <div className="space-y-16">
          <Reveal>
            <div className="text-center space-y-6">
              <span className="inline-flex items-center gap-1.5 text-xs font-bold tracking-[0.2em] uppercase text-gradient-brand bg-gradient-brand/10 px-3.5 py-1.5 rounded-full">
                <Quote className="size-3" /> My Philosophy
              </span>
            </div>
          </Reveal>
          <Reveal delay={80}>
            <div className="relative rounded-3xl overflow-hidden border border-border bg-secondary/30 p-10 md:p-14">
              <div className="absolute inset-0 bg-hero-glow opacity-50" />
              <div className="relative max-w-3xl mx-auto text-center space-y-6">
                <Quote className="size-12 mx-auto text-primary/30" />
                <p className="text-[22px] sm:text-[22px] font-display leading-relaxed">
                  "I believe every business — no matter how small — deserves a brand that feels
                  intentional, trustworthy, and alive. My commitment is simple: to help you grow with
                  creativity, honesty, and design that works as hard as you do."
                </p>
                <p className="text-sm font-semibold tracking-wider uppercase text-gradient-brand">— Sharon Amondi</p>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Closing line */}
        <Reveal>
          <p className="text-center text-muted-foreground leading-relaxed text-[18px] max-w-2xl mx-auto">
            When I'm not designing or developing websites, I'm always exploring new ways to help
            businesses grow through technology and creative thinking.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="services" className="py-18 md:py-24 bg-secondary/40 border-y border-border">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeader
          kicker="What I Do"
          title="Services built for digital growth."
          sub="A complete suite of creative and marketing solutions to help your brand stand out and scale."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 60}>
              <div className="group relative h-full rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:shadow-[var(--shadow-soft)] hover:border-transparent overflow-hidden">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity bg-gradient-brand" />
                <div className="relative">
                  <div className="size-12 rounded-xl bg-gradient-brand grid place-items-center text-primary-foreground mb-5 transition-transform group-hover:scale-110">
                    <s.icon className="size-5" />
                  </div>
                  <h3 className="font-display font-semibold text-lg mb-2 group-hover:text-primary-foreground transition-colors">
                    {s.title}
                  </h3>
                  <p className="text-sm text-muted-foreground group-hover:text-primary-foreground/85 transition-colors">
                    {s.desc}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyChooseMe() {
  return (
    <section id="why-me" className="py-18 md:py-24 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 size-[500px] rounded-full bg-gradient-brand opacity-5 blur-3xl pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 relative">
        <SectionHeader
          kicker="Why Choose Me"
          title="Designed around your goals."
          sub="A reliable creative partner who delivers quality, clarity, and results — every time."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {whyChooseMe.map((item, i) => (
            <Reveal key={item.title} delay={i * 70}>
              <div className="h-full rounded-2xl border border-border bg-card p-7 hover:shadow-[var(--shadow-soft)] hover:-translate-y-1 transition-all">
                <div className="size-12 rounded-xl bg-gradient-brand grid place-items-center text-primary-foreground mb-5">
                  <item.icon className="size-5" />
                </div>
                <h4 className="font-display font-semibold text-lg mb-2">{item.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Portfolio() {
  const categories = Array.from(new Set(portfolio.map((p) => p.category)));
  const byCategory = (cat: string) => portfolio.filter((p) => p.category === cat);

  return (
    <section id="work" className="py-18 md:py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <Reveal>
            <div className="max-w-xl">
              <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gradient-brand mb-3">
                Selected Work
              </p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
                My Portfolio
              </h2>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <Button asChild variant="outline" className="rounded-full self-start">
              <a href="#contact">Start a project <ArrowRight className="size-4" /></a>
            </Button>
          </Reveal>
        </div>

        {/* Featured Project */}
        <Reveal>
          <div className="mb-20 rounded-3xl border border-border bg-card overflow-hidden hover:shadow-[var(--shadow-soft)] transition-all">
            <div className="relative">
              <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
                <span className="px-3 py-1.5 rounded-full bg-gradient-brand text-primary-foreground text-[11px] font-bold uppercase tracking-widest shadow-lg">
                  Featured Project
                </span>
              </div>

              <div className="grid lg:grid-cols-2 gap-0">
                {/* Preview mockups */}
                <div className="relative bg-secondary/50 p-8 md:p-12 flex items-center justify-center min-h-[320px] md:min-h-[420px]">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50/40 via-transparent to-purple-50/30 pointer-events-none" />
                  <div className="relative flex items-end gap-4">
                    {/* Desktop mockup */}
                    <div className="w-[260px] md:w-[340px] rounded-t-xl border border-border bg-background shadow-2xl overflow-hidden">
                      <div className="h-5 bg-secondary/80 border-b border-border flex items-center gap-1.5 px-2.5">
                        <span className="size-2 rounded-full bg-red-400/70" />
                        <span className="size-2 rounded-full bg-yellow-400/70" />
                        <span className="size-2 rounded-full bg-green-400/70" />
                        <span className="ml-2 text-[9px] text-muted-foreground truncate">sharon-amondi.vercel.app</span>
                      </div>
                      <div className="aspect-[16/10] bg-background p-3 space-y-2">
                        <div className="flex items-center justify-between">
                          <div className="h-3 w-16 rounded-full bg-gradient-brand/30" />
                          <div className="flex gap-1.5">
                            <div className="h-2 w-8 rounded-full bg-secondary" />
                            <div className="h-2 w-8 rounded-full bg-secondary" />
                            <div className="h-2 w-8 rounded-full bg-secondary" />
                          </div>
                        </div>
                        <div className="h-12 w-full rounded-lg bg-gradient-brand/10" />
                        <div className="grid grid-cols-3 gap-1.5">
                          <div className="h-14 rounded bg-secondary/60" />
                          <div className="h-14 rounded bg-secondary/60" />
                          <div className="h-14 rounded bg-secondary/60" />
                        </div>
                        <div className="h-8 w-3/4 rounded-lg bg-secondary/40" />
                        <div className="h-4 w-full rounded bg-secondary/30" />
                        <div className="h-4 w-5/6 rounded bg-secondary/30" />
                      </div>
                    </div>
                    {/* Mobile mockup */}
                    <div className="w-[100px] md:w-[120px] rounded-t-xl border border-border bg-background shadow-2xl overflow-hidden hidden sm:block">
                      <div className="h-4 bg-secondary/80 border-b border-border flex items-center justify-center">
                        <div className="w-8 h-1.5 rounded-full bg-secondary" />
                      </div>
                      <div className="aspect-[9/16] bg-background p-2 space-y-1.5">
                        <div className="h-2 w-10 rounded-full bg-gradient-brand/30" />
                        <div className="h-6 w-full rounded bg-gradient-brand/10" />
                        <div className="grid grid-cols-2 gap-1">
                          <div className="h-8 rounded bg-secondary/60" />
                          <div className="h-8 rounded bg-secondary/60" />
                        </div>
                        <div className="h-2 w-full rounded bg-secondary/30" />
                        <div className="h-2 w-4/5 rounded bg-secondary/30" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Details */}
                <div className="p-8 md:p-10 space-y-6 flex flex-col justify-center">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-gradient-brand mb-2">{featuredProject.subtitle}</p>
                    <h3 className="text-2xl md:text-3xl font-bold leading-tight">{featuredProject.title}</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{featuredProject.description}</p>

                  <div className="space-y-4">
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-gradient-brand mb-2">Role</p>
                      <p className="text-sm font-medium">{featuredProject.role}</p>
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-gradient-brand mb-2">Technologies</p>
                      <div className="flex flex-wrap gap-1.5">
                        {featuredProject.technologies.map((t) => (
                          <span key={t} className="text-[11px] font-medium px-2.5 py-1 rounded-full bg-secondary border border-border">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-gradient-brand mb-1.5">Challenge</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">{featuredProject.challenge}</p>
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-gradient-brand mb-1.5">Solution</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">{featuredProject.solution}</p>
                    </div>
                  </div>

                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-gradient-brand mb-1.5">Key Features</p>
                    <ul className="grid sm:grid-cols-2 gap-1.5">
                      {featuredProject.features.map((f) => (
                        <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <Check className="size-3.5 mt-1 shrink-0 text-gradient-brand" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-2 border-t border-border">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-gradient-brand mb-1">Result</p>
                    <p className="text-sm font-medium leading-snug">{featuredProject.result}</p>
                  </div>

                  <div className="flex flex-wrap gap-3 pt-2">
                    <Button asChild className="rounded-full bg-gradient-brand text-primary-foreground hover:opacity-90 transition-opacity">
                      <a href={featuredProject.liveUrl} target="_blank" rel="noopener noreferrer">
                        Live Demo <ExternalLink className="size-4" />
                      </a>
                    </Button>
                    <Button asChild variant="outline" className="rounded-full">
                      <a href={featuredProject.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="size-4" /> GitHub Repository
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        <div className="space-y-16">
          {categories.map((cat) => (
            <div key={cat}>
              <Reveal>
                <div className="flex items-center gap-3 mb-8">
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-gradient-brand">
                    {cat}
                  </span>
                  <span className="h-px flex-1 bg-border" />
                  <span className="text-xs text-muted-foreground">
                    {byCategory(cat).length} project{byCategory(cat).length !== 1 ? "s" : ""}
                  </span>
                </div>
              </Reveal>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {byCategory(cat).map((p, i) => (
                  <Reveal key={p.title} delay={i * 80}>
                    <article className="group h-full flex flex-col rounded-2xl overflow-hidden border border-border bg-card hover:shadow-[var(--shadow-soft)] hover:-translate-y-1 transition-all">
                      <div className="relative aspect-[4/5] bg-brand-ink overflow-hidden">
                        <img
                          src={p.img}
                          alt={p.title}
                          loading="lazy"
                          className="absolute inset-0 w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute top-3 left-3 text-[10px] font-semibold uppercase tracking-widest text-primary-foreground/90 bg-black/40 backdrop-blur px-2.5 py-1 rounded-full">
                          {p.tag}
                        </div>
                      </div>
                      <div className="p-6 space-y-4 flex-1 flex flex-col">
                        <h3 className="font-display font-semibold text-xl leading-tight">{p.title}</h3>
                        <div className="space-y-3 text-sm flex-1">
                          <div>
                            <p className="text-[10px] font-bold uppercase tracking-widest text-gradient-brand mb-1">Problem</p>
                            <p className="text-muted-foreground leading-relaxed">{p.problem}</p>
                          </div>
                          <div>
                            <p className="text-[10px] font-bold uppercase tracking-widest text-gradient-brand mb-1">Solution</p>
                            <p className="text-muted-foreground leading-relaxed">{p.solution}</p>
                          </div>
                          <div>
                            <p className="text-[10px] font-bold uppercase tracking-widest text-gradient-brand mb-1.5">Tools</p>
                            <div className="flex flex-wrap gap-1.5">
                              {p.tools.map((t) => (
                                <span key={t} className="text-[11px] font-medium px-2 py-0.5 rounded-full bg-secondary border border-border">
                                  {t}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                        <div className="pt-3 border-t border-border flex items-start gap-2">
                          <div className="size-6 rounded-full bg-gradient-brand grid place-items-center text-primary-foreground shrink-0 mt-0.5">
                            <Check className="size-3.5" />
                          </div>
                          <div>
                            <p className="text-[10px] font-bold uppercase tracking-widest text-gradient-brand mb-0.5">Result</p>
                            <p className="text-sm font-medium leading-snug">{p.result}</p>
                          </div>
                        </div>
                      </div>
                    </article>
                  </Reveal>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [sent, setSent] = useState(false);
  const [showSmsTip, setShowSmsTip] = useState(false);
  const isMobile = useIsMobile();
  return (
    <section id="contact" className="py-10 md:py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative rounded-3xl overflow-hidden border border-border p-6 md:p-10 bg-card">
          <div className="absolute inset-0 bg-hero-glow opacity-80" />
          <div
            className="absolute -top-20 -right-20 size-[400px] rounded-full opacity-30 blur-3xl"
            style={{ background: "var(--gradient-brand)" }}
          />
          <div className="relative grid lg:grid-cols-2 gap-10">
            <Reveal>
              <div className="space-y-5">
                <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gradient-brand">
                  Get In Touch
                </p>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
                  Let's build your <span className="text-gradient-brand">digital growth story</span>.
                </h2>
                <p className="text-muted-foreground">
                  Available for new projects and collaborations. Tell me about your brand and goals
                  — I'll get back within 24 hours.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-5">
                    <div className="size-12 rounded-xl bg-gradient-brand grid place-items-center text-primary-foreground shrink-0">
                      <MapPin className="size-6" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs uppercase tracking-wider text-muted-foreground">Location</p>
                      <p className="font-semibold">Nairobi, Kenya</p>
                    </div>
                  </div>
                  <a
                    href="https://wa.me/254718557830"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-5 group"
                  >
                    <div className="size-12 rounded-xl bg-gradient-brand grid place-items-center text-primary-foreground shrink-0">
                      <Phone className="size-6" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs uppercase tracking-wider text-muted-foreground">WhatsApp / Phone</p>
                      <p className="font-semibold group-hover:text-primary transition-colors">+254 718 557 830</p>
                    </div>
                  </a>
                  <div className="relative">
                    <a
                      href={isMobile ? "sms:+254718557830" : "#"}
                      onClick={(e) => {
                        if (!isMobile) {
                          e.preventDefault();
                          setShowSmsTip(true);
                          setTimeout(() => setShowSmsTip(false), 3000);
                        }
                      }}
                      className="flex items-center gap-5 group"
                    >
                      <div className="size-12 rounded-xl bg-gradient-brand grid place-items-center text-primary-foreground shrink-0">
                        <Smartphone className="size-6" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-xs uppercase tracking-wider text-muted-foreground">SMS</p>
                        <p className="font-semibold group-hover:text-primary transition-colors">+254 718 557 830</p>
                      </div>
                    </a>
                    {showSmsTip && (
                      <div className="absolute left-0 top-full mt-2 z-10 rounded-xl bg-foreground text-background px-4 py-2 text-sm font-medium shadow-lg animate-in fade-in slide-in-from-top-2 duration-200 whitespace-nowrap">
                        Open on your phone to send an SMS
                      </div>
                    )}
                  </div>
                  <a
                    href="mailto:sharoncarister9@gmail.com"
                    className="flex items-center gap-5 group"
                  >
                    <div className="size-12 rounded-xl bg-gradient-brand grid place-items-center text-primary-foreground shrink-0">
                      <Mail className="size-6" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs uppercase tracking-wider text-muted-foreground">Email</p>
                      <p className="font-semibold break-all group-hover:text-primary transition-colors">sharoncarister9@gmail.com</p>
                    </div>
                  </a>
                  <div className="flex items-center gap-5">
                    <div className="size-12 rounded-xl bg-gradient-brand grid place-items-center text-primary-foreground shrink-0">
                      <Clock className="size-6" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs uppercase tracking-wider text-muted-foreground">Response Time</p>
                      <p className="font-semibold">Usually replies within 24 hours</p>
                    </div>
                  </div>
                </div>
                <div className="flex gap-3 pt-2">
                  {[Linkedin, Instagram, Twitter, Facebook].map((Icon, i) => (
                    <a
                      key={i}
                      href="#"
                      aria-label="Social link"
                      className="size-10 rounded-full border border-border grid place-items-center hover:bg-gradient-brand hover:text-primary-foreground hover:border-transparent transition-all"
                    >
                      <Icon className="size-4" />
                    </a>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground pt-2">
                  Currently available for freelance projects and full-time opportunities.
                </p>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  const form = e.currentTarget;
                  const data = new FormData(form);
                  const name = data.get("name") as string;
                  const email = data.get("email") as string;
                  const subject = data.get("subject") as string;
                  const message = data.get("message") as string;

                  const body = `Hi Sharon,\n\nMy name is ${name}.\n\n${message}\n\nBest regards,\n${name}\nEmail: ${email}`;
                  const mailtoUrl = `mailto:sharoncarister9@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
                  window.open(mailtoUrl, "_blank");

                  setSent(true);
                  setTimeout(() => setSent(false), 4000);
                  form.reset();
                }}
                className="bg-background/70 backdrop-blur border border-border rounded-3xl p-6 md:p-8 space-y-4"
              >
                {sent ? (
                  <div className="flex flex-col items-center justify-center py-12 space-y-4 text-center animate-in fade-in slide-in-from-bottom-4 duration-500">
                    <div className="size-16 rounded-full bg-gradient-brand grid place-items-center text-primary-foreground">
                      <CheckCircle className="size-8" />
                    </div>
                    <p className="text-xl font-semibold">Thanks! Your message has been sent.</p>
                    <p className="text-muted-foreground text-sm">I'll get back to you within 24 hours.</p>
                  </div>
                ) : (
                  <>
                    <Field icon={<User className="size-4" />} label="Name" name="name" placeholder="Your full name" />
                    <Field icon={<Mail className="size-4" />} label="Email" name="email" type="email" placeholder="you@brand.com" />
                    <Field icon={<Send className="size-4" />} label="Subject" name="subject" placeholder="Project type" />
                    <div className="space-y-2">
                      <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground flex items-center gap-2">
                        <MessageCircle className="size-4" />
                        Message
                      </label>
                      <textarea
                        required
                        name="message"
                        rows={4}
                        placeholder="Tell me about your project..."
                        className="w-full rounded-2xl border border-input bg-background px-4 py-3 text-[16px] focus:outline-none focus:ring-2 focus:ring-ring resize-none shadow-sm transition-shadow focus:shadow-md"
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full h-[58px] rounded-[9999px] bg-gradient-brand text-primary-foreground text-[16px] font-semibold shadow-md hover:-translate-y-0.5 hover:brightness-110 transition-all duration-300 cursor-pointer"
                    >
                      Send Message <ArrowRight className="size-4" />
                    </Button>
                  </>
                )}
              </form>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  icon,
  label,
  name,
  type = "text",
  placeholder,
}: {
  icon?: React.ReactNode;
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
}) {
  return (
    <div className="space-y-2">
      <label htmlFor={name} className="text-xs font-semibold uppercase tracking-wider text-muted-foreground flex items-center gap-2">
        {icon}
        {label}
      </label>
      <div className="relative">
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
          {icon}
        </span>
        <input
          id={name}
          name={name}
          type={type}
          required
          placeholder={placeholder}
          className="w-full rounded-2xl border border-input bg-background pl-10 pr-4 py-3 text-[16px] focus:outline-none focus:ring-2 focus:ring-ring shadow-sm transition-shadow focus:shadow-md"
        />
      </div>
    </div>
  );
}

function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Back to top"
      className={`fixed bottom-6 right-6 z-50 size-12 rounded-full bg-gradient-brand text-primary-foreground grid place-items-center shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl cursor-pointer ${
        show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      <ArrowUp className="size-5" />
    </button>
  );
}

function Footer() {
  const quickLinks = [
    { href: "#top", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#work", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  const services = [
    "Graphic Design",
    "Web Development",
    "Digital Marketing",
  ];

  return (
    <footer className="border-t border-border pt-10 pb-6">
      <div className="max-w-7xl mx-auto px-6">
        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent mb-8" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-3">
            <img src="/logo.png" alt="Sharon Amondi" className="h-[135px] w-auto" />
            <p className="text-[14px] text-muted-foreground leading-relaxed">
              Crafting digital experiences that drive growth. Let's turn your vision into results.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-display font-semibold text-[14px] uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-[14px] text-muted-foreground hover:text-foreground hover:pl-1 transition-all duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-display font-semibold text-[14px] uppercase tracking-wider">Services</h4>
            <ul className="space-y-2.5">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-[14px] text-muted-foreground">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-display font-semibold text-[14px] uppercase tracking-wider">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a href="mailto:sharoncarister9@gmail.com" className="flex items-center gap-3 text-[14px] text-muted-foreground hover:text-foreground transition-colors">
                  <Mail className="size-4 shrink-0" />
                  sharoncarister9@gmail.com
                </a>
              </li>
              <li>
                <a href="https://wa.me/254718557830" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-[14px] text-muted-foreground hover:text-foreground transition-colors">
                  <Phone className="size-4 shrink-0" />
                  +254 718 557 830
                </a>
              </li>
              <li className="flex items-center gap-3 text-[14px] text-muted-foreground">
                <MapPin className="size-4 shrink-0" />
                Nairobi, Kenya
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex gap-4">
            {[Linkedin, Instagram, Twitter, Facebook].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="Social"
                className="text-muted-foreground hover:text-primary hover:-translate-y-0.5 transition-all duration-300"
              >
                <Icon className="size-5" />
              </a>
            ))}
          </div>
          <p className="text-[14px] text-muted-foreground text-center">
            © 2025 Sharon Amondi. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
