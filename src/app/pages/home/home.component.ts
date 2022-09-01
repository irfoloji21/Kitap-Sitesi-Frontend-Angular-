import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from 'src/app/models/book';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private bookService: BookService, private route:ActivatedRoute) { }
  books: Book[];
  categoryId:string;
  ngOnInit() {

    this.route.paramMap.subscribe(params => {
      this.categoryId = params.get("id");
      if (this.categoryId) {
        this.bookService
          .getBooksByCategoryId(this.categoryId)
          .subscribe(result => {
            this.books = result;
          });
      } else {
        this.bookService.getBooks().subscribe(result => {
          this.books = result;
        });
      }
    })





  
  }

}
