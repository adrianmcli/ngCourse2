import {Component} from '@angular/core';
import {ShoutPipe} from './shout-pipe';

@Component({
  selector: 'ngc-app',
  template: `<div>
  <p>{{ message | shout}}</p>
  </div>`,
  pipes: [ShoutPipe]
})
export class App {
  message: string = 'Hello There';
}
