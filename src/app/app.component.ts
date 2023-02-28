import {Component} from '@angular/core';
import {UpdateSwService} from "./update-sw.service";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private updateSwService:UpdateSwService) {
this.updateSwService.checked()
  }
}
