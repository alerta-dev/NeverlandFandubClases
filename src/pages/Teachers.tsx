import React from 'react';
import { motion } from 'framer-motion';

const teachers = [
  {
    name: 'Ana García',
    subject: 'Matemáticas',
    experience: '10 años de experiencia en educación matemática',
    topics: ['Álgebra', 'Geometría', 'Cálculo básico'],
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80'
  },
  {
    name: 'Carlos Rodríguez',
    subject: 'Programación',
    experience: '8 años desarrollando software y 5 años enseñando',
    topics: ['HTML/CSS', 'JavaScript', 'React'],
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80'
  },
  {
    name: 'Laura Martínez',
    subject: 'Inglés',
    experience: '12 años enseñando inglés a todos los niveles',
    topics: ['Gramática', 'Conversación', 'Preparación TOEFL'],
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80'
  }
];

const Teachers = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold text-gray-800 mb-8"
      >
        Nuestros Profesores
      </motion.h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {teachers.map((teacher, index) => (
          <motion.div
            key={teacher.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <img
              src={teacher.image}
              alt={teacher.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-2">
                {teacher.name}
              </h2>
              <h3 className="text-lg font-semibold text-indigo-600 mb-3">
                {teacher.subject}
              </h3>
              <p className="text-gray-600 mb-4">{teacher.experience}</p>
              <div>
                <h4 className="font-semibold text-gray-700 mb-2">Temario:</h4>
                <ul className="list-disc list-inside text-gray-600">
                  {teacher.topics.map((topic) => (
                    <li key={topic}>{topic}</li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Teachers;