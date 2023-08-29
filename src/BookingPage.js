import React from 'react';
import BookingForm from './BookingForm';
import TopPart from './TopPart'
import Name from './Name'
import { useState, useEffect } from "react";

function BookingPage(){

    const [date, setDate] = useState(null);
    const [time, setTime] = useState(null);
    const [guests, setGuests] = useState(null);
    const [occasion, setOccasion] = useState(null);
    const [name, setName] = useState(null);
    const [submitted, setSubmitted] = useState(false);


    return(
        <main>
            <TopPart />
            <Name
            name = {name}
            setName = {setName}
             />
            <BookingForm 
            date = {date}
            setDate = {setDate}
            time = {time}
            setTime = {setTime}
            guests = {guests}
            setGuests = {setGuests}
            occasion = {occasion}
            setOccasion = {setOccasion}
            submitted = {submitted}
            setSubmitted = {setSubmitted}
            />
            
        </main>
    )
}

export default BookingPage;