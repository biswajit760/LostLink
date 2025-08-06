import React from 'react';

const HowWeWork = () => {
  return (
    <div className="min-h-screen max-w-full bg-gradient-to-br from-zinc-900 via-black to-zinc-800 
                relative overflow-hidden p-8 border border-white/10 shadow-xl text-white flex  justify-center ">
      
      {/* Glow Background Circles */}
      <div className="absolute -top-16 -left-16 w-80 h-80 bg-white/7 rounded-full blur-2xl"></div>
      <div className="absolute -bottom-16 -right-16 w-80 h-80 bg-white/7 rounded-full blur-2xl"></div>

      <div className="max-w-6xl w-full relative z-10 ">
        {/* Main Heading and Sub-heading */}
<div className="mb-16 text-center space-y-4">
  <h1 className="text-4xl md:text-6xl font-bold ">
    <span className="text-gray-500">How Lost </span>{' '}
    <span className="text-white">Link Work</span>
  </h1>
  <p className="text-base md:text-lg font-normal text-gray-200 max-w-2xl mx-auto leading-relaxed">
    Understand how to report, search, and recover lost or found items easily.
  </p>
</div>



        {/* Card Grid */}
        <div className="grid  grid-cols-1 md:grid-cols-3 gap-10  ">
          {/* Card 1 */}
          <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 shadow-inner border border-white/10 transition-transform hover:scale-105 cursor-pointer ">
            <div className="text-5xl font-black text-white mb-4">1</div>
            <h3 className="text-xl font-semibold text-white mb-3">Report a Lost Item</h3>
            <p className="text-gray-300 leading-relaxed">
              Fill the form with item details, location, date and mention your report type (Lost or Found).
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 shadow-inner border border-white/10 transition-transform hover:scale-105 cursor-pointer">
            <div className="text-5xl font-black text-white mb-4">2</div>
            <h3 className="text-xl font-semibold text-white mb-3">Our System Lists It</h3>
            <p className="text-gray-300 leading-relaxed">
              Your item is listed on the Lost page immediately.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 shadow-inner border border-white/10 transition-transform hover:scale-105 cursor-pointer">
            <div className="text-5xl font-black text-white mb-4">3</div>
            <h3 className="text-xl font-semibold text-white mb-3">People Can Search or Match It</h3>
            <p className="text-gray-300 leading-relaxed">
              Visitors can view and connect with you if they find it.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowWeWork;
