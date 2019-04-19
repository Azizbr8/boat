import {Component, OnDestroy, OnInit} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import { MeteorObservable } from 'meteor-rxjs';
import { Boats } from 'imports/collections/Boats';
import { Observable, Subscription } from 'rxjs';


/**
 * @title Table with expandable rows
 */
@Component({
  selector: 'list-boat',
  styleUrls: ['list-boat.scss'],
  templateUrl: 'list-boat.html',
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0', display: 'none'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class ListBoatComponent implements OnDestroy, OnInit {
  dataSource;
  currentIdUser;
  boatsSubscription: Subscription;
  columnsToDisplay = ['name', 'hour', 'price', 'type', 'date_depart', 'nb_place'];
  columnsTitleToDisplay = ['name', 'hour', 'price', 'date depart', 'number place'];
  expandedElement: PeriodicElement | null;
  ngOnInit() {
    this.currentIdUser = Meteor.userId();
    this.boatsSubscription =  MeteorObservable.subscribe('boats').subscribe(() => {
      this.dataSource = Boats.find();
    });
  }

  ngOnDestroy() {
    if (this.boatsSubscription) {
      this.boatsSubscription.unsubscribe();
    }
  }

  reservate(id) {
    console.log(id);
    
    Meteor.call('reservate', id, (res, err) => {
      console.log(res);
      console.log(err);
    });
  }

  cancel(id) {
    Meteor.call('cancel', id, (res, err) => {
      console.log(res);
      console.log(err);
    });
  }
}

export interface PeriodicElement {
  name: string;
  date_depart: string;
  hour: string;
  type: string;
  price: string;
  nb_place: number;
  description: string;
}
