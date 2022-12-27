import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  data: {name: string, description: string, imageSrc: string, list: string[]} [];
  circleStyle: {style: string};

  constructor() {
    this.data = [
        {name: "Red velvet cake", description: "1. Preheat oven at 180°C. Line a 7-inch round cake tin by greasing with little butter and dusting with little refined flour. 2. Beat eggs and castor sugar in a bowl till fluffy. 3. Add vanilla essence and food colour and beat again. 4. Add refined flour and fold lightly till well blended. Add orange rind and mix well. 5. Pour batter in lined cake tin and put in the preheated oven. Bake for 30-40 minutes. 6. To make icing, combine cream cheese and icing sugar in a bowl and whisk well till well blended. 7. Remove cake from oven and demould. Discard the top rough layer and even it out. Slice diagonally from between. Spread icing evenly on the base. Cover with upper layer and spread icing evenly on this layer as well. 8. Cut into wedges and serve", imageSrc: "https://p4.wallpaperbetter.com/wallpaper/163/398/483/cake-sweets-food-berries-fruit-hd-wallpaper-preview.jpg", list: ["1 table spoon red food color", "2-1/2 cup plaon cack flour", "1 tablespoon vennila esense", "1-1/2 cup caster sugar ", "Orange peel 1 table spoon", "1 teaspoon Butter for grees 8 egg", "For iceing 1/2 cup iceing sugar", "1 cup creem cheese"]},
        {name: "Tomato Soup", description: "dry bread pieces in microwave for 1-2 minutes Cut tomatoes carrot spring onion and bottle gourd.add 2 cups of water and boil in pressure cooker for 5 minutes cool it. mash with blender. sieve in a soup masher. Now again put on fire.add salt capsicum.boil for 3-4 minutes.add black pepper. it is ready. Serve hot with cream and bread croutns on top ", imageSrc: "https://images.pexels.com/photos/1618925/pexels-photo-1618925.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", list:["omatoes-1/2 gm", "carrot-1", "spring onion-2-3", "bottle gourd -1", "capsicum-2-3 tbsp finely chopped", "sugar 2tbsp "]},
        {name: "Grilled Chicken", description: " Marinate the chicken with all the mentioned ingredients overnight. Grill on both sides for 25-30 minutes. Baste with some oil midway. Transfer to a serving plate and serve with onion rings, green chilies, lemon wedges and a sprinkle of some idli podi.", imageSrc: "https://images.pexels.com/photos/2673353/pexels-photo-2673353.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", list: ["500 gms. boneless chicken", "1 tsp. salt or to taste", "1/4 tsp. turmeric powder ", "1 tbsp. Andhra special Kura Karam Podi (use Kashmiri red chili powder instead)", "1 tbsp. Andhra special Nalla karam Podi (use idli podi instead)", "1 tsp. garlic paste ", "1 sprig curry leaves, chopped", "1 tbsp. oil ", "1 tbsp. lime juice"]},
        {name: "Pizza", description: "Take a cup add 2tbsp warmwater,1tsp sugar&1tbsp yeast stir it &cover it 5 mints. Take a bowl add maida ,salt, 1tsp oil &yeast mixture to make a soft dough.rest it 2 hour on warm place. After 2 hour again knead the dough. Cut the dough on 2 pieces.One big &1 small. First roll the small piece on roti shape. Heat a tava put the roti on tava cook 30 seconds,than flip it &cook another 30 seconds.o ff the gas. Now roll the big one on big toti shape. Take a microwave tray,put the big roti,spread Pizza sauce&cheese spread. Than put the small one &fold the side of the big one. Spread pizza sauce . Put all veggies,onion&sweet corn. On the top add greatedcheese. Sprinckle chilli flake ,&oregano. Microwave the pizza on preheated microwave 15 mints on pizza mode. Yummy & tasty pizza is ready for kids.", imageSrc: "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80", list: ["1cup maida", "1tbsp yeast", "1tsp sugar", "1/2tsp salt", "2tbsp warm water", "1/2tomato chop", "1/2capsicum chop", "1onion chop", "2tbsp sweetcorn", "1cup greated mozzarella cheese", "2tbsp pizza sauce", "1tbsp pizza spread cheese", "1tsp butter"]},
      ];
    this.circleStyle = {style: "transform:  translate(-50%, -50%) scale(0);"}
  }
  
  logData(){
    console.log(this.data);
  }
  
  addData(name: string, description: string, imageSrc: string, list: string[]){
    this.data.push({name, description, imageSrc, list})
    this.logData();
  }

  enlargeCircle(){
    this.circleStyle.style = "transform:  translate(-50%, -50%) scale(1.5);";
    console.log(this.circleStyle);
  }
  closeCircle(){
    this.circleStyle.style = "transform:  translate(-50%, -50%) scale(0);";
  }
}
