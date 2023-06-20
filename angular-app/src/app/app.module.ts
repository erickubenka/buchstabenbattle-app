import {NgModule} from '@angular/core';
import {BrowserModule, Title} from '@angular/platform-browser';
import {RouterModule} from "@angular/router";
import {FormsModule} from "@angular/forms";

import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {AdminComponent} from './admin/admin/admin.component';
import {NavigationComponent} from './admin/navigation/navigation.component';
import {CrosswordComponent} from './admin/crossword/crossword.component';
import {GallowsGameComponent} from './admin/gallows-game/gallows-game.component';
import {ConnectionWantedComponent} from './admin/connection-wanted/connection-wanted.component';
import {DisplayComponent} from './display/display/display.component';
import {GallowsGameDisplayComponent} from './display/gallows-game-display/gallows-game-display.component';
import {CrosswordDisplayComponent} from './display/crossword-display/crossword-display.component';
import {
  ConnectionWantedDisplayComponent
} from './display/connection-wanted-display/connection-wanted-display.component';
import {WheelDisplayComponent} from './display/wheel-display/wheel-display.component';
import {WheelComponent} from "./admin/wheel/wheel.component";
import {CrucialHintComponent} from './admin/crucial-hint/crucial-hint.component';
import {CrucialHintDisplayComponent} from './display/crucial-hint-display/crucial-hint-display.component';
import {ScoreComponent} from './admin/score/score.component';
import { ScoreDisplayComponent } from './display/score-display/score-display.component';
import { IntroComponent } from './admin/intro/intro.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WheelComponent,
    DisplayComponent,
    CrosswordComponent,
    GallowsGameComponent,
    ConnectionWantedComponent,
    AdminComponent,
    GallowsGameDisplayComponent,
    CrosswordDisplayComponent,
    NavigationComponent,
    ConnectionWantedDisplayComponent,
    WheelDisplayComponent,
    CrucialHintComponent,
    CrucialHintDisplayComponent,
    ScoreComponent,
    ScoreDisplayComponent,
    IntroComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: 'home', component: HomeComponent},
      {path: '', redirectTo: '/home', pathMatch: 'full'},
      {path: 'admin', component: AdminComponent},
      {path: 'admin/wheel', component: WheelComponent},
      {path: 'admin/crossword', component: CrosswordComponent},
      {path: 'admin/gallows-game', component: GallowsGameComponent},
      {path: 'admin/connection-wanted', component: ConnectionWantedComponent},
      {path: 'admin/crucial-hint', component: CrucialHintComponent},
      {path: 'admin/score', component: ScoreComponent},
      {path: 'admin/intro', component: IntroComponent},
      {path: 'display', component: DisplayComponent}
    ]),
    FormsModule
  ],
  providers: [Title],
  bootstrap: [AppComponent]
})
export class AppModule {
}
