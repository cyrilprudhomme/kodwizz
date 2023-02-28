import {Component, OnInit} from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';
import {Router} from "@angular/router";


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(public auth: AngularFireAuth, private router: Router) {
  }

  ngOnInit() {
  }

  login() {
    this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).finally(() => this.router.navigate(["/"]));;
  }

}
