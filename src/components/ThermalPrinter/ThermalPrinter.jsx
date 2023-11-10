import React, { useRef, useState } from 'react';
import escpos from 'escpos-xml'; // Import the escpos library

import './ThermalPrinter.css'; // Import the CSS file

const data = "Hello, Thermal Printer!, You need first to set the printer settings. ";

const ThermalPrinter = () => {
  const printerRef = useRef();
  const [printerDefined, setPrinterDefined] = useState(true); // Default to true

  const handlePrint = async () => {
    try {
      const printer = escpos.Printer.create({
        type: 'epson',
        interface: 'usb',
        option: {
          address: 'USB001', // Replace with the correct USB port address for your printer
        },
      });

      // Check if the printer is defined
      if (!printer) {
        setPrinterDefined(false);
        // Display a notification
        window.alert('No printer defined. Please check your printer configuration.');
        return;
      }

      // Example: Send basic text to the printer
      const commands = printer.text(`${data}`).cut();

      // Print the commands
      await escpos.print(commands, printerRef.current);
    } catch (error) {
      console.error('Error printing:', error);
      // Display a notification with the error message
      window.alert(`Error printing: ${error.message || 'Unknown error'}`);
    }
  };

  return (
    <div className="">
      <h2>Thermal Print (escpos)</h2>
      <h5>{data}</h5>
      <button onClick={handlePrint}>Print</button>
      <div style={{ display: 'none' }}>
        {/* Hidden iframe to handle printing */}
        <iframe title="printFrame" ref={printerRef} />
      </div>
    </div>
  );
};

export default ThermalPrinter;
