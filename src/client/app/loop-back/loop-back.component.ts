import {Component, OnInit} from 'angular2/core';

@Component({
  moduleId: __moduleName,
  selector: 'loop-back',
  templateUrl: 'loop-back.component.html',
  styleUrls: ['loop-back.component.css']
})
export class LoopBackComponent implements OnInit {

  value = '';

  onKey(event: any) {
    this.value += event + ' | '
  }

  constructor() {}
  
  ngOnInit() {
  }

}
