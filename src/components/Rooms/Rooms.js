import React from 'react';
import './styles.css'

const Rooms = () => {
    return (
        <div className="container" id="rooms">
            <div className="backgroundRoomImage">
                <div className="roomCard">
                    <div className="cardWrapper">

                        <div className="heading">
                            <p>OUR ROOMS</p>
                        </div>

                        <div className="roomDescription">
                            <p>I'm a paragraph. Click here to add your own text and edit me. I’m a great place for you to tell a story and let your users know a little more about you.</p>
                        </div>

                        <div className="bookButton">
                            <button onClick={()=> console.log('book a room')}>Book a Room</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Rooms
