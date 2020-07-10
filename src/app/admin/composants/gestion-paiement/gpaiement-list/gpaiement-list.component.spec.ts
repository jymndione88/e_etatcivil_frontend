import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GpaiementListComponent } from './gpaiement-list.component';

describe('GpaiementListComponent', () => {
  let component: GpaiementListComponent;
  let fixture: ComponentFixture<GpaiementListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GpaiementListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GpaiementListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
