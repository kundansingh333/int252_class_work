import React from "react";

const About = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="mb-10 lg:mb-0">
            <h2 className="text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">
              We are building the <br />
              <span className="text-indigo-600">future of digital.</span>
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Founded in 2024, our company focuses on delivering high-quality
              web experiences. We believe in clean code, elegant design, and
              putting the user first. Our mission is to simplify the complex and
              make the web accessible to everyone.
            </p>
            <div className="mt-8">
              <button className="px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:text-lg transition duration-300">
                Read our Story
              </button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <img
              className="rounded-2xl shadow-xl w-full object-cover h-64 lg:h-full"
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Team working together"
            />
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900">Meet our Team</h3>
            <p className="mt-2 text-gray-600">
              The creative minds behind the screen.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {/* Team Member 1 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:-translate-y-2 transition duration-300">
              <img
                className="h-56 w-full object-cover"
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                alt="CEO"
              />
              <div className="p-6">
                <h4 className="font-bold text-xl">James Carter</h4>
                <p className="text-indigo-600">Founder & CEO</p>
              </div>
            </div>

            {/* Team Member 2 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:-translate-y-2 transition duration-300">
              <img
                className="h-56 w-full object-cover"
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                alt="Designer"
              />
              <div className="p-6">
                <h4 className="font-bold text-xl">Sarah Jenkins</h4>
                <p className="text-indigo-600">Lead Designer</p>
              </div>
            </div>

            {/* Team Member 3 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:-translate-y-2 transition duration-300">
              <img
                className="h-56 w-full object-cover"
                src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                alt="Developer"
              />
              <div className="p-6">
                <h4 className="font-bold text-xl">David Ross</h4>
                <p className="text-indigo-600">Senior Developer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
