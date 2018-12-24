import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AdminService } from './admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  form: FormGroup;
  groups = [];
  users = [];

  constructor(
    private route: ActivatedRoute,
    private adminService: AdminService
  ) {
    this.form = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      group: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit() {
    this.route.data
      .subscribe(data => {
        this.groups = data.groups;
        this.users = data.users.list;
      });
  }

  onSubmit() {
    if ( this.form.valid) {
      const user = this.form.value;

      this.adminService
        .saveUser(user)
        .subscribe(() => {
          this.users.push(user);
        });
    }
  }
}
