import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CvDetailPageComponent } from './cv-detail-page.component';

describe('CvDetailPageComponent', () => {
  let component: CvDetailPageComponent;
  let fixture: ComponentFixture<CvDetailPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CvDetailPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CvDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
