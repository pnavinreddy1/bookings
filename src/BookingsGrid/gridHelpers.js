import { sessions, days } from "../db";

export function getEmptyGrid (bookable) {
    const sessionNames = bookable.sessions.map(s => sessions[s]);
    const dayNames = bookable.days.map(d => days[d]);
    const bookings = {};

    sessionNames.forEach(s => {
        bookings[s] ={};
        dayNames.forEach(d => bookings[s][d] = {
            session : s,
            day : d,
            bookableID: bookable.id,
            title : ""
        });
    });

    return {
        bookings,
        sessions: sessionNames,
        days : dayNames
    };
}

export function applyBookings (grid, bookings) {
    bookings.forEach((booking) => {
        if(grid[booking.session]) {
            grid[booking.session][booking.day] = booking;
        }
    });
}