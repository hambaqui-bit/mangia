export type NavItem = {
  label: string;
  href: string;
};

export type GalleryItem = {
  type: "image" | "video";
  src: string;
  alt: string;
  title: string;
  kicker: string;
  span?: "wide" | "tall";
};

export type Testimonial = {
  quote: string;
  name: string;
  context: string;
};
