import { Component,  DoCheck, EventEmitter} from '@angular/core';
import { FormControl, FormGroup,FormBuilder,Validators } from '@angular/forms';
import { Book } from 'src/app/shared/models';
import { BookService } from 'src/app/shared/services/book.service';


@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styles: [`
  .card-action {
    position:absolute;
    z-index:25;
    left:0;
    right:0;
    top:10px;
    display:none;
  }
  .book-card:hover .card-action {
    display:block;
  }
  
  .btn-action {
    background:#000000d9;

  }
  .btn-action svg {
    font-size:2rem;
    color:#f2f2f2;
  }
      
  @media (max-width: 576px) { 
    .book-card {
      padding-top:1rem;
      width:50%;
      margin:auto;
      flex-direction:column;
      margin-bottom:0.5rem;
      border-radius:0.375rem;
    }
    .card-image-top {
      width:8rem;
    }
    .card-body {
      max-width:100% !important;
      box-shadow:none !important;
    }
   }
  `]
})

export class ManageComponent implements DoCheck{
  formActive=false;
  editSelected=new EventEmitter<boolean>();
  isUpdate=false;
  booklist:Book[]=[];
  bookForm!:FormGroup;


  constructor(private bookService:BookService,private formBuilder:FormBuilder){
    this.booklist=this.bookService.getBooks();
    this.bookForm=this.formBuilder.group({
      title: new FormControl('', [Validators.required]),
      author: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      imageLink: new FormControl(''),
      language: new FormControl('English', [Validators.required]),
      year: new FormControl(2023, [Validators.required]),
      price: new FormControl('', [Validators.required]),
      id:new FormControl('')
    });
  }

  ngDoCheck(){
    this.booklist=this.bookService.getBooks();
  }
  toggleForm(val:boolean){
    this.formActive=val;
  }
  editBtn(val:boolean){
    this.isUpdate=val;
  }

  onDeleteBook(id:number){
    this.bookService.deleteBook(id);
  }
  onEditBook(book:Book,index:number){
    this.toggleForm(true);
    this.editBtn(true);
    const {title,description,author,imageLink,language,year,price}=book;
    this.bookForm.controls['title'].setValue(title);
    this.bookForm.controls['description'].setValue(description);
    this.bookForm.controls['imageLink'].setValue(imageLink);
    this.bookForm.controls['author'].setValue(author);
    this.bookForm.controls['language'].setValue(language);
    this.bookForm.controls['year'].setValue(year);
    this.bookForm.controls['price'].setValue(price);
    this.bookForm.controls['id'].setValue(index);
  }

  
}
