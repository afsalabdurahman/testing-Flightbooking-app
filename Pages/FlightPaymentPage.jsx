import { useState } from 'react';
// require('dotenv').config();


import { CreditCard, Smartphone, Building, ArrowRight, CheckCircle, ChevronDown, ChevronUp } from 'lucide-react';
import Header from '../Component/Header';
import TicketDownload from './TicketDownload';

export default function FlightPaymentPage() {

  //Razor
  const handleRazorpayPayment = () => {
    const options = {
      key: "Put apikey", // From .env
      amount: 1250000, // ₹12,500 in paisa
      currency: 'INR',
      name: 'Airzelo Flight Booking',
      description: 'Flight from Kochi to Riyadh',
      image: 'images/logo.png', // Optional logo
      handler: function (response) {
        alert(`Payment Successful! Payment ID: ${response.razorpay_payment_id}`);
      },
      prefill: {
        name: 'Ashique KP',
        email: 'ashique@example.com',
      },
      notes: {
        address: 'Airzelo Corporate Office',
      },
      theme: {
        color: '#121c3d',
      },
    };
  
    const rzp = new window.Razorpay(options);
    rzp.open();
  };
  
  //
  const [selectedPayment, setSelectedPayment] = useState('card');
  const [showSummary, setShowSummary] = useState(true);
  
  const flightDetails = {
    from: "New York (JFK)",
    to: "Los Angeles (LAX)",
    date: "May 12, 2025",
    time: "08:30 AM - 11:45 AM",
    flightNumber: "FL4236",
    airline: "SkyWings Airlines",
    duration: "3h 15m",
    passengers: [
      { name: "John Smith", type: "Adult", seat: "12A" },
      { name: "Emily Smith", type: "Adult", seat: "12B" },
      { name: "Tim Smith", type: "Child", seat: "12C" }
    ],
    fare: {
      baseFare: 480,
      taxes: 65,
      fees: 25,
      total: 570
    }




  };
//razoray


//
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
     <Header></Header>
      <main className="flex flex-col md:flex-row p-4 gap-6 flex-grow">
        {/* Left side - Payment options */}
        <div className="w-full md:w-2/3 bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-6">Complete Your Payment</h2>
          
          <div className="mb-8">
            <h3 className="text-lg font-medium mb-4">Choose Payment Method</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <PaymentOption 
                icon={<CreditCard size={24} />}
                name="Card"
                description="Credit/Debit"
                selected={selectedPayment === 'card'}
                onClick={() => setSelectedPayment('card')}
              />
              <PaymentOption 
                icon={<Smartphone size={24} />}
                name="GPay"
                description="Google Pay"
                selected={selectedPayment === 'gpay'}
                onClick={() => setSelectedPayment('gpay')}
              />
              <PaymentOption 
                icon={<Smartphone size={24} />}
                name="Razorpay"
                description="Quick Payment"
                selected={selectedPayment === 'razorpay'}
                onClick={() => setSelectedPayment('razorpay')}
              />
              <PaymentOption 
                icon={<Building size={24} />}
                name="Bank"
                description="Net Banking"
                selected={selectedPayment === 'bank'}
                onClick={() => setSelectedPayment('bank')}
              />
            </div>
          </div>
          
          {/* Card payment form */}
          {selectedPayment === 'card' && (
            <div className="mb-8">
              <h3 className="text-lg font-medium mb-4">Card Details</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Card Number</label>
                  <input 
                    type="text" 
                    placeholder="1234 5678 9012 3456" 
                    className="w-full p-3 border border-gray-300 rounded-md"
                  />
                </div>
                <div className="flex gap-4">
                  <div className="flex-1">
                    <label className="block text-sm font-medium text-gray-700 mb-1">Expiry Date</label>
                    <input 
                      type="text" 
                      placeholder="MM/YY" 
                      className="w-full p-3 border border-gray-300 rounded-md"
                    />
                  </div>
                  <div className="flex-1">
                    <label className="block text-sm font-medium text-gray-700 mb-1">CVV</label>
                    <input 
                      type="text" 
                      placeholder="123" 
                      className="w-full p-3 border border-gray-300 rounded-md"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Name on Card</label>
                  <input 
                    type="text" 
                    placeholder="John Smith" 
                    className="w-full p-3 border border-gray-300 rounded-md"
                  />
                </div>
              </div>
            </div>
          )}

          {/* GPay form */}
          {selectedPayment === 'gpay' && (
            <div className="mb-8 text-center p-6 border border-dashed border-gray-300 rounded-lg">
              <Smartphone size={48} className="mx-auto mb-4 text-blue-500" />
              <h3 className="text-lg font-medium mb-2">Pay with Google Pay</h3>
              <p className="text-gray-500 mb-4">You'll be redirected to Google Pay to complete the payment</p>
              <button className="bg-blue-600 text-white py-3 px-6 rounded-md font-medium">Continue to GPay</button>
            </div>
          )}

          {/* Razorpay form */}
          {selectedPayment === 'razorpay' && (
            <div className="mb-8 text-center p-6 border border-dashed border-gray-300 rounded-lg">
              <Smartphone size={48} className="mx-auto mb-4 text-blue-500" />
              <h3 className="text-lg font-medium mb-2">Pay with Razorpay</h3>
              <p className="text-gray-500 mb-4">Quick and secure payment via Razorpay</p>
              <button
  onClick={handleRazorpayPayment}
  className="bg-purple-600 text-white py-2 px-4 rounded"
>
  Pay with Razorpay
</button>

              {/* <button className="bg-blue-600 text-white py-3 px-6 rounded-md font-medium">Continue to Razorpay</button> */}
            </div>
          )}

          {/* Bank form */}
          {selectedPayment === 'bank' && (
            <div className="mb-8">
              <h3 className="text-lg font-medium mb-4">Net Banking</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Select Bank</label>
                  <select className="w-full p-3 border border-gray-300 rounded-md">
                    <option>-- Select your bank --</option>
                    <option>HDFC Bank</option>
                    <option>ICICI Bank</option>
                    <option>State Bank of India</option>
                    <option>Axis Bank</option>
                    <option>Kotak Mahindra Bank</option>
                  </select>
                </div>
              </div>
            </div>
          )}

          <div className="flex justify-between items-center mt-6">
            <button className="text-blue-600 font-medium">Go Back</button>
            <button className="bg-blue-600 text-white py-3 px-8 rounded-md font-medium">Pay ${flightDetails.fare.total}</button>
          </div>
        </div>
        
        {/* Right side - Order Summary */}
        <div className="w-full md:w-1/3 bg-white p-6 rounded-lg shadow-md h-fit">
          <div className="flex justify-between items-center mb-4 cursor-pointer" onClick={() => setShowSummary(!showSummary)}>
            <h2 className="text-xl font-semibold">Booking Summary</h2>
            {showSummary ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </div>
          
          {showSummary && (
            <>
              <div className="mb-6 border-b pb-4">
                <h3 className="text-lg font-medium mb-3">Flight Details</h3>
                <div className="flex items-center mb-3">
                  <div className="flex-1">
                    <p className="font-medium">{flightDetails.from}</p>
                    <p className="text-sm text-gray-500">{flightDetails.date}</p>
                  </div>
                  <ArrowRight size={20} className="text-gray-400 mx-2" />
                  <div className="flex-1">
                    <p className="font-medium">{flightDetails.to}</p>
                    <p className="text-sm text-gray-500">{flightDetails.time}</p>
                  </div>
                </div>
                <div className="text-sm text-gray-600">
                  <p>{flightDetails.airline} • {flightDetails.flightNumber}</p>
                  <p>Duration: {flightDetails.duration}</p>
                </div>
              </div>

              <div className="mb-6 border-b pb-4">
                <h3 className="text-lg font-medium mb-3">Passengers</h3>
                {flightDetails.passengers.map((passenger, idx) => (
                  <div key={idx} className="flex justify-between text-sm mb-2">
                    <span>{passenger.name} ({passenger.type})</span>
                    <span>Seat {passenger.seat}</span>
                  </div>
                ))}
              </div>

              <div className="mb-6">
                <h3 className="text-lg font-medium mb-3">Price Details</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Base Fare</span>
                    <span>${flightDetails.fare.baseFare}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Taxes</span>
                    <span>${flightDetails.fare.taxes}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Booking Fees</span>
                    <span>${flightDetails.fare.fees}</span>
                  </div>
                  <div className="h-px bg-gray-200 my-2"></div>
                  <div className="flex justify-between font-medium text-base">
                    <span>Total</span>
                    <span>${flightDetails.fare.total}</span>
                  </div>
                </div>
                <TicketDownload></TicketDownload>
              </div>
            </>
          )}
        </div>
      </main>
      
      <footer className="bg-gray-800 text-white p-4 text-center text-sm">
        <p>© 2025 SkyJourney Booking. All rights reserved.</p>
      </footer>
    </div>
  );
}

function PaymentOption({ icon, name, description, selected, onClick }) {
  return (
    <div 
      className={`border rounded-lg p-4 cursor-pointer transition-all ${selected ? 'border-blue-500 bg-blue-50' : 'border-gray-200'}`}
      onClick={onClick}
    >
      <div className="flex items-center justify-between mb-2">
        <div className={`${selected ? 'text-blue-500' : 'text-gray-500'}`}>
          {icon}
        </div>
        {selected && <CheckCircle size={20} className="text-blue-500" />}
      </div>
      <p className="font-medium">{name}</p>
      <p className="text-xs text-gray-500">{description}</p>
    </div>
  );
}