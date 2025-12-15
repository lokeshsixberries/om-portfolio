"use client";

import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Sparkles,
  TrendingUp,
  Target,
  Zap,
  ChevronDown,
} from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-[#0a1628] via-[#0d1b30] to-[#0a1628] px-6 py-20">
      {/* Animated gradient background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-96 translate-x-1/2 translate-y-1/2 rounded-full bg-gradient-to-r from-emerald-500/20 to-teal-500/20 blur-3xl" />

        {/* Grid overlay */}
        <div className="absolute inset-0 bg-grid-white/5 [mask-image:radial-gradient(ellipse_at_center,white,transparent_70%)]" />

        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-1 w-1 rounded-full bg-white/20"
            initial={{
              x: Math.random() * 100 + "vw",
              y: Math.random() * 100 + "vh",
            }}
            animate={{
              y: [null, `-${Math.random() * 100}px`],
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Parallax content */}
      <div
        className="container relative z-10 mx-auto max-w-7xl"
        style={{
          transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
          transition: "transform 0.1s ease-out",
        }}
      >
        <div className="flex flex-col items-start gap-10 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", delay: 0.2 }}
              className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 px-6 py-3 shadow-2xl shadow-blue-500/30"
            >
              <Sparkles className="h-5 w-5 text-white" />
              <span className="text-sm font-semibold text-white uppercase tracking-wider">
                Senior SEO Analyst
              </span>
            </motion.div>

            {/* Main heading with gradient */}
            <div className="space-y-4">
              <h1 className="text-balance text-5xl font-bold tracking-tight text-white md:text-7xl lg:text-8xl">
                <span className="bg-gradient-to-r from-white via-slate-200 to-white bg-clip-text text-transparent">
                  Driving{" "}
                  <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">
                    Organic Growth
                  </span>{" "}
                  Through
                </span>
                <br />
                <span className="bg-gradient-to-r from-blue-500 via-cyan-500 to-emerald-500 bg-clip-text text-transparent">
                  Strategic SEO
                </span>
              </h1>

              {/* Subheading */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="max-w-3xl text-xl leading-relaxed text-slate-300 md:text-2xl"
              >
                Transforming digital presence through{" "}
                <span className="font-semibold text-cyan-400">
                  data-driven strategies
                </span>
                ,{" "}
                <span className="font-semibold text-emerald-400">
                  technical excellence
                </span>
                , and{" "}
                <span className="font-semibold text-blue-400">
                  measurable results
                </span>
                .
              </motion.p>
            </div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="max-w-3xl text-lg leading-relaxed text-slate-400"
            >
              I specialize in architecting comprehensive SEO strategies that
              deliver sustainable organic growth. With expertise across 15+
              industries and a proven track record of driving 185%+ average
              traffic increases, I help businesses achieve their full digital
              potential.
            </motion.p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-wrap gap-4"
          >
            <Button
              size="lg"
              className="group relative overflow-hidden bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-xl shadow-blue-500/30 hover:from-blue-600 hover:to-cyan-600"
              asChild
            >
              <a href="#contact">
                <span className="relative z-10">Start Your SEO Journey</span>
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              </a>
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-slate-600/50 bg-white/5 text-white backdrop-blur-sm hover:bg-white/10"
              asChild
            >
              <a href="#experience">
                View Case Studies
                <TrendingUp className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="mt-8 grid w-full grid-cols-2 gap-6 md:grid-cols-4"
          >
            {[
              {
                icon: TrendingUp,
                value: "140%",
                label: "Avg. Traffic Growth",
                color: "from-emerald-500 to-teal-500",
              },
              {
                icon: Target,
                value: "5+",
                label: "Projects Delivered",
                color: "from-blue-500 to-cyan-500",
              },
              {
                icon: Zap,
                value: "1.5x",
                label: "Avg. ROI",
                color: "from-purple-500 to-pink-500",
              },
              {
                icon: Sparkles,
                value: "2+",
                label: "Industries",
                color: "from-amber-500 to-orange-500",
              },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2 + index * 0.1 }}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 transition-opacity group-hover:opacity-10`}
                />
                <div className="relative z-10">
                  <div
                    className={`mb-3 inline-flex rounded-xl bg-gradient-to-br ${stat.color} p-2`}
                  >
                    <stat.icon className="h-5 w-5 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-white">
                    {stat.value}
                  </div>
                  <div className="text-sm text-slate-400">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 1.5,
          repeat: Infinity,
          repeatType: "reverse",
          duration: 1.5,
        }}
        className="absolute bottom-1 left-1/2 -translate-x-1/2"
      >
        <a
          href="#about"
          className="flex flex-col items-center text-slate-400 hover:text-white"
        >
          <span className="mb-2 text-sm font-medium">Explore More</span>
          <ChevronDown className="h-6 w-6 animate-bounce" />
        </a>
      </motion.div>

      {/* Glowing orb following mouse */}
      <motion.div
        className="fixed h-96 w-96 rounded-full bg-gradient-to-r from-blue-500/10 to-cyan-500/10 blur-3xl"
        animate={{
          x: mousePosition.x * 10,
          y: mousePosition.y * 10,
        }}
        transition={{ type: "spring", stiffness: 150, damping: 30 }}
        style={{
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
        }}
      />
    </section>
  );
}
