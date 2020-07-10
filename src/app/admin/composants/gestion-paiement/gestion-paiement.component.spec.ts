import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionPaiementComponent } from './gestion-paiement.component';

describe('GestionPaiementComponent', () => {
  let component: GestionPaiementComponent;
  let fixture: ComponentFixture<GestionPaiementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionPaiementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionPaiementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
