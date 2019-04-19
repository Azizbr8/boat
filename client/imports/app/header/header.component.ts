import { Component, OnInit, OnDestroy, NgZone } from '@angular/core';
import { Router, NavigationStart, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'header',
  templateUrl: 'header.html',
  styleUrls: ['header.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  user: any;
  constructor(private router: Router, private route: ActivatedRoute, private ngZone: NgZone) {

  }
  ngOnInit() {
    Tracker.autorun(() => {
        this.ngZone.run(() => {
          this.user = Meteor.user();
        });
    });
    this.route.url.subscribe((url) => {
      console.log(url);
    });
  }
  ngOnDestroy() {
  }

  Login() {
    this.router.navigate(['/connexion']);
  }

  Logout() {
    Meteor.logout();
    setTimeout(() => {
      this.user = Meteor.user();
      this.router.navigate(['/connexion']);

    }, 500);
  }
  
  goToList() {
    this.router.navigate(['/list']);
  }
}
