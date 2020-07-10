import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GpaiementAddComponent } from './gpaiement-add.component';

describe('GpaiementAddComponent', () => {
  let component: GpaiementAddComponent;
  let fixture: ComponentFixture<GpaiementAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GpaiementAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GpaiementAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
