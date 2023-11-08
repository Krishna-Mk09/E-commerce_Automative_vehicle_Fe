import { TestBed } from '@angular/core/testing';

import { ViewVehicleService } from './view-vehicle.service';

describe('ViewVehicleService', () => {
  let service: ViewVehicleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViewVehicleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
