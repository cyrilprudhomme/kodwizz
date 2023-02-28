import { Injectable } from '@angular/core';
import {SwUpdate, VersionReadyEvent} from "@angular/service-worker";
import {filter} from "rxjs";
import {ToolboxService} from "./services/toolbox.service";

@Injectable({
  providedIn: 'root'
})
export class UpdateSwService {

  constructor(private swUpdate: SwUpdate,private toolboxService:ToolboxService) { }

  checked() {
    this.swUpdate.versionUpdates
      .pipe(filter((evt): evt is VersionReadyEvent => evt.type === 'VERSION_READY'))
      .subscribe(evt => {
        this.toolboxService.presentAlert(
          'Mise à jour disponible',
          'Une nouvelle mise à jour est disponible !, Cliquer sur "Installer" pour valider la mise à jour ou "Annuler" pour la reporter' +
          "détail de l'event:"+ evt,
          'Annuler',
          'Installer').then(value => {
          if (value == 'confirm') {
            document.location.reload();
          }
        })
        console.log(evt)
        // if (promptUser(evt)) {
        //   // Reload the page to update to the latest version.
        //   document.location.reload();
        // }
      });
  }
}
