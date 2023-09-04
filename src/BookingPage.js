import React from 'react';
import BookingForm from './BookingForm';
import TopPart from './TopPart'
import { useReducer } from "react";
import { fetchAPI } from "./bookingAPI";

function BookingPage(){

    function updateTimes(date) {
        return fetchAPI(date);
      }
    
      const output = fetchAPI(new Date());
    
      const [availableTimes, dispatch] = useReducer(updateTimes, output);
    

    return(
        <main>
            <TopPart />            
            <BookingForm 
            availableTimes={availableTimes}
            updateTimes={updateTimes}
            dispatch={dispatch}
            />
            
        </main>
    )
}

export default BookingPage;