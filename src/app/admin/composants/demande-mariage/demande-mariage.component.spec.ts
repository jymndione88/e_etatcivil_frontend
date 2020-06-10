import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandeMariageComponent } from './demande-mariage.component';

describe('DemandeMariageComponent', () => {
  let component: DemandeMariageComponent;
  let fixture: ComponentFixture<DemandeMariageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemandeMariageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemandeMariageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
