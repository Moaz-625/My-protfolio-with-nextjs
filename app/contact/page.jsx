"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
  SelectGroup,
  SelectLabel,
} from "@/components/ui/select";

const info = [
  { icon: <FaPhoneAlt />, title: "Phone", description: "+880 1623-456789" },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "abdullahalmoaz22@gmail.com",
  },
  {
    icon: <FaMapMarkedAlt />,
    title: "Location",
    description: "Dhaka, Bangladesh",
  },
];

const Contact = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.4, delay: 0.2 } }}
      className="py-6 min-h-[100vh]"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* Form */}
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
              <h3 className="text-4xl text-accent">Let's work together</h3>
              <p className="text-white/60">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </p>

              {/* Input fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input type="text" placeholder="Firstname" className="input" />

                <Input type="text" placeholder="Lastname" className="input" />

                <Input
                  type="email"
                  placeholder="Email address"
                  className="input"
                />
                <Input
                  type="tel"
                  placeholder="Phone number"
                  className="input"
                />
              </div>

              {/*  Select */}
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a Services</SelectLabel>
                    <SelectItem value="est">Web Design</SelectItem>
                    <SelectItem value="cst">UI/UX Design</SelectItem>
                    <SelectItem value="mst">Marketing Strategy</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <Textarea
                placeholder="Type your message here... "
                className="h-[200px] "
              />

              {/* Button */}
              <Button className="max-w-40">Send Message</Button>
            </form>
          </div>

          {/* Info Section */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul>
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-6 mb-8">
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                      <div className="text-[28px]">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl text-white/60">{item.title}</h3>
                      <p className="text-">{item.description} </p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
