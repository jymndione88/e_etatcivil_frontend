import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlieuAddComponent } from './glieu-add.component';

describe('GlieuAddComponent', () => {
  let component: GlieuAddComponent;
  let fixture: ComponentFixture<GlieuAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlieuAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlieuAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
