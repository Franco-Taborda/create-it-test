import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiEndpointBuilderService {
  constructor() {}

  public interpolateParams(endpoint: string, params: { [key: string]: string }): string {
    let interpolatedEndpoint = endpoint;

    for (const key in params) {
      if (params.hasOwnProperty(key)) {
        interpolatedEndpoint = interpolatedEndpoint.replace(`{{${key}}}`, encodeURIComponent(params[key]));
      }
    }

    return interpolatedEndpoint;
  }
}
