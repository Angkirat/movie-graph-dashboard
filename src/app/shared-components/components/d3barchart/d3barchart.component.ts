import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-d3barchart',
  templateUrl: './d3barchart.component.html',
  styleUrls: ['./d3barchart.component.scss']
})
export class D3barchartComponent implements OnInit {

  private svg!: d3.Selection<SVGGElement, unknown, HTMLElement, any>;
  private margin = 50;
  private width = 750 - (this.margin * 2);
  private height = 400 - (this.margin * 2);

  constructor() { }

  ngOnInit(): void {
    this.createSvg();
    // this.drawBars(this.data);
  }

  private createSvg(): void {
    this.svg = d3.select("#grahContainer")
    .append("svg")
    .attr("width", this.width + (this.margin * 2))
    .attr("height", this.height + (this.margin * 2))
    .append("g")
    .attr("transform", "translate(" + this.margin + "," + this.margin + ")");
  }

}
