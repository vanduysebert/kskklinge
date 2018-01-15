import { TestBed, inject } from '@angular/core/testing';

import { WedstrijdService } from './wedstrijd.service';

describe('WedstrijdService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WedstrijdService]
    });
  });

  it('should be created', inject([WedstrijdService], (service: WedstrijdService) => {
    expect(service).toBeTruthy();
  }));
});
