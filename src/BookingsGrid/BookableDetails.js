import React, {Fragment, useState} from "react";

function BookableDetails ({ bookable }) {
    const [ hasDetails, setHasDetails ] = useState(true);
  
    function toggleDetails () {
      setHasDetails(has => !has);
    }
  
    return (
        <div className="bookableDetails">
          {bookable && (
              <Fragment>
                <p style={{marginTop: 0}}>
                  <label>
                    <input
                        type="checkbox"
                        onChange={toggleDetails}
                        checked={hasDetails}
                    />
                    Show Details
                  </label>
                </p>
                {hasDetails && (
                    <div>
                      <h2>{bookable.title}</h2>
                      <p>{bookable.notes}</p>
                    </div>
                )}
              </Fragment>
          )}
        </div>
    );
  }


export default BookableDetails;