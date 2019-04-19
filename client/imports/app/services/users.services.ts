import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Tracker } from 'meteor/tracker';

@Injectable()
export class UsersService {
    private observableConnection: Subject<boolean>;
    constructor() {
        this.observableConnection = new Subject();
        Tracker.autorun(() => {
            this.observableConnection.next(true);
        });

    }

    getObservable() {
        return this.observableConnection;
    }

    deconnect() {
        Meteor.disconnect();
    }

    connect(email, password, callback) {
        Meteor.loginWithPassword(email, password, callback);
    }

}