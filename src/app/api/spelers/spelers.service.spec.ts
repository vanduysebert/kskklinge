import { TestBed, inject } from '@angular/core/testing';

import { SpelersService } from './spelers.service';

describe('SpelersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SpelersService]
    });
  });

  it('should be created', inject([SpelersService], (service: SpelersService) => {
    expect(service).toBeTruthy();
  }));
});
