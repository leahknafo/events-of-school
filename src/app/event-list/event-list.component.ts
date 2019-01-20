
import { Component, OnInit } from '@angular/core';
import { EventModel } from '../models/event.model';
import { EventService } from '../services/event.service';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {
  
  event: EventModel[];

  constructor(private eventService: EventService) { 
  }

  ngOnInit() {
    this.event = this.eventService.get();
  }

  deleteChild(id: number) {
    this.eventService.delete(id);
  }

}
