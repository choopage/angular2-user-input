import {bootstrap} from 'angular2/platform/browser';
import {enableProdMode} from 'angular2/core';
import {environment} from './app/environment';
import {Angular2UserInputApp} from './app/angular2-user-input.component';

if (environment.production) {
  enableProdMode();
}

bootstrap(Angular2UserInputApp);
