export type IconName =
  | "Code2"
  | "Smartphone"
  | "PenTool"
  | "PlayCircle"
  | "BarChart2"
  | "Layout"
  | "ShoppingCart"
  | "LayoutDashboard"
  | "Server"
  | "LineChart"
  | "Gauge"
  | "Cloud"
  | "CreditCard"
  | "MapPin"
  | "Sparkles";

export interface NavItem {
  id: string;
  label: string;
}

export interface BrandLogoItem {
  id: string;
  name: string;
  /** Short initials shown in the marquee tile */
  abbr: string;
}

export interface ServiceItem {
  num: string;
  icon: IconName;
  iconBg: string;
  title: string;
  desc: string;
  chips: string[];
  /** Small uppercase label, top-right of the card */
  kicker?: string;
  /** Muted one-line scope under the title */
  meta?: string;
  /** Short proof line below the chip row */
  outcome?: string;
  /** Use slightly smaller title for long headings */
  titleCompact?: boolean;
}

export interface WebsiteFeature {
  icon: IconName;
  title: string;
  desc: string;
}

export interface ProjectItem {
  id: number;
  category: string;
  title: string;
  desc: string;
  image: string;
  chips: string[];
  problem?: string[];
  solution?: string[];
  outcome?: string[];
  liveUrl?: string;
  techStack?: string[];
  visualOverviewImage?: string;
}

export interface MobileFeature {
  icon: IconName;
  title: string;
  desc: string;
  color: string;
}

export interface VideoItem {
  id: string;
  title: string;
  duration: string;
  thumbnail: string;
  href?: string;
}

export type ContentGalleryTheme =
  | "money"
  | "lifestyle"
  | "tips"
  | "promoPortrait"
  | "moneyBlue"
  | "dualPhone"
  | "darkLaunch"
  | "gradientBrand";

export interface ContentGalleryItem {
  id: string;
  title: string;
  variant: 0 | 1 | 2 | 3;
  theme: ContentGalleryTheme;
}

export interface TestimonialItem {
  id: string;
  platform: "FIVERR" | "UPWORK";
  text: string;
  name: string;
  handle: string;
  service: string;
  initials: string;
  avatarColor: string;
}
