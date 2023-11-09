import React from 'react';
import { useReactToPrint } from 'react-to-print';

const PrintComponent = () => {
  const componentRef = React.useRef();

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

  return (
    <div>
      {/* Button to trigger print */}
      <button style={{marginTop:"20px"}} onClick={handlePrint}>Print</button>

      {/* Component to be printed */}
      <div style={{ display: 'none' }}>
        <div ref={componentRef}>
          {/* Content to be printed */}
          <h1>Hello, World!</h1>
        </div>
      </div>
    </div>
  );
};

export default PrintComponent;
