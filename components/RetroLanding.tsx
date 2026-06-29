export default function RetroLanding() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-6xl w-full">

        <h1 className="text-6xl font-bold text-center mb-12">
          Jaya Mishra
        </h1>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="border-4 border-gray-700 bg-gray-200 p-6">
            <p>► About</p>
            <p className="mt-4">Projects</p>
            <p className="mt-4">Contact</p>
          </div>

          <div className="md:col-span-2 border-4 border-gray-700 bg-gray-200">

            {/* Identification Card Header */}
            <div className="bg-green-300 border-b-4 border-gray-700 px-4 py-2">
              <h2 className="font-bold text-xl">
                Identification Card
              </h2>
            </div>

            {/* Card Content */}
            <div className="p-8">
              <div className="flex gap-8 items-center">

                <div className="w-40 h-40 rounded-full border-4 border-red-600 bg-white flex items-center justify-center">
                  JM
                </div>

                <div className="text-gray-800">
                  <p>
                    <strong>Name:</strong> Jaya Mishra
                  </p>

                  <p className="mt-3">
                    <strong>Class:</strong> Software Engineer
                  </p>

                  <p className="mt-3">
                    <strong>Skill:</strong> Data Analytics
                  </p>

                  <p className="mt-3">
                    <strong>Future:</strong> AI Developer
                  </p>

                  <p className="mt-3">
                    <strong>XP:</strong> 5+ Years
                  </p>
                </div>

              </div>
            </div>

          </div>

        </div>

        <p className="text-center mt-12 text-2xl">
          ▼ Start Adventure ▼
        </p>

      </div>
    </section>
  );
}