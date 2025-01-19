import React from 'react';
import { motion } from 'framer-motion';
import { format, startOfWeek, addDays } from 'date-fns';
import { es } from 'date-fns/locale';

const Classes = () => {
  const startDate = startOfWeek(new Date(), { weekStartsOn: 1 });
  const weekDays = [...Array(5)].map((_, index) => addDays(startDate, index));

  const schedule = [
    { time: '09:00', title: 'Matemáticas Básicas' },
    { time: '11:00', title: 'Inglés Intermedio' },
    { time: '15:00', title: 'Programación Web' },
    { time: '17:00', title: 'Diseño Gráfico' },
  ];

  return (
    <div className="max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Horario de Clases</h1>
        <p className="text-gray-600">
          Consulta nuestro calendario semanal de clases en vivo
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="bg-white rounded-lg shadow-lg overflow-hidden"
      >
        <div className="grid grid-cols-6 gap-px bg-gray-200">
          <div className="bg-gray-50 p-4"></div>
          {weekDays.map((day, index) => (
            <div
              key={index}
              className="bg-gray-50 p-4 text-center font-semibold"
            >
              {format(day, 'EEEE', { locale: es })}
              <br />
              {format(day, 'd MMM')}
            </div>
          ))}

          {schedule.map((slot, slotIndex) => (
            <React.Fragment key={slotIndex}>
              <div className="bg-white p-4 border-t text-right">
                {slot.time}
              </div>
              {weekDays.map((_, dayIndex) => (
                <div
                  key={dayIndex}
                  className="bg-white p-4 border-t"
                >
                  {dayIndex % 2 === 0 && (
                    <div className="p-2 bg-indigo-50 border border-indigo-200 rounded text-sm">
                      {slot.title}
                    </div>
                  )}
                </div>
              ))}
            </React.Fragment>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Classes;