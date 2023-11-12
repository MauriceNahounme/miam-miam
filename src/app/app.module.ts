import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatTableModule} from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ReactiveFormsModule} from "@angular/forms";
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatCardModule} from '@angular/material/card';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserService } from './user/user.service';
import { MealService } from './meal/meal.service';
import { HttpClientModule } from '@angular/common/http';
import { TopBarComponent } from './common/top-bar/top-bar.component';
import { SpinnerComponent } from './common/spinner/spinner.component';
import { LoginFormComponent } from './auth/login-form/login-form.component';
import { UserViewComponent } from './user/user-view/user-view.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    SpinnerComponent,
    LoginFormComponent,
    UserViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatTableModule,
        MatTabsModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        MatInputModule,
        MatFormFieldModule,
        MatButtonModule,
        MatToolbarModule,
        MatIconModule,
        MatProgressSpinnerModule,
        MatCardModule
  ],
  providers: [UserService, MealService],
  bootstrap: [AppComponent]
})
export class AppModule { }
