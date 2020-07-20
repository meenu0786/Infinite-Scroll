import { TestBed } from '@angular/core/testing';

import { ScrollingService } from './scrolling.service';
import { HttpClientModule } from '@angular/common/http';

describe('ScrollingService', () => {
  let service: ScrollingService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientModule
      ]
    });
    service = TestBed.inject(ScrollingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
