import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router';


function Home() {
  let navigate = useNavigate()

  const [tripType, setTripType] = useState('round');
  const [totalTikets, setTotalTikets] = useState({ adult: 1, child: 0, infant: 0 })
  const [errorSumTikets, setErrorSumTikets] = useState(null)
  const handleSearch = (e) => {
    e.preventDefault();

    let total = Number(totalTikets.adult) + Number(totalTikets.child) + Number(totalTikets.infant)

    if (total > 9) {
      setErrorSumTikets("You can purchase a maximum of 9 tickets only.")
      return false
    }
    if (totalTikets.adult == 0) {
      setErrorSumTikets("Must have at least one adult")
      return false
    }
    navigate('/searchflights')
    setErrorSumTikets(null)



  };
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
    console.log(e, "adult")
    setTotalTikets(prev => ({
      ...prev,
      adult: e,
    }));


  }
  return (
    <div>
      <div className="bg-[#0b0f2f]/90 min-h-screen">

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
                    <input type='number' value={totalTikets.adult} onChange={(e) => adultCount(e.target.value)} class="w-full border border-gray-300 rounded px-2 py-1" />
                  </div>
                  <div>
                    <label class="text-xs">Child</label>
                    <input type='number' value={totalTikets.child} onChange={(e) => childCount(e.target.value)} class="w-full border border-gray-300 rounded px-2 py-1" />
                  </div>
                  <div>
                    <label class="text-xs">Infant</label>
                    <input type='number' value={totalTikets.infant} onChange={(e) => infantCount(e.target.value)} class="w-full border border-gray-300 rounded px-2 py-1" />

                  </div>
                </div>
                {errorSumTikets ?
                  <p class="text-red-600 text-sm font-medium">{errorSumTikets}</p>
                  : null}</div>


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
        </main>

      </div>
    </div>
  )
}

export default Home
