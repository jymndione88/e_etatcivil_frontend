import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandeDecesComponent } from './demande-deces.component';

describe('DemandeDecesComponent', () => {
  let component: DemandeDecesComponent;
  let fixture: ComponentFixture<DemandeDecesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemandeDecesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemandeDecesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
