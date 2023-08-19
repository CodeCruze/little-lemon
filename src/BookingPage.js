import React from 'react';
import BookingForm from './BookingForm';
import TopPart from './TopPart'
import Name from './Name'

function BookingPage(){
    return(
        <main>
            <TopPart />
            <Name />
            <BookingForm />
            
        </main>
    )
}

export default BookingPage;