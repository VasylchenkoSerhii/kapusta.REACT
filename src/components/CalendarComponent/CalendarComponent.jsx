import { useState } from "react";
import { BalockCalendar, ButtonCalendar, CalendarDate, CalendarImage, ViewCalendar } from "./CalendarComponent.styled";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';

export const CalendarComponent = ({date,setDate}) => {
  const [showCalendar, setShowCalendar] = useState(false);
  // const [selectedDate, setSelectedDate] = useState(new Date());

  const handleCalendarToggle = () => {
    setShowCalendar(!showCalendar);
  };

  const handleDateChange = (date) => {
    // sessionStorage.setItem('transactionDate', date.toString());
    setDate(date);
    setShowCalendar(false);
  };

  return (
    <BalockCalendar>
      <ButtonCalendar onClick={handleCalendarToggle}>
        <CalendarImage/>
        <CalendarDate>{date.toLocaleDateString()}</CalendarDate>
      </ButtonCalendar>
      {showCalendar && (
        <ViewCalendar>
          <Calendar onChange={handleDateChange} value={date} />
        </ViewCalendar>
      )}
    </BalockCalendar>
  )
}
