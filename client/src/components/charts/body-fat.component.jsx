import React from 'react';
import ZingChart from 'zingchart-react';

const BodyFat = ({ bodyFat }) => {
    const bodyFatData = {
        type: 'bar',
          'scale-y': {
            values: "0:35" //Min/Max/Step
          },
        series: [
          { values: bodyFat }
        ]
    };

    return(
        <div>
            <h3>Body Fat</h3>
            <ZingChart data={bodyFatData}/>
        </div>
    );
}

export default BodyFat;