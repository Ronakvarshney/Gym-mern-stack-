import React from 'react'
import Navbar from '../components/Navbar'
import { Link, Outlet } from 'react-router-dom'
import MembershipPlans from '../components/MembershipPlans'
import PhotoLibrary from '../components/PhotoLibrary'
import TrainingPrograms from '../components/TraningPrograms'
import Footer from '../components/Footer'
import ExercisePage from './Workouts'

const Home = () => {
  return (

    <div className="relative z-50 overflow-hidden ">

      {/* Horizontal Background Scrolling Images */}
      <div className="absolute top-0 left-0 w-[200%] h-screen flex">
       
        <div
          className="w-1/2 h-full bg-cover bg-center animate-scroll"
          style={{ backgroundImage: "url('src/assets/young-fitness-man-studio_7502-5008.avif')" }}
        />
      </div>

      <div className='relative p-10'>
        <Navbar />

      </div>
      {/* Navbar */}



      {/* Content */}
      <div className="relative z-10 flex top-56 h-96  bg-opacity-50">
        <div className="px-2 text-white">
          <h1 className="text-5xl font-bold">Welcome to Gym Fitness💪🏼</h1>
          <p className="mt-6 px-3 text-lg">Achieve Your Fitness Goals with Us</p>
          <button className=" m-8 px-6 py-3 font-semibold text-gray-800 bg-yellow-500 hover:bg-yellow-600 transition duration-300 rounded">
           <Link to='/signup'>Get Started</Link> 
          </button>
        </div>
      </div>
      <div className="mt-60">
        <MembershipPlans />
      </div>
      <div className=''>
        <PhotoLibrary />
      </div>
      <div>
        <ExercisePage/>
      </div>
      <div>
        <TrainingPrograms/>
      </div>
      
       <Footer/>
    </div>

  )
}

export default Home