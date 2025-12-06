export interface Service {
  id: string;
  title: string;
  description: string;
  duration: string;
  price: number;
  image: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface Stat {
  value: string;
  label: string;
}