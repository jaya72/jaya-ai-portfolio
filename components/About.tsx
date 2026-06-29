/*export default function About() {
    return (
      <section className="min-h-screen flex items-center justify-center">
        <h2 className="text-4xl font-bold">About Section</h2>
      </section>
    );
  }*/
    export default function About() {
        return (
          <section
            id="about"
            className="min-h-screen flex items-center justify-center px-6"
          >
            <div className="max-w-4xl">
              <h2 className="text-5xl font-bold mb-10">
                About Me
              </h2>
      
              <p className="text-xl text-gray-400 leading-relaxed">
                I'm a Software Engineer with 5+ years of experience building
                enterprise applications, analytics solutions, and modern web
                platforms.

                I take end to end ownership of the product which
involves development and quality. Flexible to move across different projects and have experience
of working together with cross functional teams.
      
                My journey has evolved from Software engineering to Tech Support Engineer to Business Analytics and 
                now to developing AI-powered Applications that solve real-world problems.
              </p>
            </div>
          </section>
        );
      }