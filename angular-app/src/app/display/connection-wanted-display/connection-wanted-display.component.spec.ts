import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnectionWantedDisplayComponent } from './connection-wanted-display.component';

describe('ConnectionWantedDisplayComponent', () => {
  let component: ConnectionWantedDisplayComponent;
  let fixture: ComponentFixture<ConnectionWantedDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConnectionWantedDisplayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConnectionWantedDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
