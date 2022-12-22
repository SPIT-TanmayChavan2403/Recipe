import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent {
  name: string;
  description: string;
  imageSrc: string;
  constructor(private service: DataService){
    this.name = "";
    this.description = "";
    this.imageSrc = "";
  }

  sendDataToService(){
    this.name = "Veggie Pizza";
    this.description = ". Keep your dough in the deep bowl, and lightly apply a bit of olive oil all around the outside of the dough. This will keep it from sticking to the sides of the bowl once the dough proves and grows.",
    this.imageSrc = "https://www.vegrecipesofindia.com/wp-content/uploads/2020/11/veg-pizza.jpg"
    this.service.addData(this.name, this.description, this.imageSrc);
  }
}
