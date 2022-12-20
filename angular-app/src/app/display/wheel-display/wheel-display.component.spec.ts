import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WheelDisplayComponent } from './wheel-display.component';

describe('WheelDisplayComponent', () => {
  let component: WheelDisplayComponent;
  let fixture: ComponentFixture<WheelDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WheelDisplayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WheelDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
