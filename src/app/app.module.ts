import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {NavbarComponent} from './navbar/navbar.component';
import {FooterComponent} from './footer/footer.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MdButtonModule, MdCheckboxModule} from '@angular/material';
import 'hammerjs';
import {PortalComponent} from './portal/portal.component';
import {RouterModule, Routes} from '@angular/router';
import {DiscoveryComponent} from './discovery/discovery.component';
import {MoodComponent} from './mood/mood.component';
import {TimeComponent} from './time/time.component';

const routeConfig: Routes = [{
  path: 'portal',
  component: PortalComponent
},
  {
    path: '**', redirectTo: 'portal'
  }];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    PortalComponent,
    DiscoveryComponent,
    MoodComponent,
    TimeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MdCheckboxModule,
    RouterModule.forRoot(routeConfig, {useHash: true}),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
