"use client";

const milestones = [
  {
    title: "Software Engineer",
    status: "completed",
  },
  {
    title: "Business Analytics",
    status: "completed",
  },
  {
    title: "AI & Machine Learning",
    status: "current",
  },
  {
    title: "AI Engineer",
    status: "future",
  },
];

export default function JourneyProgress() {
  return (
    <div className="space-y-5">

      <h3 className="text-lg font-semibold">
        Journey Progress
      </h3>

      {milestones.map((item) => (
        <div
          key={item.title}
          className="flex items-center justify-between rounded-xl border border-white/5 bg-black/20 px-4 py-3"
        >
          <span>{item.title}</span>

          {item.status === "completed" && (
            <span className="text-green-400">
              ✓
            </span>
          )}

          {item.status === "current" && (
            <span className="text-cyan-400">
              ●
            </span>
          )}

          {item.status === "future" && (
            <span className="text-gray-500">
              ○
            </span>
          )}

        </div>
      ))}
    </div>
  );
}