import {Component, Input} from '@angular/core';
import {User} from '../user/user';
@Component({
    selector: 'event',
    styleUrls: ['./event.scss'],
    templateUrl: './event.html'
})
export class Event {


  constructor(){
  }
    @Input() event: {title: string, tag: string, description: string, broadcasters: any};
}
