"use client";

import { Card } from "@/components/ui/card";
import {
  GraduationCap,
  ShoppingCart,
  MapPin,
  Heart,
  Code,
  Building2,
  Plane,
  Apple,
  FlaskConical,
  Sparkles,
  TrendingUp,
  Target,
} from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const industries = [
  {
    icon: GraduationCap,
    title: "Education & Training Websites",
    description:
      "SEO optimization for coaching institutes, online courses, and educational service websites.",
    results:
      "Improved keyword rankings and generated consistent organic leads within 4–6 months.",
    color: "from-blue-500 to-cyan-500",
    gradient: "bg-gradient-to-br",
    delay: 0.1,
    metrics: ["+180% traffic", "Top 5 keywords", "Lead growth"],
    clients: ["Coaching Institutes", "Online Courses", "Training Centers"],
  },
  {
    icon: ShoppingCart,
    title: "E-commerce & Product-Based Websites",
    description:
      "Product page SEO, category optimization, and technical fixes for e-commerce platforms.",
    results:
      "Significant improvement in organic sales and visibility for competitive product keywords.",
    color: "from-purple-500 to-pink-500",
    gradient: "bg-gradient-to-br",
    delay: 0.2,
    metrics: ["+160% revenue", "Product rankings", "Better CTR"],
    clients: ["Shopify Stores", "WooCommerce Sites", "Local Brands"],
  },
  {
    icon: Building2,
    title: "Business & Corporate Websites",
    description:
      "SEO for company websites focusing on brand visibility, services pages, and lead generation.",
    results:
      "Achieved first-page rankings for service-based keywords and improved inquiry rate.",
    color: "from-emerald-500 to-teal-500",
    gradient: "bg-gradient-to-br",
    delay: 0.3,
    metrics: ["Service SEO", "First-page rankings", "Lead inquiries"],
    clients: ["IT Companies", "Consulting Firms", "B2B Services"],
  },
  {
    icon: Heart,
    title: "Health, Fitness & Wellness",
    description:
      "Content optimization and on-page SEO following best practices for health-related websites.",
    results:
      "Improved trust signals and rankings for non-medical wellness keywords.",
    color: "from-rose-500 to-red-500",
    gradient: "bg-gradient-to-br",
    delay: 0.4,
    metrics: ["Content SEO", "Keyword growth", "User trust"],
    clients: ["Fitness Trainers", "Wellness Brands", "Yoga Centers"],
  },
  {
    icon: Code,
    title: "Tech & IT Service Websites",
    description:
      "SEO for technology companies, SaaS landing pages, and IT service providers.",
    results:
      "Higher visibility for technical service keywords and increased demo/contact requests.",
    color: "from-amber-500 to-orange-500",
    gradient: "bg-gradient-to-br",
    delay: 0.5,
    metrics: ["Technical SEO", "Keyword rankings", "Lead conversion"],
    clients: ["IT Firms", "Software Companies", "Tech Startups"],
  },
  {
    icon: Plane,
    title: "Local Business & Services",
    description:
      "Local SEO optimization for service-based businesses targeting city-level searches.",
    results:
      "Improved Google Business Profile visibility and local keyword rankings.",
    color: "from-indigo-500 to-blue-500",
    gradient: "bg-gradient-to-br",
    delay: 0.6,
    metrics: ["Local SEO", "Map rankings", "Call inquiries"],
    clients: ["Local Services", "Agencies", "Small Businesses"],
  },
];

export function IndustriesSection() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: {
      y: 50,
      opacity: 0,
      scale: 0.9,
    },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <section
      id="industries"
      className="relative overflow-hidden bg-gradient-to-b from-white via-slate-100 to-white py-32"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-grid-slate-900/5 [mask-image:radial-gradient(ellipse_at_center,white,transparent_80%)]" />

      {/* Floating gradient orbs */}
      <motion.div
        className="absolute top-1/3 -left-32 h-64 w-64 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 blur-3xl"
        animate={{
          x: [0, 100, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-1/3 -right-32 h-72 w-72 rounded-full bg-gradient-to-r from-emerald-500/20 to-teal-500/20 blur-3xl"
        animate={{
          x: [0, -80, 0],
          y: [0, 60, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="container relative mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={inView ? { scale: 1 } : {}}
            transition={{ delay: 0.2, type: "spring" }}
            className="mb-6 inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-slate-900 to-slate-800 px-6 py-3 shadow-xl"
          >
            <Target className="h-5 w-5 text-white" />
            <span className="text-sm font-semibold text-white uppercase tracking-wider">
              Industry Expertise
            </span>
          </motion.div>

          <h2 className="mb-4 text-4xl font-bold tracking-tight text-slate-900 md:text-6xl">
            Diverse Industry{" "}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Impact
            </span>
          </h2>

          <p className="mx-auto max-w-3xl text-xl text-slate-600 md:text-2xl">
            Proven success delivering{" "}
            <span className="font-semibold text-blue-600">
              measurable SEO results
            </span>{" "}
            across multiple verticals
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {industries.map((industry) => (
            <motion.div
              key={industry.title}
              variants={cardVariants}
              whileHover={{
                y: -5,
                transition: { duration: 0.3 },
              }}
            >
              <Card className="group relative h-full overflow-hidden border-none border-slate-200 p-8 backdrop-blur-sm transition-all duration-500 ">
                {/* Gradient overlay on hover */}
                <div
                  className={`absolute inset-0 ${industry.gradient} ${industry.color} opacity-0 transition-opacity duration-500 group-hover:opacity-5`}
                />

                {/* Glow effect */}
                <div
                  className={`absolute -inset-1 ${industry.gradient} ${industry.color} opacity-0 blur-xl transition-all duration-500 group-hover:opacity-20`}
                />

                <div className="relative z-10">
                  {/* Icon with gradient */}
                  <motion.div
                    className={`mb-6 inline-flex rounded-2xl ${industry.gradient} ${industry.color} p-4 text-white shadow-lg`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <industry.icon className="h-7 w-7" />
                  </motion.div>

                  <h3 className="mb-4 text-2xl font-bold text-slate-900">
                    {industry.title}
                  </h3>

                  <p className="mb-6 leading-relaxed text-slate-600">
                    {industry.description}
                  </p>

                  {/* Metrics chips */}
                  <div className="mb-6 flex flex-wrap gap-2">
                    {industry.metrics.map((metric) => (
                      <span
                        key={metric}
                        className={`rounded-full ${industry.gradient} ${industry.color} bg-opacity-10 px-3 py-1 text-xs font-medium text-white`}
                      >
                        {metric}
                      </span>
                    ))}
                  </div>

                  {/* Sample clients */}
                  <div className="mt-6 pt-4 border-t border-slate-100">
                    <div className="flex items-center gap-2 mb-2">
                      <Sparkles className="h-4 w-4 text-slate-400" />
                      <span className="text-xs font-medium text-slate-500 uppercase tracking-wider">
                        Sample Verticals
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {industry.clients.map((client) => (
                        <span
                          key={client}
                          className="rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-600 font-semibold"
                        >
                          {client}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
