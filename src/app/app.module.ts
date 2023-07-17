import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BookcardComponent } from './components/bookcard/bookcard.component';
import { ManageComponent } from './components/manage/manage.component';
import { AddbookComponent } from './components/manage/addbook/addbook.component';



@NgModule({
  declarations: [
    AppComponent,
    BookcardComponent,
    ManageComponent,
    AddbookComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    ReactiveFormsModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
