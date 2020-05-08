import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css']
})
export class LoginAdminComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    document.body.className = 'hold-transition login-page';
  }

  login() {
      this.router.navigate(['layoutadmin']);
  }

}
