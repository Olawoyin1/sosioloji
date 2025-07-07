import { useState } from "react";
// import { FiMenu } from "react-icons/fi";
import { IoMenu } from "react-icons/io5";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { GrClose } from "react-icons/gr";

const containerVariant: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3, delayChildren: 0.7 },
  },
};

const itemVariant: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", bounce: 0.4 },
  },
};


const navItems = [
  { name: "LAST GENERATION", href: "/last-generation" },
  { name: "SOSIOLOJI", href: "/sosioloji" },
  { name: "OUR PURPOSE", href: "/purpose" },
  { name: "THE EDITOR", href: "/editor" },
  { name: "CONTRIBUTORS", href: "/contributors" },
  { name: "JOIN THE MOVEMENT", href: "/movement" },
  { name: "FILOSOFI", href: "/filosofi" },
  { name: "IDEA IS CAPITAL", href: "/ideaiscapital" },
  { name: "CONNECT", href: "/connect" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className="w-full  z-50 relative mb-4">
      <div className="max-w-7xl mx-auto px-8 md:px-12">
        <div className="flex items-center justify-between min-h-[100px] md:min-h-[200px]  mx-auto relative">
          {/* Title */}
          <h1 className="text-3xl md:text-6xl font-bold tracking-tight text-gray-800">
            <Link to="/" className="block md:hidden">
              sosioloji
            </Link>
            <Link
              to="/"
              className="hidden md:block md:-translate-y-1/2 absolute left-1/2 -translate-x-1/2"
            >
              sosioloji
            </Link>
          </h1>

          {/* Menu icon */}
          <div
            className="text-3xl md:text-6xl text-gray-700 cursor-pointer rotate-90 block md:absolute md:right-0 md:top-1/2 md:-translate-y-1/2"
            onClick={() => setMenuOpen(true)}
          >
            <IoMenu  />
          </div>
        </div>
      </div>

      {/* Slide-up menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 bg-nav z-50 flex items-center justify-center"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            {/* Close icon */}
            <div
              className="absolute top-5 right-5 text-4xl cursor-pointer"
              onClick={() => setMenuOpen(false)}
            >
              <GrClose color="#000000" />
            </div>

            {/* AnimatePresence for list */}
            <motion.ul
              className="w-full text-xl sm:text-3xl space-y-5 font-light text-center"
              variants={containerVariant}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              {navItems.map((item, index) => (
                <motion.li key={item.name} variants={itemVariant}>
                  <Link
                    to={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      setMenuOpen(false); 
                      setTimeout(() => {
                        navigate(item.href); // Proper route transition
                      }, 600);  
                    }}
                    className={`hover:text-blue-400 tracking-[3px] text-black transition ${
                      index === 0 ? "text-2xl md:text-4xl font-bold" : "text-xl font-light"
                    } `}
                  >
                    {item.name}
                  </Link>

                  {item.name === "LAST GENERATION" && (
                    <div className="h-px w-[80%]  md:w-130 mx-auto bg-black/20 mt-9" />
                  )}
                  {item.name === "JOIN THE MOVEMENT" && (
                    <div className="h-px w-[80%]  md:w-80 mx-auto bg-black/20 mt-9" />
                  )}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
