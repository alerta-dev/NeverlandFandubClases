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
          Somos un grupo de fans que queríamos aportar para que aprendan mas cosas, si no sabes como empezar, es una buena idea comenzar por aqui!
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
            src="https://64.media.tumblr.com/371cc0d6eb40decf430b11eaf01730e0/9adfa145971981e0-24/s1280x1920/f84d7a54ebfee729e0581e7fc7a50f0a00ce59cc.pnj"
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
            <li>✓ Clases en vivo con diversos profesores</li>
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
          href="https://discord.com/invite/srCmgpPkXb"
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
