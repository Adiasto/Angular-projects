import { TestBed, inject } from '@angular/core/testing';

import { ContentNamesService } from './content-names.service';

describe('ContentNamesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ContentNamesService]
    });
  });

  it('should be created', inject([ContentNamesService], (service: ContentNamesService) => {
    expect(service).toBeTruthy();
  }));
});
