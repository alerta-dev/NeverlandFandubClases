import React from 'react';
import { motion } from 'framer-motion';

const Information = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-lg shadow-lg p-8"
      >
        <h1 className="text-3xl font-bold text-gray-800 mb-6">
          Términos y Condiciones
        </h1>

        <div className="space-y-6 text-gray-600">
          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              1. Participación en las Clases
            </h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Asistencia puntual a las sesiones programadas</li>
              <li>Respeto hacia profesores y compañeros</li>
              <li>Participación activa en las actividades</li>
              <li>Cámara encendida durante las sesiones (recomendado)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              2. Requisitos Técnicos
            </h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Conexión estable a Internet</li>
              <li>Micrófono funcional</li>
              <li>Cuenta de Discord activa</li>
              <li>Dispositivo compatible con videollamadas</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              3. Política de Pagos
            </h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Pago mensual por adelantado</li>
              <li>No hay reembolsos por clases perdidas</li>
              <li>Posibilidad de recuperar clases según disponibilidad</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-3">
              4. Código de Conducta
            </h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Mantener un ambiente respetuoso</li>
              <li>No compartir enlaces de clase con externos</li>
              <li>Respetar la propiedad intelectual del material</li>
            </ul>
          </section>
        </div>
      </motion.div>
    </div>
  );
};

export default Information;