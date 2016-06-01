import 'reflect-metadata';
import 'zone.js/dist/zone';
import { Component } from '@angular/core';
// see meteor npm install angular2-meteor-auto-bootstrap --save
// on https://www.angular-meteor.com/tutorials/socially/angular2/3-way-data-binding
// http://guide.meteor.com/using-npm-packages.html (about --save)
import { bootstrap } from 'angular2-meteor-auto-bootstrap';
//old import { bootstrap } from '@angular/platform-browser-dynamic';

import { Parties }   from '../collections/parties';
import { Mongo }     from 'meteor/mongo';

@Component({
    selector: 'app2x',      // hijack this tag in index.html
    templateUrl: 'client/app4.html' // and put this in its place
})

class Socially {
    partiesxx: Mongo.Cursor<Object>;

    constructor () {
        console.log ("hi from app.ts in construct");
        this.partiesxx = Parties.find();
    }
}

console.log ("hi from app.ts main 1");
bootstrap(Socially);
console.log ("hi from app.ts main 2");







//import 'reflect-metadata';
//import 'zone.js/dist/zone';
//import { Component } from '@angular/core';
//import { bootstrap } from '@angular/platform-browser-dynamic';
//
//@Component({
//    selector: 'app',
//    templateUrl: 'client/app.html'
//})
//class Socially {
//
//    parties: Array<Object>;
//
//    constructor() {
//        this.parties = [
//            {'name': 'Dubstep-Freez Zone',
//                'description': 'Can we please just for an evening not listen to dubstep.',
//                'location': 'Palo Alto'
//            },
//            {'name': 'All dubstep all the time',
//                'description': 'Get it on!',
//                'location': 'Palo Alto'
//            },
//            {'name': 'Savage lounging',
//                'description': 'Leisure suit required. And only fiercest manners.',
//                'location': 'San Francisco'
//            }
//        ];
//    }
//}
//
//bootstrap(Socially);