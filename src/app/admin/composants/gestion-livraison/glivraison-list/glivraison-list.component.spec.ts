import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlivraisonListComponent } from './glivraison-list.component';

describe('GlivraisonListComponent', () => {
  let component: GlivraisonListComponent;
  let fixture: ComponentFixture<GlivraisonListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlivraisonListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlivraisonListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
