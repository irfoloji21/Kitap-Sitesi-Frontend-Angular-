import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCategoryNeweditComponent } from './admin-category-newedit.component';

describe('AdminCategoryNeweditComponent', () => {
  let component: AdminCategoryNeweditComponent;
  let fixture: ComponentFixture<AdminCategoryNeweditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminCategoryNeweditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCategoryNeweditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
