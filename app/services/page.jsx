"use client";

import Link from "next/link";
import { BsArrowDownRight } from "react-icons/bs";

const services = [
  {
    num: "01",
    title: "Web Development",
    description:
      "We build websites that are fast, secure, and easy to manage. We specialize in WordPress, Shopify, and custom web development.",
    // link: "/services/web-development",
    href: "",
  },
  {
    num: "02",
    title: "SEO & Marketing",
    description:
      "We help businesses get found online through search engine optimization (SEO) and online marketing.",
    // link: "/services/seo-marketing",
    href: "",
  },
  {
    num: "03",
    title: "E-Commerce",
    description:
      "We build online stores that are easy to manage and help businesses sell more products online.",
    // link: "/services/e-commerce",
    href: "",
  },
  {
    num: "04",
    title: "Web Hosting",
    description:
      "We provide fast and secure web hosting for businesses of all sizes.",

    // link: "/services/web-hosting",
    href: "",
  },
];

import { motion } from "framer-motion";

const Services = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.2, ease: "easeIn" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => {
            return (
              <div
                key={index}
                className="flex-1 flex flex-col justify-center gap-6 group"
              >
                {/* top */}
                <div className="w-full flex items-center justify-between ">
                  <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                    {service.num}
                  </div>
                  <Link
                    href={service.href}
                    className="group-hover:bg-accent w-[70px] h-[70px] rounded-full bg-white transition-all duration-500 flex items-center justify-center hover:-rotate-45"
                  >
                    <BsArrowDownRight className="text-primary text-3xl" />
                  </Link>
                </div>
                {/* title  */}
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                  {service.title}
                </h2>
                {/* description  */}
                <p className="text-white/60">{service.description}</p>
                {/* border  */}
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
