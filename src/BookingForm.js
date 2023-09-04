import { useState } from "react";
import { Link } from "react-router-dom";
export default function ReservationForm(props) {
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  const [people, setPeople] = useState(1);
  const [date, setDate] = useState("");
  const [occasion, setOccasion] = useState("");
  const [preferences, setPreferences] = useState("");
  const [comments, setComments] = useState("");

  const [finalTime, setFinalTime] = useState(
    props.availableTimes ? props.availableTimes.map((times) => <option>{times}</option>) : []
  );
  

  function handleDateChange(e) {
    setDate(e.target.value);

    var stringify = e.target.value;
    const date = new Date(stringify);

    props.updateTimes(date);

    setFinalTime(props.availableTimes.map((times) => <option>{times}</option>));
  }

  return (
    <form className="reservation-form">
      <div>
        <label htmlFor="fName">First Name</label> <br></br>
        <input
          type="text"
          id="fName"
          placeholder="First Name"
          required
          minLength={2}
          maxLength={50}
          value={fName}
          onChange={(e) => setFName(e.target.value)}
        ></input>
      </div>

      <div>
        <label htmlFor="lName">Last Name</label> <br></br>
        <input
          type="text"
          id="lName"
          placeholder="Last Name"
          minLength={2}
          maxLength={50}
          value={lName}
          onChange={(e) => setLName(e.target.value)}
        ></input>
      </div>

      <div>
        <label htmlFor="email">Email</label> <br></br>
        <input
          type="email"
          id="email"
          placeholder="Email"
          value={email}
          required
          minLength={4}
          maxLength={200}
          onChange={(e) => setEmail(e.target.value)}
        ></input>
      </div>

      <div>
        <label htmlFor="phonenum">Phone Number</label> <br></br>
        <input
          type="tel"
          id="phonenum"
          placeholder="(xxx)-xxx-xxxx"
          value={tel}
          required
          minLength={10}
          maxLength={25}
          onChange={(e) => setTel(e.target.value)}
        ></input>
      </div>

      <div>
        <label htmlFor="people">Number of People</label> <br></br>
        <input
          type="number"
          id="people"
          placeholder="Number of People"
          value={people}
          required
          min={1}
          max={100}
          onChange={(e) => setPeople(e.target.value)}
        ></input>
      </div>

      <div>
        <label htmlFor="date">Select Date</label> <br></br>
        <input
          type="date"
          id="date"
          required
          value={date}
          onChange={handleDateChange}
        ></input>
      </div>

      <div>
        <label htmlFor="time">Select Time</label> <br></br>
        <select id="time" required>
          {finalTime}
        </select>
      </div>

      <div>
        <label htmlFor="occasion">Occasion</label> <br></br>
        <select
          id="occasion"
          value={occasion}
          onChange={(e) => setOccasion(e.target.value)}
        >
          <option>None</option>
          <option>Birthday</option>
          <option>Anniversary</option>
          <option>Engagement</option>
          <option>Other</option>
        </select>
      </div>

      <div>
        <label htmlFor="preferences">Seating preferences</label> <br></br>
        <select
          id="preferences"
          value={preferences}
          onChange={(e) => setPreferences(e.target.value)}
        >
          <option>None</option>
          <option>Indoors</option>
          <option>Outdoor (Patio)</option>
          <option>Outdoor (Sidewalk)</option>
        </select>
      </div>

      <div>
        <label htmlFor="comments">Additional Comments</label> <br></br>
        <textarea
          id="comments"
          rows={8}
          cols={50}
          placeholder="Additional Comments"
          value={comments}
          onChange={(e) => setComments(e.target.value)}
        ></textarea>
      </div>

      <div>
        <br></br>
        <small>
          <p>
            Note: You cannot edit your reservation after submission. Please
            double-check your answer before submitting your reservation request.
          </p>
        </small>
        <Link className="action-button" to="/confirmation">
          Book Table
        </Link>
      </div>
    </form>
  );
}



// import React, { useState } from 'react';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import { Link, useHistory } from 'react-router-dom'; // Import useHistory for navigation
// import { fetchAPI, submitAPI } from './bookingAPI'; // Replace 'your-api-file' with the actual path to your API file

// function BookingForm({ props }) {
//   const mystyle = {
//     display: "grid",
//     maxWidth: "200px",
//     gap: "20px"
//   };

//   const [date, setDate] = useState('');
//   const [time, setTime] = useState('');
//   const [guests, setGuests] = useState('');
//   const [occasion, setOccasion] = useState('');

//   const handleDateChange = (e) => {
//     const selectedDate = e.target.value;
//     setDate(selectedDate);

//     // Fetch available times based on the selected date
//     const availableTimes = fetchAPI(selectedDate);
//     setAvailableTimes(availableTimes);
//   };

//   const handleFormSubmit = async (e) => {
//     e.preventDefault();

//     // Check if all required fields are filled
//     if (!date || !time || !guests || !occasion) {
//       alert('Please fill in all required fields.');
//       return;
//     }

//     // Prepare form data
//     const formData = {
//       date,
//       time,
//       guests,
//       occasion,
//     };

//     // Submit the form data using the submitAPI function
//     const submissionResult = await submitAPI(formData);

//     if (submissionResult) {
//       // If the submission is successful, you can navigate to the confirmation page
//       history.push('/confirmation');
//     } else {
//       // Handle submission failure
//       alert('Submission failed. Please try again later.');
//     }
//   };

//   // ... (rest of your code remains the same)

//   return (
//     <Row>
//       <Col className='d-flex justify-content-center'>
//         <div className='book-mid'>
//           <form style={mystyle} onSubmit={handleFormSubmit}>
//           <label htmlFor="res-date">Choose date</label>
//             <input type="date" id="res-date" value={date} onChange={handleDateChange} />
//             <label htmlFor="res-time">Choose time</label>
//             <select id="res-time" value={time} onChange={(e) => setTime(e.target.value)}>
//               <option value="">Select a Time</option>
//               {availableTimes.map((availableTime, index) => (
//                 <option key={index} value={availableTime}>
//                   {availableTime}
//                 </option>
//               ))}
//             </select>
//             <label htmlFor="guests">Number of guests</label>
//             <input
//               type="number"
//               placeholder="1"
//               min="1"
//               max="10"
//               id="guests"
//               value={guests}
//               onChange={(e) => setGuests(e.target.value)}
//             />
//             <label htmlFor="occasion">Occasion</label>
//             <select id="occasion" value={occasion} onChange={(e) => setOccasion(e.target.value)}>
//               <option value="Birthday">Birthday</option>
//               <option value="Anniversary">Anniversary</option>
//             </select>
//             <button type="submit">Make Your Reservation!</button>
//           </form>
//           <Link to="/confirmation">Go to Confirmation</Link>
//         </div>
//       </Col>
//     </Row>
//   );
// }

// export default BookingForm;