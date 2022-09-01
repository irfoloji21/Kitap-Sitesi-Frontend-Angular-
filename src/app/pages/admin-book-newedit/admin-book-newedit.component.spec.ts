import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminBookNeweditComponent } from './admin-book-newedit.component';

describe('AdminBookNeweditComponent', () => {
  let component: AdminBookNeweditComponent;
  let fixture: ComponentFixture<AdminBookNeweditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminBookNeweditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminBookNeweditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
