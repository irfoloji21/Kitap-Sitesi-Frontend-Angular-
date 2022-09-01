import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { AdminBookNeweditComponent } from './pages/admin-book-newedit/admin-book-newedit.component';
import { AdminCategoryNeweditComponent } from './pages/admin-category-newedit/admin-category-newedit.component';
import { AdminHomeComponent } from './pages/admin-home/admin-home.component';
import { BookComponent } from './pages/book/book.component';
import { HomeComponent } from './pages/home/home.component';


const routes: Routes = [
  {
    "path":"",
    component:MainLayoutComponent,
    children:[
      {
        path:"",
        component:HomeComponent
      },
      {
        path:"kategori/:id",
        component:HomeComponent
      },
      {
        path:"book/:id",
        component:BookComponent
      }
    ]
  },
  {
    path: "admin",
    component: AdminLayoutComponent,
    children: [
      {
        path: "",
        component: AdminHomeComponent
      },
      {
        path: "category",
        component: AdminCategoryNeweditComponent
      },
      {
        path: "category/:id",
        component: AdminCategoryNeweditComponent
      },
      {
        path: "book",
        component:AdminBookNeweditComponent
      },
      {
        path: "book/:id",
        component: AdminBookNeweditComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
