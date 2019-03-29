import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scholarship-postulations',
  templateUrl: './scholarship-postulations.component.html',
  styleUrls: ['./scholarship-postulations.component.scss']
})
export class ScholarshipPostulationsComponent implements OnInit {

  postulationList: any[] = [];

  constructor() { }

  ngOnInit() {
    this.postulationList = [
      {
        name: 'Sebastian ',
        email: 'sebastian@boolean.cl',
        reasons: 'Quiero ser un gran programador',
        status: 'awaiting'
      },
      {
        name: 'Gonzalo',
        email: 'gonzalo@boolean.cl',
        reasons: 'Quiero aprender',
        status: 'rejected'
      }
    ]
  }

}
