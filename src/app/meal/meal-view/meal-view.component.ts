import { Component, OnInit } from '@angular/core';
import { Meal } from 'src/app/interfaces/meal.interface';
import { MealService } from '../meal.service';

@Component({
  selector: 'app-meal-view',
  templateUrl: './meal-view.component.html',
  styleUrls: ['./meal-view.component.css']
})


export class MealViewComponent implements OnInit {
  meals: Meal[] = [];
  isMealsLoading: boolean = true;
  
  constructor(private mealService: MealService) {
  }
  
  ngOnInit(): void {
    this.mealService.getMeals().subscribe(meals => {
        this.meals = meals;
        this.isMealsLoading = false;
    });
}
}
