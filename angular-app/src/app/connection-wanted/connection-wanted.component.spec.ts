import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectionWantedComponent } from './connection-wanted.component';

describe('ConnectionWantedComponent', () => {
  let component: ConnectionWantedComponent;
  let fixture: ComponentFixture<ConnectionWantedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConnectionWantedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConnectionWantedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
