import { Injectable } from '@angular/core';
import { Foods } from 'src/app/shared/models/food';
import { Tag } from 'src/app/shared/models/Tag';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getFoodById(id:number): Foods{
    return this.getAll().find(food => food.id == id)!;

  }
  getAllFoodByTag(tag:string):Foods[]{
    if(tag == 'All')
    return this.getAll()
    else
    return this.getAll().filter(food=> food.tags?.includes(tag));

  }

  getAllTag():Tag[]{
    return[
      { name: 'All', count: 7},
      { name: 'Burger', count: 1},
      { name: 'Pasta', count: 1},
      { name: 'Pizza', count: 1},
      { name: 'Cake', count: 1},
      { name: 'Milk Shake', count: 1},
      { name: 'Curry', count: 1},
    ];

  }

  getAll():Foods[]{
    return[
      {
        id: 1,
        name: 'Burger',
        cookTime: '10-20',
        price: 100,
        favorite: false,
        origins: ['Italy'],
        star: 5,
        imageUrl: '/assets/food1.jpg',
        tags: ['fastfood','burger'],
      },
      {
        id: 2,
        name: 'Pizza',
        cookTime: '10-20',
        price: 150,
        favorite: true,
        origins: ['Italy'],
        star: 4.5,
        imageUrl: '/assets/food2.jpg',
        tags: ['fastfood','pizza'],
      },
      {
        id: 3,
        name: 'Pasta',
        cookTime: '20-30',
        price: 120,
        favorite: false,
        origins: ['Italy'],
        star: 5,
        imageUrl: '/assets/food3.jpg',
        tags: ['fastfood','pasta'],
      },
      {
        id: 4,
        name: 'Spring Roll',
        cookTime: '20-30',
        price: 200,
        favorite: false,
        origins: ['Italy'],
        star: 5,
        imageUrl: '/assets/food4.jpg',
        tags: ['fastfood','spring roll'],
      },
      {
        id: 5,
        name: 'Cake',
        cookTime: '50-60',
        price: 250,
        favorite: true,
        origins: ['Italy'],
        star: 5,
        imageUrl: '/assets/food5.jpg',
        tags: ['fastfood','cake'],
      },
      {
        id: 6,
        name: 'Milk Shake',
        cookTime: '10-20',
        price: 160,
        favorite: true,
        origins: ['Indian'],
        star: 5,
        imageUrl: '/assets/food6.jpg',
        tags: ['fastfood','milk shake'],
      },
      {
        id: 7,
        name: 'Curry',
        cookTime: '50-60',
        price: 170,
        favorite: false,
        origins: ['Italy'],
        star: 5,
        imageUrl: '/assets/food7.jpg',
        tags: ['fastfood','curry'],
      }
    ];
  }
}
