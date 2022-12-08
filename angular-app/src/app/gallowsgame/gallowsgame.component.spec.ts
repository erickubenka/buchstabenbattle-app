import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GallowsgameComponent } from './gallowsgame.component';

describe('GallowsgameComponent', () => {
  let component: GallowsgameComponent;
  let fixture: ComponentFixture<GallowsgameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GallowsgameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GallowsgameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
