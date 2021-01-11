import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../environments/environment';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgxAuthFirebaseUIModule} from 'ngx-auth-firebaseui';
import {RouterModule} from '@angular/router';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        AngularFireModule.initializeApp(environment.firebase),
        AngularFirestoreModule,
        AngularFireAuthModule,
        BrowserAnimationsModule,
        RouterModule.forRoot([]),

        // ngx-auth-firebaseui
        NgxAuthFirebaseUIModule.forRoot(environment.firebase)
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {
}
