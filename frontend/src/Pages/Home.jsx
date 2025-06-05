import React, { useState } from 'react';
import { Search, MapPin } from 'lucide-react';
import brand1 from '../assets/brand-1.webp';
import brand2 from '../assets/brand-2.webp';
import brand3 from '../assets/brand-3.webp';
import brand4 from '../assets/brand-4.webp';
import brand5 from '../assets/brand-5.webp';
import brand6 from '../assets/brand-6.webp';

const Home = () => {
  const [jobQuery, setJobQuery] = useState('');
  const [location, setLocation] = useState('');

  const brands = [brand1, brand2, brand3, brand4, brand5, brand6];
  const trendingCategories = [
    'Account Manager',
    'Administrative',
    'Android',
    'Angular',
    'app',
    'ASP.NET'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Hero Section */}
      <div className="container mx-auto px-6 py-20">
        {/* Title and Image Row */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Content - Title */}
          <div className="space-y-4">
            <h1 className="text-5xl lg:text-5xl font-bold text-gray-900 leading-tight">
              FIND TOP IT JOBS
            </h1>
            <h1 className="text-5xl lg:text-5xl text-gray-900 leading-tight">
              FOR TALENT DEVELOPERS
            </h1>
            <p className="text-xl text-gray-600 mt-6">
              Discover your next career move, freelance gig, or internship
            </p>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative">
              {/* Code Editor Mockup */}
              <div className="bg-gray-900 rounded-2xl shadow-2xl overflow-hidden transform rotate-3 hover:rotate-1 transition-transform duration-300">
                <div className="bg-gray-800 px-4 py-3 flex space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="p-6 font-mono text-sm">
                  <div className="text-blue-400">
                    function <span className="text-yellow-300">findDreamJob</span>() {'{'}
                  </div>
                  <div className="text-gray-300 ml-4">
                    const skills = [<span className="text-green-400">'React'</span>, <span className="text-green-400">'Node.js'</span>];
                  </div>
                  <div className="text-gray-300 ml-4">
                    const passion = <span className="text-green-400">'coding'</span>;
                  </div>
                  <div className="text-gray-300 ml-4">
                    const opportunity = <span className="text-purple-400">searchJobs</span>(skills);
                  </div>
                  <div className="text-gray-300 ml-4">
                    <span className="text-pink-400">return </span>opportunity + passion;
                  </div>
                  <div className="text-blue-400">{'}'}</div>
                  <div className="mt-4 text-gray-500">// Your next adventure starts here 🚀</div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold animate-bounce">
                Remote Jobs
              </div>
            </div>
          </div>
        </div>

        {/* Search Form - Horizontal */}
        <div className="w-full max-w-6xl mx-auto mb-12">
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
            <div className="flex">
              {/* Search Input */}
              <div className="flex-1 p-6 border-r border-gray-200">
                <label className="block text-lg font-semibold text-gray-900 mb-2">What</label>
                <input
                  type="text"
                  placeholder="What jobs you want?"
                  value={jobQuery}
                  onChange={(e) => setJobQuery(e.target.value)}
                  className="w-full text-gray-700 placeholder-gray-400 text-lg bg-transparent border-none outline-none"
                />
              </div>

              {/* Location Input */}
              <div className="flex-1 p-6 border-r border-gray-200">
                <label className="block text-lg font-semibold text-gray-900 mb-2">Where</label>
                <div className="flex items-center">
                  <input
                    type="text"
                    placeholder="Location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full text-gray-700 placeholder-gray-400 text-lg bg-transparent border-none outline-none"
                  />
                  <MapPin className="text-gray-400 w-5 h-5 ml-2" />
                </div>
              </div>

              {/* Search Button */}
              <div className="flex items-center">
                <button className="h-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-semibold px-12 py-6 transition-all duration-200 flex items-center justify-center space-x-3 shadow-lg hover:shadow-xl">
                  <Search className="w-6 h-6" />
                  <span className="text-xl">Find Job</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Trending Categories */}
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap gap-3 justify-center">
            <span className="bg-green-500 text-white px-4 py-2 rounded-full font-medium text-sm">
              Now Trending
            </span>
            {trendingCategories.map((category, index) => (
              <button
                key={index}
                className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-full font-medium text-sm transition-colors duration-200 hover:shadow-md"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Companies Section */}
      <div className="bg-gray-50 py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              <span className="text-black">20,000+ TECH COMPANIES</span>{' '}
              <span className="text-gray-500">ARE LOOKING FOR DEVELOPERS ON JETAPO</span>
            </h2>
          </div>

          <div className="w-full flex m-3 justify-around">
            {brands.map((brand, index) => (
              <div key={index} className="w-[100px]">
                <img src={brand} alt="" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
