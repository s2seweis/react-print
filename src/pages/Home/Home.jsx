import React from 'react';
import { ReactToPrint } from '../../components/ReactToPrint/ReactToPrint';
import PrintJs from '../../components/PrintJs/PrintJs';

const Home = () => {
  return (
    <div className="home">
      <h1>React To Print</h1>
      <p>This is the home page of my React application. Start exploring now!</p>
      <ReactToPrint/>
      <PrintJs/>
    </div>
  );
};

export default Home;
