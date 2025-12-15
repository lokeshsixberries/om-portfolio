"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Mail,
  Linkedin,
  Send,
  MessageSquare,
  Zap,
  Sparkles,
  CheckCircle,
  MapPin,
  Phone,
} from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    console.log("Form submitted:", formData);
    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", message: "" });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "omp482003@gmail.com",
      href: "mailto:omp482003@gmail.com",
      color: "from-blue-500 to-cyan-500",
      delay: 0.1,
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      value: "Connect with me",
      href: "https://www.linkedin.com/in/om-prakash-bhatt-49225127a/",
      color: "from-blue-600 to-blue-700",
      delay: 0.2,
    },
    {
      icon: MapPin,
      title: "Location",
      value: "India",
      href: "https://www.linkedin.com/in/om-prakash-bhatt-49225127a/",
      color: "from-emerald-500 to-teal-500",
      delay: 0.3,
    },
  ];

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-gradient-to-b from-white to-slate-50 py-32"
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid-slate-900/5 [mask-image:radial-gradient(ellipse_at_center,white,transparent_70%)]" />
      <div className="absolute top-0 right-0 h-96 w-96 translate-x-1/3 -translate-y-1/3 rounded-full bg-gradient-to-r from-cyan-500/10 to-blue-500/10 blur-3xl" />
      <div className="absolute bottom-0 left-0 h-96 w-96 -translate-x-1/3 translate-y-1/3 rounded-full bg-gradient-to-r from-emerald-500/10 to-teal-500/10 blur-3xl" />

      <div className="container relative mx-auto max-w-6xl px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={inView ? { scale: 1 } : {}}
            transition={{ delay: 0.2, type: "spring" }}
            className="mb-6 inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 px-6 py-3 shadow-xl"
          >
            <MessageSquare className="h-5 w-5 text-white" />
            <span className="text-sm font-semibold text-white uppercase tracking-wider">
              Get In Touch
            </span>
          </motion.div>

          <h2 className="mb-4 text-4xl font-bold tracking-tight text-slate-900 md:text-6xl">
            Let's{" "}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Connect
            </span>
          </h2>

          <p className="mx-auto max-w-2xl text-xl text-slate-600">
            Ready to boost your online presence? Let's discuss how strategic SEO
            can transform your business.
          </p>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-3">
          {/* Contact Info Cards */}
          <div className="space-y-6">
            {contactInfo.map((item, index) => (
              <motion.a
                key={item.title}
                href={item.href}
                target={item.title === "LinkedIn" ? "_blank" : "_self"}
                rel={item.title === "LinkedIn" ? "noopener noreferrer" : ""}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: item.delay }}
                className="group block"
              >
                <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 transition-opacity duration-300 group-hover:opacity-5`}
                  />

                  <div className="relative z-10 flex items-center gap-4">
                    <div
                      className={`rounded-xl bg-gradient-to-br ${item.color} p-3 text-white shadow-lg`}
                    >
                      <item.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900">
                        {item.title}
                      </div>
                      <div className="text-slate-600">{item.value}</div>
                    </div>
                  </div>
                </div>
              </motion.a>
            ))}

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 p-6 text-white"
            >
              <div className="mb-4 flex items-center gap-3">
                <Zap className="h-5 w-5 text-cyan-400" />
                <h4 className="text-lg font-semibold">Quick Response</h4>
              </div>
              <ul className="space-y-3 text-sm text-slate-300">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-emerald-400" />
                  <span>Response within 24 hours</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-emerald-400" />
                  <span>Free initial consultation</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-emerald-400" />
                  <span>Custom strategy proposal</span>
                </li>
              </ul>
            </motion.div>
          </div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="lg:col-span-2 space-y-6"
          >
            <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white/80 p-8 backdrop-blur-sm">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-cyan-500/5" />

              <div className="relative z-10">
                <div className="mb-8">
                  <h3 className="mb-2 text-2xl font-bold text-slate-900">
                    Send a Message
                  </h3>
                  <p className="text-slate-600">
                    Share your project details and I'll get back to you shortly.
                  </p>
                </div>

                {isSubmitted ? (
                  <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="rounded-xl bg-gradient-to-r from-emerald-50 to-green-50 p-8 text-center"
                  >
                    <CheckCircle className="mx-auto mb-4 h-16 w-16 text-emerald-500" />
                    <h4 className="mb-2 text-2xl font-bold text-slate-900">
                      Message Sent!
                    </h4>
                    <p className="text-slate-600">
                      Thank you for reaching out. I'll get back to you within 24
                      hours.
                    </p>
                  </motion.div>
                ) : (
                  <>
                    <div className="grid gap-6 md:grid-cols-2">
                      <div className="mb-3">
                        <label
                          htmlFor="name"
                          className="mb-2 block text-sm font-medium text-slate-700"
                        >
                          Your Name
                        </label>
                        <Input
                          id="name"
                          placeholder="John Doe"
                          value={formData.name}
                          onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                          }
                          required
                          className="h-12 bg-white text-slate-600 border-slate-300 focus:border-blue-500"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="mb-2 block text-sm font-medium text-slate-700"
                        >
                          Your Email
                        </label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="john@example.com"
                          value={formData.email}
                          onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                          }
                          required
                          className="h-12 bg-white  text-slate-600 border-slate-300 focus:border-blue-500"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="mb-2 block text-sm font-medium text-slate-700"
                      >
                        Project Details
                      </label>
                      <Textarea
                        id="message"
                        placeholder="Tell me about your website, goals, and what you're looking to achieve..."
                        rows={6}
                        value={formData.message}
                        onChange={(e) =>
                          setFormData({ ...formData, message: e.target.value })
                        }
                        required
                        className="h-51 bg-white text-slate-600 border-slate-300 focus:border-blue-500"
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      disabled={isSubmitting}
                      className="mt-6 w-full bg-gradient-to-r from-slate-700 to-slate-900 text-white shadow-lg hover:from-blue-600 hover:to-cyan-600"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="mr-2 h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send className="ml-2 h-5 w-5" />
                        </>
                      )}
                    </Button>
                  </>
                )}
              </div>
            </div>
          </motion.form>
        </div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          className="mt-24 rounded-3xl bg-gradient-to-r from-slate-900 to-slate-800 p-12 text-center text-white shadow-2xl"
        >
          <div className="mb-6 inline-flex items-center gap-3">
            <Sparkles className="h-6 w-6 text-cyan-400" />
            <span className="text-sm font-semibold uppercase tracking-wider">
              Ready to Start?
            </span>
          </div>

          <h3 className="mb-4 text-3xl font-bold md:text-4xl">
            Let's Boost Your{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Online Presence
            </span>
          </h3>

          <p className="mx-auto mb-8 max-w-2xl text-slate-300">
            From startups to enterprise businesses, I help companies achieve
            measurable growth through strategic SEO.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600"
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Start Project
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/20 text-white bg-slate-800"
            >
              View Case Studies
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
