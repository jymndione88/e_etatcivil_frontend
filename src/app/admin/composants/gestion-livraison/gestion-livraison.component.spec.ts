import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionLivraisonComponent } from './gestion-livraison.component';

describe('GestionLivraisonComponent', () => {
  let component: GestionLivraisonComponent;
  let fixture: ComponentFixture<GestionLivraisonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionLivraisonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionLivraisonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
