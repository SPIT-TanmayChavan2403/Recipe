import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { Router } from '@angular/router';
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

  constructor(public service: DataService, public funcService: FunctionalityService,
    private router: Router){
    this.printScreen = "Something to be print on screen";
  }

  changeOfRoutes(){
    if (this.router.url == "/" || this.router.url === "/recipeDetails"){
      this.funcService.updateHeader(true);
      console.log('We are at home page, updating the header.');
    } else {
      this.funcService.updateHeader(false);
      console.log('We are not at home page, updating the header.');
    }
  }
}

