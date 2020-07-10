import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionLieuComponent } from './gestion-lieu.component';

describe('GestionLieuComponent', () => {
  let component: GestionLieuComponent;
  let fixture: ComponentFixture<GestionLieuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionLieuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionLieuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
