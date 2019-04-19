import { MongoObservable } from 'meteor-rxjs';

import { Reservation } from '../models/reservation';

export const Reservations = new MongoObservable.Collection<Reservation>('reservation');
