import { Meteor } from 'meteor/meteor';

// import { Users } from 'imports/collections/Users';
import { Accounts } from 'meteor/accounts-base';
import SimpleSchema from 'simpl-schema';
Meteor.methods({
    'CreateUser'(newUser) {
        // let userExists   = Accounts.findUserByEmail(newUser.email);
        // console.log(userExists);
        console.log(newUser);
        
        // if (userExists) {
        //     return false;
        // }
        newUser.profile = {'nom': newUser.nom, 'prenom': newUser.prenom, 'tel': newUser.numTel, age: newUser.age};
        Accounts.createUser(newUser);
        
        // Users.insert(
        //     newUser
        // );
    }
});
