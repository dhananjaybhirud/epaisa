import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'epaisa';
  toggled = true;

  receiveMessage($event) {
    this.toggled = $event;
    console.log(this.toggled);
  }

}
