import {NgModule} from '@angular/core';
import {BrowserModule, Title} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {WheelsComponent} from './wheels/wheels.component';
import {WheelComponent} from './wheel/wheel.component';
import {DisplayComponent} from './display/display.component';
import {RouterModule} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {CrosswordComponent} from './crossword/crossword.component';
import { GallowsgameComponent } from './gallowsgame/gallowsgame.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WheelComponent,
    DisplayComponent,
    WheelsComponent,
    CrosswordComponent,
    GallowsgameComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: 'home', component: HomeComponent},
      {path: '', redirectTo: '/home', pathMatch: 'full'},
      {path: 'admin/wheels', component: WheelsComponent},
      {path: 'admin/crossword', component: CrosswordComponent},
      {path: 'admin/gallowsgame', component: GallowsgameComponent},
      {path: 'display', component: DisplayComponent}
    ]),
    FormsModule
  ],
  providers: [Title],
  bootstrap: [AppComponent]
})
export class AppModule {
}
