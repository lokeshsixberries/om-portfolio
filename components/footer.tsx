import { Mail, Linkedin, Github } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50 px-6 py-12">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="text-center md:text-left">
            <div className="mb-2 text-2xl font-bold text-slate-900">
              Om Prakash Bhatt
            </div>
            <p className="text-slate-600">
              SEO Analyst | Digital Marketing Professional
            </p>
          </div>
          <div className="flex gap-4">
            <a
              href="mailto:omp482003@gmail.com"
              className="rounded-full bg-slate-200 p-3 text-slate-700 transition-all hover:bg-emerald-500 hover:text-white"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/om-prakash-bhatt-49225127a/"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-slate-200 p-3 text-slate-700 transition-all hover:bg-emerald-500 hover:text-white"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>
        <div className="mt-8 border-t border-slate-200 pt-8 text-center text-sm text-slate-600">
          <p>© 2025 Om Prakash Bhatt. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
