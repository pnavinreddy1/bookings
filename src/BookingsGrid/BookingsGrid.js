import React from 'react';

function BookingsGrid( {bookingsLookup, booking, setBooking }) {
    const {bookings, sessions, days} = bookingsLookup;

    function isSelected(session, day) {
        if(!booking) return false;
        return session === booking.session && day === booking.day;
    }

    return (
        <div className="bookingsGrid">
            {bookings && sessions && days &&
            <table>
                <thead>
                    <tr>
                        <th></th>
                        {days.map(day => <th key={day}>{day}</th>)}
                    </tr>
                </thead>
                <tbody>
                    {sessions.map(session => {
                        return (
                            <tr key={session}>
                                <th>{session}</th>
                                {
                                    days.map(day => {
                                        const booking = bookings[session][day];
                                        return (
                                            <td
                                            key={day}
                                            onClick={() => setBooking(booking)} 
                                            className={
                                                isSelected(session, day) ? 'selected' : null
                                            }                                          
                                            >
                                                {booking && booking.title}
                                            </td>
                                        );

                                    })}
                            </tr>
                            )
                            
                    })}
                </tbody>
            </table>    
            }
        </div>
    );

}

export default BookingsGrid;