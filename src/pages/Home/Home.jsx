import React from 'react';
import { ReactToPrint } from '../../components/ReactToPrint/ReactToPrint';
import PrintJs from '../../components/PrintJs/PrintJs';
import ThermalPrinter from '../../components/ThermalPrinter/ThermalPrinter';

const Home = () => {
  return (
    <div className="home">
      <h1>React To Print</h1>
      <ReactToPrint/>
      <PrintJs/>
      <hr/>
      <ThermalPrinter/>
    </div>
  );
};

export default Home;
