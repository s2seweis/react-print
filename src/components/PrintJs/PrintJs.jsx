import React from 'react';
import printJS from 'print-js';
import './PrintJs.css';

const PrintJs = () => {
  const handlePrint = () => {
    // Use PrintJS to print the element with the id 'printable-content'
    printJS({ printable: 'printable-content', type: 'html', targetStyles: ['*'] });
  };

  return (
    <div>
      <h1>Print JS</h1>
      <div id="printable-content">
        {/* Content you want to print */}
        <p>This is the content you want to print.</p>
      </div>
      <button onClick={handlePrint}>Print</button>
    </div>
  );
};

export default PrintJs;
