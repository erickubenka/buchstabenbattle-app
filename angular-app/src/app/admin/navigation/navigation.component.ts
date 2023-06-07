import {Component} from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {

  public items: NavItem[] = [
    new NavItem("Spielstand", "/admin/score"),
    new NavItem("Mut zur Lücke", "/admin/gallows-game"),
    new NavItem("Buchstabensalat", "/admin/crossword"),
    new NavItem("Anschluss gesucht", "/admin/connection-wanted"),
    new NavItem("Der entscheidene Hinweis", "/admin/crucial-hint"),
    new NavItem("Buchstabenrad", "/admin/wheel"),
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
