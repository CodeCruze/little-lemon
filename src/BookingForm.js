import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function BookingForm({ date, setDate, time, setTime, guests, setGuests, occasion, setOccasion, submitted, setSubmitted }) {
  const mystyle = {
    display: "grid",
    maxWidth: "200px",
    gap: "20px"
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can perform actions like sending the reservation data to a server
    // or displaying a confirmation message.
    setSubmitted(true);
  };

  return (
    <Row>
      <Col className='d-flex justify-content-center'>
        <div className='book-mid'>
          <form style={mystyle} onSubmit={handleSubmit}>
            <label htmlFor="res-date">Choose date</label>
            <input type="date" id="res-date" value={date} onChange={(e) => setDate(e.target.value)} />
            <label htmlFor="res-time">Choose time</label>
            <select id="res-time" value={time} onChange={(e) => setTime(e.target.value)}>
                <option>17:00</option>
                <option>18:00</option>
                <option>19:00</option>
                <option>20:00</option>
                <option>21:00</option>
                <option>22:00</option>
            </select>
            <label htmlFor="guests">Number of guests</label>
            <input type="number" placeholder="1" min="1" max="10" id="guests" value={guests} onChange={(e) => setGuests(e.target.value)} />
            <label htmlFor="occasion">Occasion</label>
            <select id="occasion" value={occasion} onChange={(e) => setOccasion(e.target.value)}>
                <option>Birthday</option>
                <option>Anniversary</option>
            </select>
            <input type="submit" value="Make Your reservation" />
          </form>
          <div>
              <p submitted={true}>Reservation submitted! See you on {date} at {time}.</p>
          </div>
        </div>
      </Col>
    </Row>
  );
}

export default BookingForm;