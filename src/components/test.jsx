import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const MyDateRangePicker = () => {
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);

  const [startDate, setStartDate] = useState(tomorrow);

  const [endDate, setEndDate] = useState(() => {
    const endDateCopy = new Date(tomorrow);
    endDateCopy.setDate(tomorrow.getDate() + 4);
    return endDateCopy;
  });

  const handleStartDateChange = (date) => {
    setStartDate(date);
  };

  return (
    <div>
      <DatePicker
        selected={startDate}
        minDate={today}
        onChange={handleStartDateChange}
        selectsStart
        startDate={startDate}
        endDate={endDate}
        filterDate={(date) => date >= today}
        placeholderText="Check In"
      />

      <DatePicker
        selected={endDate}
        onChange={(date) => setEndDate(new Date(date))}
        selectsEnd
        startDate={startDate}
        endDate={endDate}
        minDate={startDate}
        placeholderText="Check Out"
      />
    </div>
  );
};

export default MyDateRangePicker;
