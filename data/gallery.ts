import type { GalleryItem } from "@/types/site";

export const galleryItems: GalleryItem[] = [
  {
    type: "video",
    src: "/videos/video-1.mp4",
    alt: "Video editorial de la experiencia nocturna de Mangia",
    title: "La energia de la noche",
    kicker: "Motion",
    span: "wide",
  },
  {
    type: "image",
    src: "/images/gallery/gallery-1.jpg",
    alt: "Detalle atmosferico de Mangia",
    title: "Detalle de atmosfera",
    kicker: "Interior",
    span: "tall",
  },
  {
    type: "image",
    src: "/images/gallery/gallery-2.jpg",
    alt: "Momento social en Mangia",
    title: "Mesa social",
    kicker: "Experience",
  },
  {
    type: "image",
    src: "/images/gallery/gallery-3.jpg",
    alt: "Composicion gastronomica editorial de Mangia",
    title: "Cinematica gastronomica",
    kicker: "Food story",
  },
  {
    type: "image",
    src: "/images/interior/lounge.jpg",
    alt: "Interior lounge de Mangia",
    title: "Lounge oscuro",
    kicker: "Space",
    span: "wide",
  },
];
