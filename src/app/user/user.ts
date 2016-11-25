import {Component, Input, OnInit} from '@angular/core';
import {FlimmeService} from '../service/flimme.service';

@Component({
  selector: 'users',
  styleUrls: ['./user.scss'],
  templateUrl: './user.html'
})

export class User implements OnInit{
    users: Promise<any[]>;
    @Input() tag: string;
    constructor(private _eventsService: FlimmeService) {
    }
    ngOnInit() {
    
        this._eventsService.getUsersForEvent(this.tag)
            .then(users => {
                this.users = users;
            }).catch(err => {
            console.log(err);
        });
    }
}
