import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, of, tap, throwError} from "rxjs";
import { Meal } from '../interfaces/meal.interface';
import {shareReplay, catchError,} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class MealService {
  private apiHost = 'https://www.themealdb.com/api/json/v1/1/search.php?s=tomato';
    private mealsCache$?: Observable<Meal[]>;

    constructor(private http: HttpClient) {
    }

    getMeals(): Observable<Meal[]> {

        if (!this.mealsCache$) {
            this.mealsCache$ = this.http.get<Meal[]>(`${this.apiHost}`).pipe(
                shareReplay(1)
            );
        }        

        return this.mealsCache$;
    }

    createMeal(meal: Meal): Observable<Meal> {
        return this.http.post<Meal>(`${this.apiHost}/posts`, meal).pipe(
            tap(() => {
                this.mealsCache$ = of([]);
            })
        );
    }

    private handleError(error: any) {
      console.error('Une erreur s\'est produite', error);
      return throwError(error);
    }
}
