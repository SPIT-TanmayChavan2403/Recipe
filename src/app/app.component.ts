import { Component } from '@angular/core';
import { DataService } from './data.service';
import { FunctionalityService } from './functionality.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'recipes';
  // circleStyle: string;
  printScreen: string;

  constructor(public service: DataService, public funcService: FunctionalityService){
    this.printScreen = "Something to be print on screen";
  }
}
