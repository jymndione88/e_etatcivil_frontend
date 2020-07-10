import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GcommuneListComponent } from './gcommune-list.component';

describe('GcommuneListComponent', () => {
  let component: GcommuneListComponent;
  let fixture: ComponentFixture<GcommuneListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GcommuneListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GcommuneListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
