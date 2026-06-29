/*export default function Journey() {
    return (
      <section className="min-h-screen flex items-center justify-center">
        <h2 className="text-4xl font-bold"> Journey Section</h2>
      </section>
    );
  }*/

    const journey = [
        {
            company: "Atos India",
            location: "Bangalore, India",
          year: "2018",
          month: "October",
          title: "Technical Support Engineer",
          project:"Telefonica",
          description:
            "Provided L1/L2 support for enterprise applications, resolving incidents and managing service requests through BMC Remedy while meeting SLA commitments.Performed root cause analysis (RCA) using Splunk (log analysis) and user access issues using SQL, logs, and monitoring tools.Monitored application health and system performance using Splunk, Kibana, and other monitoring tools to proactively identify issues.Tracked support metrics, ticket trends, and service performance, providing reports and recommendations for continuous improvement"
        },
        {
          year: "2022",
          title: "Data Analytics",
          description:
            "Business reporting, KPI dashboards, Power BI."
        },
        {
          year: "2024",
          title: "Cloud & Full Stack",
          description:
            "AWS, React, APIs, modern web applications."
        },
        {
          year: "2026",
          title: "AI-Powered Development",
          description:
            "Building intelligent applications with modern AI technologies."
        }
      ];
      
      export default function Journey() {
        return (
          <section
            id="journey"
            className="min-h-screen px-6 py-32"
          >
            <div className="max-w-5xl mx-auto">
              <h2 className="text-5xl font-bold mb-20">
                My Journey
              </h2>
      
              <div className="space-y-16">
                {journey.map((item) => (
                  <div
                    key={item.year}
                    className="border-l-2 border-blue-500 pl-8"
                  >
                    <p className="text-blue-500 font-semibold">
                      {item.year}
                    </p>
      
                    <h3 className="text-3xl font-bold mt-2">
                      {item.title}
                    </h3>
      
                    <p className="text-gray-400 mt-4">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        );
      }