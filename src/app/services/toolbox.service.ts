import {Injectable} from '@angular/core';
import {AlertController, ToastController} from "@ionic/angular";

@Injectable({
  providedIn: 'root'
})
export class ToolboxService {

  constructor(private toastController: ToastController, private alertController: AlertController) {
  }

  async presentToast(
    message: string,
    color: 'primary' | 'secondary' | 'tertiary' | 'success' | 'warning' | 'danger' | 'light' | 'medium' | 'dark',
    position: 'top' | 'middle' | 'bottom',
    icon: string|null) {
    if (!icon){
      switch (color) {
        case "primary":
          icon='information-circle-outline'
          break;
        case "secondary":
          icon='information-circle-outline'
          break;
        case "tertiary":
          icon='information-circle-outline'
          break;
        case "success":
          icon='checkmark-circle-outline'
          break;
        case "warning":
          icon='help-circle-outline'
          break;
        case "danger":
          icon='alert-circle-outline'
          break;
        case "light":
          icon='information-circle-outline'
          break;
        case "medium":
          icon='information-circle-outline'
          break;
        case "dark":
          icon='information-circle-outline'
          break;
        default:
          icon='information-circle-outline'
          break;
      }
    }

    const toast = await this.toastController.create({
      message: message,
      duration: 1500,
      position: position,
      color: color,
      icon:icon
    });

    await toast.present();
  }

  async presentAlert(header: string, message: string, cancelTxt:string,confirmeTxt:string, callback: void) {
    const alert = await this.alertController.create({
      header: header,
      message: message,
      buttons: [
        {
          text: cancelTxt,
          role: 'cancel',
          handler: () => {
            console.log('Alert canceled');
          },
        },
        {
          text: confirmeTxt,
          role: 'confirm',
          handler: () => {
            console.log('Alert confirmed');
            return callback
          },
        },
      ],
    });

    await alert.present();

    const { role } = await alert.onDidDismiss();
    console.log(`Dismissed with role: ${role}`);
  }
}
