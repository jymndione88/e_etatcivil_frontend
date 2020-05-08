import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeDeclarationComponent } from './type-declaration.component';

describe('TypeDeclarationComponent', () => {
  let component: TypeDeclarationComponent;
  let fixture: ComponentFixture<TypeDeclarationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypeDeclarationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeDeclarationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
