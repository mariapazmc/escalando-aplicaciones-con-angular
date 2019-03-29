import { Component, OnInit } from '@angular/core';
import { ScholarshipForm } from './scholarship-form';

@Component({
  selector: 'app-scholarship-form',
  templateUrl: './scholarship-form.component.html',
  styleUrls: ['./scholarship-form.component.scss']
})
export class ScholarshipFormComponent {

  model = new ScholarshipForm('', '', '');
  submitted = false;

  onSubmit() { this.submitted = true; }

  get diagnostic() { return JSON.stringify(this.model); }

}
