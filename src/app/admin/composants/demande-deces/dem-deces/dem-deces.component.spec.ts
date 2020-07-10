import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemDecesComponent } from './dem-deces.component';

describe('DemDecesComponent', () => {
  let component: DemDecesComponent;
  let fixture: ComponentFixture<DemDecesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemDecesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemDecesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
