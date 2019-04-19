import { Meteor } from 'meteor/meteor';
import { Reservations } from 'imports/collections/Reservations';
import { Boats } from 'imports/collections/Boats';
import { boats } from 'imports/models/boats';
Meteor.methods({
    reservate(idBateau) {
        let boat: boats = Boats.findOne({_id:idBateau});
        if (boat && boat.nb_place > 0 && boat.users.indexOf(Meteor.userId()) == -1) {
            boat.nb_place --;
            boat.users.push(Meteor.userId());
            Boats.update({_id:idBateau},boat);
        }
    },
    cancel(idBateau) {
        let boat: boats = Boats.findOne({_id:idBateau});
        console.log(boat);
        console.log( boat.users.indexOf(Meteor.userId()));
        
        
        if (boat && boat.users.indexOf(Meteor.userId()) != -1) {
            console.log('----------------------');
            
            boat.nb_place ++    ;
            boat.users = boat.users.filter((user) => {
                return user != Meteor.userId();
            });

            Boats.update({_id:idBateau},boat);
        }
    }
})
