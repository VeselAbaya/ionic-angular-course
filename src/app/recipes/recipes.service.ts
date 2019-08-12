import { Injectable } from '@angular/core';
import { RecipeInterface } from './recipe.interface';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  private recipes: RecipeInterface[] = [
    {
      id: 'r1',
      title: 'Schnitzel',
      imageUrl: 'https://www.recipetineats.com/wp-content/uploads/2017/08/Schnitzel-11.jpg',
      ingredients: ['French Fries', 'Pork Meat', 'Salad']
    },
    {
      id: 'r2',
      title: 'Spaghetti',
      imageUrl: 'https://readyseteat.com/sites/g/files/qyyrlu501/files/uploadedImages/img_4222_16139.jpg',
      ingredients: ['Spaghetti', 'Meat', 'tomato']
    }
  ];

  getAllRecipes() {
    return this.recipes.slice();
  }

  getRecipe(id: string) {
    return Object.create(this.recipes.find((recipe) => recipe.id === id));
  }

  deleteRecipe(id: string) {
    this.recipes.splice(this.recipes.findIndex((recipe) => recipe.id === id), 1);
  }

  constructor() { }
}
