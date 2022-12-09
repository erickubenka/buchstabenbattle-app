import {NgModule} from '@angular/core';
import {BrowserModule, Title} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {WheelsComponent} from './wheels/wheels.component';
import {WheelComponent} from './wheel/wheel.component';
import {CrosswordComponent} from './crossword/crossword.component';
import {GallowsGameComponent} from './gallows-game/gallows-game.component';
import {ConnectionWantedComponent} from './connection-wanted/connection-wanted.component';
import {DisplayComponent} from './display/display.component';
import {RouterModule} from "@angular/router";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WheelComponent,
    DisplayComponent,
    WheelsComponent,
    CrosswordComponent,
    GallowsGameComponent,
    ConnectionWantedComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: 'home', component: HomeComponent},
      {path: '', redirectTo: '/home', pathMatch: 'full'},
      {path: 'admin/wheels', component: WheelsComponent},
      {path: 'admin/crossword', component: CrosswordComponent},
      {path: 'admin/gallows-game', component: GallowsGameComponent},
      {path: 'admin/connection-wanted', component: ConnectionWantedComponent},
      {path: 'display', component: DisplayComponent}
    ]),
    FormsModule
  ],
  providers: [Title],
  bootstrap: [AppComponent]
})
export class AppModule {
}
