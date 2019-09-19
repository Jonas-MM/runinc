import React from 'react';

const Event = () => {
    return (
        <div id="event" className="container d-flex">
            <div className="eventBgr left-align">
                <h3 className="nextEvent right-align">NEXT EVENT</h3>
            </div>
            <section className="left-align">
                <h3>EVENTS</h3>
                <h5>COPENHAGEN MARATHON</h5>
                <p>Den 29. maj 2018</p>
                <h5>AARHUS CITY RUN</h5>
                <p>Den 1. juni 2018</p>
                <h5>BERLIN MARATHON</h5>
                <p>Den 6. juni 2018</p>

            </section>
        </div>
    );
}

export default Event;