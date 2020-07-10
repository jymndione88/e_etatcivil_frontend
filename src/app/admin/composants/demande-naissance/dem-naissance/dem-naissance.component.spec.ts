import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemNaissanceComponent } from './dem-naissance.component';

describe('DemNaissanceComponent', () => {
  let component: DemNaissanceComponent;
  let fixture: ComponentFixture<DemNaissanceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemNaissanceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemNaissanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
