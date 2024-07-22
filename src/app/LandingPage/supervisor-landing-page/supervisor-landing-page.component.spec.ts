import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupervisorLandingPageComponent } from './supervisor-landing-page.component';

describe('SupervisorLandingPageComponent', () => {
  let component: SupervisorLandingPageComponent;
  let fixture: ComponentFixture<SupervisorLandingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupervisorLandingPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SupervisorLandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
