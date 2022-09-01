import { Component, OnInit, ViewChild } from '@angular/core';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';


@Component({
  selector: 'app-admin-category-list',
  templateUrl: './admin-category-list.component.html',
  styleUrls: ['./admin-category-list.component.css']
})
export class AdminCategoryListComponent implements OnInit {

  constructor(private categoryService: CategoryService) { }
  categories: Category[];
  datasource;
  displayedColumns: string[] = ["no", "name", "action"];
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  ngOnInit(): void {
    this.categoryService.getCategories().subscribe(result=>{
      this.categories=result;
      this.categories.forEach((category,index)=>{
        this.categories[index]["no"]=index+1;
      });
      
      this.datasource = new MatTableDataSource<Category>
      (this.categories);

      this.datasource.paginator = this.paginator;
    });
  }

  delete(categoryId: string) {
    this.categoryService.deleteCategory(categoryId).subscribe(result => {
      if(result.status="success") 
      {
      let category = this.categories.filter(x => x._id == categoryId)[0];
      let index = this.categories.indexOf(category);
      this.categories.splice(index, 1);
      this.datasource = new MatTableDataSource<Category>(this.categories);
      }
      else
      {
        alert("silme işlemi sırasında bir hata meydana geldi.")
      }
      
    });
  }

}
