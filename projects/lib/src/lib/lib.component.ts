import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'test-lib',
  template: `
    <p>
      lib works!
    </p>
  `,
  styles: []
})
export class LibComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
