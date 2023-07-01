import { useState } from "react";
import { BalockCalendar, ButtonCalendar, CalendarDate, CalendarImage, ViewCalendar } from "./CalendarComponent.styled";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';

export const CalendarComponent = () => {
  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleCalendarToggle = () => {
    setShowCalendar(!showCalendar);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setShowCalendar(false);
  };

  return (
    <BalockCalendar>
      <ButtonCalendar onClick={handleCalendarToggle}>
        <CalendarImage/>
        <CalendarDate>{selectedDate.toLocaleDateString()}</CalendarDate>
      </ButtonCalendar>
      {showCalendar && (
        <ViewCalendar>
          <Calendar onChange={handleDateChange} value={selectedDate} />
        </ViewCalendar>
      )}
    </BalockCalendar>
  )
}
