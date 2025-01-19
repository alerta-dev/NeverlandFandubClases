import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center space-x-2"
          >
            <GraduationCap className="h-8 w-8 text-indigo-600" />
            <span className="text-xl font-bold text-gray-800">Clases Neverland</span>
          </motion.div>
          
          <div className="hidden md:flex space-x-8">
            {[
              { path: '/', label: 'Inicio' },
              { path: '/classes', label: 'Clases' },
              { path: '/teachers', label: 'Profesores' },
              { path: '/information', label: 'Información' },
            ].map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `text-gray-600 hover:text-indigo-600 transition-colors duration-200 ${
                    isActive ? 'text-indigo-600 font-semibold' : ''
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
