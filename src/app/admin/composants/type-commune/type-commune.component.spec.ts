import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeCommuneComponent } from './type-commune.component';

describe('TypeCommuneComponent', () => {
  let component: TypeCommuneComponent;
  let fixture: ComponentFixture<TypeCommuneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TypeCommuneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeCommuneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
