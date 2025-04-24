import React from 'react'
import { useNavigate } from 'react-router';
function PassportDetails() {
    let navigate = useNavigate()

    let setShowPassportForm = () => {
        navigate("/payment")
    }

    return (
        <div className="bg-[#0b0f2f]/90 min-h-screen">

            <div className='flex flex-col items-center justify-start px-3 sm:px-6 md:px-8 pt-20'>
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
            </div>
        </div>

    )
}

export default PassportDetails
