import {loadParties} from './load-parties.ts';
import {Meteor} from 'meteor/meteor';

console.log ('in main.ts');

Meteor.startup(loadParties);