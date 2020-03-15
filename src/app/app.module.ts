import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ItemComponent } from './components/item/item.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { PosComponent } from './pages/pos/pos.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from 'src/environments/environment';
import { PosService } from './services/pos.service';
import { ToastrModule } from 'ngx-toastr';
import { NotificationService } from './services/notification.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './pages/login/login.component';
import { AppRoutingModule } from './app.routing.module';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    ItemComponent,
    CheckoutComponent,
    PosComponent,
    LoginComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    AppRoutingModule,
    ToastrModule.forRoot()
  ],
  providers: [PosService, NotificationService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
