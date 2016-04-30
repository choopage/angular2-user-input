import {describe, it, expect, beforeEachProviders, inject} from 'angular2/testing';
import {Angular2UserInputApp} from '../app/angular2-user-input.component';

beforeEachProviders(() => [Angular2UserInputApp]);

describe('App: Angular2UserInput', () => {
  it('should have the `defaultMeaning` as 42', inject([Angular2UserInputApp], (app: Angular2UserInputApp) => {
    expect(app.defaultMeaning).toBe(42);
  }));

  describe('#meaningOfLife', () => {
    it('should get the meaning of life', inject([Angular2UserInputApp], (app: Angular2UserInputApp) => {
      expect(app.meaningOfLife()).toBe('The meaning of life is 42');
      expect(app.meaningOfLife(22)).toBe('The meaning of life is 22');
    }));
  });
});

