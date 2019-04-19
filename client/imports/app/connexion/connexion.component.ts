import { Component, OnInit, OnDestroy, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from '../services/users.services';
import { Subject } from 'rxjs';

@Component({
  selector: 'connexion',
  templateUrl: 'connexion.html',
  styleUrls: ['connexion.scss']
})
export class ConnexionComponent implements OnInit, OnDestroy {
  public email;
  public password;
  public isError: boolean;
  public userObservable: Subject<boolean>;
  public subscription: Subscription;
  constructor(private router: Router, private userService: UsersService, private ngZone: NgZone) {
  }

  ngOnInit() {
    Tracker.autorun(() => {
      if (Meteor.user()) {
        this.ngZone.run(() => {
          this.router.navigate(['/']);
        });
      }
    });
    this.userObservable = this.userService.getObservable();
    this.userObservable.subscribe(() => {
      if (Meteor.user) {
        this.ngZone.run(() => {
          this.router.navigate(['/']);
        });
      }
    });
  }

  ngOnDestroy() {
    this.userObservable.unsubscribe();
  }

  inscription () {
    this.router.navigate(['/inscription']);
  }

  login() {
    this.userService.connect(this.email, this.password, (err, res) => {
      if (err) {
        this.ngZone.run(() => {
          this.isError = true;
        });
      }
    });
  }
}
