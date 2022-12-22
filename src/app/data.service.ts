import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  data: {name: string, description: string, imageSrc: string} [];

  constructor() {
    this.data = [
      {name: "Hamburger Patty",description: `Ground chuck – We prefer an 80 lean/20 fat ratio for the juiciest burgers.    Crushed crackers or Panko bread crumbs – The best binders for juicy hamburgers. (Could be gluten-free!)    Worcestershire sauce – Adds a deep beefy, smoky flavor.    Egg – To bind all of the ingredients together without drying.    Milk – The enzymes help to soften and tenderize the ground beef.    Seasonings: Salt, Garlic Powder, Onion powder, Pepper, or other spices of choice.`, imageSrc: "https://i0.wp.com/www.aspicyperspective.com/wp-content/uploads/2020/05/Best-Hamburger-Patty-Recipe-17.jpg?resize=650%2C975&ssl=1"},
      
    ];
  }
  logData(){
    console.log(this.data);
  }

  addData(name: string, description: string, imageSrc: string){
    this.data.push({name, description, imageSrc})
  }
}
