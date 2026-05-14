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

export interface ServiceItem {
  num: string;
  icon: IconName;
  iconBg: string;
  title: string;
  desc: string;
  chips: string[];
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

export interface ContentGalleryItem {
  id: string;
  title: string;
  variant: 0 | 1 | 2 | 3;
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
