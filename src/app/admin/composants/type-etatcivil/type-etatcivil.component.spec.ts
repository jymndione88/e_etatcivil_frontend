import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeEtatcivilComponent } from './type-etatcivil.component';

describe('TypeEtatcivilComponent', () => {
  let component: TypeEtatcivilComponent;
  let fixture: ComponentFixture<TypeEtatcivilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypeEtatcivilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeEtatcivilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
