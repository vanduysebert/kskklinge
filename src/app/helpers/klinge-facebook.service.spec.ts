import { TestBed, inject } from '@angular/core/testing';

import { KlingeFacebookService } from './klinge-facebook.service';

describe('KlingeFacebookService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [KlingeFacebookService]
    });
  });

  it('should be created', inject([KlingeFacebookService], (service: KlingeFacebookService) => {
    expect(service).toBeTruthy();
  }));
});
