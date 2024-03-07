import { TestBed } from '@angular/core/testing';

import { ResulService } from './resul.service';

describe('ResulService', () => {
  let service: ResulService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResulService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
