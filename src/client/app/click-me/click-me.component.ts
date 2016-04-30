import {Component, OnInit} from 'angular2/core';

@Component({
  moduleId: __moduleName,
  selector: 'click-me',
  styleUrls: ['click-me.component.css'],
  templateUrl: 'click-me.component.html'
})
export class ClickMeComponent implements OnInit {

  clickMessage = '';

  constructor() {}
  
  ngOnInit() {
  }

  onClickMe() {
    this.clickMessage = 'You are my hero!';
  }

}
