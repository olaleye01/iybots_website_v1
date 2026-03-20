"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const clients = [
  {
    name: "uLessons",
    logo: "/clients/ulessons-logo.webp",
    width: 140,
    height: 40,
  },
  {
    name: "FEL",
    logo: "/clients/fel_logo.svg",
    width: 120,
    height: 40,
  },
  {
    name: "Exsend",
    logo: "/clients/exsend_logo.png",
    width: 140,
    height: 40,
  },
  {
    name: "Miva Open University",
    logo: "/clients/Miva_Open_University_logo.jpg",
    width: 160,
    height: 44,
  },
];

export default function Clients() {
  return (
    <section
      className="py-20 lg:py-24"
      style={{ borderTop: "1px solid var(--border)" }}
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <motion.p
          className="text-[10px] font-semibold uppercase tracking-[0.2em] text-center mb-12"
          style={{ color: "var(--muted)" }}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          Trusted by
        </motion.p>

        <motion.div
          className="flex flex-wrap items-center justify-center gap-12 lg:gap-20"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          {clients.map((client) => (
            <div
              key={client.name}
              className="flex items-center justify-center transition-opacity duration-300 hover:opacity-100"
              style={{ opacity: 0.5 }}
            >
              <Image
                src={client.logo}
                alt={client.name}
                width={client.width}
                height={client.height}
                className="object-contain"
                style={{
                  filter: "grayscale(100%) brightness(200%)",
                  maxHeight: "44px",
                  width: "auto",
                }}
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
