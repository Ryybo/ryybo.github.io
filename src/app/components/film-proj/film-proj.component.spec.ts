import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmProjComponent } from './film-proj.component';

describe('FilmProjComponent', () => {
  let component: FilmProjComponent;
  let fixture: ComponentFixture<FilmProjComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FilmProjComponent]
    });
    fixture = TestBed.createComponent(FilmProjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
