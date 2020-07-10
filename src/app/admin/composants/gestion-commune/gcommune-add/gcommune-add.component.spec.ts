import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GcommuneAddComponent } from './gcommune-add.component';

describe('GcommuneAddComponent', () => {
  let component: GcommuneAddComponent;
  let fixture: ComponentFixture<GcommuneAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GcommuneAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GcommuneAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
