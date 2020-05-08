import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TdeclarationAddComponent } from './tdeclaration-add.component';

describe('TdeclarationAddComponent', () => {
  let component: TdeclarationAddComponent;
  let fixture: ComponentFixture<TdeclarationAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TdeclarationAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TdeclarationAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
