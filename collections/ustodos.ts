import {Mongo} from 'meteor/mongo';

// from https://www.angular-meteor.com/tutorials/socially/angular2/3-way-data-binding
// That's why we use the special word export. We are telling CommonJS what we are allowing the object to be exported from this module into the outside world.

// Placing the collection folder outside of any special folder, makes its contents available to both the client and the server. Therefore, the parties collection (and the actions on it) will run on both the client (minimongo) and the server (Mongo).

//if (alert !== undefined)
//    alert('in define hk');
export let UsToDos = new Mongo.Collection('ustodos');



