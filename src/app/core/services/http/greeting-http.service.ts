import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GreetingHttpService {

  constructor(
    private httpClient: HttpClient
  ) { }

  getGreetingMessage() {
    const url = 'https://6l9hbl8v46.execute-api.eu-west-1.amazonaws.com/training/greetingMessage';
    return this.httpClient.get<{ message: string }>(url);
  }

}
