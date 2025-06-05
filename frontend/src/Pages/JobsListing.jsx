import React from "react";
import {
  Search,
  Mail,
  Heart,
  MapPin,
  Clock,
  Grid3X3,
  List,
} from "lucide-react";
import logo1 from "../assets/logo1.webp";
import logo2 from "../assets/logo2.webp";
import logo3 from "../assets/logo3.webp";
import logo4 from "../assets/logo4.webp";
import logo5 from "../assets/logo5.webp";
import logo6 from "../assets/logo6.webp";

const JobsListing = () => {
  const experienceOptions = [
    { label: "> 5 years", count: 1 },
    { label: "< 1 year", count: 5 },
    { label: "1-3 years", count: 10 },
    { label: "3-5 years", count: 4 },
  ];

  const jobs = [
    {
      id: 1,
      title: "Chief Accountant",
      company: "Shippo Company",
      logo: logo1,
      salary: "$500 - $1,000 / month",
      location: "Hanoi, Hanoi",
      timeAgo: "8 months ago",
      type: "FULL TIME",
      featured: true,
      tags: ["Android", "app", "ReactJs", "Ruby"],
    },
    {
      id: 2,
      title: "Senior Data Engineer",
      company: "Radio Game",
      logo: logo2,
      salary: "$500 - $1,000 / month",
      location: "Chicago, Illinois",
      timeAgo: "8 months ago",
      type: "PART TIME",
      featured: true,
      tags: ["CSS", "PHP", "WordPress"],
    },
    {
      id: 3,
      title: "Construction Worker",
      company: "Digital Vine",
      logo: logo3,
      salary: "$500 - $1000 / month",
      location: "Chicago, Illinois",
      timeAgo: "8 months ago",
      type: "REMOTE",
      featured: false,
      tags: ["Angular", "ASP.NET, Banner, C++"],
    },
    {
      id: 4,
      title: "Unity Developer",
      company: "Vsmarttech",
      logo: logo4,
      salary: "$500 - $1000 / month",
      location: "Hanoi, Hanoi",
      timeAgo: "8 months ago",
      type: "FULL TIME",
      featured: true,
      tags: ["NodeJS", "PHP", "Python"],
    },
    {
      id: 5,
      title: "Receptionist",
      company: "Digital Vine",
      logo: logo5,
      salary: "$500 - $1000 / month",
      location: "FULL TIME",
      timeAgo: "8 month ago",
      type: "FULL TIME",
      featured: true,
      tags: ["Android", "app", "ReactJS", "Ruby"],
    },
    {
      id: 6,
      title: "IOS Developer",
      company: "InwaveThemes",
      logo: logo6,
      salary: "$500 - $1000 / month",
      location: "FULL TIME",
      timeAgo: "8 month ago",
      type: "FULL TIME",
      featured: true,
      tags: ["app", "ios"],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-gray-900">Jobs Listing</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex gap-8">
          <div className="w-80 space-y-6">
            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Find a job
              </h2>
              <div className="space-y-4">
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search..."
                    className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg"
                  />
                </div>
                <button className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-4 rounded-lg">
                  Search
                </button>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Experience
              </h3>
              <div className="space-y-3">
                {experienceOptions.map((option, index) => (
                  <label
                    key={index}
                    className="flex items-center cursor-pointer p-2 rounded-md">
                    <input type="checkbox" className="h-4 w-4" />
                    <span className="ml-3 text-sm text-gray-700">
                      {option.label} ({option.count})
                    </span>
                  </label>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Location
              </h3>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Enter location"
                  className="w-full px-4 py-2.5 border border-gray-300 rounded-lg pr-10"
                />
                <button className="absolute right-3 top-2.5 text-gray-400">
                  <MapPin className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>

          <div className="flex-1 px-10">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-4">
                <span className="text-green-600 font-semibold text-lg">
                  (22) Jobs & Vacancies
                </span>
                <button className="flex items-center gap-2 text-gray-600">
                  <Mail className="h-4 w-4" />
                  Email me jobs like these
                </button>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-600 font-medium">
                    Sort by:
                  </span>
                  <select className="border border-gray-300 rounded-lg px-4 py-2 text-sm bg-white">
                    <option>Title</option>
                    <option>Date</option>
                    <option>Salary</option>
                  </select>
                </div>
                <div className="flex border border-gray-300 rounded-lg overflow-hidden">
                  <button className="p-2.5 text-gray-600">
                    <List className="h-4 w-4" />
                  </button>
                  <button className="p-2.5 text-gray-600">
                    <Grid3X3 className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>

            <div className="space-y-5">
              {jobs.map((job) => (
                <div
                  key={job.id}
                  className="flex bg-white rounded-xl px-6 py-6 shadow-sm border border-gray-200 hover:border-green-400 hover:shadow-lg transition-all duration-200">
                  <div className="w-1/5 flex justify-center items-center">
                    <img
                      src={job.logo}
                      alt={job.company}
                      className="w-14 h-14 rounded-xl object-cover shadow-sm border border-gray-200"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <h3 className="text-2xl font-bold text-gray-900">
                        {job.title}
                      </h3>
                      <div className="flex items-center gap-3 ml-4">
                        {job.featured && (
                          <span className="bg-green-100 text-green-600 text-sm font-bold px-2 py-1 rounded-lg">
                            Featured
                          </span>
                        )}
                        <span
                          className={`text-sm font-bold px-3 py-1.5 ${
                            job.type === "FULL TIME"
                              ? "text-blue-800"
                              : job.type === "PART TIME"
                              ? "text-purple-800"
                              : "text-indigo-800"
                          }`}>
                          {job.type}
                        </span>
                        <button className="p-2 text-gray-400 hover:text-red-500 transition">
                          <Heart className="h-5 w-5" />
                        </button>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-3 font-medium">
                      {job.company}
                    </p>
                    <div className="flex items-center gap-6 text-sm text-gray-500 mb-4">
                      <span className="text-red-500 font-bold text-base">
                        {job.salary}
                      </span>
                      <div className="flex items-center gap-1.5">
                        <Clock className="h-4 w-4" />
                        <span>{job.timeAgo}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <MapPin className="h-4 w-4" />
                        <span>{job.location}</span>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {job.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="bg-gray-100 text-gray-700 text-sm px-3 py-1.5 rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-center mt-8">
              <button className="bg-white border-2 border-green-500 text-green-600 font-semibold px-8 py-3 rounded-lg hover:bg-green-500 hover:text-white transition">
                Load More Jobs
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobsListing;
