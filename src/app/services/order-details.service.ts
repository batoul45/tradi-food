import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {

  constructor() { }

  foodDetails = [
    {
      id:1,
      foodName:"Couscous",
      foodDetails:"chicken,onions,tomatoes.",
      foodPrice:700,
      foodImg:"https://2.bp.blogspot.com/-XmNhESiufzQ/XwcLuNFaM3I/AAAAAAABPC4/OOitFKpKcQ4-hFuzKjtMQC5UQ7C8fUmdwCLcBGAsYHQ/s660/couscous-algerien.jpg"
    },
    {
      id:2,
      foodName:"Tadjine algerien",
      foodDetails:"Onion,chicken drumsticks,potatoes,olive oil",
      foodPrice:1000,
      foodImg:"https://www.demotivateur.fr/uploads/3653/tajine%20poulet%20-%20copie.jpg"
    },
    {
      id:3,
      foodName:"Mhajeb",
      foodDetails:"onions ,cloves ,garlic, tomatoes ",
      foodPrice:150,
      foodImg:"https://www.demotivateur.fr/uploads/3653/mahdjouba%20-%20copie.jpg"
    },
    {
      id:4,
      foodName:"Algerian meatballs",
      foodDetails:"ground beef ,yallow onion , tomatoes ,olive oil.",
      foodPrice:700,
      foodImg:"https://www.demotivateur.fr/uploads/3653/boulettes%20-%20copie.jpg"
    },
    {
      id:5,
      foodName:"Chorba",
      foodDetails:"tomatoes, carrots, zucchini, turnip ,onions.",
      foodPrice:200,
      foodImg:"https://www.demotivateur.fr/uploads/3653/chorba%20-%20copie.jpg"
    },
    {
      id:6,
      foodName:"Bourak",
      foodDetails:"Cheese ,Egg ,Onions, potatoes ,Minced meat",
      foodPrice:200,
      foodImg:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Bourek_annabi.jpg/280px-Bourek_annabi.jpg"
    }
  ]
}
