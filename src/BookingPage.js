import React from 'react';
import BookingForm from './BookingForm';
import TopPart from './TopPart'
import Name from './Name'
import { useState } from "react";
import { useReducer } from "react";
import { fetchAPI } from "./bookingAPI";

function BookingPage(){
    const [name, setName] = useState(null);

    function updateTimes(date) {
        return fetchAPI(date);
      }
    
      const output = fetchAPI(new Date());
    
      const [availableTimes, dispatch] = useReducer(updateTimes, output);
    

    return(
        <main>
            <TopPart />
            <Name
            name = {name}
            setName = {setName}
             />
            
            <BookingForm 
            availableTimes={availableTimes}
            dispatch={dispatch}
            />
            
        </main>
    )
}

export default BookingPage;