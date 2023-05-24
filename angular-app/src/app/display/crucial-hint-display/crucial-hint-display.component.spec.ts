import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrucialHintDisplayComponent } from './crucial-hint-display.component';

describe('CrucialHintDisplayComponent', () => {
  let component: CrucialHintDisplayComponent;
  let fixture: ComponentFixture<CrucialHintDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrucialHintDisplayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrucialHintDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
