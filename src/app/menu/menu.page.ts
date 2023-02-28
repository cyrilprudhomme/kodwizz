import {Component, OnInit} from '@angular/core';
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {Router} from "@angular/router";
import packageJson from 'package.json';
import {UpdateSwService} from "../update-sw.service";
import {ToolboxService} from "../services/toolbox.service";
@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
  appVersion = packageJson.version;
  constructor(public auth: AngularFireAuth, private router: Router, private updateSwService:UpdateSwService, private toolboxService: ToolboxService) {
  }

  ngOnInit() {
  }

  logout() {
    this.auth.signOut().then(() => this.router.navigate(["/login"]));
  }

  checkMAJ() {
    this.updateSwService.checked()
  }
}
