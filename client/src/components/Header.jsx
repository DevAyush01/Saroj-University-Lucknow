import { useState, useEffect } from "react";
import { FiPhoneCall, FiMenu, FiX } from "react-icons/fi";
import logo from "../assets/siu-logo.png";
import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";

const menuItems = [
  {
    title: "About",
    submenu: [
      { label: "About SIU", path: "/about/about-siu" },
      { label: "Vision & Mission", path: "/about/vision-mission" },
      { label: "Leadership", path: "/about/leadership" },
    ],
  },
  {
    title: "Programs",
    submenu: [{ label: "Courses Offered", path: "/programs/courses-offered" }],
  },

  {
    title: "Admissions",
    submenu: [
      { label: "Admission procedure", path: "/admissions/procedure" },
      {
        label: "Fee Structure",
        path: "/pdfs/SIU-Fee-Structure.pdf#toolbar=0",
        isExternal: true,
      },
    ],
  },
  // {
  //   title: "Campus Life",
  //   submenu: [
  //     { label: "Hostel", path: "/campus-life/hostel" },
  //     { label: "Sports", path: "/campus-life/sports" },
  //     { label: "Events", path: "/campus-life/events" },
  //   ],
  // },
  {
    title: "Placements",
    path: "/placement",
  },
  {
    title: "Research & Innovation",
    submenu: [
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
        backgroundColor: scrolled ? "rgba(30, 64, 175, 1)" : "rgba(0, 0, 0, 0)",
      }}
      transition={{ duration: 0.3 }}
      className="fixed top-0 w-full bg-transparent text-white z-50"
    >
      <div className="max-w-8xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo and Title (unchanged) */}
        <div className="flex items-center gap-2">
          <Link to='/'>
          <img
            src={logo || "/placeholder.svg"}
            alt="SIU Logo"
            className="h-20 w-36"
          />
          </Link>
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
          {menuItems.map(({ title, path, submenu }) => (
            <div
              key={title}
              className="relative"
              onMouseEnter={() => submenu && handleMouseEnter(title)}
              onMouseLeave={submenu ? handleMouseLeave : undefined}
            >
              {/* If no submenu, render Link or anchor directly */}
              {!submenu ? (
                path.startsWith("http") || path.includes("pdf") ? (
                  <a
                  href={path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center hover:text-blue-300 px-2 py-1 transition-colors"
                >
                
                    {title}
                  </a>
                ) : (
                  <Link
                    to={path}
                    className="inline-flex items-center hover:text-blue-300 px-2 py-1 transition-colors">
                    {title}
                  </Link>
                )
              ) : (
                // Button for items with submenu
                <button className="inline-flex items-center hover:text-blue-300 px-2 py-1 transition-colors">

                  {title}
                </button>
              )}

              {/* Dropdown for submenu */}
              <AnimatePresence>
                {submenu && openDropdown === title && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-0 w-96 bg-white text-gray-800 shadow-xl mt-1 z-50 rounded-lg overflow-hidden"
                  >
                    <div className="p-6">
                      {/* Dropdown Title */}
                      <div className="mb-6">
                        <h3 className="text-2xl font-bold text-blue-800 mb-2">
                          {title}
                        </h3>
                      </div>

                      {/* Submenu Links */}
                      <div className="grid grid-cols-2 gap-6">
                        <div>
                          <ul className="space-y-2">
                            {submenu.map(({ label, path, isExternal }) => (
                              <li key={label}>
                                {isExternal ? (
                                  <a
                                    href={path}
                                    target="_blank"
                                    rel="noopener noreferrer"
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
                      </div>
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
              <a href="tel:9513731275" className="font-bold text-white">
                +91 9513731275
              </a>
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
                    <a href="tel:9513731275" className="font-bold text-white">
                      +91 9513731275
                    </a>
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
