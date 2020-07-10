import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroleListComponent } from './grole-list.component';

describe('GroleListComponent', () => {
  let component: GroleListComponent;
  let fixture: ComponentFixture<GroleListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroleListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroleListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
