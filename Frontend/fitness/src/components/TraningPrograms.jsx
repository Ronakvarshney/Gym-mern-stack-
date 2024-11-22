import React, { useState } from 'react';

const TrainingPrograms = () => {
  const [selectedProgram, setSelectedProgram] = useState(null);

  const programs = [
    { id: 1, name: 'Yoga', description: 'Find inner peace and flexibility with our Yoga program.', details: 'Yoga helps improve flexibility, balance, and mental clarity through a series of gentle and intense poses. We will update the page soon.', src: 'src/assets/istockphoto-1463448400-612x612.jpg' },
    { id: 2, name: 'Muscle Building', description: 'Build strength and tone muscles with guided workouts.', details: 'Our Muscle Building program focuses on hypertrophy training to help you build size and strength effectively. We will update the page soon.', src: "src/assets/muscle-icon-260nw-725756203.webp" },
    { id: 3, name: 'Fitness', description: 'Achieve peak physical fitness with custom cardio and strength routines.', details: 'Our Fitness program combines cardiovascular and strength training to enhance endurance and energy levels. We will update the page soon.', src: 'src/assets/gym-icon-fitness-vector-graphics-260nw-1365506174.webp' },
  ];

  const handleProgramClick = (program) => {
    setSelectedProgram(program);
  };

  const ProgramDetail = ({ program }) => (
    <div className="text-white p-4 bg-gray-800 rounded-lg shadow-md mt-6 animate-fadeIn">
      <h2 className="text-2xl font-bold">{program.name}</h2>
      <p className="mt-2">{program.details}</p>
      <button onClick={() => setSelectedProgram(null)} className="mt-4 bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded">
        Back to Programs
      </button>
    </div>
  );

  return (
    <div className="bg-gray-900 min-h-screen text-white flex flex-col items-center p-6 sm:p-10">
      <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-center">Training Programs We Offer</h1>
      {!selectedProgram ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
          {programs.map((program) => (
            <div
              key={program.id}
              onClick={() => handleProgramClick(program)}
              className="cursor-pointer bg-gray-800 hover:bg-gray-700 transition-transform transform hover:-translate-y-2 duration-300 p-6 rounded-lg shadow-lg text-center animate-slideUp h-64 flex flex-col items-center"
            >
              <h2 className="text-xl sm:text-2xl font-bold">{program.name}</h2>
              <p className="mt-2 text-sm sm:text-base">{program.description}</p>
              <img src={program.src} className='w-20 sm:w-28 h-20 sm:h-24 mt-4 rounded-full' alt={`${program.name} Icon`} />
            </div>
          ))}
        </div>
      ) : (
        <ProgramDetail program={selectedProgram} />
      )}
      <div className='flex flex-col sm:flex-row w-full h-auto sm:h-72 items-center justify-center mt-16 gap-8'>
        <img
          src='src/assets/istockphoto-1427221641-612x612.jpg'
          className='rounded-md shadow-lg transition-transform duration-500 ease-in-out hover:scale-105 w-3/4 sm:w-1/2 lg:w-1/3 mb-4 sm:mb-0'
          alt="Responsive Animated Image"
        />
        <div className='w-full sm:w-1/2 lg:w-1/3 text-center sm:text-left'>
          <img src='src/assets/stationary-bicycle-gymnast.svg' className='w-3/4 h-32 sm:h-56 mx-auto sm:mx-0' alt="Gym Icon" />
          <p className="mt-6 text-xl sm:text-2xl font-semibold text-orange-300 tracking-widest">
            Join Us <span className="text-indigo-600 animate-pulse">AS Soon AS Possible..</span> <span className="font-bold text-red-500">Limited Seats</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default TrainingPrograms;
