import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CvEmbauchesComponent } from './cv-embauches.component';

describe('CvEmbauchesComponent', () => {
  let component: CvEmbauchesComponent;
  let fixture: ComponentFixture<CvEmbauchesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CvEmbauchesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CvEmbauchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
