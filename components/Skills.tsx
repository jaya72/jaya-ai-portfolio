export default function Skills() {
    const skillCategories = [
      {
        title: "Software Engineering",
        skills: ["Java", "JavaScript", "TypeScript", "React", "Next.js"],
      },
      {
        title: "Data Analytics",
        skills: ["SQL", "Power BI", "Excel", "Data Visualization", "Reporting"],
      },
      {
        title: "Cloud & DevOps",
        skills: ["AWS", "S3", "Athena", "Glue", "CloudWatch"],
      },
      {
        title: "AI & Modern Development",
        skills: [
          "Prompt Engineering",
          "AI Agents",
          "OpenAI APIs",
          "REST APIs",
          "GitHub Copilot",
        ],
      },
    ];
  
    return (
      <section
        id="skills"
        className="min-h-screen bg-[#050505] py-32 px-6"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold mb-16">
            Skills & Technologies
          </h2>
  
          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category) => (
              <div
                key={category.title}
                className="p-8 rounded-2xl border border-white/10 bg-white/5 hover:border-blue-500 transition duration-300"
              >
                <h3 className="text-2xl font-semibold mb-6 text-blue-400">
                  {category.title}
                </h3>
  
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 rounded-full bg-black border border-white/10 text-gray-300 text-sm"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }