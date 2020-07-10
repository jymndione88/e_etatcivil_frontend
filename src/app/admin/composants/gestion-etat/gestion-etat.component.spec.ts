import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionEtatComponent } from './gestion-etat.component';

describe('GestionEtatComponent', () => {
  let component: GestionEtatComponent;
  let fixture: ComponentFixture<GestionEtatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionEtatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionEtatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
