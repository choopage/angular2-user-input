import {Component, OnInit} from 'angular2/core';

@Component({
  moduleId: __moduleName,
  selector: 'key-up',
  templateUrl: 'key-up.component.html'
})
export class KeyUpComponent implements OnInit {

  value = '';

  constructor() {}
  
  ngOnInit() {
  }

  onKey(event: KeyboardEvent) {
    this.value += (<HTMLInputElement>event.target).value + ' | ';
  }

}
