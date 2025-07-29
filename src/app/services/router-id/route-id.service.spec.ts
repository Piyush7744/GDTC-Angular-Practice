import { TestBed } from '@angular/core/testing';

import { RouteIdService } from './route-id.service';

describe('RouteIdService', () => {
  let service: RouteIdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RouteIdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
