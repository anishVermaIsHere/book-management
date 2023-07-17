import { Component, Input } from '@angular/core';
import { Book } from 'src/app/shared/models';
import { BookService } from 'src/app/shared/services/book.service';

@Component({
  selector: 'app-bookcard',
  templateUrl: './bookcard.component.html',
  styles: [
    `
      .book-card {
        display:flex;
        justify-content:center;
        align-items:center;
        margin:0.5rem;
      }
      .card-img-top {
        background-image: linear-gradient(
          rgb(214, 224, 224),
          rgb(180, 189, 189)
        );
        width:10rem;
        cursor: pointer;
        box-shadow:0 0 6px #000;
      }

      
      @media (max-width: 576px) { 
        .book-card {
          padding-top:1rem;
          flex-direction:column;
          margin-bottom:0.5rem;
          box-shadow:0 0 6px var(--primary);
          border-radius:0.375rem;
        }
        .card-body {
          max-width:100% !important;
          box-shadow:none !important;
        }
       }

      .card-body {
        display:flex;
        flex-direction:column;
        justify-content:between;
        padding:0.75rem;
        max-width:60%;
        border-radius:0.375rem;
        border:none;
        box-shadow:0 0 6px var(--primary);
      }
      
      .book-author {
        font-size:1.2em;
        font-weight:600;
        color:var(--primary);
      }
      .book-price {
        color:var(--primary);
        font-weight:600;
      }
      .book-description {
        height:120px;
        overflow:hidden;
      }
    `,
  ],
})
export class BookcardComponent {
  booklist:Book[]=[];
  constructor(private bookService:BookService){
    this.booklist=this.bookService.getBooks();
  }


}
