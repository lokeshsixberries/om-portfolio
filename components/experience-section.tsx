"use client";

import { Card } from "@/components/ui/card";
import {
  GraduationCap,
  Briefcase,
  Calendar,
  ChevronRight,
  Sparkles,
  TrendingUp,
  Target,
  BriefcaseIcon,
} from "lucide-react";
import { motion } from "framer-motion";

const experiences = [
  {
    icon: GraduationCap,
    title: "Search Engine Optimization Course",
    duration: "Trainee",
    place: "IMG Global Infotech Private Limited ",
    period: "Jan 2024 - July 2024",
    description:
      "Comprehensive training in SEO fundamentals, technical optimization, and data-driven strategies.",
    highlights: [
      "Mastered core SEO concepts and best practices",
      "Advanced technical SEO & performance optimization",
      "Data analytics and reporting fundamentals",
    ],
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Briefcase,
    title: "IMG Global Infotech Private Limited ",
    duration: "Internship",
    place: "Way To Code Technologies LLP",
    period: "Aug 2024 - Dec 2024",
    description:
      "Leading SEO initiatives for diverse clients with focus on organic growth and technical excellence.",
    highlights: [
      "Improved organic rankings for 10+ projects",
      "Increased traffic by 150% for key clients",
      "Implemented comprehensive SEO strategies",
    ],
    color: "from-emerald-500 to-teal-500",
  },
];

export function ExperienceSection() {
  return (
    <section id="experience" className="bg-slate-100 py-20">
      <div className="container mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <div className="mb-4 inline-flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-blue-500" />
            <span className="text-sm font-medium text-blue-500 uppercase tracking-wider">
              Experience
            </span>
          </div>

          <h2 className="mb-4 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
            Professional Journey
          </h2>

          <p className="mx-auto max-w-2xl text-lg text-slate-600">
            1+ year of focused growth in SEO and digital marketing
          </p>
        </motion.div>

        {/* Two Column Grid */}
        <div className="grid gap-8 md:grid-cols-2">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <Card className="group relative h-full overflow-hidden border-none shadow-none p-8 transition-all duration-300">
                {/* Top section with icon and header */}
                <div className="">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-4">
                      <div
                        className={`rounded-xl bg-gradient-to-br ${exp.color} p-3 text-white shadow-lg`}
                      >
                        <exp.icon className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-slate-900">
                          {exp.title}
                        </h3>
                        <div className="flex items-center gap-2 mt-1">
                          <BriefcaseIcon className="h-4 w-4 text-slate-500" />
                          <span className="text-sm text-slate-600 font-semibold">
                            {exp.place}
                          </span>
                        </div>
                        <div className="flex items-center gap-2 mt-1">
                          <Calendar className="h-3 w-3 text-slate-500" />
                          <span className="text-sm text-slate-600">
                            {exp.period}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="rounded-full bg-blue-50 px-3 py-1">
                      <span className="text-sm font-medium text-blue-600">
                        {exp.duration}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Description */}

                <p className="text-slate-600">{exp.description}</p>

                {/* Highlights */}
                <div className="mb-1 space-y-3">
                  <div className="flex items-center gap-2">
                    <Target className="h-4 w-4 text-blue-500" />
                    <span className="font-medium text-slate-900">
                      Key Achievements
                    </span>
                  </div>
                  <ul className="space-y-2">
                    {exp.highlights.map((highlight, i) => (
                      <motion.li
                        key={highlight}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 + i * 0.1 }}
                        className="flex items-start gap-2"
                      >
                        <ChevronRight className="mt-0.5 h-4 w-4 flex-shrink-0 text-emerald-500" />
                        <span className="text-slate-700">{highlight}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
