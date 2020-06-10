import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TcommuneListComponent } from './tcommune-list.component';

describe('TcommuneListComponent', () => {
  let component: TcommuneListComponent;
  let fixture: ComponentFixture<TcommuneListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TcommuneListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TcommuneListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
