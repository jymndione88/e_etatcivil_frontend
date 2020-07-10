import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlivraisonAddComponent } from './glivraison-add.component';

describe('GlivraisonAddComponent', () => {
  let component: GlivraisonAddComponent;
  let fixture: ComponentFixture<GlivraisonAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlivraisonAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlivraisonAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
