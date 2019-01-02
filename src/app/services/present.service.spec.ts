import { TestBed } from '@angular/core/testing';

import { PresentService } from './present.service';

describe('PresentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PresentService = TestBed.get(PresentService);
    expect(service).toBeTruthy();
  });
});
