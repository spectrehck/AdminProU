import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-graficodona',
  templateUrl: './graficodona.component.html',
  styles: []
})
export class GraficodonaComponent implements OnInit {

      // Doughnut
      @Input() public ChartLabels: string[] = [];
      @Input() public ChartData: number[] = [];
      @Input() public ChartType: string = '';

  constructor() {
  }

  ngOnInit() {
  }

}
