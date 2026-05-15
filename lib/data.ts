import type {
  BrandLogoItem,
  ContentGalleryItem,
  ContentGalleryTheme,
  MobileFeature,
  NavItem,
  ProjectItem,
  ServiceItem,
  TestimonialItem,
  VideoItem,
  WebsiteFeature,
} from "./types";

export const siteConfig = {
  name: "Fazilyyy.",
  ownerName: "Arshad Jamal",
  ownerMonogram: "AJ",
  tagline: "AI Full-Stack Engineer at Ayvik AI and Essentient",
  aboutBio:
    "I ship end-to-end AI-powered web products — from APIs and data layers to polished interfaces — across Ayvik AI and Essentient.",
  email:
    process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "arshad.jamal.co@gmail.com",
  fiverrUrl:
    process.env.NEXT_PUBLIC_FIVERR_URL ?? "https://www.fiverr.com/",
  calendlyUrl:
    process.env.NEXT_PUBLIC_CALENDLY_URL ?? "https://calendly.com/",
  whatsappNumber:
    process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "919534161220",
};

export const navItems: NavItem[] = [
  { id: "home", label: "Home" },
  { id: "about", label: "About Me" },
  { id: "services", label: "Services" },
  { id: "websites", label: "Websites" },
  { id: "apps", label: "Apps" },
  { id: "content", label: "Content" },
  { id: "testimonials", label: "Testimonials" },
];

export const sectionIds = [
  "home",
  "about",
  "services",
  "websites",
  "apps",
  "content",
  "testimonials",
  "contact",
] as const;

export const brandLogos: BrandLogoItem[] = [
  { id: "remit", name: "Remit Union", abbr: "RU" },
  { id: "smrt", name: "SMRTALGO", abbr: "SM" },
  { id: "duka", name: "DukaNext", abbr: "DN" },
  { id: "ndu", name: "NDUpFront", abbr: "ND" },
  { id: "braalia", name: "Braalia", abbr: "BR" },
  { id: "clarity", name: "Clarity", abbr: "CL" },
  { id: "remit2", name: "Remit Union", abbr: "RU" },
  { id: "smrt2", name: "SMRTALGO", abbr: "SM" },
];

export const services: ServiceItem[] = [
  {
    num: "01",
    icon: "Code2",
    iconBg: "#6c47ff",
    title: "Website Development",
    desc: "High-performance, conversion-focused websites and landing pages built for results.",
    chips: ["Next.js", "React", "Node.js", "Webflow"],
    kicker: "POPULAR",
    meta: "Landing pages • SaaS • e-commerce",
    outcome: "Shipped for conversion, speed, and SEO-ready structure.",
  },
  {
    num: "02",
    icon: "Smartphone",
    iconBg: "#3b82f6",
    title: "Mobile App Development",
    desc: "Native-feel iOS and Android apps built with React Native, Expo & Flutter.",
    chips: ["React Native", "Expo", "iOS", "Android"],
    kicker: "TRENDING",
    meta: "Cross-platform • App Store ready",
    outcome: "End-to-end builds with scalable backends.",
  },
  {
    num: "03",
    icon: "PenTool",
    iconBg: "#f59e0b",
    title: "UI/UX Design",
    desc: "Results-driven design, incredible performance, and pixel-perfect builds.",
    chips: ["Figma", "Prototyping", "User research", "Design systems"],
    kicker: "OPTIONAL",
    meta: "Product UX • Design systems • Handoff",
    outcome: "Designs engineered for dev-ready delivery.",
  },
  {
    num: "04",
    icon: "PlayCircle",
    iconBg: "#ec4899",
    title: "Promo Video Ads",
    desc: "Scroll-stopping video ads that convert. Professional editing, motion design.",
    chips: ["After Effects", "Premiere", "CapCut", "Motion"],
    kicker: "HIGH IMPACT",
    meta: "Ads • Reels • Launch campaigns",
    outcome: "Creative that stops the scroll and drives clicks.",
  },
  {
    num: "05",
    icon: "BarChart2",
    iconBg: "#3b82f6",
    title: "Social Media Management & Content Creation",
    desc: "Focused on brand storytelling. Every post is intentional, every goal is brand awareness.",
    chips: ["Instagram", "TikTok", "LinkedIn", "Content"],
    kicker: "RETAINER",
    meta: "Strategy • Content • Growth",
    outcome: "Consistent brand presence with measurable reach.",
    titleCompact: true,
  },
];

export const websiteFeatures: WebsiteFeature[] = [
  {
    icon: "Layout",
    title: "Landing Pages",
    desc: "Pixel-perfect, conversion-focused landing experiences.",
  },
  {
    icon: "ShoppingCart",
    title: "E-Commerce",
    desc: "Full-stack stores with payments, inventory, and scale.",
  },
  {
    icon: "LayoutDashboard",
    title: "SaaS & Dashboards",
    desc: "Admin panels and data-heavy apps built for clarity.",
  },
  {
    icon: "Server",
    title: "API & Backend",
    desc: "Robust APIs, databases, and integrations you can trust.",
  },
  {
    icon: "Gauge",
    title: "Performance & SEO",
    desc: "Core Web Vitals, SEO structure, and speed as a feature.",
  },
  {
    icon: "LineChart",
    title: "Analytics & Growth",
    desc: "Tracking, funnels, and dashboards that drive decisions.",
  },
];

export const websiteTechChips = [
  "SaaS",
  "React",
  "Next.js",
  "TypeScript",
  "Redux",
  "PostgreSQL",
  "Prisma",
  "Tailwind CSS",
  "Framer Motion",
  "Cloudflare",
  "AWS",
  "Stripe",
  "Vercel",
];

export const projectsTechChips = [
  "SaaS",
  "Stripe",
  "React",
  "Next",
  "TypeScript",
  "Redux",
  "PostgreSQL",
  "Prisma",
  "Redis",
  "Tailwind CSS",
  "Framer Motion",
  "Cloudflare",
  "AWS",
];

export const projects: ProjectItem[] = [
  {
    id: 1,
    category: "FEATURED · BEAUTY & WELLNESS",
    title: "Luxe Nails Studio",
    desc: "A premium nail salon booking platform with integrated appointment scheduling, service menus, and trust-building social proof.",
    image: "/images/placeholder-luxe.svg",
    chips: ["React", "Vite", "Tailwind", "shadcn/ui"],
    problem: [
      "Clients booking through DMs and phone only",
      "Hard to showcase service range and pricing",
      "No trust signals for new visitors",
    ],
    solution: [
      "WhatsApp booking integration for instant appointments",
      "Service showcase with transparent pricing",
      "Testimonials and hygiene certifications to build trust",
    ],
    outcome: [
      "5-star rated studio",
      "10+ expert technicians showcased",
      "100% satisfaction guarantee highlighted",
    ],
    liveUrl: "#",
    techStack: ["React", "Vite", "JavaScript", "Custom CSS"],
    visualOverviewImage: "/images/placeholder-luxe.svg",
  },
  {
    id: 2,
    category: "WEB PLATFORM · FINTECH",
    title: "Remit Union",
    desc: "Cross-border remittance experience with onboarding, KYC cues, and conversion-led flows for mobile-first users.",
    image: "/images/placeholder-fintech.svg",
    chips: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
    problem: ["Complex compliance messaging", "Low mobile completion rates"],
    solution: ["Progressive disclosure", "Trust-first UI patterns"],
    outcome: ["Higher completion", "Clearer user journeys"],
    liveUrl: "#",
    techStack: ["Next.js", "TypeScript", "Tailwind"],
    visualOverviewImage: "/images/placeholder-fintech.svg",
  },
  {
    id: 3,
    category: "DASHBOARD · BLOCKCHAIN",
    title: "SMRTALGO",
    desc: "The professional-grade CryptoSignal suite — trusted by 10,000+ traders. Real signals. No marketing, no gambling, just profitable moves.",
    image: "/images/placeholder-smrtalgo.svg",
    chips: ["DASHBOARD", "BLOCKCHAIN", "COMPLEX UI"],
    problem: ["Information overload", "Latency-sensitive UI"],
    solution: ["Modular dashboard layout", "Performance-first charts"],
    outcome: ["Faster decisions", "Cleaner workflows"],
    liveUrl: "#",
    techStack: ["React", "TypeScript", "WebSockets"],
    visualOverviewImage: "/images/placeholder-smrtalgo.svg",
  },
];

export const mobileFeatures: MobileFeature[] = [
  {
    icon: "Cloud",
    title: "Cloud Backend",
    desc: "Scalable APIs, auth, and realtime sync.",
    color: "#6c47ff",
  },
  {
    icon: "CreditCard",
    title: "In-App Payments",
    desc: "Stripe-ready flows and subscriptions.",
    color: "#3b82f6",
  },
  {
    icon: "MapPin",
    title: "Maps & Location",
    desc: "Geofencing, maps, and location-aware UX.",
    color: "#22d3ee",
  },
  {
    icon: "Sparkles",
    title: "AI Features",
    desc: "Smart recommendations and assistants.",
    color: "#ec4899",
  },
];

export const mobileStack = [
  "React Native",
  "Flutter",
  "Expo",
  "TypeScript",
  "Dart",
  "Firebase",
  "Supabase",
  "Stripe",
  "SocketIO",
];

export const videoAds: VideoItem[] = [
  {
    id: "v1",
    title: "Braalia Link in Bio",
    duration: "1:12",
    thumbnail: "/images/placeholder-video-1.svg",
    href: "#",
  },
  {
    id: "v2",
    title: "Dental Chatbot",
    duration: "0:58",
    thumbnail: "/images/placeholder-video-2.svg",
    href: "#",
  },
  {
    id: "v3",
    title: "3B Tuition",
    duration: "1:05",
    thumbnail: "/images/placeholder-video-3.svg",
    href: "#",
  },
];

const GALLERY_THEMES: ContentGalleryTheme[] = [
  "money",
  "lifestyle",
  "tips",
  "promoPortrait",
  "moneyBlue",
  "dualPhone",
  "darkLaunch",
  "gradientBrand",
];

const galleryBase = (prefix: string): ContentGalleryItem[] =>
  Array.from({ length: 8 }, (_, i) => ({
    id: `${prefix}-${i}`,
    title: `Creative ${i + 1}`,
    variant: (i % 4) as 0 | 1 | 2 | 3,
    theme: GALLERY_THEMES[i]!,
  }));

export const contentTabs: {
  id: string;
  label: string;
  items: ContentGalleryItem[];
}[] = [
  { id: "posts", label: "JUST POSTS", items: galleryBase("posts") },
  {
    id: "motion",
    label: "MOTION GRAPHICS",
    items: galleryBase("motion"),
  },
  {
    id: "ads",
    label: "AD CREATIVES",
    items: galleryBase("ads"),
  },
  {
    id: "strategy",
    label: "VISUAL STRATEGY",
    items: galleryBase("strategy"),
  },
  {
    id: "calendar",
    label: "CONTENT CALENDAR",
    items: galleryBase("calendar"),
  },
  { id: "branding", label: "BRANDING", items: galleryBase("brand") },
];

export const testimonials: TestimonialItem[] = [
  {
    id: "t1",
    platform: "FIVERR",
    text: "Professional and quality delivery. Communication was clear throughout the project.",
    name: "Brailia",
    handle: "brailia",
    service: "BRAND & SEO",
    initials: "B",
    avatarColor: "from-orange-500 to-amber-600",
  },
  {
    id: "t2",
    platform: "UPWORK",
    text: "Exceptional work on our landing page. Fast iterations and pixel-perfect execution.",
    name: "piebe173",
    handle: "piebe173",
    service: "WEB DEVELOPMENT",
    initials: "P",
    avatarColor: "from-blue-500 to-cyan-500",
  },
  {
    id: "t3",
    platform: "FIVERR",
    text: "Arshad understood our vision and shipped beyond expectations. Highly recommended.",
    name: "shopbybitose",
    handle: "shopbybitose",
    service: "PROMO VIDEO",
    initials: "S",
    avatarColor: "from-pink-500 to-rose-600",
  },
  {
    id: "t4",
    platform: "FIVERR",
    text: "Great experience from discovery to launch. The site performs beautifully on mobile.",
    name: "showing203",
    handle: "showing203",
    service: "SOCIAL MEDIA",
    initials: "S",
    avatarColor: "from-violet-500 to-purple-600",
  },
  {
    id: "t5",
    platform: "UPWORK",
    text: "Solid engineering and thoughtful UX. We will hire again for the next phase.",
    name: "mobilding2no",
    handle: "mobilding2no",
    service: "APP DEVELOPMENT",
    initials: "M",
    avatarColor: "from-emerald-500 to-teal-600",
  },
  {
    id: "t6",
    platform: "FIVERR",
    text: "Delivered on time with excellent attention to detail. The dashboard is a joy to use.",
    name: "oli3RR",
    handle: "oli3rr",
    service: "SAAS & DASHBOARDS",
    initials: "O",
    avatarColor: "from-indigo-500 to-blue-700",
  },
];
