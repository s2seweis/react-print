import React from 'react';
import './Printer.css'; // Import your CSS file for styling (optional)

const PrintButton = () => {
  const handlePrint = () => {
    const printWindow = window.open('', '_blank'); // Open a new blank window or tab

    // Content to be printed
    const contentToPrint = `
      <html>
        <head>
          <title>Print Document</title>
          <link rel="stylesheet" href="path/to/your/print-styles.css" type="text/css" media="print">
        </head>
        <body>
          <h1>Content to be printed without opening a window</h1>
          <!-- Add your content that you want to print here -->
        </body>
      </html>
    `;

    printWindow.document.write(contentToPrint);
    printWindow.document.close();
    printWindow.print(); // Print the content

    // Close the print window after printing (optional)
    printWindow.onafterprint = () => {
      printWindow.close();
    };
  };

  return (
    <div>
      <button onClick={handlePrint}>Print</button>
    </div>
  );
};

export default PrintButton;
