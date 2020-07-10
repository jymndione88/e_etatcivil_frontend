import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemMariageComponent } from './dem-mariage.component';

describe('DemMariageComponent', () => {
  let component: DemMariageComponent;
  let fixture: ComponentFixture<DemMariageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemMariageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemMariageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
