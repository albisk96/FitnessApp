import React from 'react';
import ZingChart from 'zingchart-react';

const Bmi = ({ bmi }) => {
    const bmiData = {
        type: 'line',
          'scale-y': {
            values: "10:35" //Min/Max/Step
          },
        series: [
          { values: bmi }
        ]
    };

    return(
        <div>
            <h3>BMI Data</h3>
            <ZingChart data={bmiData}/>
        </div>
    )
}

export default Bmi;