import {isDevMode, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouteReuseStrategy} from '@angular/router';

import {IonicModule, IonicRouteStrategy} from '@ionic/angular';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ServiceWorkerModule} from '@angular/service-worker';


import {environment} from "../environments/environment";
/**
 * Ajout des imports AngularFire
 */
import {
  AngularFireAuthModule,
  LANGUAGE_CODE, PERSISTENCE,
  SETTINGS as AUTH_SETTINGS,
  USE_DEVICE_LANGUAGE
} from '@angular/fire/compat/auth';
import {AngularFireModule} from "@angular/fire/compat";
import {AngularFireAnalyticsModule} from "@angular/fire/compat/analytics";
import {ScreenTrackingService} from "@angular/fire/analytics";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule,
    IonicModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAnalyticsModule,
    AngularFireAuthModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })],
  providers: [ScreenTrackingService,
    {provide: RouteReuseStrategy, useClass: IonicRouteStrategy},
    {provide: AUTH_SETTINGS, useValue: {appVerificationDisabledForTesting: true}},
    {provide: USE_DEVICE_LANGUAGE, useValue: true},
    { provide: PERSISTENCE, useValue: 'local' },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
