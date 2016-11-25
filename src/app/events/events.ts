import {Component, OnInit} from '@angular/core';
import {FlimmeService} from '../service/flimme.service';
import {Event} from '../event/event';
import {User} from '../user/user';

@Component({
    selector: 'events',
    styleUrls: ['./events.scss'],
    providers: [FlimmeService],
    templateUrl: './events.html'
})
export class Events implements OnInit{
    events: Promise<any[]>;

    constructor(private _eventsService: FlimmeService) {}
    ngOnInit() {

        this._eventsService.getEvents()
            .then(events => {
                this.events = events;
            }).catch(err => {
                console.log(err);
            });
    }
}
