import React from 'react';
import { motion } from 'framer-motion';
import { Disc as Discord } from 'lucide-react';

const Home = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Bienvenido a Academia Online
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Aprende con los mejores profesores en un ambiente virtual dinámico
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="rounded-lg overflow-hidden shadow-lg"
        >
          <img
            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
            alt="Online Learning"
            className="w-full h-64 object-cover"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col justify-center"
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            ¿Por qué elegirnos?
          </h2>
          <ul className="space-y-4 text-gray-600">
            <li>✓ Clases en vivo con profesores expertos</li>
            <li>✓ Comunidad activa de estudiantes</li>
            <li>✓ Flexibilidad horaria</li>
            <li>✓ Soporte personalizado</li>
          </ul>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="text-center"
      >
        <a
          href="https://discord.gg/your-invite-link"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors duration-200"
        >
          <Discord className="w-5 h-5 mr-2" />
          Únete a nuestro Discord
        </a>
      </motion.div>
    </div>
  );
};

export default Home;