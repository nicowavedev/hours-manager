import React, { useState, useEffect } from "react";

const TiempoTrabajado = () => {
  const [tiempoTrabajado, setTiempoTrabajado] = useState(0);

  useEffect(() => {
    // Establecer la hora de inicio
    const horaInicio = new Date();

    // Función para calcular el tiempo transcurrido
    const calcularTiempoTrabajado = () => {
      const horaActual = new Date();
      const tiempoTranscurrido = horaActual - horaInicio;

      // Convertir el tiempo a horas (puedes ajustar la escala según tus necesidades)
      const horasTrabajadas = tiempoTranscurrido / 1000 / 60 / 60;

      // Actualizar el estado con las horas trabajadas
      setTiempoTrabajado(horasTrabajadas.toFixed(2));
    };

    // Actualizar el tiempo cada segundo
    const intervalo = setInterval(calcularTiempoTrabajado, 1000);

    // Limpiar el intervalo al desmontar el componente
    return () => clearInterval(intervalo);
  }, []); // El segundo argumento [] asegura que este efecto solo se ejecute una vez al montar el componente

  return (
    <div>
      <h2>Tiempo Trabajado:</h2>
      <p>{tiempoTrabajado} horas</p>
    </div>
  );
};

export default TiempoTrabajado;

// **************THE SAME BUT IN ENGLISH*************

// import React, { useState, useEffect } from 'react';

// const WorkedTime = () => {
//   const [workedHours, setWorkedHours] = useState(0);

//   useEffect(() => {
// Set the start time
//     const startTime = new Date();

// Function to calculate worked time
//     const calculateWorkedTime = () => {
//       const currentTime = new Date();
//       const elapsedMilliseconds = currentTime - startTime;

// Convert time to hours (adjust the scale as needed)
//       const hoursWorked = elapsedMilliseconds / 1000 / 60 / 60;

// Update state with worked hours
//       setWorkedHours(hoursWorked.toFixed(2));
//     };

// Update time every second
//     const interval = setInterval(calculateWorkedTime, 1000);

// Clean up the interval when the component unmounts
//     return () => clearInterval(interval);
//   }, []); // The second argument [] ensures that this effect runs only once when the component mounts

//   return (
//     <div>
//       <h2>Worked Time:</h2>
//       <p>{workedHours} hours</p>
//     </div>
//   );
// };

// export default WorkedTime;
