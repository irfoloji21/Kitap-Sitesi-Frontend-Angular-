import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from '../app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from '../modules/material.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms'
//layouts
import { AdminLayoutComponent } from '../layouts/admin-layout/admin-layout.component';
import { MainLayoutComponent } from '../layouts/main-layout/main-layout.component';
//components
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from '../nav/header/header.component';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { AdminCategoryNeweditComponent } from './admin-category-newedit/admin-category-newedit.component';
import { AdminCategoryListComponent } from './admin-category-list/admin-category-list.component';
import { AdminBookNeweditComponent } from './admin-book-newedit/admin-book-newedit.component';
import { AdminBookListComponent } from './admin-book-list/admin-book-list.component';
import { CategoryMenuComponent } from '../components/category-menu/category-menu.component';
import { BookComponent } from './book/book.component';

@NgModule({
  declarations: [
    MainLayoutComponent,
    AdminLayoutComponent,
    HomeComponent,
    HeaderComponent, 
    AdminHomeComponent, 
    AdminCategoryNeweditComponent, 
    AdminCategoryListComponent, 
    AdminBookNeweditComponent, 
    AdminBookListComponent,
    CategoryMenuComponent,
    BookComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    BrowserModule,
    MaterialModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class PageModule { }
