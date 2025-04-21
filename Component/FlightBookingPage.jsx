import React, { useEffect, useState } from 'react';
import bgImage from '../src/assets/image/Az.png';
const FlightBookingPage = () => {

// mobile mode..
const [menuOpen, setMenuOpen] = useState(false);
//


  const [showResults, setShowResults] = useState(false);
  const [tripType, setTripType] = useState('round');
  const [showPassportForm, setShowPassportForm] = useState(false);
  const [showPaymentPage, setShowPaymentPage] = useState(false);
  const [errorSumTikets, setErrorSumTikets] = useState(null)
  const [totalTikets, setTotalTikets] = useState({ adult: 1, child: 0, infant: 0 })
  const [dummyResults, setShowResultss] = useState([
    {
      id: 1,
      airline: 'IndiGo',
      from: 'Delhi',
      to: 'Mumbai',
      time: '08:00 - 10:15',
      duration: '2h 15m',
      price: '₹4,500',
    },
    {
      id: 2,
      airline: 'Air India',
      from: 'Delhi',
      to: 'Mumbai',
      time: '11:30 - 13:45',
      duration: '2h 15m',
      price: '₹4,800',
    },
    {
      id: 3,
      airline: 'SpiceJet',
      from: 'Delhi',
      to: 'Mumbai',
      time: '17:00 - 19:15',
      duration: '2h 15m',
      price: '₹4,300',
    },
  ]);
  //Fiters...
  const filters = [
    { id: 'lowToHigh', label: 'Price: Low to High' },
    { id: 'highToLow', label: 'Price: High to Low' },
    { id: 'duration', label: 'Shortest Duration' },
  ];


  const [activeFilter, setActiveFilter] = useState('');

  const handleClick = (id) => {

    setActiveFilter(id);
    // onFilterChange(id);
    if (id === "lowToHigh") {
      const sortedResults = [...dummyResults].sort((a, b) => {
        const priceA = parseInt(a.price.replace(/[^0-9]/g, '')); // remove ₹ and commas
        const priceB = parseInt(b.price.replace(/[^0-9]/g, ''));
       
        return priceA - priceB

      });

      setShowResultss(sortedResults);
    } else if (id === "highToLow") {
      const sortedResults = [...dummyResults].sort((a, b) => {
        const priceA = parseInt(a.price.replace(/[^0-9]/g, '')); // remove ₹ and commas
        const priceB = parseInt(b.price.replace(/[^0-9]/g, ''));
    
        return priceB - priceA

      });

      setShowResultss(sortedResults);
    }

  };
  ///...............................
  //count passengers
  let sum = 0;
  let infantCount = (e) => {

    setTotalTikets(prev => ({
      ...prev,
      infant: e,
    }));


  }
  let childCount = (e) => {
    setTotalTikets(prev => ({
      ...prev,
      child: e,
    }));



  }
  let adultCount = (e) => {
    setTotalTikets(prev => ({
      ...prev,
      adult: e,
    }));


  }


  //


  const handleSearch = (e) => {
    e.preventDefault();
    
    let total = Number(totalTikets.adult) + Number(totalTikets.child) + Number(totalTikets.infant)
  
    if (total > 9) {
      setErrorSumTikets("You can purchase a maximum of 9 tickets only.")
      return false
    }
    if(totalTikets.adult==0){
      setErrorSumTikets("Must have at least one adult")
      return false
    }
    
       setErrorSumTikets(null)
       setShowResults(true);
    

  };




  useEffect(() => {

  }, [dummyResults])

  return (
    <div
      className="min-h-screen font-sans bg-no-repeat bg-center bg-cover"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="bg-[#0b0f2f]/90 min-h-screen">
      <header className="flex justify-between items-center bg-[#121c3d] px-4 py-3 md:px-6 md:py-4 shadow-lg sticky top-0 z-50">
      <div className="text-lg md:text-xl font-extrabold text-white">Airzelo</div>

      {/* Desktop Nav */}
      <nav className="hidden md:flex gap-4 md:gap-6 text-sm text-white font-medium">
        <a href="#" className="hover:text-blue-300">Home</a>
        <a href="#" className="hover:text-blue-300">My Bookings</a>
        <a href="#" className="hover:text-blue-300">Check-in</a>
        <a href="https://wa.me/966531311040" className="hover:text-blue-300">Support</a>
      </nav>

      {/* Hamburger Icon (Mobile) */}
      <button
        className="md:hidden text-white focus:outline-none"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-[#121c3d] flex flex-col text-white font-medium p-4 md:hidden shadow-md z-40">
          <a href="#" className="py-2 hover:text-blue-300">Home</a>
          <a href="#" className="py-2 hover:text-blue-300">My Bookings</a>
          <a href="#" className="py-2 hover:text-blue-300">Check-in</a>
          <a href="https://wa.me/966531311040" className="py-2 hover:text-blue-300">Support</a>
        </div>
      )}
    </header>

        <main className="flex flex-col items-center justify-start px-3 sm:px-6 md:px-8 pt-20">
          <div className="bg-white/90 rounded-xl shadow-2xl p-4 sm:p-6 md:p-10 w-full max-w-md sm:max-w-lg md:max-w-3xl backdrop-blur-md">
            <h2 className="text-2xl md:text-3xl font-extrabold text-[#0c1445] mb-6 text-center md:text-left">Book Your Flight</h2>
            <form onSubmit={handleSearch} className="grid grid-cols-1 md:grid-cols-2 gap-4">

              <div className="md:col-span-2">
                <label className="block text-sm font-semibold text-gray-700 mb-1">Trip Type</label>
                <div className="flex gap-4 flex-wrap">
                  <label className="flex items-center gap-2">
                    <input type="radio" name="tripType" value="round" checked={tripType === 'round'} onChange={() => setTripType('round')} />
                    Round Trip
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="radio" name="tripType" value="single" checked={tripType === 'single'} onChange={() => setTripType('single')} />
                    One Way
                  </label>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">From</label>
                <input type="text" placeholder="City or Airport" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-600" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">To</label>
                <input type="text" placeholder="City or Airport" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-600" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Departure</label>
                <input type="date" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-600" />
              </div>
              {tripType === 'round' && (
                <div>
                  <label className="block text-sm font-medium text-gray-700">Return</label>
                  <input type="date" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-600" />
                </div>
              )}
              <div>
                <label class="block text-sm font-medium mb-1 text-gray-700">Passengers</label>
                <div class="grid grid-cols-3 gap-4">
                  <div>
                    <label class="text-xs">Adult</label>
                    <input min="1" max="9"  value={totalTikets.adult} onChange={(e) => adultCount(Number(e.target.value))} class="w-full border border-gray-300 rounded px-2 py-1" />
                  </div>
                  <div>
                    <label class="text-xs">Child</label>
                    <input min="0" max="9"  value={totalTikets.child} onChange={(e) => childCount(Number(e.target.value))} class="w-full border border-gray-300 rounded px-2 py-1" />
                  </div>
                  <div>
                    <label class="text-xs">Infant</label>
                    <input min="0" max="9"  value={totalTikets.infant} onChange={(e) => infantCount(Number(e.target.value))} class="w-full border border-gray-300 rounded px-2 py-1" />

                  </div>
                </div>
                {errorSumTikets ?
                  <p class="text-red-600 text-sm font-medium">{errorSumTikets}</p>
                  : null}</div>

              {/* <label className="block text-sm font-medium text-gray-700">Passengers</label>
                <input type="number" min="1" defaultValue="1" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-600" /> */}

              <div style={{ marginTop: "1.2em" }}>
                <label className="block text-sm font-medium text-gray-700">Class</label>
                <select className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-600">
                  <option>Economy</option>
                  <option>Business</option>
                  <option>First Class</option>
                </select>
              </div>
              <div className="md:col-span-2 mt-2">
                <button type="submit" className="w-full bg-[#0c1445] hover:bg-[#1d2b6d] text-white font-bold py-3 rounded-xl shadow-lg transition duration-300">
                  Search Flights
                </button>
              </div>
            </form>
          </div>

          {showResults && (

            //filter
            <div>
              <div className="flex gap-3 mt-4">
                {filters.map((filter) => (
                  <button
                    key={filter.id}
                    onClick={() => handleClick(filter.id)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all
      ${activeFilter === filter.id
                        ? 'bg-blue-600 text-white shadow-md'
                        : 'bg-gray-100 text-gray-700 hover:bg-blue-100'
                      }`}
                  >
                    {filter.label}
                  </button>
                ))}
              </div>

//





              <div className="bg-white/90 rounded-xl shadow-2xl p-4 sm:p-6 mt-8 w-full max-w-md sm:max-w-lg md:max-w-3xl">
                <h3 className="text-xl font-bold text-[#0c1445] mb-4">Available Flights</h3>
                {dummyResults.map((flight) => (
                  <div key={flight.id} className="border border-gray-200 rounded-lg p-4 mb-4 hover:shadow-md">
                    <div className="flex flex-col sm:flex-row justify-between gap-4 sm:items-center">
                      <div>
                        <div className="flex items-center gap-2">
                          {flight.airline === 'IndiGo' && <img src="https://cdn.prod.website-files.com/642532eebf0ae34ecb684133/65ae83c3206dbe9250e0aaca_Indigo-hero.webp" alt="IndiGo" className="h-5 w-5 object-contain" />}
                          {flight.airline === 'Air India' && <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJbwmE_PtIocVkdstJQ8NKCK9UzIjZf4uIKptfUSgaCeyHmo8Bpg2aFy2zHahPp5tbzRE&usqp=CAU" alt="Air India" className="h-5 w-5 object-contain" />}
                          {flight.airline === 'SpiceJet' && <img src="data:image/png;base64,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" alt="SpiceJet" className="h-5 w-5 object-contain" />}
                          <p className="text-base font-semibold text-gray-900">{flight.airline}</p>
                        </div>
                        <p className="text-sm text-gray-600">{flight.from} → {flight.to}</p>
                        <p className="text-sm text-gray-600">{flight.time} ({flight.duration})</p>
                      </div>
                      <div className="text-right">
                        <p className="text-base font-semibold text-[#0c1445]">{flight.price}</p>
                        <button onClick={() => { setShowResults(false); setShowPassportForm(true); }} className="mt-2 px-4 py-2 text-sm bg-[#0c1445] text-white rounded-lg hover:bg-[#1d2b6d] shadow">Continue</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          {showPassportForm && (
            <div className="bg-white/90 rounded-xl shadow-2xl p-4 sm:p-6 mt-8 w-full max-w-md sm:max-w-lg md:max-w-3xl">
              <h3 className="text-xl font-bold text-[#0c1445] mb-4">Passport Details</h3>
              <form className="grid grid-cols-1 gap-4" onSubmit={(e) => { e.preventDefault(); setShowPassportForm(false); setShowPaymentPage(true); }}>
                <div>
                  <label className="block text-sm font-medium text-gray-700">First Name (as per passport)</label>
                  <input type="text" value="Ashique" readOnly className="w-full px-4 py-2 border rounded-lg bg-gray-100 text-gray-700" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Last Name (as per passport)</label>
                  <input type="text" value="Kalippadath" readOnly className="w-full px-4 py-2 border rounded-lg bg-gray-100 text-gray-700" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Passport Number</label>
                  <input type="text" value="N1234567" readOnly className="w-full px-4 py-2 border rounded-lg bg-gray-100 text-gray-700" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Nationality</label>
                  <input type="text" value="Indian" readOnly className="w-full px-4 py-2 border rounded-lg bg-gray-100 text-gray-700" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Date of Birth</label>
                  <input type="date" value="1994-08-06" readOnly className="w-full px-4 py-2 border rounded-lg bg-gray-100 text-gray-700" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Passport Expiry Date</label>
                  <input type="date" className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-600" />
                </div>
                <div>
                  <button type="submit" className="w-full bg-[#0c1445] hover:bg-[#1d2b6d] text-white font-bold py-3 rounded-xl shadow-lg transition duration-300">
                    Continue to Payment
                  </button>
                </div>
              </form>
            </div>
          )}
          {showPaymentPage && (
            <div className="bg-white/90 rounded-xl shadow-2xl p-4 sm:p-6 mt-8 w-full max-w-md sm:max-w-lg md:max-w-3xl">
              <h3 className="text-xl font-bold text-[#0c1445] mb-4">Payment Details</h3>
              <form className="grid grid-cols-1 gap-4" onSubmit={(e) => { e.preventDefault(); setShowPaymentPage(true); }}>
                <div>
                  <label className="block text-sm font-medium text-gray-700">UPI ID</label>
                  <input type="text" value="ashique@ybl" readOnly className="w-full px-4 py-2 border rounded-lg bg-gray-100 text-gray-700" />
                </div>
                <div className="text-center text-gray-500 text-sm">or pay using your card below</div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Card Holder Name</label>
                  <input type="text" value="Ashique Kalippadath" readOnly className="w-full px-4 py-2 border rounded-lg bg-gray-100 text-gray-700" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Card Number</label>
                  <input type="text" value="4242 4242 4242 4242" readOnly maxLength="19" className="w-full px-4 py-2 border rounded-lg bg-gray-100 text-gray-700" />
                </div>
                <div className="flex gap-4">
                  <div className="w-1/2">
                    <label className="block text-sm font-medium text-gray-700">Expiry</label>
                    <input type="text" value="12/29" readOnly maxLength="5" className="w-full px-4 py-2 border rounded-lg bg-gray-100 text-gray-700" />
                  </div>
                  <div className="w-1/2">
                    <label className="block text-sm font-medium text-gray-700">CVV</label>
                    <input type="password" value="123" readOnly maxLength="3" className="w-full px-4 py-2 border rounded-lg bg-gray-100 text-gray-700" />
                  </div>
                </div>
                <div>
                  <button type="submit" className="w-full bg-[#0c1445] hover:bg-[#1d2b6d] text-white font-bold py-3 rounded-xl shadow-lg transition duration-300">
                    Pay Now
                  </button>
                </div>
              </form>
            </div>
          )}
          {showPaymentPage && (
            <div className="bg-green-50 border border-green-200 text-center text-green-900 p-6 mt-8 rounded-xl shadow-xl max-w-md sm:max-w-lg md:max-w-3xl w-full">
              <h3 className="text-2xl font-bold mb-4">🎉 Booking Confirmed!</h3>
              <p className="mb-2">Thank you, Ashique Kalippadath. Your flight booking has been confirmed.</p>
              <p className="mb-2">PNR Number: <strong>AK2025</strong></p>
              <p className="mb-2">We’ve sent your ticket and details to <strong>ashique@example.com</strong>.</p>
              <p className="mb-2">Have a safe journey!</p>
              <div className="mt-6 bg-[#0c1445] text-white rounded-xl p-6 text-left shadow-md">
                <h4 className="text-lg font-semibold mb-2">🧾 e-Ticket</h4>
                <p><strong>Passenger:</strong> Ashique Kalippadath</p>
                <p><strong>From:</strong> Delhi</p>
                <p><strong>To:</strong> Mumbai</p>
                <p><strong>Airline:</strong> IndiGo</p>
                <p><strong>Flight Time:</strong> 08:00 - 10:15</p>
                <p><strong>PNR:</strong> AK2025</p>
                <p><strong>Date:</strong> 2025-04-23</p>
                <p className="mt-4 text-center text-sm text-blue-200">Thank you for booking with <strong>Airveloz</strong></p>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default FlightBookingPage;
