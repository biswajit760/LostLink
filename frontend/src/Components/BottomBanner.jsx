import React from 'react';

const features = [
  {
    title: 'Quick Reporting',
    description: 'Lost your items? Report them in seconds with our streamlined, intuitive form.',
    icon: '/Quick.png',
    gradient: 'from-green-400 to-emerald-500',
  },
  {
    title: 'Campus-Wide Network',
    description: 'We connect every corner of the university to maximize your chances of reuniting with your belongings.',
    icon: '/Community.png',
    gradient: 'from-blue-400 to-cyan-500',
  },
  {
    title: 'Trusted Community',
    description: 'Built for students, by students—we\'re the campus\'s most reliable lost and found ecosystem.',
    icon: '/Trust.png',
    gradient: 'from-purple-400 to-pink-500',
  },
  {
    title: 'Effortless Process',
    description: 'Recover your belongings without the hassle of running across campus or endless searching.',
    icon: '/Easy.png',
    gradient: 'from-orange-400 to-red-500',
  },
];

const BottomBanner = () => {
  return (
    <div className="min-h-screen w-full my-20  px-10">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-5xl md:text-5xl font-black bg-gradient-to-r from-gray-900 via-gray-700 to-black bg-clip-text text-transparent mb-4">
          Why You Trust Us!
        </h1>
        <div className="w-24 h-1 bg-gradient-to-r from-gray-700 to-gray-900 mx-auto rounded-full"></div>
      </div>

      {/* Main Container */}
      <div className="relative">
       
        {/* Content */}
        <div className="relative flex flex-col lg:flex-row items-center bg-white/80 backdrop-blur-sm rounded-lg shadow-2xl border border-white/20 p-6 md:p-10 gap-8 overflow-hidden z-10">
          {/* Background Blurs */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-200/30 to-purple-200/30  blur-xl"></div>
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-br from-purple-200/30 to-blue-200/30  blur-xl"></div>

          {/* Image Section */}
          <div className="lg:w-2/5 w-full group relative">
            <img src="/BottomBanner.png" alt="Trusted Lost & Found Platform" className="w-full h-auto" />
          </div>

          {/* Features */}
          <div className="lg:w-3/5 w-full space-y-2">
            {features.map((item, index) => (
              <div
                key={index}
                className="group flex items-start gap-6 p-2 rounded-md hover:bg-white/60 hover:shadow-lg hover:translate-x-2 transition-all duration-300"
              >
                <div className="relative">
                  <div className={`absolute inset-0 bg-gradient-to-r ${item.gradient} rounded-md blur opacity-20 group-hover:opacity-40 transition-opacity duration-300`}></div>
                  <div className={`relative w-12 h-12 bg-gradient-to-r ${item.gradient} rounded-md shadow-lg flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                    <img src={item.icon} alt={item.title} className="w-8 h-8 filter brightness-0 invert" />
                  </div>
                </div>

                <div className="flex-1">
                  <h2 className="text-2xl md:text-2xl font-bold text-gray-900 mb-3 group-hover:text-gray-700 transition-colors duration-300">
                    {item.title}
                  </h2>
                  <p className="text-gray-600 text-md leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
                    {item.description}
                  </p>
                  <div className={`w-0 h-0.5 bg-gradient-to-r ${item.gradient} mt-4 group-hover:w-16 transition-all duration-500 ease-out`}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomBanner;
