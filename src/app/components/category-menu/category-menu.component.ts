import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/models/category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category-menu',
  templateUrl: './category-menu.component.html',
  styleUrls: ['./category-menu.component.css']
})
export class CategoryMenuComponent implements OnInit {

  constructor(private categoryService: CategoryService) { }
  categories: Category[];

  ngOnInit() {
    this.categoryService.getCategories().subscribe(result => {
      this.categories = result;
    });
  }

}
