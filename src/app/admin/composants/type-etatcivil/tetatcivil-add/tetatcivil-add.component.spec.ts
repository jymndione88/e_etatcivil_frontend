import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TetatcivilAddComponent } from './tetatcivil-add.component';

describe('TetatcivilAddComponent', () => {
  let component: TetatcivilAddComponent;
  let fixture: ComponentFixture<TetatcivilAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TetatcivilAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TetatcivilAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
