"use client";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
} from "react-icons/fa";

import { SiTailwindcss, SiNextdotjs } from "react-icons/si";

// about data
const about = {
  name: "Abldullah Al Moaaz",
  title: "Frontend Developer",

  description: `I am a frontend developer with 3 years of experience in web development. I have worked with various technologies like HTML, CSS, JavaScript, React, and Node.js. I am passionate about building responsive and user-friendly websites.`,
  info: [
    {
      fieldname: "Name",
      fieldvalue: "Abdullah Al Moaz",
    },
    {
      fieldname: "Phone",
      fieldvalue: "+880 1234567890",
    },
    {
      fieldname: "Experience",
      fieldvalue: "3 years",
    },
    {
      fieldname: "Address",
      fieldvalue: "Dhaka, Bangladesh",
    },
    {
      fieldname: "Nationality",
      fieldvalue: "Bangladeshi",
    },
    {
      fieldname: "Email",
      fieldvalue: "abdullahalmoaz22gmail.com",
    },

    {
      fieldname: "Freelance",
      fieldvalue: "Available",
    },
    {
      fieldname: "Languages",
      fieldvalue: "English, Bangla",
    },
  ],
};

// experience data

const experiance = {
  icon: "",
  title: "My Experience",
  description:
    "I have been learning and practicing web development for the past 3 years, gaining hands-on experience through courses and personal projects.",
  items: [
    {
      company: "Online Course Platform",
      position: "Full Stack Web Development Bootcamp",
      duration: "2023 - 2024",
    },
    {
      company: "Programming Courses",
      position: "Self-paced Learning & Projects",
      duration: "2021 - 2023",
    },
    {
      company: "Diploma in Power Technology",
      position: "Power Technology Student",
      duration: "2020 - 2021",
    },
    {
      company: "High School",
      position: "Science Stream",
      duration: "2017 - 2019",
    },
  ],
};

const education = {
  icon: "",
  title: "My education",
  description:
    "I have completed my graduation in Computer Science and Engineering from ABC University.",
  items: [
    {
      title: "Online Course platform",
      degree: "Full Stack Web Development Bootcamp",
      duration: "2023 to Running",
    },
    {
      title: "Programming Course",
      degree: "Self-paced Learning & Projects",
      duration: "2022-2023",
    },

    {
      title: "Diploma in Power Technology",
      degree: "Power Technology Student",
      duration: "2023-2026",
    },
    {
      title: "Secondary School",
      degree: "Science",
      duration: "2020-2022",
    },

    {
      title: "High School",
      degree: "Science",
      duration: "2017-2021",
    },
  ],
};

// skills data

const skills = {
  title: "My Skills",
  description:
    "I have worked with various technologies like HTML, CSS, JavaScript, React, and Node.js. I am passionate about building responsive and user-friendly websites.",
  skillList: [
    {
      title: "HTML5",
      icon: <FaHtml5 />,
    },
    {
      title: "CSS3",
      icon: <FaCss3 />,
    },
    {
      title: "JavaScript",
      icon: <FaJs />,
    },
    {
      title: "React",
      icon: <FaReact />,
    },
    {
      title: "Node.js",
      icon: <FaNodeJs />,
    },
    {
      title: "Tailwind CSS",
      icon: <SiTailwindcss />,
    },
    {
      title: "Next.js",
      icon: <SiNextdotjs />,
    },
    {
      title: "Figma",
      icon: <FaFigma />,
    },
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2.4, duration: 0.4, ease: "easeIn" }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col  xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About Me</TabsTrigger>
          </TabsList>
          {/* content  */}
          <div className="min-h-[70vh] w-full">
            {/* experiance  */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experiance.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experiance.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experiance.items.map((item, index) => (
                      <li
                        key={index}
                        className="flex flex-col gap-1 bg-[#232329] h-[184px] py-6 px-10 rounded-xl justify-center items-center lg:items-start"
                      >
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                          {item.position}
                        </h3>
                        <div className="flex items-center gap-3">
                          {/* dot  */}
                          <span className="w-[6px] h-[6px] rounded-full bg-accent "></span>
                          <p className="text-white/60">{item.company}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* education  */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => (
                      <li
                        key={index}
                        className="flex flex-col gap-1 bg-[#232329] h-[184px] py-6 px-10 rounded-xl justify-center items-center lg:items-start"
                      >
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                          {item.degree}
                        </h3>
                        <div className="flex items-center gap-3">
                          {/* dot  */}
                          <span className="w-[6px] h-[6px] rounded-full bg-accent "></span>
                          <p className="text-white/60">{item.title}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* skills  */}

            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{skills.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {skills.description}
                </p>
              </div>

              <ul
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4
              xl:gap-[30px]"
              >
                {skills.skillList.map((skill, index) => {
                  return (
                    <li key={index}>
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                            <div className="text-6xl group-hover:text-accent transition-all duration-300">
                              {skill.icon}
                            </div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="capitalize">{skill.title}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </li>
                  );
                })}
              </ul>
            </TabsContent>

            {/* about  */}
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.name}</h3>
                <p className="text-xl text-accent">{about.title}</p>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-center
                        xl:justify-start gap-4"
                      >
                        <span className="text-white/60">{item.fieldname}</span>
                        <span className="[text-xl]">{item.fieldvalue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
