import React, { Component } from 'react';
import CanvasJSReact from './canvasjs.react';
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
 
class Chart extends Component {	
	render() {
		const options = {
			animationEnabled: true,
			exportEnabled: true,
			theme: "light1", // "light1", "dark1", "dark2"
			title:{
				text:"" /* "Status Chart" */
			},
			data: [{
				type: "pie",
				indexLabel: "{label}: {y}%",		
				startAngle: -90,
				dataPoints: [
					/* { y: 0, label: "Yael" }, */
					{ y: 44, label: "Tom" },
					{ y: 34, label: "Jennifer" },
					/* { y: 0, label: "Hagit" }, */
					{ y: 22, label: "Eddi" }
				]
			}]
		}
		
		return (
		<div style={{marginTop:  '60px'} }>
         <h3 style={{textAlign:  'center'}}>Our Status</h3>
        <div style={{width: '100px', height: '70%', position: 'absolute', right: '0', zIndex: '1111',  backgroundColor: 'white'} }></div>
        <div style={{width: '100px', height: '70%', position: 'absolute', left: '0', zIndex: '1111',  backgroundColor: 'white'} }></div>
			<CanvasJSChart  options = {options} 
				/* onRef={ref => this.chart = ref} */
			/>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>
		);
	}
}
 

export default Chart;