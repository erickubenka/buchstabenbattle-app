import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrucialHintComponent } from './crucial-hint.component';

describe('CrucialHintComponent', () => {
  let component: CrucialHintComponent;
  let fixture: ComponentFixture<CrucialHintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrucialHintComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrucialHintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
