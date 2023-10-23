import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevelProjComponent } from './devel-proj.component';

describe('DevelProjComponent', () => {
  let component: DevelProjComponent;
  let fixture: ComponentFixture<DevelProjComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DevelProjComponent]
    });
    fixture = TestBed.createComponent(DevelProjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
