import React, { Component } from 'react';
import * as d3 from 'd3';
import './App.css';

import {withFauxDOM} from 'react-faux-dom'

class Line extends Component {

   componentDidMount() {
      const faux = this.props.connectFauxDOM('div', 'chart');

      // D3 Code to create the chart
      // using faux as container

      var data = [4, 8, 15, 16, 23, 42];

      var width = 420,
          barHeight = 20;
      
      var x = d3.scaleLinear()
          .domain([0, d3.max(data)])
          .range([0, width]);
      
      var chart = d3.select(faux)
          .append('svg')
          .attr("class", "chart")
          .attr("width", width)
          .attr("height", barHeight * data.length);
      
      var bar = chart.selectAll("g")
          .data(data)
        .enter().append("g")
          .attr("transform", function(d, i) { return "translate(0," + i * barHeight + ")"; });
      
      bar.append("rect")
          .attr("width", x)
          .attr("height", barHeight - 1);
      
      bar.append("text")
          .attr("x", function(d) { return x(d) - 8; })
          .attr("y", barHeight / 2)
          .attr("dy", ".35em")
          .text(function(d) { return d; });
   }

   //     const dataset = [
   //      [ 34,     78 ],
   //      [ 109,   280 ],
   //      [ 310,   120 ],
   //      [ 79,   411 ],
   //      [ 420,   220 ],
   //      [ 233,   145 ],
   //      [ 333,   96 ],
   //      [ 222,    333 ],
   //      [ 78,    320 ],
   //      [ 21,   123 ]
   //    ];

   //    const w = 500;
   //    const h = 500;
   //    const padding = 60;

   //    const xScale = d3.scaleLinear()
   //              .domain([0, d3.max(dataset, (d) => d[0])])
   //              .range([padding, w - padding]);

   //    const yScale = d3.scaleLinear()
   //              .domain([0, d3.max(dataset, (d) => d[1])])
   //              .range([h - padding, padding]);

   //    const svg = d3.select("body")
   //            .append("svg")
   //            .attr("width", w)
   //            .attr("height", h);

   //    svg.selectAll("circle")
   //    .data(dataset)
   //    .enter()
   //    .append("circle")
   //    .attr("cx", (d) => xScale(d[0]))
   //    .attr("cy",(d) => yScale(d[1]))
   //    .attr("r", (d) => 5);

   //    svg.selectAll("text")
   //    .data(dataset)
   //    .enter()
   //    .append("text")
   //    .text((d) =>  (d[0] + "," + d[1]))
   //    .attr("x", (d) => xScale(d[0] + 10))
   //    .attr("y", (d) => yScale(d[1]))

   //    const xAxis = d3.axisBottom(xScale);
   //    // Add your code below this line
   //    const yAxis = d3.axisLeft(yScale);
   //    // Add your code above this line

   //    svg.append("g")
   //    .attr("transform", "translate(0," + (h - padding) + ")")
   //    .call(xAxis);

   //    // Add your code below this line
   //    svg.append('g')
   //    .attr("transform", `translate(${h - padding}, 0)`)
   //    .call(yAxis);

   //  }
    render() {
      return (
         <div style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '1em'
         }}>
            {this.props.chart}
         </div>

   )}
}

export default withFauxDOM(Line);