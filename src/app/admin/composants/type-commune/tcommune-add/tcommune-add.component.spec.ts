import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TcommuneAddComponent } from './tcommune-add.component';

describe('TcommuneAddComponent', () => {
  let component: TcommuneAddComponent;
  let fixture: ComponentFixture<TcommuneAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TcommuneAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TcommuneAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
