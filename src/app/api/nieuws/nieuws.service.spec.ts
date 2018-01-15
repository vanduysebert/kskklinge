import { TestBed, inject } from '@angular/core/testing';

import { NieuwsService } from './nieuws.service';

describe('NieuwsServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NieuwsService]
    });
  });

  it('should be created', inject([NieuwsService], (service: NieuwsService) => {
    expect(service).toBeTruthy();
  }));
});
