import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GallowsGameComponent } from './gallows-game.component';

describe('GallowsgameComponent', () => {
  let component: GallowsGameComponent;
  let fixture: ComponentFixture<GallowsGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GallowsGameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GallowsGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
