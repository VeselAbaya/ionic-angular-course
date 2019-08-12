import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipeInterface } from '../recipe.interface';
import { RecipesService } from '../recipes.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.page.html',
  styleUrls: ['./recipe-detail.page.scss'],
})
export class RecipeDetailPage implements OnInit {
  recipe: RecipeInterface;

  constructor(private activatedRoute: ActivatedRoute,
              private router: Router,
              private recipesService: RecipesService,
              private alertCtrl: AlertController) {}

  ngOnInit() {
    const paramMap = this.activatedRoute.snapshot.paramMap;

    if (!paramMap.has('id')) {
      this.router.navigate(['/recipes']);
      return;
    }

    const recipeId = paramMap.get('id');
    this.recipe = this.recipesService.getRecipe(recipeId);
  }

  onDeleteRecipe() {
    this.alertCtrl.create({
      header: 'Are yut sure?',
      message: 'Do you really want to delete the recipe?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Delete',
          handler: () => {
            this.recipesService.deleteRecipe(this.recipe.id);
            this.router.navigate(['/recipes']);
          }
        }
      ]
    }).then(alertEl => alertEl.present());
  }
}
