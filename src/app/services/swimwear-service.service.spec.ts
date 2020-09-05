import { TestBed } from '@angular/core/testing';

import { SwimwearServiceService } from './swimwear-service.service';

describe('SwimwearServiceService', () => {
  let service: SwimwearServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SwimwearServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
