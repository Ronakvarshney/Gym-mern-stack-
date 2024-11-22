import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css"; // Import default calendar styles
import "./CustomCalendar.css"; // Custom styles for additional customization

const exerciseSchedule = {
  "2024-11-20": ["Push-ups", "Squats"],
  "2024-11-21": ["Pull-ups", "Lunges"],
  "2024-11-22": ["Plank", "Deadlifts"],
  "2024-11-23": ["Yoga", "Cardio"],
  "2024-11-24": ["Bench Press", "Bicep Curls"],
  "2024-11-25": ["Running", "Cycling"],
  "2024-11-26": ["Rest Day"],
};

const GymCalendar = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());

  // Format date to match exercise schedule keys
  const formatDate = (date) => date.toISOString().split("T")[0];

  const exercisesForSelectedDate =
    exerciseSchedule[formatDate(selectedDate)] || ["No Exercises"];

  return (
    <div className="min-h-screen bg-gray-700 text-white flex flex-col items-center py-10">
      <h1 className="text-4xl font-bold mb-6 text-center">Gym Calendar</h1>

      {/* Calendar Component */}
      <div className="bg-gray-900 rounded-lg shadow-lg p-5">
        <Calendar
          onChange={setSelectedDate}
          value={selectedDate}
          tileContent={({ date, view }) =>
            view === "month" &&
            exerciseSchedule[formatDate(date)] && (
              <div className="text-xs text-green-500 mt-1">
                {exerciseSchedule[formatDate(date)].join(", ")}
              </div>
            )
          }
          className="react-calendar"
        />
      </div>

      {/* Exercise Details for Selected Date */}
      <div className="mt-10 bg-gray-800 rounded-lg shadow-lg p-6 w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center mb-4">
          Exercises for {selectedDate.toDateString()}
        </h2>
        <ul className="list-disc list-inside space-y-2 text-center">
          {exercisesForSelectedDate.map((exercise, index) => (
            <li key={index} className="text-lg">
              {exercise}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default GymCalendar;
