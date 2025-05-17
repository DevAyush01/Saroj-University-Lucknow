import { useState, useEffect } from "react";
import { FiPhoneCall, FiMenu, FiX } from "react-icons/fi";
import logo from "../assets/siu-logo.png";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";

const menuItems = [
  {
    title: "About",
    submenu: [
      { label: "Vision & Mission", path: "/about/vision-mission" },
      { label: "Leadership", path: "/about/leadership" },
      { label: "Accreditation", path: "/about/accreditation" },
    ],
  },
  {
    title: "Programs",
    submenu: [
      { label: "Undergraduate", path: "/programs/undergraduate" },
      { label: "Postgraduate", path: "/programs/postgraduate" },
      { label: "Doctoral", path: "/programs/doctoral" },
      { label: "Diploma & Certificate", path: "/programs/diploma-certificate" },
    ],
  },
  {
    title: "Academics",
    submenu: [
      { label: "Departments", path: "/academics/departments" },
      { label: "Faculty", path: "/academics/faculty" },
      { label: "Labs & Library", path: "/academics/labs-library" },
    ],
  },
  {
    title: "Admissions",
    submenu: [
      { label: "Admission procedure", path: "/admissions/undergraduate" },
      { label: "Eligibility criteria", path: "/admissions/postgraduate" },
      {
        label: "Fee Structure",
        path: "/pdfs/SIU-Fee-Structure.pdf#toolbar=0",
        isExternal: true,
      },
    ],
  },
  {
    title: "Campus Life",
    submenu: [
      { label: "Hostel", path: "/campus-life/hostel" },
      { label: "Sports", path: "/campus-life/sports" },
      { label: "Events", path: "/campus-life/events" },
    ],
  },
  {
    title: "Placements",
    submenu: [
      { label: "Placement Cell", path: "/placements/cell" },
      { label: "Recruiters", path: "/placements/recruiters" },
      { label: "Alumni", path: "/placements/alumni" },
    ],
  },
  {
    title: "Research & Innovation",
    submenu: [
      { label: "Research Centers", path: "/research/centers" },
      { label: "Projects", path: "/research/projects" },
      { label: "Publications", path: "/research/publications" },
    ],
  },
];

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const dropdownVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
  };

  const handleMouseEnter = (title) => {
    setOpenDropdown(title);
  };

  const handleMouseLeave = () => {
    setOpenDropdown(null);
  };

  const handleSubmenuClick = () => {
    setOpenDropdown(null);
    setMobileMenuOpen(false);
  };

  return (
    <motion.header
      animate={{
        backgroundColor: scrolled
          ? "rgba(30, 64, 175, 1)"
          : "rgba(0, 0, 0, 0)",
      }}
      transition={{ duration: 0.3 }}
      className="fixed top-0 w-full bg-transparent text-white z-50"
    >
      <div className="max-w-8xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo and Title (unchanged) */}
        <div className="flex items-center gap-2">
          <img
            src={logo || "/placeholder.svg"}
            alt="SIU Logo"
            className="h-20 w-36"
          />
          <div className="hidden md:flex flex-col">
            <h1 className="text-xl font-bold leading-tight">
              Saroj International
              <br />
              UNIVERSITY
            </h1>
            <span className="text-xs text-gray-300">
              Learn Today. Lead Tomorrow.
            </span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex gap-6 font-medium text-white">
          {menuItems.map(({ title, submenu, highlights }) => (
            <div
              key={title}
              className="relative"
              onMouseEnter={() => handleMouseEnter(title)}
              onMouseLeave={handleMouseLeave}
            >
              <button className="hover:text-blue-300 px-2 py-1 transition-colors">
                {title}
              </button>

              <AnimatePresence>
                {openDropdown === title && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-0 w-96 bg-white text-gray-800 shadow-xl mt-1 z-50 rounded-lg overflow-hidden"
                  >
                    <div className="p-6">
                      {/* Header with title and description */}
                      <div className="mb-6">
                        <h3 className="text-2xl font-bold text-blue-800 mb-2">
                          {title}
                        </h3>
                       
                      </div>

                      {/* Two-column layout */}
                      <div className="grid grid-cols-2 gap-6">
                        {/* Left column - Quick Links */}
                        <div>
                          {/* <h4 className="font-semibold text-blue-700 mb-3 pb-2 border-b border-gray-200">
                            Quick Links
                          </h4> */}
                          <ul className="space-y-2">
                            {submenu.map(({ label, path, isExternal }) => (
                              <li key={label}>
                                {isExternal ? (
                                  <a
                                    href={path}
                                    target="_blank"
                                    rel="_noreferrer noopener"
                                    className="block py-1 hover:text-blue-600 transition-colors"
                                  >
                                    {label}
                                  </a>
                                ) : (
                                  <Link
                                    to={path}
                                    onClick={handleSubmenuClick}
                                    className="block py-1 hover:text-blue-600 transition-colors"
                                  >
                                    {label}
                                  </Link>
                                )}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Right column - Highlights */}
                        {/* <div className="bg-blue-50 p-4 rounded-lg">
                          <h4 className="font-semibold text-blue-700 mb-3 pb-2 border-b border-gray-200">
                            Key Highlights
                          </h4>
                          <ul className="space-y-3">
                            {highlights?.map((item, index) => (
                              <li key={index} className="flex items-start">
                                {item.value && (
                                  <span className="bg-blue-100 text-blue-800 font-bold px-2 py-1 rounded mr-3 text-sm">
                                    {item.value}
                                  </span>
                                )}
                                <span className="text-gray-700 text-sm">{item.label || "Feature"}</span>
                              </li>
                            ))}
                            {!highlights && (
                              <li className="text-gray-700 text-sm">
                                Discover our comprehensive {title.toLowerCase()} options
                              </li>
                            )}
                          </ul>
                        </div> */}
                      </div>

                      {/* Call to action at bottom */}
                      {/* <div className="mt-6 pt-4 border-t border-gray-200">
                        <Link
                          to={`/${title.toLowerCase().replace(/\s+/g, "-")}`}
                          className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
                        >
                          View All {title}
                        </Link>
                      </div> */}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </nav>

        {/* Right: Helpline and Mobile Menu Button */}
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-2 bg-blue-700 px-4 py-2 rounded-lg">
            <FiPhoneCall className="text-2xl" />
            <div className="text-sm leading-tight">
              <p className="text-gray-200">Admission Helpline</p>
              <p className="font-bold text-white">1800121</p>
            </div>
          </div>

          <button
            className="xl:hidden text-2xl focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel - CSS-based scrolling approach */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-blue-900 bg-opacity-95 z-40"
            style={{ top: "86px" }} // Adjust based on your header height
          >
            <div className="h-[calc(100vh-86px)] overflow-y-auto pb-20">
              <nav className="xl:hidden px-4 py-4 space-y-4">
                {menuItems.map(({ title, submenu }) => (
                  <div
                    key={title}
                    className="mb-4 border-b border-blue-800 pb-2"
                  >
                    <button
                      className="flex items-center justify-between w-full text-left py-3 font-medium text-white"
                      onClick={() =>
                        setOpenDropdown(openDropdown === title ? null : title)
                      }
                    >
                      <span className="text-lg">{title}</span>
                      <span className="text-xl">
                        {openDropdown === title ? "−" : "+"}
                      </span>
                    </button>

                    <AnimatePresence>
                      {openDropdown === title && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.2 }}
                          className="pl-4 space-y-3 mt-2 mb-4"
                        >
                          {submenu.map(({ label, path }) => (
                            <Link
                              to={path}
                              key={label}
                              onClick={handleSubmenuClick}
                              className="block py-2 text-blue-100 hover:text-yellow-300 transition-colors"
                            >
                              {label}
                            </Link>
                          ))}
                          <Link
                            to={`/${title.toLowerCase().replace(/\s+/g, "-")}`}
                            onClick={handleSubmenuClick}
                            className="inline-block mt-2 bg-blue-700 hover:bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
                          >
                            View All {title}
                          </Link>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}

                <div className="flex items-center gap-2 bg-blue-700 px-4 py-3 rounded-lg mt-6">
                  <FiPhoneCall className="text-2xl" />
                  <div className="text-sm leading-tight">
                    <p className="text-gray-200">Admission Helpline</p>
                    <p className="font-bold text-white">1800121288800</p>
                  </div>
                </div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
