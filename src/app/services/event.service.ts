
import { Injectable } from '@angular/core';
import { EventModel } from '../models/event.model';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  eventsList: EventModel[];
  constructor() {
    this.eventsList =  [
      {
        id: 1,
        name: "trip",
        date: new Date(2018,0,15),
        duration: 7,
        classes: [1,2]   
       },  {
            id: 2,
            name: "meeting",
            date: new Date(2018,0,22),
            duration: 8,
            classes: [3,4]
          },  {
            id: 3,
            name: "party",
            date: new Date(2018,0,7),
            duration: 5,
            classes: [3,5,6]
          },  {
            id: 4,
            name: "purim-party",
            date: new Date(2018,2,30),
            duration: 4,
            classes: [5,4]
          }
    ];
   }

   delete(id: number) {   
    debugger;
    const idx = this.eventsList.findIndex(p => p.id == id);
    this.eventsList.splice(idx, 1);
   }
  get(): EventModel[] {
    return this.eventsList;
  }
}