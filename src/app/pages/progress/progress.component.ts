import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styles: []
})
export class ProgressComponent implements OnInit {
progreso1 = 80;
progreso2 = 90;
  constructor() { }
  ngOnInit() {
  }
/*   actualizar(event: number) {
    console.log('Evento', event );
    this.progreso1 = event;
  } */
}
