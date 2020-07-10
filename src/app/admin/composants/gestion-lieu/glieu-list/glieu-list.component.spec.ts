import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlieuListComponent } from './glieu-list.component';

describe('GlieuListComponent', () => {
  let component: GlieuListComponent;
  let fixture: ComponentFixture<GlieuListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlieuListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlieuListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
