import React, {useState, useMemo, useRef} from 'react';
import { getEmptyGrid, applyBookings } from "./gridHelpers";
import BookingsGrid from "./BookingsGrid";
import BookableDetails from "./BookableDetails";
import data from "../db";

function Bookings ({ bookable }) {
    const [ booking, setBooking ] = useState();
    const [ bookings, setBookings ] = useState(data.bookings);
    const bookableRef = useRef();

    if(bookable && bookable.id !== bookableRef.current) {
        bookableRef.current = bookable.id;
        setBooking(null);
    }

    const lookup = useMemo(
        () => bookable ? getEmptyGrid(bookable) : {},
        [bookable]
    );
    
    useMemo(() => {
        if(lookup.bookings && bookings) {
            applyBookings(lookup.bookings,
                bookings.filter(b => b.bookableID === bookable.id)
                );
        }
    }, [lookup, bookings, bookable]);

    return (
        <div className="bookings">
            <BookingsGrid
                bookingsLookup={lookup}
                booking={booking}
                setBooking={setBooking}
            />

            <BookableDetails
                booking={booking}
                bookable={bookable}
            />            
        </div>
    );
}

export default Bookings;
