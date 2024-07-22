import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupervisorGoalsReviewComponent } from './supervisor-goals-review.component';

describe('SupervisorGoalsReviewComponent', () => {
  let component: SupervisorGoalsReviewComponent;
  let fixture: ComponentFixture<SupervisorGoalsReviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupervisorGoalsReviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SupervisorGoalsReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
