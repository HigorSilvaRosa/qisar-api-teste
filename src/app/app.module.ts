import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { EditPageComponent } from './pages/edit-page/edit-page.component';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { PrimengSharedModule } from './modules/primeng-shared/primeng-shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FormControlErrorsComponent } from './components/form-control-errors/form-control-errors.component';
import { SimpleNotificationsModule } from 'angular2-notifications';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ListPageComponent,
    EditPageComponent,
    AboutPageComponent,
    FormControlErrorsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbModule,
    SimpleNotificationsModule.forRoot(),
    PrimengSharedModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
