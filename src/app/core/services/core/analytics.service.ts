import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AnalyticsService {

  constructor() { }

  log(eventName: string, eventParams: {}) {
    console.log(`Event: ${eventName}`, eventParams);
  }

}
