import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { TokenStorageService } from './../../../services/token-storage.service';

@Component({
  selector: 'app-header-admin',
  templateUrl: './header-admin.component.html',
  styleUrls: ['./header-admin.component.css']
})
export class HeaderAdminComponent implements OnInit {

  isLoggedIn = false;
  log: string;

  constructor(private tokenStorage: TokenStorageService
    ,private router: Router) { }

  ngOnInit() {
    
    this.isLoggedIn = !!this.tokenStorage.getToken();
    
    if (this.isLoggedIn) {
      const user = this.tokenStorage.getUser();
      this.log = user.username;
    }
  }
  
  logout() {
    this.tokenStorage.signOut();
    //window.location.reload();
    this.router.navigate(['admin']);
  }


}
