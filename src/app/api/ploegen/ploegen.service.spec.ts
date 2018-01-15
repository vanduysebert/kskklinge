/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PloegenService } from './ploegen.service';

describe('PloegenService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PloegenService]
    });
  });

  it('should ...', inject([PloegenService], (service: PloegenService) => {
    expect(service).toBeTruthy();
  }));
});
