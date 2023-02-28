import { TestBed } from '@angular/core/testing';

import { UpdateSwService } from './update-sw.service';

describe('UpdateSwService', () => {
  let service: UpdateSwService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpdateSwService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
