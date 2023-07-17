import { Component } from '@angular/core';
import { Book } from './shared/models';
import { BookService } from './shared/services/book.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'bookmanagerapp';
  active:boolean=false;
  year:number=new Date().getFullYear();
  booklist:Book[]=[];
  constructor(private bookService:BookService){
    this.booklist=this.bookService.getBooks();
  }

  onSelect(){
    this.active=!this.active;
  }
}

