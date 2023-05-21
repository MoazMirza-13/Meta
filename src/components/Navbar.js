import React from "react";
import { useState } from "react";
import { motion as m } from "framer-motion";
import { Link } from "react-scroll";
import { HiMenuAlt3, HiX, HiArrowCircleUp } from "react-icons/hi";
import ScrollUpButton from "react-scroll-up";
export default function Navbar() {
  // nav li items
  const navLi = [
    { id: "home", title: "Home", offset: -90 },
    { id: "resources", title: "Resources", offset: -140 },
    { id: "pricing", title: "Pricing", offset: -90 },
    { id: "activities", title: "Activities", offset: -80 },
    { id: "about", title: "About" },
  ];
  // menu
  const [Open, setOpen] = useState(false);
  return (
    <>
      <nav className=" py-5 fixed top-0 left-0 right-0 z-50 bg-black ">
        <div className="text-white flex  m-auto justify-between w-[80%] lg:w-[80%] md:w-[85%] ">
          {/* logo */}
          <div className="flex gap-2 cursor-pointer items-center ">
            <m.svg
              initial={{ rotate: -180 }}
              animate={{ rotate: 0 }}
              transition={{ duration: 0.5 }}
              width="26"
              height="24"
              viewBox="0 0 26 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M18.0198 3.2792C15.857 -0.466762 10.4502 -0.466763 8.2875 3.27919L6.52982 6.32357C6.68586 6.30756 6.84501 6.29932 7.00702 6.29932H19.7635L18.0198 3.2792ZM23.7357 13.1795L17.6107 23.7883H20.1284C24.4539 23.7883 27.1573 19.1059 24.9946 15.3599L23.7357 13.1795ZM9.34339 23.7883L3.12656 13.0204C3.04556 12.8801 2.97312 12.7382 2.90897 12.5951L1.31269 15.3599C-0.850039 19.1059 1.85337 23.7883 6.17883 23.7883H9.34339Z"
                fill="white"
              />
            </m.svg>
            <m.span
              initial={{ x: -150, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              className="font-ont_1"
            >
              Meta
            </m.span>
          </div>

          {/* ul */}
          <m.div
            initial={{ opacity: 0, y: -25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ dealy: 0.0, duration: 0.7 }}
            className={`md:gap-12 md:static  flex flex-col w-full  md:w-auto gap-8  md:items-start text-center  md:h-0 h-screen   bg-black absolute  left-0 
          ${
            Open
              ? "top-12 visibility-visible justify-center"
              : "top-[-790px] visibility-hidden"
          }`}
          >
            {/* ul for large screens */}
            <ul className="font-pop_1 lg:gap-8 xl:gap-12 md:gap-6 md:flex-row md:flex flex-col hidden gap-5 ">
              {navLi.map(({ id, title, offset }) => (
                <li
                  className="text-xl md:text-lg lg:text-xl cursor-pointer"
                  key={id}
                >
                  <Link
                    to={id}
                    smooth={true}
                    delay={200}
                    duration={800}
                    offset={offset}
                  >
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
            {/* ul for mobile devices */}
            <ul className="font-pop_1 lg:gap-8 xl:gap-12 md:gap-6 md:flex-row flex flex-col md:hidden gap-5 ">
              {navLi.map(({ id, title, offset }) => (
                <li
                  className="text-2xl md:text-lg lg:text-xl cursor-pointer"
                  key={id}
                >
                  <Link
                    to={id}
                    smooth={true}
                    delay={200}
                    duration={1700}
                    offset={offset}
                    onClick={() => setOpen(!Open)}
                  >
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
            {/* social links */}
            <ul className="flex gap-4 md:hidden  justify-center">
              <li onClick={() => setOpen(!Open)} className="cursor-pointer">
                <img src="/pics/LinkedIn.png" alt="" />
              </li>
              <li onClick={() => setOpen(!Open)} className="cursor-pointer">
                <img src="/pics/Twitter Squared.png" alt="" />
              </li>
              <li onClick={() => setOpen(!Open)} className="cursor-pointer">
                <img src="/pics/Instagram.png" alt="" />
              </li>
              <li onClick={() => setOpen(!Open)} className="cursor-pointer">
                <img src="/pics/Facebook.png" alt="" />
              </li>
            </ul>
          </m.div>
          {/* hamburger */}
          <div
            onClick={() => setOpen(!Open)}
            className="cursor-pointer md:hidden"
          >
            {Open ? (
              <HiX className="text-3xl" />
            ) : (
              <HiMenuAlt3 className="text-3xl" />
            )}
          </div>
        </div>
      </nav>
      {/* scroll to top */}
      <ScrollUpButton showUnder={160} duration={1800} easing="easeInOutQuint">
        <div className="fixed right-[0.5rem] md:right-[2rem] lg:hidden bottom-[4rem] text-3xl text-white">
          <HiArrowCircleUp />
        </div>
      </ScrollUpButton>
    </>
  );
}
