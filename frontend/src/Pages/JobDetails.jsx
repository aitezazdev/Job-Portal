import React from "react";
import {
  FiMapPin,
  FiThumbsUp,
  FiBriefcase,
  FiCheckCircle,
  FiBookOpen,
  FiClock,
  FiCalendar,
} from "react-icons/fi";

const JobDetails = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-start justify-center">
      <div className="w-full">
        <div className="rounded-lg">
          <div className="mx-auto px-16 py-6 shadow-sm">
            <h1 className="text-3xl mx-3 font-bold text-gray-900">Jobs Details</h1>
          </div>
          <div className="px-20 py-8">
            <h1 className="text-4xl   font-bold text-gray-800 mb-4">
              Senior PHP Web Developer
            </h1>
            <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-8">
              <div className="flex items-center gap-2">
                <FiCalendar className="text-xl" />
                <span className="text-sm">Posted date: 8 months ago</span>
              </div>
              <div>|</div>
              <div className="flex items-center gap-2">
                <FiClock className="text-xl" />
                <span className="text-sm">Expires in:</span>
                <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-sm font-medium">
                  October 26, 2022
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <FiMapPin className="text-green-600 text-xl" />
                  </div>
                  <h3 className="font-semibold text-gray-800">Work Location</h3>
                </div>
                <p className="text-gray-600 ml-13">Chicago, Illinois</p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <FiThumbsUp className="text-green-600 text-xl" />
                  </div>
                  <h3 className="font-semibold text-gray-800">Salary</h3>
                </div>
                <p className="text-red-500 font-bold text-xl ml-13">
                  $500 - $1,000 / Month
                </p>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <FiBriefcase className="text-green-600 text-xl" />
                  </div>
                  <h3 className="font-semibold text-gray-800">Type</h3>
                </div>
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium ml-13">
                  Part Time
                </span>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <FiCheckCircle className="text-green-600 text-xl" />
                  </div>
                  <h3 className="font-semibold text-gray-800">Category</h3>
                </div>
                <span className="text-green-600 font-medium ml-13">
                  Accounting
                </span>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <FiBookOpen className="text-green-600 text-xl" />
                  </div>
                  <h3 className="font-semibold text-gray-800">Experience</h3>
                </div>
                <span className="text-green-600 font-medium ml-13">
                  &gt; 5 Years
                </span>
              </div>

              <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <FiBookOpen className="text-green-600 text-xl" />
                  </div>
                  <h3 className="font-semibold text-gray-800">Skills</h3>
                </div>
                <div className="flex flex-wrap gap-2 ml-13">
                  <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                    CSS
                  </span>
                  <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                    PHP
                  </span>
                  <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                    WordPress
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;
