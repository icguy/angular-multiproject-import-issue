import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-custom-lib',
  template: `
    <p>
      custom-lib works well!
    </p>
  `,
  styles: [
  ]
})
export class CustomLibComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
