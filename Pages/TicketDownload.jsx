import React from 'react';
import jsPDF from 'jspdf';

function TicketDownload() {
  const handleDownload = () => {
    const doc = new jsPDF();

    // Add content
    doc.setFontSize(16);
    doc.text('Airzelo Flight Ticket', 20, 20);
    
    doc.setFontSize(12);
    doc.text('Passenger Name: Ashique KP', 20, 40);
    doc.text('Flight: Kochi to Riyadh', 20, 50);
    doc.text('Date: 25 May 2025', 20, 60);
    doc.text('Booking ID: AZ123456789', 20, 70);
    doc.text('Amount Paid: ₹12,500', 20, 80);

    // Save PDF
    doc.save('Flight_Ticket.pdf');
  };

  return (
    <div className="p-4">
      <button 
        onClick={handleDownload} 
        className="bg-blue-600 text-white py-2 px-4 rounded"
      >
        Download Ticket PDF
      </button>
    </div>
  );
}

export default TicketDownload;
