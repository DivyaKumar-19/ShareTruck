import React, { useState} from 'react';
import './Ride.css';

const BookingCard = () => {
    return (
        <div className="card booking-card">
            <div className="icon">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkFzm2OAKnrthbkPswdToAg7u9D4V0rJCsug&s" alt="Car Icon" className="card-image" />
            </div>
            <button className="button">BOOK</button>
        </div>
    );
};

const PickUpPointCard = () => {
    return (
        <div className="card pickup-point-card">
            <div className="location-input">
                    <h3>Select Location</h3><br></br>
                <div className="input-group">
                    <label>From</label>
                    <div className="input-wrapper">
                        <i className="fas fa-map-marker-alt icon"></i>
                        <input type="text" placeholder="Pick Up Point" />
                    </div>
                </div>
                <div className="input-group">
                    <label>To</label>
                    <div className="input-wrapper">
                        <i className="fas fa-location-arrow icon"></i>
                        <input type="text" placeholder="Enter Destination" />
                    </div>
                </div>
            </div>
            <button className="button">SEARCH</button>
        </div>
    );
};

const PaymentCard = () => {
    return (
        <div className="card payment-card">
            <div className="payment-details">
              
                <p><h3>Payment Mode</h3></p><br></br>
                <label>
                    <input type="radio" name="payment" /> Cash Payment
                </label>
                <label>
                    <input type="radio" name="payment" /> Payment by Card
                </label>
            </div>
            <button className="button">CONFIRM</button>
        </div>
    );
};

const DriverCard = () => {
    const [rating, setRating] = useState(0);
    const [hoverRating, setHoverRating] = useState(0);

    const handleRatingChange = (star) => {
        setRating(star);
    };

    const handleStarDoubleClick = () => {
        setRating(0);
    };
    return (
        <div className="card driver-card">
            <div className="driver-details">
                <img src="person.jpg" alt="Driver" className="profile-pic" />
                <div>Lorem Ipsum</div>
                <div className="rating">Rating: 4.5</div>
                <div className="rating-scale">
                    {[1, 2, 3, 4, 5].map((star) => (
                        <span
                            key={star}
                            className={`star ${star <= (hoverRating || rating) ? 'selected' : ''}`}
                            onClick={() => handleRatingChange(star)}
                            onDoubleClick={handleStarDoubleClick}
                            onMouseEnter={() => setHoverRating(star)}
                            onMouseLeave={() => setHoverRating(0)}
                        >
                            ⭐
                        </span>
                    ))}
                </div>
            </div>
            <button className="button">RATE US</button>
        </div>
    );
};

const TrackRideCard = () => {
    return (
        <div className="card track-ride-card">
            <div className="ride-details">
                <div> <h3>Track Your Ride</h3></div>
                <div><i className="fas fa-map-marker-alt"></i> 22 AA 20</div>
                <div><i className="fas fa-building"></i> 23A, Lorem Ipsum Dolor</div>
            </div>
            {/* <div className="details">
                <span>4.5 km</span>
                <span>15 min</span>
                <span>$10.35</span>
            </div> */}
            <button className="button">TRACK </button>
        </div>
    );
};


const FeedbackCard = () => {
    return (
        <div className="card feedback-card">
            <div className="feedback">
                <img src="person.jpg" alt="User" className="profile-pic" />
                <div className='feed'>
                    <p>Your Feedback</p></div>
                {/* <div>Lorem Ipsum</div> */}
                
                {/* <div className="rating">Rating: 4.5</div> */}
                <input type="text" placeholder="Add Comment" />
            </div>
            <button className="button">SUBMIT</button>
        </div>
    );
};

const Ride = () => {
    return (
        <div className="app">
            <div className="grid">
                <BookingCard />
                <PickUpPointCard />
                <PaymentCard />
                <DriverCard />
                <TrackRideCard />
                <FeedbackCard />
            </div>
        </div>
    );
};

export default Ride;
