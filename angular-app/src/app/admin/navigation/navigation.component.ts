import {Component} from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {

  public items: NavItem[] = [
    new NavItem("Start","/admin/start"),
    new NavItem("Spielstand","/admin/standings"),
    new NavItem("Mut zur Lücke", "/admin/gallows-game"),
    new NavItem("Buchstabensalat", "/admin/crossword"),
    new NavItem("Anschluss gesucht", "/admin/connection-wanted"),
    new NavItem("Der entscheidene Hinweis", "/admin/tbd"),
    new NavItem("Buchstabenrad", "/admin/wheels"),
  ]

}

export class NavItem {

  public displayName: string;
  public href: string;

  constructor(displayName: string, href: string) {
    this.displayName = displayName;
    this.href = href;
  }
}
