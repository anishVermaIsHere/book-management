import { Component,Input,EventEmitter,Output} from '@angular/core';
import { Book } from 'src/app/shared/models';
import { BookService } from 'src/app/shared/services/book.service';
import { FormGroup} from '@angular/forms';

@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styles: [`
  .form-container {
    border:1px solid var(--bg-light);
    padding:2rem;
    margin-bottom:20px;
    border-radius:0.375rem;
    box-shadow:0 0 6px var(--primary);
  }
  `],
})
export class AddbookComponent {
  @Input() isUpdate!: boolean;
  @Input() formActive!: boolean;
  @Input() bookForm!: FormGroup;
  @Output() toggleOpen = new EventEmitter<boolean>();
  @Output() editBtnActive = new EventEmitter<boolean>();

  constructor(private bookService: BookService) {}

  addBook() {
    this.toggleOpen.emit(true);
    this.editBtnActive.emit(false);
    this.bookForm.reset();
  }
  onClose() {
    this.toggleOpen.emit(false);
  }

  onAdd() {
    const { title, description, author, language, year, price }=this.bookForm.value;
    const defaultBookCover='../../../../assets/defaultbookimage.jpg';
    const book = new Book(author,defaultBookCover,language,title,description,year,price
    );
    this.bookService.addBook(book);
    this.bookForm.reset();
  }

  onUpdate() {
    const { title, description, author, imageLink, language, year, price, id }=this.bookForm.value;
    const book = new Book(
      author,
      imageLink,
      language,
      title,
      description,
      year,
      price
    );
    this.bookService.updateBook(book, id);
    this.toggleOpen.emit(false);
  }
}
