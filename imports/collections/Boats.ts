import { MongoObservable } from 'meteor-rxjs';

import { boats } from '../models/boats';

export const Boats = new MongoObservable.Collection<boats>('boats');
