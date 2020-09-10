import React from 'react';
import ZingChart from 'zingchart-react';

const AdditionalData = ({ neck, waist, hip }) => {
    const bodyData = {
        type: 'bar',
          'scale-y': {
            values: "20:150" //Min/Max/Step
          },
          'scale-x': {
            label: { /* Scale Title */
              text: "Here is a neck, waist and hip data",
            },
          },
          labels: [
            {
              text: "Neck:<br>%plot-0-value",
              'default-value': "__",
              x: "15%",
              y: "7%",
              'background-color': "blue #29A2CC",
              'font-family': "Georgia",
              'font-color': "white",
              'font-size':14,
              height: "15%",
              width: "10%",
              'border-radius': "5px"
            },
            {
              text: "Waist:<br>%plot-1-value",
              'default-value': "__",
              x: "30%",
              y: "7%",
              'background-color': "red #D31E1E",
              'font-family': "Georgia",
              'font-color': "white",
              'font-size':14,
              height: "15%",
              width: "10%",
              'border-radius': "5px"
            },
            {
              text: "Hip:<br>%plot-2-value",
              'default-value': "__",
              x: "45%",
              y: "7%",
              'background-color': "green #7CA82B",
              'font-family': "Georgia",
              'font-color': "white",
              'font-size':14,
              height: "15%",
              width: "10%",
              'border-radius': "5px"
            },
          ],
          'crosshair-x': {
            'plot-label': {
              visible: false
            },
            'scale-label': {
              visible: false
            }
          },
          plot: {
            tooltip: {
              visible: false
            }
          },
          plotarea: {
            'margin-top': "25%"
          },
        series: [
          { values: neck },
          { values: waist },
          { values: hip }
        ]
    }

    return(
        <div>
            <h3>Neck, Waist and Hip data</h3>
            <ZingChart data={bodyData}/>
        </div>
    );
}

export default AdditionalData;