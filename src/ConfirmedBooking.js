import React from 'react';
import TopPart from './TopPart'

function ConfirmedBooking( date, time){


    return(
        <main>
            <TopPart />
            <h1>Thank you for your reservation! See you on {date} at {time}!</h1>
        </main>
    )
}

export default ConfirmedBooking;