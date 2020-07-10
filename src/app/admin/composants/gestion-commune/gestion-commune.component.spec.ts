import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionCommuneComponent } from './gestion-commune.component';

describe('GestionCommuneComponent', () => {
  let component: GestionCommuneComponent;
  let fixture: ComponentFixture<GestionCommuneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionCommuneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionCommuneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
