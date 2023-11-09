import React from 'react';
import { ReactToPrint } from '../../components/ReactToPrint/ReactToPrint';
import PrintJs from '../../components/PrintJs/PrintJs';
import PrintComponent from '../../components/Printer/Printer';

const Home = () => {
  return (
    <div className="home">
      <h1>React To Print</h1>
      <ReactToPrint/>
      <PrintJs/>
      {/* <PrintComponent/> */}
    </div>
  );
};

export default Home;
