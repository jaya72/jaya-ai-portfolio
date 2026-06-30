"use client";

export default function HeroContent() {
  return (
    <div className="w-[620px] rounded-3xl border border-cyan-400/20 bg-black/40 px-14 py-12 backdrop-blur-xl shadow-2xl">
      <h2 className="mb-8 text-4xl font-bold text-cyan-300">
        Jaya Mishra
      </h2>

      <div className="space-y-5 text-left text-lg text-gray-300">

        <p>
          <span className="font-semibold text-cyan-400">Occupation:</span>{" "}
          Software Engineer
        </p>

        <p>
          <span className="font-semibold text-cyan-400">Location:</span>{" "}
          Redmond, WA, USA
        </p>

        <p>
          <span className="font-semibold text-cyan-400">Focus:</span>{" "}
          AI, Machine Learning & Analytics
        </p>

        <p>
          <span className="font-semibold text-cyan-400">Email:</span>{" "}
          jayamishra759@gmail.com
        </p>

        <p>
          <span className="font-semibold text-cyan-400">Resume:</span>{" "}
          Download Resume
        </p>

      </div>

    </div>
  );
}