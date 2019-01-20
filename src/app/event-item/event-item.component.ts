
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { EventModel } from '../models/event.model';
import { EventService } from '../services/event.service';

@Component({
  selector: 'app-event-item',
  templateUrl: './event-item.component.html',
  styleUrls: ['./event-item.component.css']
})
export class EventItemComponent implements OnInit {
  @Input() event: EventModel;
  @Output() deleteEvent: EventEmitter<number> = new  EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  delete(): void {
    const eventId = this.event.id;
    this.deleteEvent.emit(eventId);
  }

}
