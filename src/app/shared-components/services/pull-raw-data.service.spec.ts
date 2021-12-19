import { TestBed } from '@angular/core/testing';

import { PullRawDataService } from './pull-raw-data.service';

describe('PullRawDataService', () => {
  let service: PullRawDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PullRawDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
