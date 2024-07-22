import { TestBed } from '@angular/core/testing';

import { GoalSettingService } from './goal-setting.service';

describe('GoalSettingService', () => {
  let service: GoalSettingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GoalSettingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
