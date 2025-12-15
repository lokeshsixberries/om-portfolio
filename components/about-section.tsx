"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Target,
  Zap,
  TrendingUp,
  Sparkles,
  Award,
  Globe,
  Download,
} from "lucide-react";
import { Button } from "./ui/button";

export function AboutSection() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const stats = [
    {
      icon: Target,
      value: "5+",
      label: "Projects Completed",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: TrendingUp,
      value: "140%",
      label: "Avg. Traffic Growth",
      color: "from-emerald-500 to-teal-500",
    },
    {
      icon: Award,
      value: "96%",
      label: "Client Retention",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Globe,
      value: "2+",
      label: "Industries",
      color: "from-amber-500 to-orange-500",
    },
  ];

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-gradient-to-b from-white via-blue-50/20 to-white py-32"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-slate-900/5 [mask-image:radial-gradient(ellipse_at_center,white,transparent_70%)]" />
      <div className="absolute top-0 right-0 h-96 w-96 translate-x-1/3 -translate-y-1/3 rounded-full bg-gradient-to-r from-cyan-500/10 to-blue-500/10 blur-3xl" />
      <div className="absolute bottom-0 left-0 h-96 w-96 -translate-x-1/3 translate-y-1/3 rounded-full bg-gradient-to-r from-emerald-500/10 to-teal-500/10 blur-3xl" />

      <div className="container relative mx-auto max-w-6xl px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="grid gap-12 lg:grid-cols-2"
        >
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="space-y-6"
            >
              <div>
                <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 px-4 py-2">
                  <Sparkles className="h-4 w-4 text-white" />
                  <span className="text-sm font-semibold text-white uppercase tracking-wider">
                    About Me
                  </span>
                </div>

                <h2 className="mb-6 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 bg-clip-text text-4xl font-bold tracking-tight text-transparent md:text-5xl">
                  Om Prakash Bhatt
                </h2>
              </div>

              <div className="space-y-6 text-lg leading-relaxed text-slate-600">
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : {}}
                  transition={{ delay: 0.3 }}
                  className="text-xl font-medium text-slate-900"
                >
                  Senior SEO Analyst specializing in data-driven growth
                  strategies and technical optimization.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : {}}
                  transition={{ delay: 0.4 }}
                >
                  With{" "}
                  <span className="font-semibold text-blue-600">
                    1+ years of intensive experience
                  </span>
                  , I've transformed digital presences across diverse industries
                  through strategic SEO implementation. My approach combines
                  technical precision with creative problem-solving to deliver
                  sustainable organic growth.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : {}}
                  transition={{ delay: 0.5 }}
                >
                  I specialize in{" "}
                  <span className="font-semibold text-emerald-600">
                    technical SEO architecture
                  </span>
                  ,
                  <span className="font-semibold text-purple-600">
                    {" "}
                    data-driven strategy development
                  </span>
                  , and
                  <span className="font-semibold text-cyan-600">
                    {" "}
                    performance optimization
                  </span>
                  . From initial audits to ongoing management, I ensure every
                  aspect of SEO contributes to measurable business outcomes.
                </motion.p>
              </div>

              <div>
                <Button
                  className="bg-slate-700 cursor-pointer hover:bg-slate-900"
                  onClick={() => {
                    window.open(
                      "https://drive.google.com/file/d/1qahWwSiA_zu4vbCa2Q9ByfvS4jMreck2/view",
                      "_blank"
                    );
                  }}
                >
                  <Download className="w-4 w-4" />
                  Download Resume
                </Button>
              </div>

              {/* Values */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6 }}
                className="space-y-4"
              >
                <h3 className="text-xl font-semibold text-slate-900">
                  Core Principles
                </h3>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {[
                    {
                      title: "Data-Driven Decisions",
                      desc: "Metrics-based optimization",
                    },
                    {
                      title: "Technical Excellence",
                      desc: "Industry best practices",
                    },
                    {
                      title: "Transparent Reporting",
                      desc: "Clear, actionable insights",
                    },
                    {
                      title: "Continuous Innovation",
                      desc: "Adapting to algorithm changes",
                    },
                  ].map((item, index) => (
                    <div
                      key={item.title}
                      className="rounded-xl border border-slate-200 bg-white/50 p-4"
                    >
                      <div className="mb-2 flex items-center gap-2">
                        <Zap className="h-4 w-4 text-blue-500" />
                        <h4 className="font-medium text-slate-900">
                          {item.title}
                        </h4>
                      </div>
                      <p className="text-sm text-slate-600">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Right Column - Stats & Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="space-y-8"
          >
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white/80 p-6 backdrop-blur-sm"
                >
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 transition-opacity duration-300 group-hover:opacity-5`}
                  />

                  <div className="relative z-10">
                    <div
                      className={`mb-4 inline-flex rounded-xl bg-gradient-to-br ${stat.color} p-3 text-white`}
                    >
                      <stat.icon className="h-6 w-6" />
                    </div>
                    <div className="text-3xl font-bold text-slate-900">
                      {stat.value}
                    </div>
                    <div className="text-sm text-slate-600">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Experience Timeline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7 }}
              className="rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-8"
            >
              <h3 className="mb-6 text-xl font-semibold text-slate-900">
                Professional Journey
              </h3>

              <div className="space-y-6">
                {[
                  {
                    year: "2025",
                    role: "SEO Strategist Intern",
                    desc: "IMG Global Infotech Private Limited",
                  },
                  {
                    year: "2024",
                    role: "SEO Certification",
                    desc: "Way To Code Technologies LLP",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={item.role}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.8 + index * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <div className="flex-shrink-0">
                      <div
                        className={`h-3 w-3 rounded-full ${
                          index === 0
                            ? "bg-gradient-to-r from-blue-500 to-cyan-500"
                            : "bg-slate-300"
                        }`}
                      />
                      {index < 2 && (
                        <div className="mx-auto mt-1 h-8 w-0.5 bg-slate-200" />
                      )}
                    </div>
                    <div>
                      <div className="text-sm font-medium text-blue-600">
                        {item.year}
                      </div>
                      <div className="font-semibold text-slate-900">
                        {item.role}
                      </div>
                      <div className="text-sm text-slate-600">{item.desc}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* CTA Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.9 }}
              className="rounded-2xl bg-gradient-to-r from-slate-900 to-slate-800 p-8 text-white"
            >
              <h3 className="mb-4 text-xl font-semibold">
                Ready to Transform Your Digital Presence?
              </h3>
              <p className="mb-6 text-slate-300">
                Let's discuss how strategic SEO can drive sustainable growth for
                your business.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 px-6 py-3 font-medium text-white transition-all hover:shadow-lg hover:shadow-blue-500/30"
              >
                Start Conversation
              </a>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Skills Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1 }}
          className="mt-24 rounded-3xl bg-gradient-to-br from-slate-800 to-slate-900 p-12"
        >
          <div className="mb-8 text-center">
            <h3 className="mb-4 text-3xl font-bold text-white">
              What Sets Me Apart
            </h3>
            <p className="mx-auto max-w-3xl text-white">
              A unique blend of technical expertise, strategic thinking, and
              data-driven execution
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              {
                title: "Technical Mastery",
                desc: "Deep expertise in Core Web Vitals, technical architecture, and advanced optimization techniques.",
                features: [
                  "Performance Optimization",
                  "Technical Audits",
                  "Advanced Schema",
                ],
              },
              {
                title: "Strategic Vision",
                desc: "Aligning SEO initiatives with business objectives for maximum impact and ROI.",
                features: [
                  "Data Analysis",
                  "Competitive Strategy",
                  "Growth Planning",
                ],
              },
              {
                title: "Results Focus",
                desc: "Delivering measurable outcomes through continuous optimization and testing.",
                features: [
                  "KPI Tracking",
                  "ROI Optimization",
                  "Performance Reporting",
                ],
              },
            ].map((item, index) => (
              <div
                key={item.title}
                className="space-y-4 rounded-2xl border border-slate-200 bg-white p-6"
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`rounded-lg bg-gradient-to-br ${
                      index === 0
                        ? "from-blue-500 to-cyan-500"
                        : index === 1
                        ? "from-emerald-500 to-teal-500"
                        : "from-purple-500 to-pink-500"
                    } p-2`}
                  >
                    <Target className="h-5 w-5 text-white" />
                  </div>
                  <h4 className="text-xl font-semibold text-slate-900">
                    {item.title}
                  </h4>
                </div>
                <p className="text-slate-600">{item.desc}</p>
                <ul className="space-y-2 font-semibold ">
                  {item.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 text-sm text-slate-700"
                    >
                      <div className="h-1.5 w-1.5 rounded-full bg-blue-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
