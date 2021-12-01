import { TestBed } from '@angular/core/testing';

import { ApiEndpointBuilderService } from './api-endpoint-builder.service';

describe('ApiEndpointBuilderService', () => {
  let service: ApiEndpointBuilderService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApiEndpointBuilderService],
    });

    service = TestBed.inject(ApiEndpointBuilderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should create url correctly', () => {
    const incompleteUrl = 'http://test/{{id}}/testing/{{testId}}/{{stringTest}}';
    const expected = 'http://test/1/testing/6/testingString';
    const url = service.interpolateParams(incompleteUrl, { id: '1', testId: '6', stringTest: 'testingString' });
    expect(url).toEqual(expected);
  });
});
