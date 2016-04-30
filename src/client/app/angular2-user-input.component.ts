import {Component} from 'angular2/core';
import {ClickMeComponent} from './click-me/click-me.component';
import {KeyUpComponent} from './key-up/key-up.component';
import {LoopBackComponent} from './loop-back/loop-back.component';

@Component({
  moduleId: __moduleName,
  selector: 'angular2-user-input-app',
  templateUrl: 'angular2-user-input.component.html',
  styleUrls: ['angular2-user-input.component.css'],
  directives: [ClickMeComponent, KeyUpComponent, LoopBackComponent]
})

export class Angular2UserInputApp {

}
