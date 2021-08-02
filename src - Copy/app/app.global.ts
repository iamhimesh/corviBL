/**
 * @author Sachin Semlety
 * @email sachin.semlety@kalelogistics.in
 * @create date 2018-08-10 11:02:53
 * @modify date 2018-08-10 11:02:53
 * @desc [description]
*/
import { Injectable } from '@angular/core';
@Injectable()
export class AppState {
  _state = {};

  // already return a clone of the current state
  get state() {
    return this._state = this.clone(this._state);
  }

  // never allow mutation
  set state(value) {
    throw new Error('do not mutate the `.state` directly');
  }

  get(prop?: any) {
    // use our state getter for the clone
    const state = this.state;
    return state.hasOwnProperty(prop) ? state[prop] : state;
  }

  set(prop: string, value: any) {
    // internally mutate our state
    return this._state[prop] = value;
  }

  private clone(object) {
    // simple object clone
    return JSON.parse(JSON.stringify(object));
  }


}
