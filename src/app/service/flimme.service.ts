import {Injectable} from "@angular/core";
/**
 * Created by pschoen on 26.09.16.
 */


@Injectable()
export class FlimmeService {

    roles:any=[
        {title:"Owner"},
        {title:"Manager"},
        {title:"TrustedBroadcaster"},
        {title:"Blacklist"}
    ];

    events:any=[
        {
            tag:"flimme",
            title:"Flimme2K16",
            description:"This is the official flimme EVENT",
            color: "75E8E0",
            broadcasters:[{
                user: 'Dima',
                role: 'Manager'
            },{
                user: 'Pascal',
                role: 'Manager'
            },{
                user: 'Sven',
                role: 'Manager'
            },{
                user: 'Matt',
                role: 'Owner'
            },{
                user: 'Berkan',
                role: 'Blacklist'
            }
            ,{
                user: 'Vincent',
                role: 'TrustedBroadcaster'
            }]
        },
        {
            tag:"mevango",
            title:"Mevango Event",
            description:"This is the official mevango EVENT",
            color: "E839BD",
            broadcasters:[]
        }
    ];

    constructor(){
    }

    /**
     * This function checks if the 'database' has data
     */
    checkData(){
        if(!localStorage.getItem('mgo_roles')){
            localStorage.setItem('mgo_roles', JSON.stringify(this.roles));
        }
        if(!localStorage.getItem('mgo_events')){
            localStorage.setItem('mgo_events', JSON.stringify(this.events));
        }

    }


    /**
     * This function resets the 'database'
     */
    resetData(){
        localStorage.removeItem('mgo_roles');
        localStorage.removeItem('mgo_events');
        this.checkData();
    }




    /**
     * This function returns all events
     * @returns {Promise<TResult>}
     */
    getEvents():Promise<any> {
        this.checkData();

        let events = JSON.parse(localStorage.getItem('mgo_events'));

        return new Promise<any>(resolve =>
            setTimeout(resolve, this.getRandomDelay())) // delay 2 seconds
            .then(() => events);

    }

    /**
     * This function returns an array with users and their roles in an event for the given tag
     * @param event_tag
     * @returns {any}
     */
    getUsersForEvent(tag:string):Promise<any>{
        this.checkData();

        let events = JSON.parse(localStorage.getItem('mgo_events'));

        let event;
        for(let item of events){
            if(item.tag === tag){
                event = item;
                break;
            }
        }

        if(!event){
            return new Promise<any>(resolve =>
                setTimeout(resolve, this.getRandomDelay())) // delay 2 seconds
                .then(() => {return {error:1, status:404, message:"Event not found"}});
        } else{
            return new Promise<any>(resolve =>
                setTimeout(resolve, this.getRandomDelay())) // delay 2 seconds
                .then(() => event.broadcasters);
        }
    }

    /**
     * This function updates users in an event for a given tag
     * by a given array of user-role-Objects
     * @param tag
     * @param users - array of user-role-Objects
     * @returns {any}
     */
    updateUsersForEvent(tag:string, users:any):Promise<any>{
        this.checkData();

        let events = JSON.parse(localStorage.getItem('mgo_events'));
        let available = false;
        let error = false;
        for(var i=0; i<events.length;i++) {
            if (events[i].tag === tag) {
                for(let user of users){
                    for(let broadcaster of events[i].broadcasters){
                        if(user.user && user.role){
                            if(user.user === broadcaster.user){
                                broadcaster.role = user.role;
                            }
                        } else{
                            error = true;
                            break;
                        }

                    }
                }
                available = true;
                break;
            }
        }

        if(error){
            return new Promise<any>(resolve =>
                setTimeout(resolve, this.getRandomDelay())) // delay 2 seconds
                .then(() => { return {error:1, status:400, message:"UserObject is invalid!"} });
        }

        if(!available){
            return new Promise<any>(resolve =>
                setTimeout(resolve, this.getRandomDelay())) // delay 2 seconds
                .then(() => { return {error:1, status:404, message:"Event not found"} });
        }
        localStorage.removeItem('mgo_events');

        localStorage.setItem('mgo_events', JSON.stringify(events));

        return new Promise<any>(resolve =>
            setTimeout(resolve, this.getRandomDelay())) // delay 2 seconds
            .then(() => events[i]);
    }

    /**
     * This function creates a new user for an event by a given tag
     * @param tag
     * @param user - the user-role-Object
     * @returns {any}
     */
    createUserForEvent(tag:string, user:any):Promise<any>{
        this.checkData();

        let events = JSON.parse(localStorage.getItem('mgo_events'));
        let available = false;
        let error = false;
        for(var i=0; i<events.length;i++) {
            if (events[i].tag === tag) {
                    if(user.user && user.role){
                        events[i].broadcasters.push(user);
                    } else{
                        error = true;
                        break;
                    }
                available = true;
                break;
            }
        }

        if(error){
            return new Promise<any>(resolve =>
                setTimeout(resolve, this.getRandomDelay())) // delay 2 seconds
                .then(() => { return {error:1, status:400, message:"UserObject is invalid!"} });
        }

        if(!available){
            return new Promise<any>(resolve =>
                setTimeout(resolve, this.getRandomDelay())) // delay 2 seconds
                .then(() => { return {error:1, status:404, message:"Event not found"} });
        }
        localStorage.removeItem('mgo_events');

        localStorage.setItem('mgo_events', JSON.stringify(events));

        return new Promise<any>(resolve =>
            setTimeout(resolve, this.getRandomDelay())) // delay 2 seconds
            .then(() => events[i]);
    }

    /**
     * This function replaces a complete event for the available one
     * @param event
     * @returns {any}
     */
    saveEvent(event:any):Promise<any> {
        this.checkData();

        let events = JSON.parse(localStorage.getItem('mgo_events'));
        let available = false;
        for(var i=0; i<events.length;i++) {
            if (events[i].tag === event.tag) {
                events[i] = event;
                available = true;
                break;
            }
        }

        if(!available){
            return new Promise<any>(resolve =>
                setTimeout(resolve, this.getRandomDelay())) // delay 2 seconds
                .then(() => { return {error:1, status:404, message:"Event not found"} });
        }
        localStorage.removeItem('mgo_events');

        localStorage.setItem('mgo_events', JSON.stringify(events));

        return new Promise<any>(resolve =>
            setTimeout(resolve, this.getRandomDelay())) // delay 2 seconds
            .then(() => events[i]);

    }

    /**
     * This function returns all available event roles
     * @returns {Promise<TResult>}
     */
    getRoles():Promise<any> {
        this.checkData();

        let roles = JSON.parse(localStorage.getItem('mgo_roles'));

        return new Promise<any>(resolve =>
            setTimeout(resolve, this.getRandomDelay())) // delay 2 seconds
            .then(() => roles);

    }

    getRandomDelay(){
        return Math.round(Math.random() * 1000);
    }


}