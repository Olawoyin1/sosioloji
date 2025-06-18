import { useState } from "react";
// import { FiMenu } from "react-icons/fi";
import { IoMenu } from "react-icons/io5";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { Link } from "react-router-dom";
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
    { name: "OUR PURPOSE", href: "/purpose" },
    { name: "LAST GENERATION", href: "/last-generation" },
    { name: "FILOSOFI", href: "/filosofi" },
    { name: "IDEA IS CAPITAL", href: "/ideaiscapital" },
    { name: "CONNECT", href: "/connect" },
  ];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full z-50 relative">
      <div className="container">
        <div className="relative flex items-center min-h-[100px] md:min-h-[200px] justify-center max-w-6xl mx-auto">
          {/* Center: Title */}
          <h1 className="text-3xl md:text-6xl font-bold tracking-tight text-gray-800">
            SOCIOLOGY
          </h1>

          {/* Right: Menu Icon */}
          <div
            className="absolute right-0 top-1/2 -translate-y-1/2 rotate-90 text-3xl text-gray-700 cursor-pointer"
            onClick={() => setMenuOpen(true)}
          >
            <IoMenu />
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
              className="absolute top-5 right-5 text-3xl cursor-pointer"
              onClick={() => setMenuOpen(false)}
            >
              <GrClose color="#000000" />
            </div>

            {/* AnimatePresence for list */}
            <motion.ul
              className=" text-xl sm:text-3xl space-y-6 text-center"
              variants={containerVariant}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              {navItems.map((item) => (
                <motion.li key={item.name} variants={itemVariant}>
                  <Link
                    to={item.href}
                    onClick={(e) => {
                      e.preventDefault(); // Prevent immediate routing
                      setMenuOpen(false); // Trigger exit animation
                      setTimeout(() => {
                        // navigate(item.href); // Proper route transition
                      }, 600); // Match your motion exit transition
                    }}
                    className="hover:text-blue-400 tracking-[3px] text-xl  text-black transition"
                  >
                    {item.name}
                  </Link>

                  {item.name === "LAST GENERATION" && (
                    <div className="h-px w-130 mx-auto bg-black/20 mt-9" />
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
