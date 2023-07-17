import { Injectable } from '@angular/core';
import { books } from 'src/app/data/books';
import { Book } from '../models';

@Injectable({
  providedIn: 'root'
})

export class BookService {
  booklist:Book[]=books;
  constructor(){}
  getBooks(){
    return this.booklist.map(({author,imageLink,language,title,description,year,price})=>{
     return new Book(
        author,
        imageLink,
        language,
        title,
        description,
        year,
        price,
        );
    });
  }
  addBook(book:Book){
    this.booklist.push(book);
  }
  deleteBook(id:number){
      this.booklist.splice(id,1)
  }
  updateBook(book:Book,id:number){
    const filteredBooks=this.booklist.filter((item,index)=>id!==index);
    this.booklist=[...filteredBooks,book];
  }
}
