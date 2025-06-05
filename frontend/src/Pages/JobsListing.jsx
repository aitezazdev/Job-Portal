import React, { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
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
import imageList1 from "../assets/jobsList/cover-image-employer-2.webp";
import imageList2 from "../assets/jobsList/cover-image-employer-3.webp";
import imageList3 from "../assets/jobsList/cover-image-employer-4.webp";

const JobsListing = () => {
  const [range, setRange] = useState(50);
  const [amount, setAmount] = useState(1200);
  const [current, setCurrent] = useState(0);

  const navigate = (dir) => {
    setCurrent((prev) =>
      dir === "prev"
        ? (prev - 1 + imageSlider.length) % imageSlider.length
        : (prev + 1) % imageSlider.length
    );
  };

  const experienceOptions = [
    { label: "> 5 years", count: 1 },
    { label: "< 1 year", count: 5 },
    { label: "1-3 years", count: 10 },
    { label: "3-5 years", count: 4 },
  ];

  const typeOptions = [
    { label: "Contract", count: 0 },
    { label: "Freelancer", count: 3 },
    { label: "Full Time", count: 13 },
    { label: "Internship", count: 1 },
    { label: "Part Tome", count: 2 },
    { label: "Remote", count: 2 },
    { label: "Temporary", count: 2 },
  ];

  const levelOption = [
    { label: "Junior", count: 1 },
    { label: "Manager", count: 6 },
    { label: "Professional", count: 3 },
    { label: "Senior", count: 3 },
  ];

  const imageSlider = [
    {
      id: 1,
      image: imageList1,
      shortImage: logo1,
      company: "Inwave Studio",
      stars: 5,
      location: "Chicago, IL, USA",
      jobs: "2 Jobs",
    },
    {
      id: 2,
      image: imageList2,
      shortImage: logo2,
      company: "Vsmarttech",
      stars: 5,
      location: "London, Euston, London, UK",
      jobs: "1 Jobs",
    },
    {
      id: 3,
      image: imageList3,
      shortImage: logo3,
      company: "Digital Asset",
      stars: 5,
      location: "Beijing, China",
      jobs: "1 Jobs",
    },
  ];

  const skills = [
    "Account Manager",
    "Administrative",
    "Android",
    "Angular",
    "app",
    "ASP.NET",
    "Automative",
    "Banner",
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
    {
      id: 7,
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
      id: 8,
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
      id: 9,
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
      id: 10,
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
                    className="w-full outline-none pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg"
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
              <div>
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
                  className="w-full outline-none px-4 py-2.5 border border-gray-300 rounded-lg pr-10"
                />
                <button className="absolute right-3 top-2.5 text-gray-400">
                  <MapPin className="h-5 w-5" />
                </button>
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 space-y-2 shadow-sm border border-gray-200">
              <h3 className="space-x-2">
                <span className="text-zinc-700">Radius:</span>
                <span>{range} KM</span>
              </h3>
              <input
                value={range}
                onChange={(e) => setRange(Number(e.target.value))}
                max={700}
                type="range"
                className="w-4/5 h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer slider-green"
                style={{
                  background: `linear-gradient(to right, #1dae0e 0%, #1dae0e ${
                    (range / 700) * 100
                  }%, #e5e7eb ${(range / 700) * 100}%, #e5e7eb 100%)`,
                }}
              />
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Salaries
              </h2>
              <input
                value={amount}
                onChange={(e) => setAmount(Number(e.target.value))}
                max={100000}
                type="range"
                className="w-4/5 h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer slider-green"
                style={{
                  background: `linear-gradient(to right, #1dae0e 0%, #1dae0e ${
                    (amount / 100000) * 100
                  }%, #e5e7eb ${(amount / 300000) * 100}%, #e5e7eb 100%)`,
                }}
              />
              <h3 className="space-x-2 mt-2">
                <span className="text-zinc-700">Salary Range: </span>
                <span>$0 - ${amount}</span>
              </h3>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Type</h3>
              <div>
                {typeOptions.map((option, index) => (
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
                Level
              </h3>
              <div>
                {levelOption.map((option, index) => (
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
                Skills
              </h3>
              <div className="flex flex-wrap gap-1">
                {skills.map((skill, index) => (
                  <span
                    className="px-3 py-1.5 rounded-full  text-sm text-zinc-600 bg-[#eff1f8] mx-2 flex flex-wrap"
                    key={index}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-sm border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Company Spotlight
              </h3>

              <div className="relative w-full h-64 overflow-hidden rounded-lg">
                <div
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${current * 100}%)` }}>
                  {imageSlider.map((item, index) => (
                    <img
                      key={index}
                      src={item.image}
                      alt={`slide-${index}`}
                      className="w-full h-64 object-cover flex-shrink-0 rounded-lg"
                    />
                  ))}
                </div>

                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-20 h-20">
                  <img
                    src={imageSlider[current].shortImage}
                    alt="logo"
                    className="rounded border-4 border-white shadow-md w-full h-full object-contain"
                  />
                </div>

                <button
                  onClick={() => navigate("prev")}
                  className="absolute top-1/2 cursor-pointer left-4 transform -translate-y-1/2 text-4xl text-white bg-black/40 hover:bg-black/70 p-2 rounded-full transition">
                  {"<"}
                </button>
                <button
                  onClick={() => navigate("next")}
                  className="absolute top-1/2 cursor-pointer right-4 transform -translate-y-1/2 text-4xl text-white bg-black/40 hover:bg-black/70 p-2 rounded-full transition">
                  {">"}
                </button>
              </div>

              <div className="mt-6 p-4 flex flex-col justify-center items-center space-y-2 rounded-lg bg-gray-50 border border-gray-100">
                <h4 className="text-xl font-bold text-gray-800">
                  {imageSlider[current].company}
                </h4>
                <div className="flex items-center text-yellow-500 text-sm mt-1">
                  ⭐⭐⭐⭐⭐
                </div>
                <p className=" mt-1">{imageSlider[current].location}</p>
                <p className="text-green-600 font-semibold mt-1">
                  {imageSlider[current].jobs}
                </p>
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

            <div className="flex items-center justify-center my-10 space-x-2">
              <button className="p-2 cursor-pointer hover:bg-green-500 rounded-full border border-gray-300">
                <FiChevronLeft />
              </button>

              <button className="px-4 cursor-pointer hover:bg-green-500 py-2 rounded-md bg-green-500 text-white ">
                1
              </button>
              <button className="px-4 cursor-pointer hover:bg-green-500 py-2 rounded-md bg-white text-gray-700 border border-gray-300">
                2
              </button>
              <button className="px-4 cursor-pointer hover:bg-green-500 py-2 rounded-md bg-white text-gray-700 border border-gray-300">
                3
              </button>

              <button className="p-2 cursor-pointer hover:bg-green-500 rounded-full border border-gray-300">
                <FiChevronRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobsListing;
