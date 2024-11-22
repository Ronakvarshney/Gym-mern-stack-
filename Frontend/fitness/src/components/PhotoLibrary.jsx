import React from 'react';

const photos = [
  { src: 'src/assets/pexels-photo-3289711.jpeg', width: 'w-full', height: 'h-full' },
  { src: 'src/assets/pexels-photo-416809.webp', width: 'w-full', height: 'h-full' },
  { src: 'src/assets/pexels-photo-2827400.webp', width: 'w-full', height: 'h-full' },
  { src: 'src/assets/pexels-photo-4162449.webp', width: 'w-full', height: 'h-full' },
  { src: 'src/assets/pexels-photo-4761779.webp', width: 'w-full', height: 'h-full' },
  { src: 'src/assets/pexels-photo-1552102.jpeg',  width: 'w-full', height: 'h-full' },
  { src: 'src/assets/istockphoto-1356510492-612x612.jpg', width: 'w-full', height: 'h-full' },
  { src: 'src/assets/young-muscular-woman-practicing-gym_155003-35525.jpg', width: 'w-full', height: 'h-full' },
  // Add more images with varying width and height as needed
];

const PhotoLibrary = () => {
  return (
    <div className="min-h-screen bg-gray-900 px-4 py-8 relative top-7">
      <h2 className="text-4xl font-bold text-white mb-8 text-center">Photo Gallery</h2>
      <p className="text-gray-400 mb-10 text-center max-w-xl mx-auto">
        Explore our gym's diverse training experiences and facilities through our dynamic gallery.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full max-w-7xl mx-auto">
        {photos.map((photo, idx) => (
          <div
            key={idx}
            className={`relative overflow-hidden rounded-lg shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-xl`}
          >
            <img
              src={photo.src}
              alt={`Gym photo ${idx + 1}`}
              className={`${photo.width} ${photo.height} object-cover transition-all duration-500 ease-in-out`}
            />
            <div className="absolute inset-0 bg-black opacity-0 hover:opacity-40 transition-opacity duration-500"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhotoLibrary;

