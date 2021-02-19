import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CustomLibService {

  constructor() { }

  public getGreeting() {
    return "hello user";
  }
}
