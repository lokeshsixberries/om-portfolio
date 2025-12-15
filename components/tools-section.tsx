"use client";

import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import {
  BarChart3,
  Search,
  TrendingUp,
  Target,
  Cpu,
  LineChart,
  Brain,
  GitBranch,
  Cloud,
  Code2,
  Sparkles,
  FileText,
  Link2,
} from "lucide-react";

const tools = [
  {
    name: "Google Analytics",
    category: "SEO Analytics",
    color: "from-orange-500 to-red-500",
    icon: BarChart3,
  },
  {
    name: "Google Search Console",
    category: "Search Performance",
    color: "from-blue-500 to-cyan-500",
    icon: Search,
  },
  {
    name: "Ahrefs",
    category: "Keyword & Backlink Research",
    color: "from-blue-600 to-indigo-600",
    icon: TrendingUp,
  },
  {
    name: "SEMrush",
    category: "Competitive SEO Research",
    color: "from-orange-500 to-amber-500",
    icon: Target,
  },
  {
    name: "Screaming Frog SEO Spider",
    category: "Technical SEO Audits",
    color: "from-green-500 to-emerald-500",
    icon: Cpu,
  },
  {
    name: "Google Looker Studio",
    category: "SEO Reporting & Dashboards",
    color: "from-purple-500 to-pink-500",
    icon: LineChart,
  },
  {
    name: "Google PageSpeed Insights",
    category: "Core Web Vitals",
    color: "from-slate-700 to-slate-900",
    icon: Cloud,
  },
  {
    name: "GTmetrix",
    category: "Performance Optimization",
    color: "from-black to-slate-800",
    icon: Cloud,
  },
  {
    name: "Ubersuggest",
    category: "Keyword Research",
    color: "from-rose-500 to-purple-500",
    icon: Code2,
  },
  {
    name: "Moz Pro",
    category: "SEO Metrics & Tracking",
    color: "from-teal-500 to-cyan-600",
    icon: BarChart3,
  },
  {
    name: "Yoast SEO",
    category: "On-Page SEO (WordPress)",
    color: "from-red-500 to-orange-500",
    icon: FileText,
  },
  {
    name: "Rank Math",
    category: "On-Page SEO (WordPress)",
    color: "from-indigo-500 to-purple-500",
    icon: FileText,
  },
  {
    name: "Google Keyword Planner",
    category: "Keyword Planning",
    color: "from-lime-500 to-green-600",
    icon: Search,
  },
  {
    name: "Bing Webmaster Tools",
    category: "Search Engine Monitoring",
    color: "from-blue-700 to-sky-600",
    icon: TrendingUp,
  },
  {
    name: "Schema Markup Validator",
    category: "Structured Data Testing",
    color: "from-yellow-500 to-amber-600",
    icon: Code2,
  },
  {
    name: "SEO Minion",
    category: "On-Page SEO Checks",
    color: "from-pink-500 to-rose-500",
    icon: Target,
  },
  {
    name: "Google Trends",
    category: "Search Trend Analysis",
    color: "from-cyan-500 to-blue-600",
    icon: TrendingUp,
  },
  {
    name: "Answer The Public",
    category: "Content & Keyword Ideas",
    color: "from-violet-500 to-purple-600",
    icon: Search,
  },
  {
    name: "Keyword Surfer",
    category: "SERP Keyword Insights",
    color: "from-emerald-500 to-green-600",
    icon: BarChart3,
  },
  {
    name: "Majestic SEO",
    category: "Backlink Analysis",
    color: "from-indigo-600 to-blue-700",
    icon: Link2,
  },
];

export function ToolsSection() {
  return (
    <section
      id="tools"
      className="relative overflow-hidden bg-gradient-to-b from-[#0a1628] to-[#0d1b30] px-6 py-20"
    >
      {/* Subtle background effect */}
      <div className="absolute inset-0 bg-grid-white/5" />

      <div className="container relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <Sparkles className="h-5 w-5 text-blue-400" />
            <span className="text-sm font-medium text-blue-400">
              TECH STACK
            </span>
          </div>

          <h2 className="mb-4 text-4xl font-bold tracking-tight text-white md:text-5xl">
            Tools & Technologies
          </h2>

          <p className="mx-auto max-w-2xl text-lg text-slate-300">
            Industry-leading platforms for data-driven optimization and
            performance tracking
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5"
        >
          {tools.map((tool, index) => {
            const Icon = tool.icon;
            return (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ y: -5 }}
              >
                <Card className="group relative overflow-hidden border-slate-700/50 bg-slate-800/30 p-6 backdrop-blur-sm transition-all duration-300 hover:border-blue-500/30 hover:bg-slate-800/50">
                  {/* Gradient border effect on hover */}
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-br opacity-0 transition-opacity duration-300 group-hover:opacity-20" />

                  <div className="relative z-10 text-center">
                    {/* Icon with gradient background */}
                    <div
                      className={`mb-4 mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${tool.color} p-2.5`}
                    >
                      <Icon className="h-6 w-6 text-white" />
                    </div>

                    {/* Tool name and category */}
                    <h3 className="mb-1 text-sm font-semibold text-white truncate">
                      {tool.name}
                    </h3>
                    <p className="text-xs text-slate-400 truncate">
                      {tool.category}
                    </p>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
