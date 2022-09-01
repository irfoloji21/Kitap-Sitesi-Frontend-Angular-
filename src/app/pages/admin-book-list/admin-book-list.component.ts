import { Component, OnInit, ViewChild } from '@angular/core';
import { Book } from 'src/app/models/book';
import { BookService } from 'src/app/services/book.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-admin-book-list',
  templateUrl: './admin-book-list.component.html',
  styleUrls: ['./admin-book-list.component.css']
})
export class AdminBookListComponent implements OnInit {

  constructor(private bookService: BookService) { }

  books: Book[];
  datasource;
  displayedColumns: string[] = ["no", "picture", "title", "author", "price", "stock", "categoryName", "action"];

  @ViewChild(MatPaginator, { static: true })
  paginator: MatPaginator;
  ngOnInit(): void  {
    this.bookService.getBooks().subscribe(result => {
      this.books = result;
      this.books.forEach((book, index) => {
        this.books[index]["no"] = index + 1;
      });

      this.datasource = new MatTableDataSource<Book>(this.books);
      this.datasource.paginator = this.paginator;
    });
  }

  delete(bookId: string) {
    this.bookService.deleteBook(bookId).subscribe(result => {
      if(result.status="success") 
      {
      let book = this.books.filter(x => x._id == bookId)[0];
      let index = this.books.indexOf(book);
      this.books.splice(index, 1);
      this.datasource = new MatTableDataSource<Book>(this.books);
      }
      else
      {
        alert("silme işlemi sırasında bir hata meydana geldi.")
      }
      
    });
  }

  // delete(bookId:string)
  // {
  //   console.log(bookId)
  //   this.bookService.deleteBook(bookId).subscribe(result => {
  //     if(result.status="success")
  //     {
  //       let book = this.books.filter(x=>x._id==bookId)[0];
  //       let index = this.books.indexOf(book);

  //       this.books.splice(index,1);
  //       this.datasource = new MatTableDataSource<Book>(this.books);
  //     } else {
  //       alert("silme işlemi sırasında bir hata meydana geldi.")
  //     }
  //   });
  // }

}
