"use client";

import Image from "next/image";
import { motion, type Variants } from "framer-motion";
const images = [
  {
    id: 1,
    src: "/images/gallery/project1.jpeg",
    title: "Youth Empowerment Workshop",
    category: "In Progress...",
    alt: "Young people participating in a youth empowerment workshop",
  },
  {
    id: 2,
    src: "/images/gallery/project2.jpeg",
    title: "Youth Empowerment Workshop",
    category: "In Progress...",
    alt: "Young people participating in a youth empowerment workshop",
  },
  {
    id: 3,
    src: "/images/gallery/project3.jpeg",
    title: "Youth Empowerment Workshop",
    category: "In Progress...",
    alt: "Young people participating in a youth empowerment workshop",
  },
  {
    id: 4,
    src: "/images/gallery/img3.jpeg",
    title: "Taking care of the old and disabled",
    category: "Community Outreach",
    alt: "Touching lives through humanitarian services",
  },
  {
    id: 5,
    src: "/images/gallery/img6.jpeg",
    title: "Taking care of the old and disabled",
    category: "Community Outreach",
    alt: "Touching lives through humanitarian services",
  },
  {
    id: 6,
    src: "/images/gallery/img7.jpeg",
    title: "Supporting the less privileged",
    category: "Community Outreach",
    alt: "Touching lives through humanitarian services",
  },
  {
    id: 7,
    src: "/images/gallery/img9.jpeg",
    title: "Taking care of the aged and disabled",
    category: "Community Outreach",
    alt: "Touching lives through humanitarian services",
  },
  {
    id: 8,
    src: "/images/gallery/img11.jpeg",
    title: "Taking care of the aged and disabled",
    category: "Community Outreach",
    alt: "Touching lives through humanitarian services",
  },
  {
    id: 9,
    src: "/images/gallery/img13.jpeg",
    title: "Supporting the education of our children",
    category: "Community Outreach",
    alt: "Touching lives through humanitarian services",
  },
  {
    id: 10,
    src: "/images/gallery/img16.jpeg",
    title: "Giving hope to the less privileged through scholarship awards",
    category: "Community Outreach",
    alt: "Touching lives through humanitarian services",
  },
  {
    id: 11,
    src: "/images/gallery/img17.jpeg",
    title: "Supporting the education of our children",
    category: "Community Outreach",
    alt: "Touching lives through humanitarian services",
  },
  {
    id: 12,
    src: "/images/gallery/img18.jpeg",
    title: "Donating food and other essential items to the less privileged",
    category: "Community Outreach",
    alt: "Touching lives through humanitarian services",
  },
];

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
    scale: 0.96,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

function Gallery() {
  return (
    <section className="container mx-auto px-6 py-16">
      {/* Header */}
      <motion.div
        className="mb-10 text-center"
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold md:text-4xl">
          Community and Social Development Initiatives
        </h2>

        <p className="mx-auto mt-3 max-w-2xl text-gray-600">
          A glimpse into our programs, events, and community impact.
        </p>
      </motion.div>

      {/* Gallery */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {images.map((image, index) => (
          <motion.article
            key={image.id}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{
              once: true,
              amount: 0.15,
            }}
            transition={{
              delay: (index % 4) * 0.08,
            }}
            className="group relative aspect-square overflow-hidden rounded-xl bg-gray-100 shadow-sm"
          >
            {/* Image */}
            <Image
              src={image.src}
              alt={image.alt}
              fill
              loading="lazy"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

            {/* Content */}
            <div className="absolute inset-x-0 bottom-0 p-5 text-white">
              <span className="inline-block rounded-full bg-white/20 px-3 py-1 text-xs font-medium backdrop-blur-md">
                {image.category}
              </span>

              <h3 className="mt-2 text-lg font-semibold leading-snug">
                {image.title}
              </h3>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

export default Gallery;

export { images };