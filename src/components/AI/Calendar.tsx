// components/Calendar.tsx
"use client";

import { useCalendar } from "@/hooks/useCalendar";

export default function Calendar() {
  const WEEK = ["월", "화", "수", "목", "금", "토", "일"];
  const { year, month, previousMonthDays, currentMonthDays, nextMonthDays, handlePreviousMonth, handleNextMonth } =
    useCalendar();

  return (
    <div className="p-20 w-360pxr rounded-lg bg-white font-sans shadow-lg">
      <div className="flex items-center justify-between rounded-t-lg bg-gray-200 p-12pxr">
        <button onClick={handlePreviousMonth}>&lt;</button>
        <span>
          {year}년 {month}월
        </span>
        <button onClick={handleNextMonth}>&gt;</button>
      </div>
      <div className="py-2 grid grid-cols-7 bg-gray-300 text-center">
        {WEEK.map((day) => (
          <div key={day} className="font-semibold">
            {day}
          </div>
        ))}
      </div>
      <div className="gap-1 p-2 grid grid-cols-7">
        {previousMonthDays.map((day, index) => (
          <div key={`prev-month-${index}`} className="p-4 border text-center text-gray-400">
            {day}
          </div>
        ))}
        {currentMonthDays.map((day) => (
          <div key={day} className="p-4 border text-center">
            {day}
          </div>
        ))}
        {nextMonthDays.map(({ day }, index) => (
          <div key={`next-month-${index}`} className="p-4 border text-center text-gray-400">
            {day}
          </div>
        ))}
      </div>
    </div>
  );
}
