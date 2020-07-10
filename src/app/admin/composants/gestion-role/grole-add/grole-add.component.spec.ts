import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroleAddComponent } from './grole-add.component';

describe('GroleAddComponent', () => {
  let component: GroleAddComponent;
  let fixture: ComponentFixture<GroleAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroleAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroleAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
