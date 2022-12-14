import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GallowsGameDisplayComponent } from './gallows-game-display.component';

describe('GallowsGameDisplayComponent', () => {
  let component: GallowsGameDisplayComponent;
  let fixture: ComponentFixture<GallowsGameDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GallowsGameDisplayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GallowsGameDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
