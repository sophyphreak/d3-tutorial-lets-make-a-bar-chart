import React, { Component } from 'react';
import * as d3 from 'd3';
import './App.css';

import { withFauxDOM } from 'react-faux-dom';

class Line extends Component {
  componentDidMount() {
    const faux = this.props.connectFauxDOM('div', 'chart');
    
    const data = [
      { name: 'Locke', value: 4 },
      { name: 'Reyes', value: 8 },
      { name: 'Ford', value: 15 },
      { name: 'Jarrah', value: 16 },
      { name: 'Shephard', value: 23 },
      { name: 'Kwon', value: 42 }
    ];

    const width = 960;
    const height = 500;

    const y = d3
      .scaleLinear()
      .domain([0, d3.max(data, d => d.value)])
      .range([height, 0]);

    const chart = d3
      .select(faux)
      .append('svg')
      .attr('class', 'chart')
      .attr('width', width)
      .attr('height', height);

    const barWidth = width / data.length;

    const bar = chart
      .selectAll('g')
      .data(data)
      .enter()
      .append('g')
      .attr('transform', (d, i) => `translate(${i * barWidth})`);

    bar
      .append('rect')
      .attr('y', d => y(d.value))
      .attr('height', d => height - y(d.value))
      .attr('width', barWidth - 1);

    bar
      .append('text')
      .attr('x', barWidth / 2)
      .attr('y', d => y(d.value) + 3)
      .attr('dy', '.75em')
      .text(d => d.value);
  }
  render() {
    return (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: '1em'
        }}
      >
        {this.props.chart}
      </div>
    );
  }
}

export default withFauxDOM(Line);
