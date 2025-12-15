"use client";

import {
  Search,
  FileText,
  Link2,
  Code,
  TrendingUp,
  BarChart3,
  Sparkles,
  Target,
  Zap,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";

const skills = [
  {
    icon: Search,
    title: "Keyword Research & Analysis",
    description:
      "Identifying high-impact keywords based on search intent, competition, and ranking opportunities.",
    gradient: "from-blue-500 to-cyan-500",
    delay: 0,
    features: [
      "Search Intent Analysis",
      "Keyword Difficulty Evaluation",
      "Competitor Keyword Gap Analysis",
    ],
  },
  {
    icon: Target,
    title: "SEO Strategy & Planning",
    description:
      "Creating data-driven SEO strategies aligned with business goals for sustainable organic growth.",
    gradient: "from-purple-500 to-pink-500",
    delay: 0.1,
    features: [
      "SEO Roadmap Creation",
      "Traffic Growth Strategy",
      "Keyword Priority Mapping",
    ],
  },
  {
    icon: FileText,
    title: "On-Page SEO Optimization",
    description:
      "Optimizing content, meta tags, headings, and internal links to improve rankings and CTR.",
    gradient: "from-emerald-500 to-teal-500",
    delay: 0.2,
    features: [
      "Meta Title & Description Optimization",
      "Content Optimization",
      "Internal Linking Structure",
    ],
  },
  {
    icon: Link2,
    title: "Off-Page SEO & Link Building",
    description:
      "Building high-quality backlinks to improve domain authority and search engine trust.",
    gradient: "from-amber-500 to-orange-500",
    delay: 0.3,
    features: [
      "High-Quality Backlinks",
      "Guest Posting",
      "Brand Mentions & Outreach",
    ],
  },
  {
    icon: Code,
    title: "Technical SEO",
    description:
      "Improving website performance, crawlability, and indexation through technical SEO best practices.",
    gradient: "from-red-500 to-rose-500",
    delay: 0.4,
    features: [
      "Core Web Vitals Optimization",
      "Schema Markup Implementation",
      "Crawl & Index Management",
    ],
  },
  {
    icon: TrendingUp,
    title: "SEO Analytics & Reporting",
    description:
      "Tracking SEO performance and making data-backed decisions using analytics and reporting tools.",
    gradient: "from-indigo-500 to-blue-500",
    delay: 0.5,
    features: [
      "Google Analytics & Search Console",
      "Traffic & Ranking Reports",
      "SEO Performance Insights",
    ],
  },
];

export function SkillsSection() {
  const [activeCard, setActiveCard] = useState<number | null>(null);
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white px-6 py-24 md:py-32"
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:radial-gradient(ellipse_at_center,white,transparent_70%)]" />
      <div className="absolute top-0 left-1/4 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-cyan-500/10 to-blue-500/10 blur-3xl" />
      <div className="absolute bottom-0 right-1/4 h-72 w-72 translate-x-1/2 translate-y-1/2 rounded-full bg-gradient-to-r from-emerald-500/10 to-teal-500/10 blur-3xl" />

      <div className="container relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 space-y-6 text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 px-4 py-2 text-sm font-semibold text-white shadow-lg">
            <Sparkles className="h-4 w-4" />
            Advanced Capabilities
          </div>

          <h2 className="text-balance bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 bg-clip-text text-4xl font-bold tracking-tight text-transparent md:text-6xl">
            Technical Excellence
          </h2>

          <p className="mx-auto max-w-3xl text-pretty text-xl text-slate-600 md:text-2xl">
            Leveraging cutting-edge technology and data science to deliver{" "}
            <span className="font-semibold text-emerald-600">
              measurable organic growth
            </span>
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              variants={itemVariants}
              transition={{ delay: skill.delay, duration: 0.5 }}
              onMouseEnter={() => setActiveCard(index)}
              onMouseLeave={() => setActiveCard(null)}
            >
              <Card className="group relative h-full overflow-hidden border-none bg-white/80 p-8 transition-all duration-300 hover:border-transparent hover:shadow-md">
                {/* Animated gradient border */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${skill.gradient} opacity-0 transition-opacity duration-300 group-hover:opacity-5`}
                />

                {/* Hover glow effect */}
                <div
                  className={`absolute -inset-1 bg-gradient-to-br ${skill.gradient} opacity-0 blur-xl transition-all duration-500 group-hover:opacity-10`}
                />

                <div className="relative z-10">
                  {/* Animated icon background */}
                  <motion.div
                    className={`mb-6 inline-flex rounded-2xl bg-gradient-to-br ${skill.gradient} p-4 text-white shadow-lg`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <skill.icon className="h-7 w-7" />
                  </motion.div>

                  {/* Skill level indicator */}
                  <div className="mb-4 flex items-center gap-2">
                    <div className="h-2 flex-1 rounded-full bg-slate-200">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: "85%" }}
                        transition={{ delay: 0.8 + skill.delay, duration: 1 }}
                        className={`h-full rounded-full bg-gradient-to-r ${skill.gradient}`}
                      />
                    </div>
                    <span className="text-sm font-semibold text-slate-500">
                      Expert
                    </span>
                  </div>

                  <h3 className="mb-4 bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-2xl font-bold text-transparent">
                    {skill.title}
                  </h3>

                  <p className="mb-6 leading-relaxed text-slate-600">
                    {skill.description}
                  </p>

                  {/* Features list */}
                  <div className="space-y-2">
                    {skill.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-3">
                        <div
                          className={`h-2 w-2 rounded-full bg-gradient-to-r ${skill.gradient}`}
                        />
                        <span className="text-sm font-medium text-slate-700">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Interactive hover element */}
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={activeCard === index ? { opacity: 1, x: 0 } : {}}
                    className="mt-6 flex items-center gap-2 text-sm font-medium text-emerald-600"
                  >
                    <Zap className="h-4 w-4" />
                    <span>Blogs (Coming Soon)</span>
                  </motion.div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
