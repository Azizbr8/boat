import { Meteor } from 'meteor/meteor';

import { Boats } from '../../../imports/collections/Boats';

Meteor.publish('boats', function() {
  if (Meteor.user()) {
    return Boats.find({});
  }
});
