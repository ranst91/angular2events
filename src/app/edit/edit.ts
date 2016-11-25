import {Component, Input, OnInit} from '@angular/core';
import {FlimmeService} from '../service/flimme.service';
import {Router, ActivatedRoute} from '@angular/router';
import {Subscription} from "rxjs";


@Component({
    selector: 'edit-form',
    styleUrls: ['edit.scss'],
    providers: [FlimmeService],
    templateUrl: 'edit.html'
})

export class Edit implements OnInit{
    users: Promise<any[]>;
    eventTag: string;
    roles: Promise<any[]>;
    newUser: any;
    private subscription: Subscription;
    constructor(private _api: FlimmeService,private _activated: ActivatedRoute, private _router: Router) {}
    ngOnInit() {
        this.subscription = this._activated.params.subscribe(
            (param: any) => {
                this.eventTag = param['event'];
                this._api.getUsersForEvent(this.eventTag)
                    .then(users => {
                        this.users = users;
                    }).catch(err => {
                    console.log(err);
                });
            }
        );

        this._api.getRoles().then(roles =>{ this.roles = roles; });
        console.log(this.newUser);

        this.newUser = {user: '', role: ''};
    }

    update(){
        console.log(this.users);
        // this._api.updateUsersForEvent(this.eventTag, this.users).then(() => {
        //         this._router.navigate(['events']);
        //     }
        // );
    }

    createUser(){
        this._api.createUserForEvent(this.eventTag, this.newUser);
        this.newUser = {user: '', role: ''};
    }
}