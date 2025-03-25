"use client";

import { motion } from "framer-motion";

type TimelineItem = {
  title: string;
  organization: string;
  period: string;
  description: string;
  type: "education" | "experience";
};

const timelineData: TimelineItem[] = [
  {
    title: "Computer Science Degree",
    organization: "University Name",
    period: "2020 - Present",
    description: "Studying computer science with a focus on web development and software engineering. Relevant coursework includes Data Structures, Algorithms, Web Programming, and Database Systems.",
    type: "education",
  },
  {
    title: "Web Development Course",
    organization: "Online Learning Platform",
    period: "2022",
    description: "Completed a comprehensive web development bootcamp covering frontend and backend technologies including React, Node.js, and MongoDB.",
    type: "education",
  },
  {
    title: "Frontend Developer (Personal Project)",
    organization: "Open Source Contribution",
    period: "2022 - Present",
    description: "Contributing to open source projects to gain real-world development experience and improve collaboration skills.",
    type: "experience",
  },
  {
    title: "Student Assistant",
    organization: "University IT Department",
    period: "2021 - 2022",
    description: "Assisted in maintaining the university's website and provided technical support to other students and faculty members.",
    type: "experience",
  },
];

export function ExperienceSection() {
  return (
    <section id="experience" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          <div className="space-y-4 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-3xl font-bold"
            >
              Experience & Education
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-muted-foreground max-w-2xl mx-auto"
            >
              My academic journey and professional experience.
            </motion.p>
          </div>

          <div className="relative mx-auto max-w-4xl">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 h-full w-0.5 bg-border transform md:-translate-x-1/2" />

            {/* Timeline items */}
            {timelineData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative flex flex-col md:flex-row mb-12 md:even:flex-row-reverse ${
                  index % 2 === 0 ? "md:pr-10 md:pl-0" : "md:pl-10 md:pr-0"
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 w-5 h-5 rounded-full bg-primary border-4 border-background transform -translate-x-1/2 mt-6" />

                {/* Content */}
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? "md:pr-12" : "md:pl-12"}`}>
                  <div className="p-6 rounded-lg border bg-card text-card-foreground shadow hover:shadow-md transition-shadow">
                    <span className={`inline-block px-3 py-1 text-xs rounded-full mb-4 ${
                      item.type === "education" 
                        ? "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100" 
                        : "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100"
                    }`}>
                      {item.type === "education" ? "Education" : "Experience"}
                    </span>
                    <h3 className="text-xl font-semibold">{item.title}</h3>
                    <div className="flex items-center text-sm text-muted-foreground mt-1 mb-3">
                      <span>{item.organization}</span>
                      <span className="mx-2">•</span>
                      <span>{item.period}</span>
                    </div>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
} 