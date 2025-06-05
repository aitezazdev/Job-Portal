import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaChevronDown, FaUser } from "react-icons/fa";
import logo from "../assets/logo.webp";

const menuItems = [
  {
    label: "Jobs",
    badge: "hot",
    subItems: [
      { name: "Job Listings", to: "/jobs-listing" },
      { name: "Job Details", to: "/jobs/details" },
    ],
  },
  {
    label: "Candidates",
    badge: "new",
    subItems: [
      { name: "Candidates Listing", to: "/candidates-listing" },
      { name: "Candidate Details", to: "/candidates/details" },
    ],
  },
  {
    label: "Employers",
    subItems: [
      { name: "Employers Listing", to: "/employers" },
      { name: "Employer Details", to: "/employers/details" },
    ],
  },
  {
    label: "Blog",
    subItems: [{ name: "Single Post", to: "/blog/post" }],
  },
  {
    label: "Pages",
    subItems: [
      { name: "About", to: "/about" },
      { name: "Contact Us", to: "/contact" },
      { name: "FAQs", to: "/faqs" },
      { name: "Pricing & Plan", to: "/pricing" },
      { name: "Login & Register", to: "/login" },
      { name: "Dashboard", to: "/dashboard" },
      { name: "404 Error", to: "/error" },
      {
        name: "Shop",
        to: "/shop",
        children: [
          { name: "Shop", to: "/shop" },
          { name: "Product Details", to: "/shop/product" },
          { name: "Cart", to: "/shop/cart" },
          { name: "Checkout", to: "/shop/checkout" },
          { name: "Wishlist", to: "/shop/wishlist" },
        ],
      },
    ],
  },
];

const Navbar = () => {
  const [hovered, setHovered] = useState(null);
  const [subHovered, setSubHovered] = useState(null);

  return (
    <nav className="bg-white shadow-md px-6 py-4 flex items-center justify-between">
      <div>
        <img src={logo} alt="logo" className="h-10" />
      </div>

      <div className="flex gap-6 relative">
        <NavLink to="/" className="text-gray-800 hover:text-blue-600 font-medium">
          Home
        </NavLink>

        {menuItems.map((item, idx) => (
          <div
            key={idx}
            className="relative"
            onMouseEnter={() => setHovered(idx)}
            onMouseLeave={() => {
              setHovered(null);
              setSubHovered(null);
            }}
          >
            <div className="flex items-center gap-1 cursor-pointer text-gray-800 hover:text-blue-600 font-medium relative">
              <span>{item.label}</span>
              {item.subItems && <FaChevronDown className="text-xs mt-[2px]" />}
              {item.badge === "hot" && (
                <span className="absolute -top-3 -right-4 text-xs bg-red-500 text-white px-1.5 py-0.5 rounded-full">
                  HOT
                </span>
              )}
              {item.badge === "new" && (
                <span className="absolute -top-3 -right-3 text-xs bg-green-500 text-white px-1.5 py-0.5 rounded-full">
                  NEW
                </span>
              )}
            </div>

            <div
              className={`absolute top-full left-0 bg-white shadow-lg rounded-md mt-2 transition-all duration-300 ease-in-out transform z-50
                ${
                  hovered === idx
                    ? "opacity-100 visible translate-y-0"
                    : "opacity-0 invisible -translate-y-2"
                }`}
            >
              <ul className="py-2 w-56">
                {item.subItems.map((subItem, subIdx) => (
                  <li
                    key={subIdx}
                    onMouseEnter={() => subItem.children && setSubHovered(subIdx)}
                    onMouseLeave={() => subItem.children && setSubHovered(null)}
                    className="relative group"
                  >
                    <NavLink
                      to={subItem.to !== "#" ? subItem.to : "#"}
                      className="px-4 py-2 text-gray-700 hover:bg-blue-100 hover:text-blue-600 transition flex justify-between items-center"
                    >
                      {subItem.name}
                      {subItem.children && (
                        <FaChevronDown className="ml-2 text-xs transform group-hover:rotate-180 transition" />
                      )}
                    </NavLink>

                    {subItem.children && (
                      <div
                        className={`absolute left-full top-0 bg-white shadow-lg rounded-md mt-0 ml-1 transition-all duration-300 ease-in-out transform z-50 w-48
                          ${
                            subHovered === subIdx
                              ? "opacity-100 visible translate-y-0"
                              : "opacity-0 invisible -translate-y-2"
                          }`}
                      >
                        <ul className="py-2">
                          {subItem.children.map((child, childIdx) => (
                            <li key={childIdx}>
                              <NavLink
                                to={child.to}
                                className="block px-4 py-2 text-gray-700 hover:bg-blue-100 hover:text-blue-600 transition"
                              >
                                {child.name}
                              </NavLink>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      <div className="flex gap-4 items-center">
        <div className="flex gap-2 items-center">
          <button className="flex items-center cursor-pointer gap-1 px-4 py-1 border border-blue-600 text-blue-600 rounded hover:bg-blue-50 transition">
            <FaUser className="text-sm" />
            Login
          </button>
        </div>
        <div className="flex gap-2 items-center">
          <button className="px-4 py-1 bg-zinc-800 cursor-pointer text-white rounded hover:bg-zinc-700 transition text-sm text-center leading-tight">
            Employer <br /> Post a Job
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
