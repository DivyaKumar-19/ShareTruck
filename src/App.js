// src/App.js
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sign from './Sign';
import PrimarySearchAppBar from './nav';
import Login from './LoginPage';
import About from './About';
import Contact from './Contact';
import LandingPage from './LandingPage';
import BookingList from './BookingList';
import Driver from './Driver';
import VendorsDetailsForm from './VendorsDetailsForm';
import ClientTestimonials from './ClientTestimonials';
import Final from './Final';
import PrimarySearch from './cnav';
import Booking from './booking';
import Order from './Order';
import DocumentVerificationForm from './DocumentVerificationForm';
import Clanding from './Clanding';
import Primary from './dnav';
import Trucksearch from './Trucksearch';
import Searchbtn from './Searchbtn';
import Goods from './Goods';
import WhyChoose from './Whychoose';
import ShipmentTracking from './ShipmentTracking';

import Footer from './Footer';
import FeedbackForm from './Community';
import NotificationPage from './NotificationPage';
import TravelApp from './TravelApp';
import TravelCarousel from "./TravelApp";
import OfferRide from "./OfferRide";
import DriverPost from "./DriverPost";
import Ride from "./Ride";
import AutoRoad from "./AutoRoad";
import Brand from "./Brand";
import Features from "./Features";
import Driverride from "./Driverride";
import ReceiverForm from "./ReceiverForm";
import Dashboard from "./Dashboard";
import { FormProvider } from './FormContext';
import Admin from "./Admin";
import UserManagement from "./UserManagement";
import UserProfile from "./UserProfile";
import HomePage from "./HomePage";
import ServiceManagementPage from "./ServiceManagementPage";
import BookingManagementPage from "./BookingManagementPage";


function App() {
  return ( 
      <FormProvider>
    <Router>
      <Routes>
        <Route path="/sign" element={<Sign />} />
        <Route path="/loginpage" element={<Login/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/" element={<LandingPage/>} />
        <Route path="/booking-list" element={<BookingList />} />
        <Route path="/driver" element={<Driver/>} />
        <Route path="/clienttestimonials" element={<ClientTestimonials />} />
        <Route path="/vendorsdetailsform" element={<VendorsDetailsForm />} />
        <Route path="/receiverform" element={<ReceiverForm/>} />
        <Route path="/final" element={<Final />} />
        <Route path="/cnav" element={<PrimarySearch/>} />
        <Route path="/booking" element={<Booking/>}/>
        <Route path="/order" element={<Order/>}/>
        <Route path="/document-verification" element={<DocumentVerificationForm/>}/>
        <Route path="/clanding" element={<Clanding/>}/>
        <Route path="/dnav" element={<Primary/>}/>
        <Route path="/searchbtn" element={<Searchbtn/>}/>
        <Route path="/trucksearch" element={<Trucksearch/>}/>
        <Route path="/goods" element={<Goods/>}/>
        <Route path="/whychoose" element={<WhyChoose/>}/>
        <Route path="/shipmenttracking" element={<ShipmentTracking/>}/>
       
        <Route path="/community" element={<FeedbackForm/>}/>
        <Route path="/document-verification" component={<DocumentVerificationForm></DocumentVerificationForm>} />
        <Route path="/footer" component={<Footer/>}/>
        <Route path="/feedback" element={<FeedbackForm />} />
        <Route path="/notificationpage" element={<NotificationPage />} />
        <Route path="/travelapp" element={<TravelApp/>}/>
        <Route path="/offerride" element={<OfferRide/>}/>
        <Route path="/driverpost" element={<DriverPost/>}/>
        <Route path="/ride" element={<Ride/>}/>
        <Route path="/autoroad" element={<AutoRoad/>}/>
        <Route path="/brand" element={<Brand/>}/>
        <Route path="/features" element={<Features/>}/>
        <Route path="/driverride" element={<Driverride/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/admin" element={<Admin/>}/>
        <Route path="/usermanagement" element={<UserManagement/>}/>
        <Route path="/userprofile" element={<UserProfile/>}/>
        <Route path="/homepage" element={<HomePage/>}/>
        <Route path="/servicemanagement" element={<ServiceManagementPage/>}/>
        <Route path="/bookingmanagementpage" element={<BookingManagementPage/>}/>
  
        
      </Routes>
    </Router>
    </FormProvider>

  );
}

export default App;
