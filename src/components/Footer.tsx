// import React from 'react';
// import Tags from './Tags'

// const Footer: React.FC = () => {
//   return (
//     <footer className="py-12">
//       <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
//         {/* Card 1 */}
//         <div className="">
//           <Tags />
//         </div>

//         {/* Card 2 */}
//         <div className="bg-[#2B2A2A] rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
//           <h4 className="text-xl font-semibold mb-3">Quick Links</h4>
//           <ul className="text-gray-400 text-sm space-y-2">
//             <li><a href="#">Home</a></li>
//             <li><a href="#">Products</a></li>
//             <li><a href="#">Contact</a></li>
//           </ul>
//         </div>

//         {/* Card 3 */}
//         <div className="bg-[#2B2A2A] rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
//           <h4 className="text-xl font-semibold mb-3">Subscribe</h4>
//           <p className="text-gray-400 text-sm mb-4">
//             Join our newsletter to get the latest updates and news.
//           </p>
//           <form className="flex">
//             <input
//               type="email"
//               placeholder="Email"
//               className="w-full px-3 py-2 text-sm rounded-l-md focus:outline-none text-black"
//             />
//             <button className="bg-pink-500 px-4 py-2 rounded-r-md text-white text-sm hover:bg-pink-600 transition-colors">
//               Go
//             </button>
//           </form>
//         </div>
//       </div>

      
//     </footer>
//   );
// };

// export default Footer;

import '../styles/footer.css'
import LetsConnect from './LetsConnect';
import Tags from './Tag2';
import Subscribe from './Subscribe';
// import { section } from 'framer-motion/client';

const Footer = () => {
  return (
    <section className='py-20'>
      <div className="max-w-7xl mx-auto px-8 md:px-12">


    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-14">
    {/* ===========widget one========== */}
      <div className="max-w-[500px] ">
       <Tags/>
      </div>

      {/* widget two---- */}
      <div className="max-w-[500px] ">
        <LetsConnect/>
      </div>

  
    {/* =============widget three============ */}
      <div className="max-w-[500px]">
        <Subscribe/>
      </div>
    </div>
      </div>
    </section>
  );
};

export default Footer;
