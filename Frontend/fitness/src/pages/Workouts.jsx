import React from 'react';


export default function ExercisePage() {
  return (
    <div className="min-h-screen w-full bg-gray-900 text-white p-5 ">
      <h1 className='text-5xl text-center text-blue-300 mb-7'>Exercises</h1>
      <div className="min-h-screen w-full bg-gray-900 text-white flex  p-8 gap-8">

        <div>
          <img src='src/assets/exercises/Stand-Out-from-the-Crowd.png' className='rounded-3xl mt-10 border-gray-950 ' />
            <div className='mt-20'>
            <h2 class="text-red-600 text-3xl font-bold">
              MOVE <span class="text-yellow-500">FORWARD FROM</span> QUEUE AND
            </h2>
            <br/>
            <div>
            <span class="text-yellow-500 text-4xl font-semibold block ">JOIN US TODAY</span>
            </div>
            </div>

        </div>
        <div className="flex flex-col justify-center items-center space-y-12">

          <img src='src/assets/exercises/set-sporty-woman-training-gym_74855-3771.jpg' className='rounded-3xl border-gray-950 ' />
          <img src='src/assets/exercises/set-people-doing-sports-flat-design_352905-149.jpg' className='rounded-3xl' />
        </div>

      </div>
      <div className='min-w-screen flex items-center justify-center'>
      <img src='src/assets/exercises/fitness-gym-training-banners_1284-11053.jpg' className=' rounded-3xl w-3/4'/>
      </div>
     
    </div>
  );
}


