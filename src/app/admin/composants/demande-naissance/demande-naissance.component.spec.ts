import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandeNaissanceComponent } from './demande-naissance.component';

describe('DemandeNaissanceComponent', () => {
  let component: DemandeNaissanceComponent;
  let fixture: ComponentFixture<DemandeNaissanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemandeNaissanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemandeNaissanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
