import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TetatcivilListComponent } from './tetatcivil-list.component';

describe('TetatcivilListComponent', () => {
  let component: TetatcivilListComponent;
  let fixture: ComponentFixture<TetatcivilListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TetatcivilListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TetatcivilListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
