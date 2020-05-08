import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TdeclarationListComponent } from './tdeclaration-list.component';

describe('TdeclarationListComponent', () => {
  let component: TdeclarationListComponent;
  let fixture: ComponentFixture<TdeclarationListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TdeclarationListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TdeclarationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
