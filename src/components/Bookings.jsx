import { useState } from "react";

const timeSlots = [
  "17:00", "18:00", "19:00", "20:00",
  "21:00", "22:00"
];

// Example structure: number of bookings per slot (YYYY-MM-DD)
const initialBookedSlots = {
  // "2026-01-25": { "17:00": 2, "18:00": 4 }
};

export default function Bookings() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState("");
  const [bookedSlots, setBookedSlots] = useState(initialBookedSlots);

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const today = new Date();

  const prevMonth = () => setCurrentDate(new Date(year, month - 1, 1));
  const nextMonth = () => setCurrentDate(new Date(year, month + 1, 1));

  const formatDateKey = (date) => date.toISOString().split("T")[0];

  const handleBook = () => {
    if (!selectedDate || !selectedTime) {
      alert("Please select a date and a time slot");
      return;
    }

    const dateKey = formatDateKey(selectedDate);
    const slotCount = bookedSlots[dateKey]?.[selectedTime] || 0;

    if (slotCount >= 6) {
      alert("This time slot is fully booked. Please select another slot.");
      return;
    }

    // Update booked slots
    setBookedSlots(prev => ({
      ...prev,
      [dateKey]: {
        ...prev[dateKey],
        [selectedTime]: slotCount + 1
      }
    }));

    alert(`Appointment booked on ${selectedDate.toDateString()} at ${selectedTime}`);
    setSelectedTime(""); // reset selected time
    setSelectedDate(null); // optional: reset date selection
  };

  return (
    <div style={{ maxWidth: "450px", margin: "0 auto", fontFamily: "sans-serif", height: "55rem" }}>
  
      {/* Month Navigation */}
      <div style={{ fontFamily: "EB Garamond, serif", display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1rem", color: "#D2CDB3", position: "relative", top: "7rem" }}>
        <button onClick={prevMonth}>&lt;</button>
        <h2>{currentDate.toLocaleString("default", { month: "long" })} {year}</h2>
        <button onClick={nextMonth}>&gt;</button>
      </div>

      {/* Weekdays */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", textAlign: "center", fontWeight: "bold", marginBottom: "0.5rem", color: "#D2CDB3", position: "relative", top: "7rem" }}>
        {["Sun","Mon","Tue","Wed","Thu","Fri","Sat"].map(d => <div key={d}>{d}</div>)}
      </div>

      {/* Days */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(7, 1fr)", textAlign: "center", gap: "2px", position: "relative", top: "7rem" }}>
        {Array(firstDay).fill(null).map((_, i) => <div key={`empty-${i}`} />)}
        {Array.from({ length: daysInMonth }, (_, i) => {
          const day = i + 1;
          const dateObj = new Date(year, month, day);
          const isPast = dateObj < new Date(today.getFullYear(), today.getMonth(), today.getDate());
          const isSelected = selectedDate && selectedDate.toDateString() === dateObj.toDateString();
          const isToday = dateObj.toDateString() === today.toDateString();

          return (
            <div 
              key={day}
              onClick={() => !isPast && setSelectedDate(dateObj)}
              style={{
                fontFamily: "EB Garamond, serif",
                padding: "0.6rem",
                borderRadius: "0px",
                cursor: isPast ? "not-allowed" : "pointer",
                backgroundColor: isSelected ? "#8C2D18" : isToday ? "#DFAB5E" : "#D2CDB3",
                color: isPast ? "#999" : isSelected || isToday ? "#0D0D0D" : "#0D0D0D", 
              }}
            >
              {day}
            </div>
          );
        })}
      </div>

      {/* Time Selection */}
      {selectedDate && (
        <div style={{ fontFamily: "EB Garamond, serif", marginTop: "1rem", justifyContent: "center", textAlign: "center", color: "#F2E3D5", position: "relative", top: "7rem" }}>
          <h3>Select a time for {selectedDate.toDateString()}:</h3>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginTop: "0.5rem", justifyContent: "center", textAlign: "center"}}>
            {timeSlots.map(time => {
              const dateKey = formatDateKey(selectedDate);
              const count = bookedSlots[dateKey]?.[time] || 0;
              const isFull = count >= 6;
              return (
                <button
                  key={time}
                  onClick={() => !isFull && setSelectedTime(time)}
                  style={{
                    padding: "0.5rem 1rem",
                    borderRadius: "0px",
                    border: "none",
                    cursor: isFull ? "not-allowed" : "pointer",
                    backgroundColor: selectedTime === time ? "#8C2D18" : "#D2CDB3",
                    color: selectedTime === time ? "#F2E3D5" : "#0D0D0D",
                    opacity: isFull ? 0.5 : 1,
                  }}
                  title={isFull ? "This slot is fully booked" : ""}
                  disabled={isFull}
                >
                  {time} {isFull ? "(Full)" : ""}
                </button>
              );
            })}
          </div >

          <input  type="text" placeholder="email address" style={{ marginTop: "1rem", padding: "0.5rem", width: "90%", boxSizing: "border-box", borderRadius: "5px", border: "1px solid #ccc" }} maxLength={75} />
          <input  type="text" placeholder="number of guests" style={{ marginTop: ".5rem", padding: "0.5rem", width: "90%", boxSizing: "border-box", borderRadius: "5px", border: "1px solid #ccc" }} maxLength={2} />
          <input type="text" placeholder="message" style={{ marginTop: "0.5rem", padding: "0.5rem", width: "90%", height: "5rem", boxSizing: "border-box", borderRadius: "5px", border: "1px solid #ccc" }} maxLength={250} />
          <button
            onClick={handleBook}
            style={{
              fontFamily: "EB Garamond, serif",
              letterSpacing: "1px",
              marginTop: "1rem",
              padding: "0.5rem 1rem",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              backgroundColor: "#8C2D18",
              color: "#F2E3D5",
            }}
          >
            Book Table
          </button>
        </div>
      )}
    </div>
  );
}
