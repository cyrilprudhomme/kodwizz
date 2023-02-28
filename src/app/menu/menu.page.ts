import { Component, OnInit } from '@angular/core';
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {Router} from "@angular/router";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  constructor(public auth: AngularFireAuth,private router: Router) {
  }

  ngOnInit() {
  }

  logout() {
    this.auth.signOut().then(() => this.router.navigate(["/login"]));
  }
}
