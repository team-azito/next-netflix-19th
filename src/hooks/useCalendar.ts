import { useState } from "react";

interface MonthDayMap {
  [month: string]: number;
}

// 각 월의 일수를 정의한 객체
const DAYS_IN_MONTH: MonthDayMap = {
  "1": 31,
  "2": 28,
  "3": 31,
  "4": 30,
  "5": 31,
  "6": 30,
  "7": 31,
  "8": 31,
  "9": 30,
  "10": 31,
  "11": 30,
  "12": 31,
};

// 윤년 여부에 따라 2월의 일수를 조정하는 함수
export const calculateDaysInMonth = (year: number): MonthDayMap => {
  const isLeapYear = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
  return {
    ...DAYS_IN_MONTH,
    "2": isLeapYear ? 29 : 28,
  };
};

// 현재 날짜를 반환하는 함수
export const showTodayDate = () => {
  const now = new Date();
  const currentYear = now.getFullYear();
  const currentMonth = now.getMonth() + 1; // getMonth()는 0부터 시작하므로 1을 더합니다.
  const currentDay = now.getDate();
  return { currentYear, currentMonth, currentDay };
};

// 캘린더 훅: 현재 년도와 월, 그리고 달력에 표시할 날짜들을 계산
export const useCalendar = ({ initialYear, initialMonth }: { initialYear?: number; initialMonth?: number } = {}) => {
  const { currentYear, currentMonth } = showTodayDate();
  const [year, setYear] = useState(initialYear || currentYear);
  const [month, setMonth] = useState(initialMonth || currentMonth);

  // 해당 년도의 각 월의 일수를 계산
  const daysInMonth = calculateDaysInMonth(year);
  const numberOfDaysInMonth = daysInMonth[String(month)];

  // 해당 월의 첫 번째 날의 요일을 계산
  const firstDayOfMonthIndex = new Date(year, month - 1, 1).getDay();

  // 이전 월의 마지막 몇 일들을 계산
  const previousMonthDays = Array.from({ length: firstDayOfMonthIndex }, (_, index) => {
    const previousMonth = month === 1 ? 12 : month - 1;
    const previousYear = month === 1 ? year - 1 : year;
    const numberOfDaysInPreviousMonth = calculateDaysInMonth(previousYear)[String(previousMonth)];
    return numberOfDaysInPreviousMonth - firstDayOfMonthIndex + index + 1;
  });

  // 현재 월의 일들을 계산
  const currentMonthDays = Array.from({ length: numberOfDaysInMonth }, (_, index) => index + 1);

  // 다음 월의 첫 번째 몇 일들을 계산
  const nextMonthDays = Array.from(
    { length: (7 - ((firstDayOfMonthIndex + numberOfDaysInMonth) % 7)) % 7 },
    (_, index) => index + 1,
  ).map((day) => ({
    day,
    nextMonth: true,
  }));

  // 이전 월로 이동
  const handlePreviousMonth = () => {
    if (month === 1) {
      setMonth(12);
      setYear(year - 1);
    } else {
      setMonth(month - 1);
    }
  };

  // 다음 월로 이동
  const handleNextMonth = () => {
    if (month === 12) {
      setMonth(1);
      setYear(year + 1);
    } else {
      setMonth(month + 1);
    }
  };

  const handleTodayButtonClick = () => {
    setYear(currentYear);
    setMonth(currentMonth);
  };

  return {
    year,
    month,
    previousMonthDays,
    currentMonthDays,
    nextMonthDays,
    handlePreviousMonth,
    handleNextMonth,
    handleTodayButtonClick,
  };
};
