import React from 'react';
import './ShipmentTracking.css';

const ShipmentTracking = () => {
  return (
    <div className="shipment-tracking">
      <h2>Shipment Details</h2>
      <div className="shipment-details">
        <div className="header">
          <span>Shipment details</span>
          <button className="delivered">DELIVERED</button>
        </div>
        <div className="timeline">
          <div className="event">
            <div className="time">11:20 <br /> Nov 16</div>
            <div className="status">
              <div className="circle"></div>
              <div className="line"></div>
              <div>Order Received</div>
            </div>
          
          </div>
          <div className="event">
            <div className="time">12:35 <br /> Nov 16</div>
            <div className="status">
              <div className="circle"></div>
              <div className="line"></div>
              <div>Your order is ready to be shipped from Dubai - UAE warehouse.</div>
            </div>
          </div>
          <div className="event">
            <div className="time">15:00 <br /> Nov 16</div>
            <div className="status">
              <div className="circle"></div>
              <div className="line"></div>
              <div>Your order is shipped</div>
            </div>
          </div>
          <div className="event">
            <div className="time">10:00 <br /> Nov 18</div>
            <div className="status">
              <div className="circle"></div>
              <div className="line"></div>
              <div>Your order has arrived in Riyadh - KSA warehouse.</div>
            </div>
          </div>
          <div className="event">
            <div className="time">10:30 <br /> Nov 18</div>
            <div className="status">
              <div className="circle"></div>
              <div className="line"></div>
              <div>Your order has been picked up by ARAMEX and on the way to Jeddah.</div>
            </div>
          </div>
          <div className="event">
            <div className="time">17:00 <br /> Nov 18</div>
            <div className="status">
              <div className="circle"></div>
              <div className="line"></div>
              <div>Your order has arrived in Jeddah and expected scheduled delivery is 19th November.</div>
            </div>
          </div>
          <div className="event">
            <div className="time">08:00 <br /> Nov 19</div>
            <div className="status">
              <div className="circle"></div>
              <div className="line"></div>
              <div>Your order is out for delivery.</div>
            </div>
          </div>
          <div className="event">
            <div className="time">13:00 <br /> Nov 19</div>
            <div className="status">
              <div className="circle"></div>
              <div className="line"></div>
              <div>Delivered</div>
            </div>
          </div>
        </div>
        <div className="footer">
          <div>Delivery Type: 2-6 Days</div>
          <div>Courier: ARAMEX</div>
          <div>Tracking Number: 7Y837849CV2</div>
        </div>
      </div>
    </div>
  );
};

export default ShipmentTracking;
