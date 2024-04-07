import { TestBed } from '@angular/core/testing';

import { ToolOptionService } from './tool-option.service';

describe('ToolOptionService', () => {
  let service: ToolOptionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ToolOptionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
