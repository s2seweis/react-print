import React from 'react';
import data from '../data';

export const ComponentToPrint = React.forwardRef((props, ref) => {
  return (
    <div>

      {/* <div ref={ref}>Why do programmers prefer dark chocolate?

        Because they like their code as bitter as their coffee!</div> */}

      <div style={{marginBottom:"20px"}} ref={ref}>{data.joke1.text}</div>
    </div>
  );
});