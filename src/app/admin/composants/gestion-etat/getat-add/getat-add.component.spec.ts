import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetatAddComponent } from './getat-add.component';

describe('GetatAddComponent', () => {
  let component: GetatAddComponent;
  let fixture: ComponentFixture<GetatAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetatAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetatAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
