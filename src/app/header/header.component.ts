import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  childMessage = true;
  @Output() messageEvent = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  sendMessage() {
    this.childMessage = !this.childMessage;
    this.messageEvent.emit(this.childMessage);
  }

}
