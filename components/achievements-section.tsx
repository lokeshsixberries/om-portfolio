import { TrendingUp, Users, Award } from "lucide-react"

const achievements = [
  {
    icon: TrendingUp,
    value: "150%+",
    label: "Average Organic Traffic Growth",
  },
  {
    icon: Users,
    value: "10+",
    label: "Successful Client Projects",
  },
  {
    icon: Award,
    value: "100%",
    label: "Client Satisfaction Rate",
  },
]

export function AchievementsSection() {
  return (
    <section className="bg-gradient-to-br from-[#0a1628] via-[#0d1d35] to-[#0a1628] px-6 py-24">
      <div className="container mx-auto max-w-7xl">
        <div className="mb-16 space-y-4 text-center">
          <h2 className="text-balance text-4xl font-bold tracking-tight text-white md:text-5xl">Proven Track Record</h2>
          <p className="mx-auto max-w-2xl text-pretty text-lg text-slate-300">
            Delivering measurable results and driving sustainable growth
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {achievements.map((achievement) => (
            <div
              key={achievement.label}
              className="group rounded-2xl border border-emerald-500/20 bg-slate-800/50 p-8 text-center backdrop-blur-sm transition-all hover:border-emerald-500 hover:bg-slate-800"
            >
              <div className="mb-4 flex justify-center">
                <div className="rounded-full bg-emerald-500/10 p-4 text-emerald-400 transition-all group-hover:bg-emerald-500 group-hover:text-white">
                  <achievement.icon className="h-8 w-8" />
                </div>
              </div>
              <div className="mb-2 text-5xl font-bold text-white">{achievement.value}</div>
              <div className="text-lg text-slate-300">{achievement.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
