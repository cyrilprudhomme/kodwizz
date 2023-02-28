import {Component, OnInit} from '@angular/core';
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {Router} from "@angular/router";

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  constructor(public auth: AngularFireAuth,private router: Router) {
  }

  ngOnInit() {
  }

  logout() {
    this.auth.signOut().finally(() => this.router.navigate(["/"]));
  }
}
