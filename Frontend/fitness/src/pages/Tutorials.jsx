import React from 'react';

const tutorials = [
  {
    id: 1,
    title: 'Full Body Workout',
    videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ', // Replace with actual video URL
    instructions: 'Follow this full-body workout routine to build strength and endurance.',
  },
  {
    id: 2,
    title: 'Cardio Training',
    videoUrl: 'https://youtu.be/kZDvg92tTMc', // Replace with actual video URL
    instructions: 'Burn calories and improve heart health with this cardio session.',
  },
  {
    id: 3,
    title: 'Chest and Biceps Workout',
    videoUrl: 'https://www.youtube.com/embed/T8lSHABVVFg', // Replace with actual video URL
    instructions: 'Target your chest and biceps with these effective exercises.',
  },
  {
    id: 4,
    title: 'Core Strengthening',
    videoUrl: 'https://www.youtube.com/embed/LpbhwzjPiJc', // Replace with actual video URL
    instructions: 'Strengthen your core with these simple yet powerful exercises.',
  },
  {
    id: 5,
    title: 'Stretching Exercises',
    videoUrl: 'https://www.youtube.com/embed/jwJHq_kQolU', // Replace with actual video URL
    instructions: 'Enhance flexibility and prevent injuries with these stretches.',
  },
  {
    id: 6,
    title: 'Leg Day Routine',
    videoUrl: 'https://www.youtube.com/embed/zO7B7i6a04k', // Replace with actual video URL
    instructions: 'Build strong legs with this comprehensive leg day routine.',
  },
];

const Tutorials = () => {
  return (
    <div className="p-8 bg-gray-800 text-white min-h-screen">
      <h1 className="text-3xl font-bold text-center  mb-8">Gym Tutorials</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {tutorials.map((tutorial) => (
          <div
            key={tutorial.id}
            className="bg-white shadow-md rounded-lg overflow-hidden"
          >
            <iframe
              className="w-full h-56"
              src={tutorial.videoUrl}
              title={tutorial.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-700">{tutorial.title}</h2>
              <p className="text-gray-600 mt-2">{tutorial.instructions}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tutorials;
