import {NgModule} from '@angular/core';
import {BrowserModule, Title} from '@angular/platform-browser';
import {RouterModule} from "@angular/router";
import {FormsModule} from "@angular/forms";

import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {AdminComponent} from './admin/admin/admin.component';
import {NavigationComponent} from './admin/navigation/navigation.component';
import {WheelsComponent} from './admin/wheels/wheels.component';
import {WheelComponent} from './admin/wheel/wheel.component';
import {CrosswordComponent} from './admin/crossword/crossword.component';
import {GallowsGameComponent} from './admin/gallows-game/gallows-game.component';
import {ConnectionWantedComponent} from './admin/connection-wanted/connection-wanted.component';
import {DisplayComponent} from './display/display/display.component';
import {GallowsGameDisplayComponent} from './display/gallows-game-display/gallows-game-display.component';
import {CrosswordDisplayComponent} from './display/crossword-display/crossword-display.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WheelComponent,
    DisplayComponent,
    WheelsComponent,
    CrosswordComponent,
    GallowsGameComponent,
    ConnectionWantedComponent,
    AdminComponent,
    GallowsGameDisplayComponent,
    CrosswordDisplayComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: 'home', component: HomeComponent},
      {path: '', redirectTo: '/home', pathMatch: 'full'},
      {path: 'admin', component: AdminComponent},
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
