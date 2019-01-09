import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @Output() messageEvent = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }

}
