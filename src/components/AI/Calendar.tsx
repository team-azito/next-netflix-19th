// components/Calendar.tsx
"use client";
import LeftArrowIcon from "#/icons/test/btn-leftArrow.svg";
import RightArrowIcon from "#/icons/test/btn-rightArrow.svg";
import { useCalendar } from "@/hooks/useCalendar";
import { useState } from "react";

export default function Calendar() {
  const WEEK = ["일", "월", "화", "수", "목", "금", "토"];
  const {
    year,
    month,
    previousMonthDays,
    currentMonthDays,
    nextMonthDays,
    handlePreviousMonth,
    handleNextMonth,
    handleTodayButtonClick,
  } = useCalendar();

  return (
    <div className="p-20 w-360pxr rounded-lg bg-white font-sans shadow-lg">
      <div className="flex justify-between bg-gray-200 p-12pxr">
        <div className="flex items-center rounded-t-lg ">
          <button onClick={handlePreviousMonth}>
            <LeftArrowIcon alt="이전 달 이동 아이콘" />
          </button>
          <span>
            {String(year).slice(-2, 4)}년 {month}월
          </span>
          <button onClick={handleNextMonth}>
            <RightArrowIcon alt="다음 달 이동 아이콘" />
          </button>
        </div>
        <button
          onClick={handleTodayButtonClick}
          className=" text-xs px-2.5 py-1.5 gap-2.5 h-26pxr w-41pxr bg-black font-semibold text-white"
        >
          오늘
        </button>
      </div>
      <div className="py-2 grid grid-cols-7 bg-gray-300 text-center">
        {WEEK.map((day) => (
          <button key={day} className="font-semibold">
            {day}
          </button>
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
