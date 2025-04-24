
import { BrowserRouter, Routes, Route } from "react-router";
import React, { useState } from 'react';
import HomePage from "../Pages/HomePage";
import AvailableFlightPage from "../Pages/AvailableFlightPage";
import PassportDetailsPage from "../Pages/PassportDetailsPage";
import FlightPaymentPage from "../Pages/FlightPaymentPage";
// import './App.css'

import TicketDownload from "../Pages/TicketDownload";
function App() {


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/searchflights" element={<AvailableFlightPage />} />
          <Route path="/searchflights/passportdetails" element={<PassportDetailsPage />} />
          <Route path="/payment" element={<FlightPaymentPage />} />
          <Route path="/downloadticket" element={<TicketDownload />} />

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
