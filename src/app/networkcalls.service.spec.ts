import { TestBed } from '@angular/core/testing';

import { NetworkcallsService } from './networkcalls.service';

describe('NetworkcallsService', () => {
  let service: NetworkcallsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NetworkcallsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy(); 
  });
});
