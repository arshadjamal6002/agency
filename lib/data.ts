import type {
  ContentGalleryItem,
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
  ownerName: "Fazil Yousafzai",
  tagline: "Full-Stack Dev & Digital Creator",
  email:
    process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "faziliyysami@gmail.com",
  fiverrUrl:
    process.env.NEXT_PUBLIC_FIVERR_URL ?? "https://www.fiverr.com/",
  calendlyUrl:
    process.env.NEXT_PUBLIC_CALENDLY_URL ?? "https://calendly.com/",
  whatsappNumber:
    process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "923001234567",
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

export const brandLogos = [
  "Remit Union",
  "SMRTALGO",
  "DukaNext",
  "NDUpFront",
  "Braalia",
  "Clarity",
  "Remit Union",
  "SMRTALGO",
];

export const services: ServiceItem[] = [
  {
    num: "01",
    icon: "Code2",
    iconBg: "#6c47ff",
    title: "Website Development",
    desc: "High-performance, conversion-focused websites and landing pages built for results.",
    chips: ["React", "Next.js", "Shopify", "Webflow"],
  },
  {
    num: "02",
    icon: "Smartphone",
    iconBg: "#3b82f6",
    title: "Mobile App Development",
    desc: "Native-feel iOS and Android apps built with React Native, Expo & Flutter.",
    chips: ["React Native", "Flutter", "Expo"],
  },
  {
    num: "03",
    icon: "PenTool",
    iconBg: "#f59e0b",
    title: "UI/UX Design",
    desc: "Results-driven design, incredible performance, and pixel-perfect builds.",
    chips: ["Figma", "Illustrative", "Brand"],
  },
  {
    num: "04",
    icon: "PlayCircle",
    iconBg: "#6c47ff",
    title: "Promo Video Ads",
    desc: "Scroll-stopping video ads that convert. Professional editing, motion design.",
    chips: ["After Effects", "Premiere", "CapCut"],
  },
  {
    num: "05",
    icon: "BarChart2",
    iconBg: "#ec4899",
    title: "Social Media Management & Content Creation",
    desc: "Focused on brand storytelling. Every post is intentional, every goal is brand awareness.",
    chips: ["Instagram", "TikTok", "LinkedIn"],
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

const galleryBase = (prefix: string): ContentGalleryItem[] =>
  Array.from({ length: 8 }, (_, i) => ({
    id: `${prefix}-${i}`,
    title: `Creative ${i + 1}`,
    variant: (i % 4) as 0 | 1 | 2 | 3,
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
    text: "Faadly understood our vision and shipped beyond expectations. Highly recommended.",
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
