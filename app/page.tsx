// ============================================
// MANGIA — PREMIUM GASTROBAR WEBSITE
// STUDIO QUALITY VERSION
// app/page.tsx
// ============================================

"use client";

import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import Lenis from "@studio-freight/lenis";

import {
  ArrowRight,
  MapPin,
  Menu,
  Phone,
  Star,
} from "lucide-react";

const featuredMenu = [
  {
    title: "Premier Burger",
    image: "/images/burgers/premier-burger.jpg",
    description:
      "Blend premium de res, cheddar madurado y salsa signature Mangia.",
  },
  {
    title: "Blue Margarita",
    image: "/images/cocktails/blue-margarita.jpg",
    
    description:
      "Coctelería frozen inspirada en rooftops premium de Miami.",
  },
  {
    title: "picadas  personal",
    image: "/images/picadas/picada-personal.jpg",
    
    description:
      "Corte premium acompañado de vegetales grillados y mantequilla especial.",
  },
];

const desserts = [
  {
    title: "Affogato",
    image: "/images/desserts/affogato.jpg",
  },
  {
    title: "Banana Split",
    image: "/images/desserts/banana.jpg",
  },
  {
    title: "Cholados",
    image: "/images/desserts/cholado.jpg",
  },
];

const gallery = [
  "/videos/video-1.mp4",
  "/images/gallery/gallery-1.jpg",
  "/images/gallery/gallery-2.jpg",
  "/images/gallery/gallery-3.jpg",
]

export default function HomePage() {
  const [scrolled, setScrolled] = useState(false);

useEffect(() => {

  const handleScroll = () => {
    setScrolled(window.scrollY > 60);
  };

  window.addEventListener("scroll", handleScroll);

  return () => window.removeEventListener("scroll", handleScroll);

}, []);
  return (
    <main className="bg-[#0A0A0A] text-[#F6F1E8] overflow-hidden selection:bg-[#C8A97E] selection:text-black">

      {/* ================= NAVBAR ================= */}
<header
  className={`fixed top-0 left-0 z-50 w-full transition-all duration-500 ${
    scrolled
      ? "bg-black/85 backdrop-blur-2xl border-b border-white/10 py-4"
      : "bg-transparent py-6"
  }`}
>

  <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

    {/* LOGO */}
    <div className="text-2xl md:text-3xl tracking-[0.35em] font-light">
      MANGIA
    </div>

    {/* NAV */}
    <nav className="hidden lg:flex items-center gap-10 uppercase text-xs tracking-[0.25em] text-[#DDD3C3]">

      <a
        href="#experience"
        className="hover:text-[#C8A97E] transition duration-300"
      >
        Experiencia
      </a>

      <a
        href="#cocktails"
        className="hover:text-[#C8A97E] transition duration-300"
      >
        Menú
      </a>

      <a
        href="#gallery"
        className="hover:text-[#C8A97E] transition duration-300"
      >
        Gallery
      </a>

      <a
        href="#reserve"
        className="hover:text-[#C8A97E] transition duration-300"
      >
        Reservas
      </a>

    </nav>

    {/* BOTON */}
    <a
      href="https://wa.me/573182294491"
      target="_blank"
      className="hidden lg:flex items-center gap-3 bg-[#C8A97E] text-black px-6 py-3 rounded-full hover:scale-105 transition duration-300"
    >

      Reservar por whastapp

      <ArrowRight size={18} />

    </a>

    {/* MOBILE */}
    <button className="lg:hidden">
      <Menu />
    </button>

  </div>

</header>
      

      {/* ================= HERO ================= */}

      <section className="relative h-screen flex items-center justify-center overflow-hidden">

      <motion.img
  src="/images/hero/hero-main.jpg"
  alt="Mangia Hero"
  initial={{ scale: 1.15 }}
  animate={{ scale: 1 }}
  transition={{ duration: 2.5, ease: "easeOut" }}
  className="absolute inset-0 w-full h-full object-cover object-center"
/>

        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(200,169,126,0.15),transparent_40%)]" />

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="relative z-10 text-center px-6"
        >

          <p className="uppercase tracking-[0.5em] text-[#C8A97E] text-xs md:text-sm mb-6">
            Premium Gastrobar & Ice Cream
          </p>

          <h1 className="text-6xl md:text-8xl xl:text-[11rem] font-light tracking-[0.25em] leading-none">
            MANGIA
          </h1>

          <p className="max-w-3xl mx-auto mt-8 text-[#DDD3C3] text-lg md:text-2xl leading-relaxed">
            Gastronomía premium, nightlife elegante y experiencias visuales diseñadas para impactar.
          </p>

          <div className="flex flex-col md:flex-row justify-center gap-5 mt-14">

            <a
  href="#reserve"
  className="bg-[#C8A97E] text-black px-10 py-4 rounded-full hover:scale-105 transition-all duration-500 inline-flex items-center justify-center"
>
  Reservar Mesa
</a>

            <a
  href="#cocktails"
  className="border border-white/15 backdrop-blur-xl bg-white/5 px-10 py-4 rounded-full hover:bg-white hover:text-black transition-all duration-500 inline-flex items-center justify-center"
>
  Ver Menú
</a>

          </div>

        </motion.div>

      </section>

      {/* ================= EXPERIENCE ================= */}

      <section
        id="experience"
        className="max-w-7xl mx-auto px-6 py-32 grid lg:grid-cols-2 gap-24 items-center"
      >

        <div>

          <p className="uppercase tracking-[0.45em] text-[#C8A97E] text-xs mb-6">
            La Experiencia Mangia
          </p>

          <h2 className="text-5xl md:text-7xl font-light leading-tight mb-8">
            Elegancia, gastronomía y nightlife premium.
          </h2>

          <p className="text-[#CFC7BB] text-lg leading-loose">
            Mangia combina cocina gourmet, coctelería y una heladería visualmente irresistible dentro de un ambiente cinematográfico diseñado para redes sociales.
          </p>

          <div className="flex gap-8 mt-12">

           

          </div>

        </div>

        <div className="relative group overflow-hidden rounded-[40px]">

          <img
            src="/images/interior/lounge.jpg"
            alt="Mangia Interior"
            className="h-[750px] w-full object-cover group-hover:scale-105 transition duration-[2000ms]"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

        </div>

      </section>

      {/* ================= FEATURED MENU ================= */}

      <section id="menu" className="max-w-7xl mx-auto px-6 py-32">

        <div className="mb-20 text-center">

          <p className="uppercase tracking-[0.45em] text-[#C8A97E] text-xs mb-4">
            Menú Premium
          </p>

          <h2 className="text-5xl md:text-7xl font-light">
            Sabores diseñados para impresionar.
          </h2>

        </div>

        <div className="grid lg:grid-cols-3 gap-8">

          {featuredMenu.map((item, index) => (

            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              className="group relative rounded-[35px] overflow-hidden border border-white/5"
            >

              <img
                src={item.image}
                alt={item.title}
                className="w-full h-[620px] object-cover group-hover:scale-110 transition duration-[1600ms]"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />

              <div className="absolute bottom-0 p-8">

                <h3 className="text-4xl font-light mb-4">
                  {item.title}
                </h3>

                <p className="text-[#DDD3C3] leading-relaxed mb-5">
                  {item.description}
                </p>

                <p className="text-[#C8A97E] text-2xl">
                  
                </p>

              </div>

            </motion.div>

          ))}

        </div>

      </section>

      {/* ================= DESSERT EXPERIENCE ================= */}

      <section className="bg-[#111111] py-32 overflow-hidden">

        <div className="max-w-7xl mx-auto px-6">

          <div className="mb-20">

            <p className="uppercase tracking-[0.45em] text-[#C8A97E] text-xs mb-4">
              Heladería Gourmet
            </p>

            <h2 className="text-5xl md:text-7xl font-light max-w-5xl leading-tight">
              Postres cinematográficos diseñados para enamorar visualmente.
            </h2>

          </div>

          <div className="grid lg:grid-cols-3 gap-8">

            {desserts.map((item, index) => (

              <motion.div
                key={index}
                whileHover={{ scale: 1.02 }}
                className="relative overflow-hidden rounded-[40px]"
              >

                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-[760px] object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                <div className="absolute bottom-0 w-full backdrop-blur-2xl bg-black/20 border-t border-white/10 p-8">

                  <h3 className="text-4xl font-light tracking-wide">
                    {item.title}
                  </h3>

                </div>

              </motion.div>

            ))}

          </div>

        </div>

      </section>
{/* ================= STORYTELLING ================= */}

<section className="relative h-[110vh] overflow-hidden">

  {/* IMAGE */}
  <motion.img
    src="/images/interior/storytelling.jpg"
    alt="Mangia Experience"
    initial={{ scale: 1.15 }}
    whileInView={{ scale: 1 }}
    transition={{ duration: 2 }}
    viewport={{ once: true }}
    className="absolute inset-0 w-full h-full object-cover"
  />

  {/* DARK OVERLAY */}
  <div className="absolute inset-0 bg-black/65" />

  {/* GOLD LIGHT */}
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(200,169,126,0.18),transparent_45%)]" />

  {/* CONTENT */}
  <div className="relative z-10 h-full flex items-center justify-center text-center px-6">

    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2 }}
      viewport={{ once: true }}
      className="max-w-5xl"
    >

      <p className="uppercase tracking-[0.45em] text-[#C8A97E] text-sm mb-8">
        Mangia Experience
      </p>

      <h2 className="text-5xl md:text-7xl xl:text-8xl font-light leading-tight mb-10">

        No solo servimos comida.

        <span className="block mt-4 text-[#C8A97E]">
          Creamos experiencias.
        </span>

      </h2>

      <p className="text-white/70 text-xl md:text-2xl leading-relaxed max-w-3xl mx-auto">
        Gastronomía premium, cocktails y nightlife elegante
        diseñados para convertir cada visita en un momento memorable.
      </p>

    </motion.div>

  </div>

</section>
      {/* ================= GALLERY ================= */}

      <section id="gallery" className="max-w-7xl mx-auto px-6 py-32">

        <div className="mb-20 text-center">

  <p className="uppercase tracking-[0.45em] text-[#C8A97E] text-xs mb-4">
    Editorial Gallery
  </p>

  <h2 className="text-5xl md:text-7xl font-light">
    Storytelling Mangia.
  </h2>

  <p className="text-white/60 max-w-2xl mx-auto text-lg mt-6">
    Una experiencia visual diseñada para transformar cada noche
    en un momento memorable.
  </p>

</div>

        

        <div className="grid md:grid-cols-2 xl:grid-cols-3gap-6">

         {gallery.map((item, index) => (
  <div
    key={index}
    className="overflow-hidden rounded-[35px] group relative"
  >
    {item.endsWith(".mp4") ? (
      <video
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-[520px] object-cover group-hover:scale-105 transition duration-700"
      >
        <source src={item} type="video/mp4" />
      </video>
    ) : (
      <img
        src={item}
        alt="Mangia Gallery"
        className="w-full h-[520px] object-cover group-hover:scale-105 transition duration-700"
      />
    )}

    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

    <div className="absolute bottom-8 left-8 z-10">
      <p className="uppercase tracking-[0.35em] text-[#C8A97E] text-xs mb-2">
        Mangia Story
      </p>

      <h3 className="text-2xl font-light text-white">
        Antes y después.
      </h3>
    </div>
  </div>
))
}
     
   


        </div>

      </section>
{/* ================= LOCATION ================= */}

<section className="py-32 bg-[#0A0A0A] text-white">

  <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">

    {/* INFO */}

    <div>

      <p className="tracking-[0.35em] text-[#C8A97E] text-sm mb-4">
        VISÍTANOS
      </p>

      <h2 className="text-5xl md:text-7xl font-light mb-8">
        Vive Mangia.
      </h2>

      <p className="text-white/70 text-lg leading-relaxed mb-10">
        Gastronomía premium, cocktails y experiencias visuales en un ambiente elegante diseñado para noches memorables.
      </p>

      <div className="space-y-6 text-white/80">

        <div>
          <p className="text-[#C8A97E] mb-2 uppercase tracking-[0.25em] text-sm">
            Dirección
          </p>

          <p className="text-lg">
            Cra 12 # 3-90, Aguachica - Cesar 
             
          </p>
        </div>

        <div>
          <p className="text-[#C8A97E] mb-2 uppercase tracking-[0.25em] text-sm">
            Horarios
          </p>

          <p className="text-lg">
            Jueves a Martes — 5:00 PM a 10:30 PM
          </p>
        </div>

      </div>

      <a
        href="https://maps.google.com"
        target="_blank"
        className="inline-flex items-center gap-3 mt-10 bg-[#C8A97E] text-black px-8 py-4 rounded-full hover:scale-105 transition-all duration-500"
      >
        Abrir en Google Maps
      </a>

    </div>

    {/* MAP */}

    <div className="overflow-hidden rounded-[32px] border border-white/10 h-[500px]">

      <iframe
         src="https://www.google.com/maps/embed?pb=!4v1779737981404!6m8!1m7!1sJkifzCe6nM7Uc8uz78bkfQ!2m2!1d8.310255331778146!2d-73.62259806350123!3f259.9476134445425!4f-3.8623751776458874!5f0.7820865974627469"
  width="100%"
  height="100%"
  style={{ border: 0 }}
  allowFullScreen
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/>
      

    </div>

  </div>

</section>
      {/* ================= RESERVATIONS ================= */}

      <section id="reserve" className="bg-[#111111] py-32">

        <div className="max-w-4xl mx-auto px-6">

          <div className="text-center mb-16">

            <p className="uppercase tracking-[0.45em] text-[#C8A97E] text-xs mb-4">
              Reservas
            </p>

            <h2 className="text-5xl md:text-7xl font-light">
              Reserva tu experiencia.
            </h2>

          </div>

          <form className="backdrop-blur-2xl bg-white/5 border border-white/10 rounded-[40px] p-10 space-y-6">

            <input
              type="text"
              placeholder="Nombre"
              className="w-full bg-black/40 border border-white/10 rounded-2xl px-6 py-5 outline-none focus:border-[#C8A97E]"
            />

            <div className="grid md:grid-cols-2 gap-6">

              <input
                type="date"
                className="bg-black/40 border border-white/10 rounded-2xl px-6 py-5 outline-none focus:border-[#C8A97E]"
              />

              <select
  className="bg-black/40 border border-white/10 rounded-2xl px-6 py-5 text-white outline-none focus:border-[#C8A97E] transition-all duration-300"
>

  <option value="">
    Selecciona una hora
  </option>

  <option>
    5:00 PM
  </option>

  <option>
    6:00 PM
  </option>

  <option>
    7:00 PM
  </option>

  <option>
    8:00 PM
  </option>

  <option>
    9:00 PM
  </option>

  <option>
    10:00 PM
  </option>

</select>
            </div>

            <input
              type="number"
              placeholder="Número de personas"
              className="w-full bg-black/40 border border-white/10 rounded-2xl px-6 py-5 outline-none focus:border-[#C8A97E]"
            />

            <textarea
              rows={5}
              placeholder="Ocasión especial"
              className="w-full bg-black/40 border border-white/10 rounded-2xl px-6 py-5 outline-none focus:border-[#C8A97E]"
            />

            <button className="w-full bg-[#C8A97E] text-black py-5 rounded-2xl hover:scale-[1.01] transition duration-300 font-medium">
              Reservar Ahora
            </button>

          </form>

        </div>

      </section>

      {/* ================= CONTACT ================= */}

      <section
  id="reserve"
  className="max-w-7xl mx-auto px-6 py-32"
>

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          <div>

            <p className="uppercase tracking-[0.45em] text-[#C8A97E] text-xs mb-4">
              Contacto
            </p>

            <h2 className="text-5xl md:text-7xl font-light mb-8 leading-tight">
              Vive la experiencia Mangia.
            </h2>

            <p className="text-[#CFC7BB] text-lg leading-loose max-w-2xl">
              Descubre eventos, experiencias gastronómicas y una propuesta visual premium creada para convertirse en una de las marcas más fuertes de su zona.
            </p>

          </div>

          <div className="space-y-6">

            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-[30px] p-8 flex items-center gap-5 hover:border-[#C8A97E]/40 transition-all duration-300">
              <Phone className="text-[#C8A97E]" />
              <p>318 229 4491</p>
            </div>

            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-[30px] p-8 flex items-center gap-5 hover:border-[#C8A97E]/40 transition-all duration-300">
              
              <p>@mangia.gastrobar</p>
            </div>

            <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-[30px] p-8 flex items-center gap-5 hover:border-[#C8A97E]/40 transition-all duration-300">
              <MapPin className="text-[#C8A97E]" />
              <p>Aguachica — Cesar</p>
            </div>

          </div>

        </div>

      </section>


{/* ================= COCKTAILS ================= */}

<section
  id="cocktails"
  className="py-32 bg-black text-white"
>

  <div className="max-w-7xl mx-auto px-6">

    {/* HEADER */}
    <div className="mb-20 text-center">

      <p className="tracking-[0.35em] text-[#C8A97E] text-sm mb-4">
        SIGNATURE COCKTAILS
      </p>

      <h2 className="text-5xl md:text-7xl font-light mb-6">
        Cocktails
      </h2>

      <p className="text-white/60 max-w-2xl mx-auto text-lg leading-relaxed">
        Mixología premium diseñada para experiencias visuales,
        nightlife elegante y sabores memorables.
      </p>

    </div>

    {/* GRID */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

      {/* BLUE MARGARITA */}
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="relative overflow-hidden rounded-[32px] group border border-white/5 hover:border-[#C8A97E]/30 transition-all duration-700"
      >

        <img
          src="/images/cocktails/blue-margarita.jpg"
          alt="Blue Margarita"
          className="w-full h-[650px] object-cover group-hover:scale-110 transition-all duration-[1800ms] ease-out"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

        <div className="absolute bottom-0 p-10">

          <h3 className="text-4xl font-light mb-3">
            Blue Margarita
          </h3>

          <p className="text-white/70 mb-4 text-lg">
            Tequila, arándano, limón y soda.
          </p>

          <span className="text-[#C8A97E] text-2xl">
            $20.000
          </span>

        </div>

      </motion.div>

      {/* FROZEN DAIQUIRI */}
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="relative overflow-hidden rounded-[32px] group border border-white/5 hover:border-[#C8A97E]/30 transition-all duration-700"
      >

        <img
          src="/images/cocktails/frozen-daiquiri.jpg"
          alt="Frozen Daiquiri"
          className="w-full h-[650px] object-cover group-hover:scale-110 transition-all duration-[1800ms] ease-out"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

        <div className="absolute bottom-0 p-10">

          <h3 className="text-4xl font-light mb-3">
            Frozen Daiquiri
          </h3>

          <p className="text-white/70 mb-4 text-lg">
            Ron blanco, fresa, limón e hielo.
          </p>

          <span className="text-[#C8A97E] text-2xl">
            $20.000
          </span>

        </div>

      </motion.div>

      {/* PIÑA COLADA */}
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="relative overflow-hidden rounded-[32px] group border border-white/5 hover:border-[#C8A97E]/30 transition-all duration-700"
      >

        <img
          src="/images/cocktails/pina-colada.jpg"
          alt="Piña Colada"
          className="w-full h-[650px] object-cover group-hover:scale-110 transition-all duration-[1800ms] ease-out"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

        <div className="absolute bottom-0 p-10">

          <h3 className="text-4xl font-light mb-3">
            Piña Colada
          </h3>

          <p className="text-white/70 mb-4 text-lg">
            Ron blanco, piña, leche condensada y crema de coco.
          </p>

          <span className="text-[#C8A97E] text-2xl">
            $20.000
          </span>

        </div>

      </motion.div>

      {/* MIMOSA */}
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="relative overflow-hidden rounded-[32px] group border border-white/5 hover:border-[#C8A97E]/30 transition-all duration-700"
      >

        <img
          src="/images/cocktails/mimosa.jpg"
          alt="Mimosa"
          className="w-full h-[650px] object-cover group-hover:scale-110 transition-all duration-[1800ms] ease-out"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

        <div className="absolute bottom-0 p-10">

          <h3 className="text-4xl font-light mb-3">
            Mimosa
          </h3>

          <p className="text-white/70 mb-4 text-lg">
            Vino espumoso, jugo de naranja y cereza.
          </p>

          <span className="text-[#C8A97E] text-2xl">
            $17.000
          </span>

        </div>

      </motion.div>

    </div>

  </div>

</section>
{/* ================= ENTRADAS ================= */}

<section className="py-32 px-6 bg-[#050505]">

  <div className="max-w-7xl mx-auto">

    {/* TITULO */}
    <div className="mb-20 text-center">

      <p className="text-[#C8A97E] tracking-[0.35em] uppercase text-sm mb-4">
        Signature Starters
      </p>

      <h2 className="text-5xl md:text-7xl font-light mb-6">
        Entradas
      </h2>

      <p className="text-white/60 max-w-4xl mx-auto text-lg">
        Sabores diseñados para abrir la experiencia Mangia
        con una presentación premium y gourmet.
      </p>

    </div>

    {/* GRID */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

      {/* CEVICHE DE CHICHARRÓN */}
      <div className="relative overflow-hidden rounded-[32px] group">

        <img
          src="/images/entradas/ceviche-chicharron.jpg"
          alt="Ceviche de Chicharrón"
          className="w-full h-[420px] object-cover group-hover:scale-105 transition duration-700"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

        <div className="absolute bottom-0 p-10">

          <h3 className="text-4xl font-light mb-3">
            Ceviche de Chicharrón
          </h3>

          <p className="text-white/70 mb-4 text-lg">
            Chicharrón crocante en ceviche cítrico con vegetales frescos,
            cilantro y hummus de remolacha.
          </p>

          <span className="text-[#C8A97E] text-2xl">
            $26.000
          </span>

        </div>

      </div>

      {/* CHORIZO ORIGEN */}
      <div className="relative overflow-hidden rounded-[32px] group">

        <img
          src="/images/entradas/chorizo-origen.jpg"
          alt="Chorizo Origen"
          className="w-full h-[420px] object-cover group-hover:scale-105 transition duration-700"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

        <div className="absolute bottom-0 p-10">

          <h3 className="text-4xl font-light mb-3">
            Chorizo Origen
          </h3>

          <p className="text-white/70 mb-4 text-lg">
            Chorizo melado y dorado acompañado
            de papas criollas decoradas con cilantro.
          </p>

          <span className="text-[#C8A97E] text-2xl">
            $25.000
          </span>

        </div>

      </div>

      {/* MINI EMPANADAS */}
      <div className="relative overflow-hidden rounded-[32px] group">

        <img
          src="/images/entradas/mini-empanadas.jpg"
          alt="Mini Empanadas"
          className="w-full h-[420px] object-cover group-hover:scale-105 transition duration-700"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

        <div className="absolute bottom-0 p-10">

          <h3 className="text-4xl font-light mb-3">
            Mini Empanadas
          </h3>

          <p className="text-white/70 mb-4 text-lg">
            5 mini empanadas de pulled pork
            acompañadas de ají de maní de la casa.
          </p>

          <span className="text-[#C8A97E] text-2xl">
            $22.000
          </span>

        </div>

      </div>

    </div>

  </div>

</section>
{/* ================= BURGERS ================= */}
<section className="py-32 px-6 bg-[#050505]">

  <div className="max-w-7xl mx-auto">

    {/* TITULO */}
    <div className="mb-20 text-center">

      <p className="text-[#C8A97E] tracking-[0.35em] uppercase text-sm mb-4">
        Signature Burgers
      </p>

      <h2 className="text-4xl font-light mb-6">
        Burgers
      </h2>

      <p className="text-white/60 max-w-4xl mx-auto text-lg">
        Blend premium, ingredientes artesanales y una experiencia diseñada para impactar.
      </p>

    </div>

    {/* GRID */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

      {/* PREMIER */}
      <div className="relative overflow-hidden rounded-[32px] group">

        <img
          src="/images/burgers/premier-burger.jpg"
          alt="Premier Burger"
          className="w-full h-[320px] object-cover group-hover:scale-105 transition duration-700"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

        <div className="absolute bottom-0 p-10">

          <h3 className="text-5xl font-light mb-3">
            Premier
          </h3>

          <p className="text-white/70 mb-4 text-lg">
            Carne premium, pollo desmechado, queso mozzarella,
            mermelada de tocineta y salsa signature.
          </p>

          <span className="text-[#C8A97E] text-2xl">
            $35.000
          </span>

        </div>

      </div>

      {/* PULLED PORK */}
      <div className="relative overflow-hidden rounded-[32px] group">

        <img
          src="/images/burgers/pulled-pork.jpg"
          alt="Pulled Pork"
          className="w-full h-[320px] object-cover group-hover:scale-105 transition duration-700"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

        <div className="absolute bottom-0 p-10">

          <h3 className="text-5xl font-light mb-3">
            Pulled Pork
          </h3>

          <p className="text-white/70 mb-4 text-lg">
            Carne jugosa, pulled pork artesanal,
            chimichurri, queso premium y cebolla crispy.
          </p>

          <span className="text-[#C8A97E] text-2xl">
            $36.000
          </span>

        </div>

      </div>

      {/* CHORI BURGER */}
      <div className="relative overflow-hidden rounded-[32px] group">

        <img
          src="/images/burgers/chori-burger.jpg"
          alt="Chori Burger"
          className="w-full h-[320px] object-cover group-hover:scale-105 transition duration-700"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

        <div className="absolute bottom-0 p-10">

          <h3 className="text-5xl font-light mb-3">
            Chori Burger
          </h3>

          <p className="text-white/70 mb-4 text-lg">
            Carne premium, chorizo artesanal,
            chimichurri y queso cheddar.
          </p>

          <span className="text-[#C8A97E] text-2xl">
            $34.000
          </span>

        </div>

      </div>
{/* DOBLE CARNE */}
<div className="relative overflow-hidden rounded-[32px] group">

  <img
    src="/images/burgers/doble-carne.jpg"
    alt="Doble Carne"
    className="w-full h-[320px] object-cover group-hover:scale-105 transition duration-700"
  />

  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

  <div className="absolute bottom-0 p-10">

    <h3 className="text-5xl font-light mb-3">
      Doble Carne
    </h3>

    <p className="text-white/70 mb-4 text-lg">
      Doble carne 240gr, triple tocineta crocante,
      cebolla crispy y salsa signature.
    </p>

    <span className="text-[#C8A97E] text-2xl">
      $39.000
    </span>

  </div>

</div>
      {/* CLÁSICA */}
      <div className="relative overflow-hidden rounded-[32px] group">

        <img
          src="/images/burgers/clasica-burger.jpg"
          alt="Clásica"
          className="w-full h-[320px] object-cover group-hover:scale-105 transition duration-700"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

        <div className="absolute bottom-0 p-10">

          <h3 className="text-5xl font-light mb-3">
            Clásica
          </h3>

          <p className="text-white/70 mb-4 text-lg">
            Carne jugosa, mozzarella,
            cheddar y salsa de la casa.
          </p>

          <span className="text-[#C8A97E] text-2xl">
            $24.000
          </span>

        </div>

      </div>

    </div>

  </div>

</section>
{/* ================= PAPAS ================= */}

<section className="py-32 px-6 bg-black">

  <div className="max-w-7xl mx-auto">

    {/* TITULO */}
    <div className="mb-20 text-center">

      <p className="text-[#C8A97E] tracking-[0.35em] uppercase text-sm mb-4">
        Signature Fries
      </p>

      <h2 className="text-4xl font-light mb-6">
        Papas
      </h2>

      <p className="text-white/60 max-w-4xl mx-auto text-lg">
        Papas cargadas con ingredientes premium, salsas artesanales y sabores intensos.
      </p>

    </div>

    {/* GRID */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

      {/* PAPAS PULLED PORK */}
      <div className="relative overflow-hidden rounded-[32px] group">

        <img
          src="/images/papas/papas-pulled-pork.jpg"
          alt="Papas Pulled Pork"
          className="w-full h-[420px] object-cover group-hover:scale-105 transition duration-700"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

        <div className="absolute bottom-0 p-10">

          <h3 className="text-4xl font-light mb-3">
            Pulled Pork
          </h3>

          <p className="text-white/70 mb-4 text-lg">
            Papas francesas con pulled pork, queso cheddar,
            tocineta crispy, chorizo y salsa de la casa.
          </p>

          <span className="text-[#C8A97E] text-2xl">
            $28.000
          </span>

        </div>

      </div>

      {/* PAPAS POLLO */}
      <div className="relative overflow-hidden rounded-[32px] group">

        <img
          src="/images/papas/papas-pollo.jpg"
          alt="Papas Pollo"
          className="w-full h-[420px] object-cover group-hover:scale-105 transition duration-700"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

        <div className="absolute bottom-0 p-10">

          <h3 className="text-4xl font-light mb-3">
            Papas Pollo
          </h3>

          <p className="text-white/70 mb-4 text-lg">
            Pollo desmechado, maíz, queso fundido,
            cebolla crispy y salsa signature Mangia.
          </p>

          <span className="text-[#C8A97E] text-2xl">
            $23.000
          </span>

        </div>

      </div>

    </div>

  </div>

</section>
{/* ================= PERROS ================= */}

<section className="py-32 px-6 bg-[#050505]">

  <div className="max-w-7xl mx-auto">

    {/* TITULO */}
    <div className="mb-20 text-center">

      <p className="text-[#C8A97E] tracking-[0.35em] uppercase text-sm mb-4">
        Signature Hot Dogs
      </p>

      <h2 className="text-4xl font-light mb-6">
        Perros
      </h2>

      <p className="text-white/60 max-w-4xl mx-auto text-lg">
        Perros premium cargados de sabor, toppings artesanales y combinaciones intensas.
      </p>

    </div>

    {/* GRID */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

      {/* AMERICANO */}
      <div className="relative overflow-hidden rounded-[32px] group">

        <img
          src="/images/perros/perro-americano.jpg"
          alt="Perro Americano"
          className="w-full h-[420px] object-cover group-hover:scale-105 transition duration-700"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

        <div className="absolute bottom-0 p-10">

          <h3 className="text-4xl font-light mb-3">
            Americano
          </h3>

          <p className="text-white/70 mb-4 text-lg">
            Salchicha americana, queso fundido,
            papa ripio, cebolla crispy y salsa de la casa.
          </p>

          <span className="text-[#C8A97E] text-2xl">
            $18.000
          </span>

        </div>

      </div>

      {/* POLLO */}
      <div className="relative overflow-hidden rounded-[32px] group">

        <img
          src="/images/perros/perro-pollo.jpg"
          alt="Perro Pollo"
          className="w-full h-[420px] object-cover group-hover:scale-105 transition duration-700"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

        <div className="absolute bottom-0 p-10">

          <h3 className="text-4xl font-light mb-3">
            Pollo
          </h3>

          <p className="text-white/70 mb-4 text-lg">
            Pollo desmechado, tocineta crocante,
            queso fundido y cebolla crispy artesanal.
          </p>

          <span className="text-[#C8A97E] text-2xl">
            $27.000
          </span>

        </div>

      </div>

      {/* PULLED PORK */}
      <div className="relative overflow-hidden rounded-[32px] group">

        <img
          src="/images/perros/perro-pulled-pork.jpg"
          alt="Perro Pulled Pork"
          className="w-full h-[420px] object-cover object-center scale-125 group-hover:scale-[1.32] transition duration-700"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

        <div className="absolute bottom-0 p-10">

          <h3 className="text-4xl font-light mb-3">
            Pulled Pork
          </h3>

          <p className="text-white/70 mb-4 text-lg">
            Pulled pork artesanal, tocineta crocante,
            queso fundido y salsa signature Mangia.
          </p>

          <span className="text-[#C8A97E] text-2xl">
            $28.000
          </span>

        </div>

      </div>

    </div>

  </div>

</section>
{/* ================= PICADAS ================= */}
<section className="py-32 px-6 bg-[#050505]">

  <div className="max-w-7xl mx-auto">

    <div className="mb-20 text-center">

      <p className="text-[#C8A97E] tracking-[0.35em] uppercase text-sm mb-4">
        Signature Platters
      </p>

      <h2 className="text-4xl font-light mb-6">
        Picadas
      </h2>

      <p className="text-white/60 max-w-4xl mx-auto text-lg">
        Cortes premium, sabores criollos y una experiencia perfecta para compartir.
      </p>

    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

      {/* PICADA PERSONAL */}
      <div className="relative overflow-hidden rounded-[32px] group">

        <img
          src="/images/picadas/picada-personal.jpg"
          alt="Picada Personal"
          className="w-full h-[420px] object-cover group-hover:scale-105 transition duration-700"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

        <div className="absolute bottom-0 p-10">

          <h3 className="text-5xl font-light mb-3">
            Picada Personal
          </h3>

          <p className="text-white/70 mb-4 text-lg">
            Carne asada, costilla BBQ, chorizo artesanal,
            chicharrón, queso frito y papa criolla casco.
          </p>

          <span className="text-[#C8A97E] text-2xl">
            $40.000
          </span>

        </div>

      </div>

      {/* PICADA CRIOLLA */}
      <div className="relative overflow-hidden rounded-[32px] group">

        <img
          src="/images/picadas/picada-criolla.jpg"
          alt="Picada Criolla x4"
          className="w-full h-[420px] object-cover group-hover:scale-105 transition duration-700"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

        <div className="absolute bottom-0 p-10">

          <h3 className="text-5xl font-light mb-3">
            Picada Criolla x4
          </h3>

          <p className="text-white/70 mb-4 text-lg">
            Mix premium de carnes, morcilla, costilla BBQ,
            bites de queso, plátano y chimichurri artesanal.
          </p>

          <span className="text-[#C8A97E] text-2xl">
            $115.000
          </span>

        </div>

      </div>

    </div>

  </div>

</section>
{/* ================= CARNES ================= */}

<section className="py-32 px-6 bg-black">

  <div className="max-w-7xl mx-auto">

    {/* TITULO */}
    <div className="mb-20 text-center">

      <p className="text-[#C8A97E] tracking-[0.35em] uppercase text-sm mb-4">
        Premium Cuts
      </p>

      <h2 className="text-5xl md:text-7xl font-light mb-6">
        Carnes
      </h2>

      <p className="text-white/60 max-w-4xl mx-auto text-lg">
        Cortes premium preparados al fuego con acompañamientos artesanales
        y una presentación diseñada para impresionar.
      </p>

    </div>

    {/* GRID */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

      {/* LOMO SALTADO */}
      <div className="relative overflow-hidden rounded-[32px] group">

        <img
          src="/images/carnes/lomo-saltado.jpg"
          alt="Lomo Saltado"
          className="w-full h-[500px] object-cover group-hover:scale-105 transition duration-700"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

        <div className="absolute bottom-0 p-10">

          <h3 className="text-5xl font-light mb-3">
            Lomo Saltado
          </h3>

          <p className="text-white/70 mb-4 text-lg">
            310gr de lomo salteado al fuego con vegetales frescos,
            notas ahumadas y papa criolla artesanal.
          </p>

          <span className="text-[#C8A97E] text-2xl">
            $49.000
          </span>

        </div>

      </div>

      {/* PUNTA GORDA */}
      <div className="relative overflow-hidden rounded-[32px] group">

        <img
          src="/images/carnes/punta-gorda.jpg"
          alt="Punta Gorda"
          className="w-full h-[500px] object-cover group-hover:scale-105 transition duration-700"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

        <div className="absolute bottom-0 p-10">

          <h3 className="text-5xl font-light mb-3">
            Punta Gorda
          </h3>

          <p className="text-white/70 mb-4 text-lg">
            Corte jugoso de res acompañado de papa francesa,
            croqueta de yuca, maduro asado y ensalada fresca.
          </p>

          <span className="text-[#C8A97E] text-2xl">
            $48.000
          </span>

        </div>

      </div>

      {/* BABY BEEF */}
      <div className="relative overflow-hidden rounded-[32px] group">

        <img
          src="/images/carnes/baby-beef.jpg"
          alt="Baby Beef"
          className="w-full h-[500px] object-cover group-hover:scale-105 transition duration-700"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

        <div className="absolute bottom-0 p-10">

          <h3 className="text-5xl font-light mb-3">
            Baby Beef
          </h3>

          <p className="text-white/70 mb-4 text-lg">
            310gr de lomo fino sellado al fuego acompañado
            de papa francesa, croqueta de yuca y ensalada.
          </p>

          <span className="text-[#C8A97E] text-2xl">
            $50.000
          </span>

        </div>

      </div>

    </div>

  </div>

</section>
{/* ================= POLLO ================= */}

<section className="py-32 px-6 bg-black">

  <div className="max-w-7xl mx-auto">

    {/* TITULO */}
    <div className="mb-20 text-center">

      <p className="text-[#C8A97E] tracking-[0.35em] uppercase text-sm mb-4">
        Signature Chicken
      </p>

      <h2 className="text-4xl font-light mb-6">
        Pollo
      </h2>

      <p className="text-white/60 max-w-4xl mx-auto text-lg">
        Preparaciones premium con sabores intensos, cremosos y acabados artesanales.
      </p>

    </div>

    {/* GRID */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

      {/* PECHUGA A LA PLANCHA */}
      <div className="relative overflow-hidden rounded-[32px] group">

        <img
          src="/images/pollo/pechuga-plancha.jpg"
          alt="Pechuga a la Plancha"
          className="w-full h-[420px] object-cover group-hover:scale-105 transition duration-700"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

        <div className="absolute bottom-0 p-10">

          <h3 className="text-4xl font-light mb-3">
            Pechuga a la Plancha
          </h3>

          <p className="text-white/70 mb-4 text-lg">
            320gr de pechuga de pollo a la plancha acompañada
            de papa francesa y ensalada fresca.
          </p>

          <span className="text-[#C8A97E] text-2xl">
            $32.000
          </span>

        </div>

      </div>

      {/* GRATINADA */}
      <div className="relative overflow-hidden rounded-[32px] group">

        <img
          src="/images/pollo/pechuga-gratinada.jpg"
          alt="Pechuga Gratinada"
          className="w-full h-[420px] object-cover group-hover:scale-105 transition duration-700"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

        <div className="absolute bottom-0 p-10">

          <h3 className="text-4xl font-light mb-3">
            Gratinada Champiñones
          </h3>

          <p className="text-white/70 mb-4 text-lg">
            Pechuga con salsa bechamel, champiñones y queso fundido,
            acompañada de papas y ensalada.
          </p>

          <span className="text-[#C8A97E] text-2xl">
            $42.000
          </span>

        </div>

      </div>

      {/* CORDON BLUE */}
      <div className="relative overflow-hidden rounded-[32px] group">

        <img
          src="/images/pollo/cordon-blue.jpg"
          alt="Cordon Blue"
          className="w-full h-[420px] object-cover group-hover:scale-105 transition duration-700"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

        <div className="absolute bottom-0 p-10">

          <h3 className="text-4xl font-light mb-3">
            Cordon Blue
          </h3>

          <p className="text-white/70 mb-4 text-lg">
            Pechuga rellena de jamón y queso,
            envuelta en tocineta y bañada en salsa especial.
          </p>

          <span className="text-[#C8A97E] text-2xl">
            $42.000
          </span>

        </div>

      </div>

    </div>

  </div>

</section>
{/* ================= CERDO ================= */}

<section className="py-32 px-6 bg-[#050505]">

  <div className="max-w-7xl mx-auto">

    {/* TITULO */}
    <div className="mb-20 text-center">

      <p className="text-[#C8A97E] tracking-[0.35em] uppercase text-sm mb-4">
        Signature Pork
      </p>

      <h2 className="text-4xl font-light mb-6">
        Cerdo
      </h2>

      <p className="text-white/60 max-w-4xl mx-auto text-lg">
        Cortes jugosos, glaseados artesanales y preparaciones premium a la parrilla.
      </p>

    </div>

    {/* GRID */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

      {/* COSTILLAS BBQ */}
      <div className="relative overflow-hidden rounded-[32px] group">

        <img
          src="/images/cerdo/costillas-bbq.jpg"
          alt="Costillas de Cerdo"
          className="w-full h-[420px] object-cover group-hover:scale-105 transition duration-700"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

        <div className="absolute bottom-0 p-10">

          <h3 className="text-4xl font-light mb-3">
            Costillas BBQ
          </h3>

          <p className="text-white/70 mb-4 text-lg">
            460gr de costillas glaseadas en salsa BBQ artesanal,
            acompañadas de papas y ensalada fresca.
          </p>

          <span className="text-[#C8A97E] text-2xl">
            $41.000
          </span>

        </div>

      </div>

      {/* LOMO DE CERDO */}
      <div className="relative overflow-hidden rounded-[32px] group">

        <img
          src="/images/cerdo/lomo-cerdo-grill.jpg"
          alt="Lomo de Cerdo al Grill"
          className="w-full h-[420px] object-cover group-hover:scale-105 transition duration-700"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

        <div className="absolute bottom-0 p-10">

          <h3 className="text-4xl font-light mb-3">
            Lomo Cerdo Grill
          </h3>

          <p className="text-white/70 mb-4 text-lg">
            Lomo de cerdo a la brasa acompañado de papa francesa,
            croqueta de yuca y ensalada fresca.
          </p>

          <span className="text-[#C8A97E] text-2xl">
            $39.000
          </span>

        </div>

      </div>

    </div>

  </div>

</section>
{/* ================= MENU INFANTIL ================= */}

<section className="py-32 px-6 bg-black">

  <div className="max-w-7xl mx-auto">

    {/* TITULO */}
    <div className="mb-20 text-center">

      <p className="text-[#C8A97E] tracking-[0.35em] uppercase text-sm mb-4">
        Kids Menu
      </p>

      <h2 className="text-4xl font-light mb-6">
        Infantil
      </h2>

      <p className="text-white/60 max-w-4xl mx-auto text-lg">
        Opciones pensadas para los más pequeños con sabores divertidos y presentación premium.
      </p>

    </div>

    {/* GRID */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

      {/* CHICKEN NUGGETS */}
      <div className="relative overflow-hidden rounded-[32px] group">

        <img
          src="/images/infantil/chicken-nuggets.jpg"
          alt="Chicken Nuggets"
          className="w-full h-[420px] object-cover scale-110 group-hover:scale-125 transition duration-700"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

        <div className="absolute bottom-0 p-10">

          <h3 className="text-4xl font-light mb-3">
            Chicken Nuggets
          </h3>

          <p className="text-white/70 mb-4 text-lg">
            Nuggets de pollo con papas francesas,
            golosina, salsa de tomate y jugo hit.
          </p>

          <span className="text-[#C8A97E] text-2xl">
            $23.000
          </span>

        </div>

      </div>

      {/* SALCHIPAPA MINI */}
      <div className="relative overflow-hidden rounded-[32px] group">

        <img
          src="/images/infantil/salchipapa-mini.jpg"
          alt="Salchipapa Mini"
          className="w-full h-[420px] object-cover scale-110 group-hover:scale-125 transition duration-700"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

        <div className="absolute bottom-0 p-10">

          <h3 className="text-4xl font-light mb-3">
            Salchipapa Mini
          </h3>

          <p className="text-white/70 mb-4 text-lg">
            Papa francesa con salchicha fazenda,
            salsa de tomate, golosina y jugo hit.
          </p>

          <span className="text-[#C8A97E] text-2xl">
            $23.000
          </span>

        </div>

      </div>

      {/* DESGRANADO CASA MANGIA */}
      <div className="relative overflow-hidden rounded-[32px] group">

        <img
          src="/images/infantil/desgranado-mangia.jpg"
          alt="Desgranado Casa Mangia"
          className="w-full h-[420px] object-cover scale-110 group-hover:scale-125 transition duration-700"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

        <div className="absolute bottom-0 p-10">

          <h3 className="text-4xl font-light mb-3">
            Desgranado Mangia
          </h3>

          <p className="text-white/70 mb-4 text-lg">
            Papas francesas, maíz, pollo, cerdo,
            queso fundido y cebolla crispy artesanal.
          </p>

          <span className="text-[#C8A97E] text-2xl">
            $23.000
          </span>

        </div>

      </div>

    </div>

  </div>

</section>
{/* ================= HELADERÍA PREMIUM ================= */}

<section className="bg-[#3B2418] py-32 px-6 md:px-16 overflow-hidden">
  <div className="max-w-7xl mx-auto">

    {/* TITULO */}
    <div className="mb-24 max-w-4xl">
      <p className="uppercase tracking-[0.4em] text-[#E7C7B2] text-sm mb-6">
        Mangia Grill & Cream
      </p>

      <h2 className="text-5xl md:text-7xl font-light text-white leading-[1.05] mb-8">
        Heladería gourmet diseñada para redes sociales.
      </h2>

      <p className="text-[#F5E6DC]/70 text-lg leading-loose max-w-2xl">
        Sabores exclusivos, toppings premium y postres visualmente irresistibles
        creados para compartir, fotografiar y disfrutar.
      </p>
    </div>

    {/* PRODUCTOS DESTACADOS */}
    <div className="grid md:grid-cols-2 gap-10 mb-32">

      {/* BANANA SPLIT */}
      <div className="relative overflow-hidden rounded-[40px] group bg-black">
        <img
          src="/images/desserts/banana.jpg"
          alt="Banana Split"
          className="w-full h-[700px] object-cover group-hover:scale-105 transition duration-700"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

        <div className="absolute bottom-10 left-10 z-10">
          <p className="uppercase tracking-[0.3em] text-[#E7C7B2] text-xs mb-4">
            Especialidad Premium
          </p>

          <h3 className="text-5xl text-white font-light mb-4">
            Banana Split
          </h3>

          <p className="text-white/70 max-w-md leading-relaxed">
            3 bolas de helado coronadas con chantilly,
            cereza, banano y salsa de chocolate.
          </p>
        </div>
      </div>

      {/* BROWNIE */}
      <div className="relative overflow-hidden rounded-[40px] group bg-black">
        <img
          src="/images/heladeria/brownie.jpg"
          alt="Brownie"
          className="w-full h-[700px] object-cover group-hover:scale-105 transition duration-700"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

        <div className="absolute bottom-10 left-10 z-10">
          <p className="uppercase tracking-[0.3em] text-[#E7C7B2] text-xs mb-4">
            Dessert Experience
          </p>

          <h3 className="text-5xl text-white font-light mb-4">
            Brownie 
          </h3>

          <p className="text-white/70 max-w-md leading-relaxed">
            Brownie caliente acompañado de helado
            artesanal y salsa premium de chocolate.
          </p>
        </div>
      </div>

    </div>

    {/* SABORES */}
    <div className="mb-32">

      <div className="mb-14">
        <p className="uppercase tracking-[0.35em] text-[#E7C7B2] text-xs mb-4">
          Sabores exclusivos
        </p>

        <h3 className="text-4xl md:text-5xl text-white font-light">
          Nuestra vitrina premium
        </h3>
      </div>

      <div className="overflow-hidden rounded-[40px]">
        <img
          src="/images/heladeria/sabores.jpg"
          alt="Sabores"
          className="w-full object-cover"
        />
      </div>

    </div>

    {/* TOPPINGS */}
    <div className="grid md:grid-cols-2 gap-16 items-start mb-32">

      {/* LEFT */}
      <div>

        <p className="uppercase tracking-[0.35em] text-[#E7C7B2] text-xs mb-4">
          Personaliza tu experiencia
        </p>

        <h3 className="text-5xl text-white font-light leading-tight mb-8">
          Toppings y adicionales premium.
        </h3>

        <p className="text-white/70 text-lg leading-loose mb-14 max-w-xl">
          Combina frutas frescas, chocolates, salsas artesanales
          y toppings exclusivos para crear un postre único.
        </p>

        <div className="grid grid-cols-2 gap-12">

          {/* FRUTAS */}
          <div>
            <h4 className="text-white text-2xl mb-5">
              Frutas
            </h4>

            <ul className="space-y-3 text-white/60 text-lg">
              <li>Fresa</li>
              <li>Arándanos</li>
              <li>Durazno</li>
              <li>Banano</li>
              <li>Cereza</li>
            </ul>
          </div>

          {/* SALSAS */}
          <div>
            <h4 className="text-white text-2xl mb-5">
              Salsas
            </h4>

            <ul className="space-y-3 text-white/60 text-lg">
              <li>Chocolate</li>
              <li>Arequipe</li>
              <li>Frutos Rojos</li>
              <li>Frutos Amarillos</li>
            </ul>
          </div>

          {/* EXTRAS */}
          <div>
            <h4 className="text-white text-2xl mb-5">
              Extras
            </h4>

            <ul className="space-y-3 text-white/60 text-lg">
              <li>Brownie</li>
              <li>Oreo</li>
              <li>M&M</li>
              <li>Mini Chips</li>
              <li>Gomitas</li>
            </ul>
          </div>

          {/* PREMIUM */}
          <div>
            <h4 className="text-white text-2xl mb-5">
              Premium
            </h4>

            <ul className="space-y-3 text-white/60 text-lg">
              <li>Cherry Mania</li>
              <li>Piña Colada</li>
              <li>Milky Way</li>
              <li>Juan Valdez</li>
              <li>Crema de Limón</li>
            </ul>
          </div>

        </div>

      </div>

      {/* RIGHT CARD */}
      <div className="bg-white/5 border border-white/10 rounded-[40px] p-10 backdrop-blur-sm">

        <div className="space-y-10">

          <div className="border-b border-white/10 pb-8">

            <p className="uppercase tracking-[0.35em] text-[#E7C7B2] text-xs mb-4">
              Adicionales
            </p>

            <div className="flex items-end justify-between">

              <div>
                <h4 className="text-3xl text-white font-light mb-2">
                  Bola adicional
                </h4>

                <p className="text-white/50">
                  Gourmet o Exclusiva
                </p>
              </div>

              <span className="text-4xl text-[#E7C7B2] font-light">
                +$3.900
              </span>

            </div>
          </div>

          <div>

            <p className="uppercase tracking-[0.35em] text-[#E7C7B2] text-xs mb-6">
              Recomendaciones
            </p>

            <div className="flex flex-wrap gap-4">

              <span className="px-5 py-3 rounded-full bg-white/10 text-white/70">
                Oreo + Brownie
              </span>

              <span className="px-5 py-3 rounded-full bg-white/10 text-white/70">
                Fresa + Chocolate
              </span>

              <span className="px-5 py-3 rounded-full bg-white/10 text-white/70">
                Piña Colada
              </span>

              <span className="px-5 py-3 rounded-full bg-white/10 text-white/70">
                Juan Valdez
              </span>

              <span className="px-5 py-3 rounded-full bg-white/10 text-white/70">
                Milky Way
              </span>

            </div>
          </div>

        </div>

      </div>

    </div>
{/* CONOS PREMIUM */}
<div className="mb-32">

  <div className="mb-16 text-center">

    <p className="uppercase tracking-[0.35em] text-[#E7C7B2] text-xs mb-4">
      Ice Cream Experience
    </p>

    <h3 className="text-5xl md:text-6xl text-white font-light">
      Conos Signature
    </h3>

    <p className="text-white/60 max-w-2xl mx-auto mt-6 text-lg leading-relaxed">
      Experiencias artesanales creadas con sabores gourmet,
      toppings premium y combinaciones exclusivas.
    </p>

  </div>

  <div className="grid md:grid-cols-2 gap-10">

    {/* 1 BOLA */}
    <div className="relative overflow-hidden rounded-[45px] group bg-black border border-white/10">

      <img
        src="/images/heladeria/cono-1bola.jpg"
        alt="1 Bola"
        className="w-full h-[700px] object-cover group-hover:scale-105 transition duration-700"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

      <div className="absolute bottom-10 left-10 z-10 max-w-md">

        <p className="uppercase tracking-[0.35em] text-[#E7C7B2] text-xs mb-5">
          Gourmet Cone
        </p>

        <h4 className="text-5xl text-white font-light mb-5">
          1 Bola
        </h4>

        <p className="text-white/70 leading-relaxed mb-8 text-lg">
          Helado artesanal servido en cono crocante
          con sabores gourmet y exclusivos.
        </p>

        <div className="flex gap-10">

          <div>
            <p className="text-white/40 text-sm mb-2 uppercase tracking-[0.2em]">
              Gourmet
            </p>

            <p className="text-[#E7C7B2] text-3xl font-light">
              $7.500
            </p>
          </div>

          <div>
            <p className="text-white/40 text-sm mb-2 uppercase tracking-[0.2em]">
              Exclusivo
            </p>

            <p className="text-[#E7C7B2] text-3xl font-light">
              $9.500
            </p>
          </div>

        </div>

      </div>

    </div>

    {/* 2 BOLAS */}
    <div className="relative overflow-hidden rounded-[45px] group bg-black border border-white/10">

      <img
        src="/images/heladeria/conos-dobles.jpg"
        alt="2 Bolas"
        className="w-full h-[700px] object-cover group-hover:scale-105 transition duration-700"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

      <div className="absolute bottom-10 left-10 z-10 max-w-md">

        <p className="uppercase tracking-[0.35em] text-[#E7C7B2] text-xs mb-5">
          Signature Cone
        </p>

        <h4 className="text-5xl text-white font-light mb-5">
          2 Bolas
        </h4>

        <p className="text-white/70 leading-relaxed mb-8 text-lg">
          Doble experiencia premium con toppings exclusivos
          y combinaciones signature Mangia.
        </p>

        <div className="flex gap-10">

          <div>
            <p className="text-white/40 text-sm mb-2 uppercase tracking-[0.2em]">
              Gourmet
            </p>

            <p className="text-[#E7C7B2] text-3xl font-light">
              $9.900
            </p>
          </div>

          <div>
            <p className="text-white/40 text-sm mb-2 uppercase tracking-[0.2em]">
              Exclusivo
            </p>

            <p className="text-[#E7C7B2] text-3xl font-light">
              $11.900
            </p>
          </div>

        </div>

      </div>

    </div>

  </div>

</div>
    {/* EXPERIENCIAS DULCES */}
    <div className="mt-32 mb-32">

      <div className="mb-16">

        <p className="uppercase tracking-[0.35em] text-[#E7C7B2] text-xs mb-4">
          Signature Desserts
        </p>

        <h3 className="text-5xl text-white font-light">
          Experiencias dulces premium
        </h3>

      </div>

      <div className="grid md:grid-cols-3 gap-8">

        {/* AFFOGATO */}
        <div className="relative overflow-hidden rounded-[35px] group">

          <img
            src="/images/desserts/affogato.jpg"
            alt="Affogato"
            className="w-full h-[500px] object-cover group-hover:scale-105 transition duration-700"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

          <div className="absolute bottom-8 left-8 z-10">

            <h4 className="text-3xl text-white mb-3">
              Affogato
            </h4>

            <p className="text-white/70 text-sm leading-relaxed">
              Helado artesanal bañado con espresso premium.
            </p>

          </div>
        </div>

        {/* CHOLADO */}
        <div className="relative overflow-hidden rounded-[35px] group">

          <img
            src="/images/desserts/cholado.jpg"
            alt="Cholado"
            className="w-full h-[500px] object-cover group-hover:scale-105 transition duration-700"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

          <div className="absolute bottom-8 left-8 z-10">

            <h4 className="text-3xl text-white mb-3">
              Cholado
            </h4>

            <p className="text-white/70 text-sm leading-relaxed">
              Frutas frescas, hielo artesanal y explosión tropical.
            </p>

          </div>
        </div>

        {/* SUNDAE */}
        <div className="relative overflow-hidden rounded-[35px] group">

          <img
            src="/images/heladeria/sundae.jpg"
            alt="Sundae"
            className="w-full h-[500px] object-cover group-hover:scale-105 transition duration-700"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

          <div className="absolute bottom-8 left-8 z-10">

            <h4 className="text-3xl text-white mb-3">
              Sundae
            </h4>

            <p className="text-white/70 text-sm leading-relaxed">
              Helado premium coronado con brownie y salsa artesanal.
            </p>

          </div>
        </div>

      </div>

    </div>

 {/* CONOS Y MALTEADAS */}
<div className="mb-32">

  <div className="mb-16 text-center">

    <p className="uppercase tracking-[0.35em] text-[#E7C7B2] text-xs mb-4">
      Ice Cream Experience
    </p>

    <h3 className="text-5xl md:text-6xl text-white font-light">
      Conos & Malteadas
    </h3>

  </div>

  <div className="grid md:grid-cols-2 gap-10">

    {/* CONO JUNIOR */}
    <div className="relative overflow-hidden rounded-[40px] group bg-black">

      <img
        src="/images/heladeria/cono-junior.jpg"
        alt="Cono Junior"
        className="w-full h-[700px] object-cover group-hover:scale-105 transition duration-700"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

      <div className="absolute bottom-10 left-10 z-10">

        <p className="uppercase tracking-[0.3em] text-[#E7C7B2] text-xs mb-4">
          Junior Cone
        </p>

        <h4 className="text-4xl text-white font-light mb-4">
          Cono Junior
        </h4>

        <p className="text-white/70 leading-relaxed max-w-sm">
          Helado artesanal en versión clásica perfecta
          para disfrutar cualquier momento.
        </p>

      </div>

    </div>

    {/* MALTEADAS */}
    <div className="relative overflow-hidden rounded-[40px] group bg-black">

      <img
        src="/images/heladeria/malteadas.jpg"
        alt="Malteadas"
        className="w-full h-[700px] object-cover group-hover:scale-105 transition duration-700"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

      <div className="absolute bottom-10 left-10 z-10">

        <p className="uppercase tracking-[0.3em] text-[#E7C7B2] text-xs mb-4">
          Signature Shakes
        </p>

        <h4 className="text-4xl text-white font-light mb-4">
          Malteadas Premium
        </h4>

        <p className="text-white/70 leading-relaxed max-w-sm">
          Mezclas cremosas con helado gourmet,
          toppings y sabores exclusivos Mangia.
        </p>

      </div>

    </div>

  </div>
  </div> 
</div>
</section>
{/* ================= RESERVAS WHATSAPP ================= */}

<section className="py-32 px-6 bg-[#0A0A0A]">

  <div className="max-w-7xl mx-auto">

    <div className="relative overflow-hidden rounded-[40px] border border-white/10">

      {/* BACKGROUND IMAGE */}
      <img
        src="/images/interior/lounge.jpg"
        alt="Reservas Mangia"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/75" />

      {/* GOLD LIGHT EFFECT */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(200,169,126,0.25),transparent_45%)]" />

      {/* CONTENT */}
      <div className="relative z-10 px-10 py-28 md:px-20 text-center">

        <p className="uppercase tracking-[0.4em] text-[#C8A97E] text-sm mb-6">
          Reserva Premium
        </p>

        <h2 className="text-5xl md:text-7xl font-light mb-8 leading-tight">
          Reserva tu experiencia Mangia
        </h2>

        <p className="max-w-3xl mx-auto text-white/70 text-lg leading-relaxed mb-12">
          Vive noches gastronómicas, coctelería premium y experiencias diseñadas
          para compartir en un ambiente elegante y cinematográfico.
        </p>

        {/* BUTTONS */}
        <div className="flex flex-col md:flex-row justify-center gap-6">

          {/* WHATSAPP */}
          <a
            href="https://wa.me/573182294491"
            target="_blank"
            className="bg-[#C8A97E] text-black px-10 py-5 rounded-full text-lg hover:scale-105 transition duration-300 font-medium"
          >
            Reservar por WhatsApp
          </a>

          {/* INSTAGRAM */}
          <a
            href="https://instagram.com/mangiagrillandcream"
            target="_blank"
            className="border border-white/15 bg-white/5 backdrop-blur-xl px-10 py-5 rounded-full text-lg hover:bg-white hover:text-black transition duration-300"
          >
            Ver Instagram
          </a>

        </div>

      </div>

    </div>

  </div>

</section>
{/* ================= FOOTER ================= */}

<footer className="relative overflow-hidden border-t border-white/5 bg-black py-24">

  {/* GOLD LIGHT */}
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(200,169,126,0.12),transparent_45%)]" />

  <div className="relative z-10 max-w-7xl mx-auto px-6">

    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-16">

      {/* BRAND */}
      <div>

        <h2 className="text-3xl tracking-[0.35em] font-light mb-6">
          MANGIA
        </h2>

        <p className="text-white/60 leading-relaxed">
          Gastronomía premium, cocktails y experiencias diseñadas
          para noches memorables.
        </p>

      </div>

      {/* CONTACTO */}
      <div>

        <p className="uppercase tracking-[0.3em] text-[#C8A97E] text-sm mb-6">
          Contacto
        </p>

        <div className="space-y-4 text-white/70">

          <p>
            318 229 4491
          </p>

          <p>
            Cra 12 #3-90
          </p>

          <p>
            Aguachica — Cesar
          </p>

        </div>

      </div>

      {/* HORARIOS */}
      <div>

        <p className="uppercase tracking-[0.3em] text-[#C8A97E] text-sm mb-6">
          Horarios
        </p>

        <div className="space-y-4 text-white/70">

          <p>
            Jueves a Martes
          </p>

          <p>
            4:30 PM — 10:30 PM
          </p>

          <p className="text-white/40">
            Miércoles cerrado
          </p>

        </div>

      </div>

      {/* SOCIAL */}
      <div>

        <p className="uppercase tracking-[0.3em] text-[#C8A97E] text-sm mb-6">
          Conecta
        </p>

        <div className="flex flex-col gap-4">

          <a
            href="https://wa.me/573182294491"
            target="_blank"
            className="text-white/70 hover:text-[#C8A97E] transition-all duration-300"
          >
            WhatsApp
          </a>

          <a
            href="https://instagram.com/mangiagrillandcream"
            target="_blank"
            className="text-white/70 hover:text-[#C8A97E] transition-all duration-300"
          >
            Instagram
          </a>

          <a
            href="https://maps.google.com"
            target="_blank"
            className="text-white/70 hover:text-[#C8A97E] transition-all duration-300"
          >
            Google Maps
          </a>

        </div>

      </div>

    </div>

    {/* BOTTOM */}

    <div className="border-t border-white/5 mt-20 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">

      <p className="text-white/40 text-sm">
        © 2026 Mangia Gastrobar. Todos los derechos reservados.
      </p>

      <p className="text-white/30 text-sm tracking-[0.25em] uppercase">
        Premium Gastrobar Experience
      </p>

    </div>

  </div>

</footer>
</main>
);
}